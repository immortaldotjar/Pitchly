import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion'; // Use 'motion/react' if using Motion 12+
import { FiCode, FiHeart, FiMessageSquare, FiStar, FiUserCheck } from 'react-icons/fi';

const Items = [
  {
    title: 'Sarah Johnson',
    description: '"The attention to detail and component quality is outstanding. These UI blocks significantly accelerated our design workflow."',
    id: 1,
    icon: <FiStar className="h-5 w-5 text-yellow-400" />
  },
  {
    title: 'Michael Chen',
    description: '"Exceptional component library with smooth animations. Highly customizable and production-ready for React applications."',
    id: 2,
    icon: <FiUserCheck className="h-5 w-5 text-emerald-400" />
  },
  {
    title: 'Emma Rodriguez',
    description: '"A game-changer for rapid prototyping. The components are well-tested, responsive, and incredibly sleek out of the box."',
    id: 3,
    icon: <FiHeart className="h-5 w-5 text-rose-400" />
  },
  {
    title: 'Alex Rivera',
    description: '"Flawless mobile touch gesture support and buttery smooth transitions. Our frontend team dropped development time by 40%."',
    id: 4,
    icon: <FiMessageSquare className="h-5 w-5 text-blue-400" />
  },
  {
    title: 'David K.',
    description: '"Clean code, intuitive props, and easy integration with Tailwind CSS. Hands down one of the best carousel components I have used."',
    id: 5,
    icon: <FiCode className="h-5 w-5 text-purple-400" />
  }
];

const DRAG_BUFFER = 10;
const VELOCITY_THRESHOLD = 300;
const GAP = 16;
const PADDING = 16; // 16px (p-4) on each side of container = 32px total horizontal padding
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

function CarouselItem({ item, index, itemWidth, round, trackItemOffset, x, transition }) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
  const outputRange = [45, 0, -45];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  return (
    <motion.div
      key={`${item?.id ?? index}-${index}`}
      className={`relative shrink-0 flex flex-col ${
        round
          ? 'items-center justify-center text-center bg-background border-0'
          : 'items-start justify-between bg-background rounded-xl'
      } overflow-hidden cursor-grab active:cursor-grabbing select-none`}
      style={{
        width: itemWidth,
        height: round ? itemWidth : 'auto',
        minHeight: round ? undefined : '200px',
        rotateY: rotateY,
        ...(round && { borderRadius: '50%' })
      }}
      transition={transition}
    >
      <div className={`${round ? 'p-0 m-0' : 'p-5 sm:p-6'}`}>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#120F17]">
          {item.icon}
        </span>
      </div>
      <div className={`${round ? 'p-4' : 'p-5 sm:p-6 pt-0'}`}>
        <div className="mb-2 font-bold text-lg sm:text-xl text-black">{item.title}</div>
        <p className="text-sm text-on-surface">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Carousel({
  items = Items,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Measure the exact width of the carousel container dynamically
  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  // Compute item width to match full container width (minus padding) so only 1 card is visible
  const itemWidth = useMemo(() => {
    if (!containerWidth) return 0;
    return containerWidth - PADDING * 2;
  }, [containerWidth]);

  const trackItemOffset = itemWidth + GAP;

  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition(prev => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full mx-auto max-w-xl overflow-hidden p-4 ${
        round ? 'rounded-full' : 'rounded-2xl bg-primary/5'
      }`}
    >
      {itemWidth > 0 && (
        <motion.div
          className="flex"
          drag={isAnimating ? false : 'x'}
          dragElastic={0.1}
          style={{
            width: itemWidth,
            gap: `${GAP}px`,
            perspective: 1000,
            perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
            x
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(position * trackItemOffset) }}
          transition={effectiveTransition}
          onAnimationStart={handleAnimationStart}
          onAnimationComplete={handleAnimationComplete}
        >
          {itemsForRender.map((item, index) => (
            <CarouselItem
              key={`${item?.id ?? index}-${index}`}
              item={item}
              index={index}
              itemWidth={itemWidth}
              round={round}
              trackItemOffset={trackItemOffset}
              x={x}
              transition={effectiveTransition}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}