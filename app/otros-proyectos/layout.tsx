import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Otros Proyectos',
  description: 'Área restringida - Proyectos confidenciales',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
  },
  other: {
    'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet',
  },
};

export default function OtrosProyectosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}