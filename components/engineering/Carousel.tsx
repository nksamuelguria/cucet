"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

type CarouselProps = {
  className: string;
  children: ReactNode;
  autoPlay?: number | false;
  wrapAround?: boolean;
  prevNextButtons?: boolean;
  selectedIndex?: number;
  onSelect?: (index: number) => void;
  role?: string;
  ariaLabel?: string;
};

// Reproduces the DOM that Flickity built (.flickity-viewport > .flickity-slider,
// absolutely positioned cells, .flickity-prev-next-button) so the original
// stylesheet applies unchanged. Replaces the jQuery plugin, not the CSS.
export default function Carousel({
  className,
  children,
  autoPlay = 5000,
  wrapAround = false,
  prevNextButtons = true,
  selectedIndex,
  onSelect,
  role,
  ariaLabel,
}: CarouselProps) {
  const cells = Children.toArray(children).filter(isValidElement) as ReactElement[];
  const count = cells.length;

  const viewportRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<(HTMLElement | null)[]>([]);

  const [offsets, setOffsets] = useState<number[]>([]);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [internalIndex, setInternalIndex] = useState(0);

  const isControlled = selectedIndex !== undefined;
  const index = isControlled ? selectedIndex : internalIndex;

  const measure = useCallback(() => {
    const nodes = cellRefs.current.slice(0, count);
    const next: number[] = [];
    let running = 0;
    let tallest = 0;
    nodes.forEach((node) => {
      next.push(running);
      if (!node) return;
      const style = getComputedStyle(node);
      running +=
        node.offsetWidth +
        parseFloat(style.marginLeft || "0") +
        parseFloat(style.marginRight || "0");
      tallest = Math.max(tallest, node.offsetHeight);
    });
    next.push(running);
    setOffsets(next);
    setHeight(tallest);
    setViewportWidth(viewportRef.current?.offsetWidth ?? 0);
  }, [count]);

  useLayoutEffect(() => {
    measure();
    const observer = new ResizeObserver(measure);
    if (viewportRef.current) observer.observe(viewportRef.current);
    cellRefs.current.slice(0, count).forEach((n) => n && observer.observe(n));
    return () => observer.disconnect();
  }, [measure, count]);

  const totalWidth = offsets.length ? offsets[offsets.length - 1] : 0;
  // Flickity's `contain`: never scroll past the final cell.
  const maxScroll = Math.max(0, totalWidth - viewportWidth);
  const lastIndex = (() => {
    if (wrapAround) return count - 1;
    for (let i = 0; i < count; i += 1) {
      if ((offsets[i] ?? 0) >= maxScroll) return i;
    }
    return count - 1;
  })();

  const select = useCallback(
    (next: number) => {
      let target = next;
      if (wrapAround) {
        target = ((next % count) + count) % count;
      } else {
        target = Math.min(Math.max(next, 0), lastIndex);
      }
      if (!isControlled) setInternalIndex(target);
      onSelect?.(target);
    },
    [count, wrapAround, lastIndex, isControlled, onSelect]
  );

  useEffect(() => {
    if (!autoPlay || count < 2) return;
    const timer = setInterval(() => {
      select(wrapAround ? index + 1 : index >= lastIndex ? 0 : index + 1);
    }, autoPlay);
    return () => clearInterval(timer);
  }, [autoPlay, count, index, lastIndex, select, wrapAround]);

  const translate = wrapAround
    ? -(offsets[index] ?? 0)
    : -Math.min(offsets[index] ?? 0, maxScroll);

  return (
    <div
      className={`${className} flickity-enabled is-draggable`}
      role={role}
      aria-label={ariaLabel}
    >
      <div
        className="flickity-viewport"
        ref={viewportRef}
        style={{ height: height ? `${height}px` : undefined }}
      >
        <div
          className="flickity-slider"
          style={{
            transform: `translateX(${translate}px)`,
            transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {cells.map((cell, i) =>
            cloneElement(cell, {
              key: cell.key ?? i,
              ref: (node: HTMLElement | null) => {
                cellRefs.current[i] = node;
              },
              style: {
                ...((cell.props as { style?: object }).style ?? {}),
                position: "absolute",
                // Every cell stays at left:0 and is offset with a transform, the
                // way Flickity did it. Using `left` instead would shrink
                // cells that have no CSS width: an absolutely positioned cell
                // at left:1011px inside a 1011px track has no space left, so
                // shrink-to-fit collapses it to its minimum content width.
                left: 0,
                transform: `translateX(${offsets[i] ?? 0}px)`,
              },
            } as never)
          )}
        </div>
      </div>

      {prevNextButtons && count > 1 && (
        <>
          <button
            type="button"
            className="flickity-button flickity-prev-next-button previous"
            aria-label="Previous"
            onClick={() => select(index - 1)}
          >
            <svg className="flickity-button-icon" viewBox="0 0 100 100">
              <path
                d="M 10,50 L 60,100 L 65,95 L 20,50  L 65,5 L 60,0 Z"
                className="arrow"
              />
            </svg>
          </button>
          <button
            type="button"
            className="flickity-button flickity-prev-next-button next"
            aria-label="Next"
            onClick={() => select(index + 1)}
          >
            <svg className="flickity-button-icon" viewBox="0 0 100 100">
              <path
                d="M 10,50 L 60,100 L 65,95 L 20,50  L 65,5 L 60,0 Z"
                className="arrow"
                transform="translate(100, 100) rotate(180)"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
