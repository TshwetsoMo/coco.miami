import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronUp, ChevronDown, Expand, X } from 'lucide-react';

type CarouselItem = {
  src: string;
  alt: string;
};

type VerticalRitualCarouselProps = {
  images: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
};

export function VerticalRitualCarousel({
  images,
  autoPlay = true,
  interval = 3500,
  className = '',
}: VerticalRitualCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedImage, setExpandedImage] = useState<CarouselItem | null>(null);

  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const total = safeImages.length;

  useEffect(() => {
    if (!autoPlay || isPaused || total <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, isPaused, interval, total]);

  useEffect(() => {
    document.body.style.overflow = expandedImage ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [expandedImage]);

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const getRelativeIndex = (index: number) => {
    const diff = index - activeIndex;
    if (diff > total / 2) return diff - total;
    if (diff < -total / 2) return diff + total;
    return diff;
  };

  if (!total) return null;

  return (
    <>
      <div
        className={`relative w-full h-[560px] md:h-[660px] ${className}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-[18%] top-[10%] h-24 bg-gold/10 blur-3xl" />
          <div className="absolute inset-x-[12%] bottom-[10%] h-28 bg-gold/5 blur-3xl" />
        </div>

        {/* Outer frame */}
        <div className="absolute inset-0 border border-white/10 bg-midnight/30 backdrop-blur-[2px]" />

        {/* Stage */}
        <div className="absolute inset-0 overflow-hidden px-6 md:px-10">
          <div className="relative mx-auto h-full w-full max-w-[560px]">
            {safeImages.map((image, index) => {
              const relative = getRelativeIndex(index);
              const isActive = relative === 0;

              const y =
                relative === 0
                  ? 0
                  : relative === -1
                  ? -170
                  : relative === 1
                  ? 170
                  : relative < -1
                  ? -280
                  : 280;

              const scale =
                relative === 0
                  ? 1
                  : Math.abs(relative) === 1
                  ? 0.88
                  : 0.76;

              const rotateX =
                relative === 0
                  ? 0
                  : relative < 0
                  ? 14
                  : -14;

              const opacity =
                Math.abs(relative) > 2
                  ? 0
                  : relative === 0
                  ? 1
                  : 0.38;

              const zIndex = 20 - Math.abs(relative);

              return (
                <div
                  key={`${image.src}-${index}`}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  style={{ zIndex }}
                >
                  <motion.button
                    type="button"
                    initial={false}
                    animate={{
                      y,
                      scale,
                      rotateX,
                      opacity,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`pointer-events-auto relative w-[78%] max-w-[350px] md:max-w-[400px] origin-center overflow-hidden border text-left ${
                      isActive
                        ? 'border-gold/30 shadow-[0_20px_80px_rgba(0,0,0,0.45)]'
                        : 'border-white/10'
                    } bg-charcoal/80`}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                    onClick={() => {
                      if (isActive) {
                        setExpandedImage(image);
                      } else {
                        setActiveIndex(index);
                      }
                    }}
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={`h-full w-full object-cover transition-all duration-700 ${
                          isActive
                            ? 'grayscale-0 scale-[1.02]'
                            : 'grayscale-[0.35]'
                        }`}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/10 to-transparent" />

                      {image.label && (
                        <div className="absolute left-5 top-5">
                          <span className="border border-white/15 bg-black/25 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gold backdrop-blur-md">
                            {image.label}
                          </span>
                        </div>
                      )}

                      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5 md:p-6">

                        {isActive && (
                          <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-black/25 text-gold backdrop-blur-md">
                            <Expand size={16} />
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="absolute right-4 md:right-6 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-3">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-11 w-11 items-center justify-center border border-white/10 bg-black/30 text-ivory hover:border-gold/40 hover:text-gold transition-all"
            aria-label="Previous image"
          >
            <ChevronUp size={18} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="flex h-11 w-11 items-center justify-center border border-white/10 bg-black/30 text-ivory hover:border-gold/40 hover:text-gold transition-all"
            aria-label="Next image"
          >
            <ChevronDown size={18} />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute left-4 md:left-6 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-3">
          {safeImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`transition-all ${
                index === activeIndex
                  ? 'h-10 w-[3px] bg-gold'
                  : 'h-6 w-[2px] bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Expanded view */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md p-6 md:p-10"
            onClick={() => setExpandedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto flex h-full max-w-5xl items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setExpandedImage(null)}
                className="absolute right-0 top-0 z-10 flex h-12 w-12 items-center justify-center border border-white/10 bg-black/30 text-ivory hover:text-gold transition-colors"
                aria-label="Close expanded image"
              >
                <X size={18} />
              </button>

              <img
                src={expandedImage.src}
                alt={expandedImage.alt}
                className="max-h-full max-w-full object-contain border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}