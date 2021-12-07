import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";
import CharacterSpliter from "./CharacterSpliter";

export default function AnimateProjectTitle({ children }) {
  const [springStyles, springApi] = useSpring(() => ({
    x: 0,
    y: 0,
  }));

  const bindDivLoc = useDrag(({ down, movement: [mx, my] }) => {
    springApi.start({ x: down ? mx : 0, y: down ? my : 0 });
  });
  console.log(children);
  return (
    <animated.div
      className="text-purple-500 w-20 text-center my-8"
      {...bindDivLoc()}
      style={{ ...springStyles, touchAction: "none" }}
    >
      <CharacterSpliter projectTitle={children} />
    </animated.div>
  );
}
