import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact MBR Vastukalp, the best construction and renovation contractors in Mumbai. Get a free quote for civil work, demolition, electrical, plumbing, and more.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
