import type { Metadata, Viewport } from 'next';
import './styles.css';

export const metadata: Metadata = {
  title: 'MedEngs | Dental & Medical Equipment Experts',
  description: 'Modern dental and medical equipment servicing, repairs, pickup, delivery, loaners, and MDEL-supported distribution across the GTA.',
  metadataBase: new URL('https://medengs.rainomotion.com'),
  openGraph: {
    title: 'MedEngs | Dental & Medical Equipment Experts',
    description: 'Fast, reliable medical engineering support for clinics: repairs, preventive maintenance, delivery, loaners, and MDEL-backed device support.',
    type: 'website',
    url: 'https://medengs.rainomotion.com'
  }
};

export const viewport: Viewport = {
  themeColor: '#0b4d73',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
