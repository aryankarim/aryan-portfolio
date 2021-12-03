import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';
import CharacterSpliter from './CharacterSpliter';

export default function AnimateLink({ children }) {
  const [springStyles, springApi] = useSpring(() => ({
    x: 100,
    y: 200,
  }));

  const bindDivLoc = useDrag(({ down, movement: [mx, my] }) => {
    springApi.start({ x: down ? mx + 100 : 100, y: down ? my + 200 : 200 });
  });
  console.log(children);
  return (
    <animated.div
      className="text-purple-500 w-20 text-center my-8"
      {...bindDivLoc()}
      style={{ ...springStyles, touchAction: 'none' }}
    >
      <CharacterSpliter projectTitle={children} />
    </animated.div>
  );
}
