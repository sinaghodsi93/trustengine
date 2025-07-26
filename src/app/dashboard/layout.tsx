import { ReactNode } from 'react';
import NavBar from '@/components/NavBar';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <MaxWidthWrapper>
        <div className="py-8">
          {children}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}