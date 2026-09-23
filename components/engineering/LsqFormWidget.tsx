'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    '___lsq-portal-widget-helpers___'?: {
      bootstrapLSQWidget: (event: Event) => void;
    };
  }
}

/*
 * The LeadSquared widget pulls roughly 1.1 MB across a dozen requests, of
 * which ~440 KB is JavaScript that has to parse and run. Loading it during
 * page load pushed Total Blocking Time from ~10 ms to ~250 ms and Speed Index
 * from 1.5 s to 4.7 s.
 *
 * So it waits for the first sign of a real visitor — a pointer, a key, a
 * scroll, or a touch anywhere on the page — and loads then, with a timer as a
 * backstop for someone who lands and reads without moving. A skeleton in the
 * widget's own shape holds the space in the meantime, so the hero looks
 * finished from the first paint and nothing shifts when the form arrives.
 */
const WAKE_EVENTS = [
  'pointerdown',
  'pointermove',
  'touchstart',
  'keydown',
  'scroll',
  'wheel',
] as const;

// Long enough to clear the load window, short enough that a visitor who is
// still reading the hero has the form before they reach for it.
const FALLBACK_DELAY = 3500;

export default function LsqFormWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || loadedRef.current) {
      return;
    }

    let fallbackId: ReturnType<typeof globalThis.setTimeout> | null = null;
    let observer: MutationObserver | null = null;

    const loadWidget = () => {
      if (loadedRef.current) {
        return;
      }

      if (container.querySelector('[data-lsq-widget-script="true"]')) {
        loadedRef.current = true;
        return;
      }

      loadedRef.current = true;
      stopWaiting();

      const script = document.createElement('script');

      script.src =
        'https://portal-widgets.lsqportal.com/assets/bootstrap-widget.js';

      script.dataset.widgetId = '26c2650d-9b4a-11ef-8bcb-06998e7502ab';
      script.dataset.versionId = 'bcb99b86-42be-40c9-a606-fd96a6e329f8';
      script.dataset.formjs = 'https://forms.lsqportal.com/r21/js/lsq.form.js';
      script.dataset.url = 'https://portal-widgets.lsqportal.com';

      // Used to prevent duplicate insertion
      script.dataset.lsqWidgetScript = 'true';

      script.async = true;
      script.crossOrigin = 'anonymous';

      script.onload = (event: Event) => {
        const helpers = window['___lsq-portal-widget-helpers___'];

        if (helpers) {
          helpers.bootstrapLSQWidget(event);
        } else {
          console.error('LeadSquared widget helpers were not initialized.');
        }
      };

      script.onerror = () => {
        loadedRef.current = false;
        console.error('Failed to load LeadSquared widget bootstrap script.');
      };

      // Drop the skeleton as soon as the widget puts something on screen,
      // rather than at an arbitrary time after the script loads.
      observer = new MutationObserver(() => {
        const painted = Array.from(container.children).some(
          (child) => child.tagName !== 'SCRIPT'
        );

        if (painted) {
          setReady(true);
          observer?.disconnect();
        }
      });

      observer.observe(container, { childList: true });

      /*
       * IMPORTANT:
       * Keep the script physically INSIDE the LSQ widget container.
       * The LSQ bootstrap code relies on event.target.closest(...)
       */
      container.appendChild(script);
    };

    const stopWaiting = () => {
      WAKE_EVENTS.forEach((event) =>
        window.removeEventListener(event, loadWidget)
      );
      container.removeEventListener('pointerenter', loadWidget);
      container.removeEventListener('focusin', loadWidget);

      if (fallbackId !== null) {
        globalThis.clearTimeout(fallbackId);
        fallbackId = null;
      }
    };

    const startWaiting = () => {
      WAKE_EVENTS.forEach((event) =>
        window.addEventListener(event, loadWidget, {
          passive: true,
          once: true,
        })
      );

      // Someone heading straight for the form gets it before they arrive.
      container.addEventListener('pointerenter', loadWidget, { once: true });
      container.addEventListener('focusin', loadWidget, { once: true });

      fallbackId = globalThis.setTimeout(loadWidget, FALLBACK_DELAY);
    };

    if (document.readyState === 'complete') {
      startWaiting();
    } else {
      window.addEventListener('load', startWaiting, { once: true });
    }

    return () => {
      window.removeEventListener('load', startWaiting);
      stopWaiting();
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="lsq-form-shell">
      <div
        ref={containerRef}
        id="lsq-portal-widget-26c2650d-9b4a-11ef-8bcb-06998e7502ab-bcb99b86-42be-40c9-a606-fd96a6e329f8"
        className="lsq-portal-widget lsq-form-widget"
        aria-label="Contact form"
      />
      {!ready && (
        <div className="lsq-skeleton" aria-hidden="true">
          <span className="lsq-skeleton__field" />
          <span className="lsq-skeleton__field" />
          <span className="lsq-skeleton__field" />
          <span className="lsq-skeleton__field" />
          <span className="lsq-skeleton__button" />
        </div>
      )}
    </div>
  );
}
