// Polyfill for View Transitions API
// This provides fallback behavior for browsers that don't support the native API

export function polyfillViewTransitions() {
  if (typeof document !== 'undefined' && typeof window !== 'undefined') {
    // Check if View Transitions API is not supported
    if (!('startViewTransition' in document)) {
      // Simple polyfill that just executes the callback immediately
      (document as any).startViewTransition = function(callback: () => void) { // eslint-disable-line @typescript-eslint/no-explicit-any
        // Execute the callback immediately for browsers without support
        const promise = new Promise<void>((resolve) => {
          // Add a small delay to simulate transition timing
          setTimeout(() => {
            callback();
            resolve();
          }, 50);
        });

        return {
          finished: promise,
          ready: promise,
          updateCallbackDone: promise
        };
      };
    }
  }
}

// Feature detection utility
export function supportsViewTransitions(): boolean {
  return typeof document !== 'undefined' && 'startViewTransition' in document;
}

// Enhanced transition with fallback CSS animations
export function performViewTransition(callback: () => void): void {
  if (supportsViewTransitions()) {
    (document as any).startViewTransition(callback); // eslint-disable-line @typescript-eslint/no-explicit-any
  } else {
    // For unsupported browsers, add CSS class for manual animations
    document.body.classList.add('page-transitioning');
    
    setTimeout(() => {
      callback();
      setTimeout(() => {
        document.body.classList.remove('page-transitioning');
      }, 100);
    }, 100);
  }
}