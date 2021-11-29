import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';

export default function AnimateLink({ children, fromX, fromY, duration }) {
  const styles = useSpring({
    from: { x: fromX, y: fromY },
    config: { duration: duration },
    x: window.innerWidth / 2 - 40,
    y: fromY,
  });

  const bindDivLoc = useDrag(
    ({ offset }) => {
      styles.x.set(offset[0]);
      styles.y.set(offset[1]);
    },
    {
      from: () => [styles.x.get(), styles.y.get()],
    }
  );

  return (
    <animated.div
      className="text-purple-500 w-20 text-center "
      {...bindDivLoc()}
      style={{ ...styles, touchAction: 'none' }}
    >
      {children}
    </animated.div>
  );
}
