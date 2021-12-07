import { useEffect } from "react";
import { useSpring, animated } from "react-spring";

export default function Character({ char }) {
  const [springStyles, springApi] = useSpring(() => ({
    from: { x: -50, y: 10, opacity: 1 },
  }));

  const spinCharacter = () => {
    springApi({
      x: 50,
      y: 0,
      opacity: 1,
      loop: { reverse: true },
    });
  };

  return (
    <animated.span style={{ ...springStyles }} className="inline-block">
      {char}
    </animated.span>
  );
}
