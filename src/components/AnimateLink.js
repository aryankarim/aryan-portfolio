import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';

export default function AnimateLink({ children, fromX, fromY, duration }) {
  const springStyles = useSpring({
    from: { x: fromX, y: fromY },
    config: { duration: duration },
    x: window.innerWidth / 2 - 40,
    y: fromY,
  });

  const bindDivLoc = useDrag(
    ({ offset }) => {
      springStyles.x.set(offset[0]);
      springStyles.y.set(offset[1]);
    },
    {
      from: () => [springStyles.x.get(), springStyles.y.get()],
    }
  );

  return (
    <animated.div
      className="text-purple-500 w-20 text-center "
      {...bindDivLoc()}
      style={{ ...springStyles, touchAction: 'none' }}
    >
      {children}
    </animated.div>
  );
}
