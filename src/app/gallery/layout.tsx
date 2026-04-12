import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Browse our portfolio of completed construction, renovation, and civil structural projects by MBR Vastukalp in Mumbai.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
