'use client';

import { Mail, Linkedin, Github, CheckCircle2, Send, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Contact.module.scss';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { t } = useLanguage();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contact__container}>
        <div className={styles.contact__header}>
          <span className={styles['contact__section-tag']}>{t('contact.tag')}</span>
          <h2 className={styles.contact__title}>{t('contact.title')}</h2>
          <p className={styles.contact__subtitle}>{t('contact.subtitle')}</p>
        </div>

        <div className={styles.contact__content}>
          <div className={styles.contact__info}>
            <h3 className={styles['contact__info-title']}>{t('contact.letsConnect')}</h3>
            <p className={styles['contact__info-text']}>{t('contact.description')}</p>

            <div className={styles.contact__links}>
              <a href="mailto:hello@maiderbarrutia.com" className={styles.contact__link} aria-label="Email">
                <Mail size={20} />
                hello@maiderbarrutia.com
              </a>
              <a href="https://linkedin.com/in/maiderbarrutia" target="_blank" rel="noopener noreferrer" className={styles.contact__link} aria-label="LinkedIn">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="https://github.com/maiderbarrutia" target="_blank" rel="noopener noreferrer" className={styles.contact__link} aria-label="GitHub">
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>

          <form className={styles.contact__form} onSubmit={handleSubmit(onSubmit)} noValidate>
            {isSubmitSuccessful ? (
              <div className={styles.contact__success}>
                <CheckCircle2 size={48} />
                <p>{t('contact.success')}</p>
              </div>
            ) : (
              <>
                <div className={styles.contact__field}>
                  <label htmlFor="name">{t('contact.name')}</label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    placeholder={t('contact.namePlaceholder')}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className={styles.contact__error}>{errors.name.message}</span>
                  )}
                </div>
                <div className={styles.contact__field}>
                  <label htmlFor="email">{t('contact.email')}</label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    placeholder={t('contact.emailPlaceholder')}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className={styles.contact__error}>{errors.email.message}</span>
                  )}
                </div>
                <div className={styles.contact__field}>
                  <label htmlFor="message">{t('contact.message')}</label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={5}
                    placeholder={t('contact.messagePlaceholder')}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <span id="message-error" className={styles.contact__error}>{errors.message.message}</span>
                  )}
                </div>
                <button type="submit" className={styles.contact__submit} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><Loader2 size={16} className={styles.contact__spinner} /> {t('contact.sending')}</>
                  ) : (
                    <><Send size={16} /> {t('contact.send')}</>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
