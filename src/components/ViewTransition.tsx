'use client';

import { ReactNode, startTransition } from 'react';
import { useRouter } from 'next/navigation';

// Simple type checking for View Transitions API

interface ViewTransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  viewTransitionName?: string;
}

export const ViewTransitionLink: React.FC<ViewTransitionLinkProps> = ({
  href,
  children,
  className,
  viewTransitionName
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Check if the browser supports View Transitions API
    if ('startViewTransition' in document && (document as any).startViewTransition) { // eslint-disable-line @typescript-eslint/no-explicit-any
      (document as any).startViewTransition(() => { // eslint-disable-line @typescript-eslint/no-explicit-any
        startTransition(() => {
          router.push(href);
        });
      });
    } else {
      // Fallback for browsers without View Transitions support
      router.push(href);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      style={{
        viewTransitionName: viewTransitionName
      }}
    >
      {children}
    </a>
  );
};

// Hook to enable view transitions for programmatic navigation
export const useViewTransition = () => {
  const router = useRouter();

  const transitionTo = (href: string) => {
    if ('startViewTransition' in document && (document as any).startViewTransition) { // eslint-disable-line @typescript-eslint/no-explicit-any
      (document as any).startViewTransition(() => { // eslint-disable-line @typescript-eslint/no-explicit-any
        startTransition(() => {
          router.push(href);
        });
      });
    } else {
      router.push(href);
    }
  };

  return { transitionTo };
};