import AnimateLink from '../AnimateLink';

export default function HomePage() {
  return (
    <div>
      <AnimateLink fromX={-100} fromY={300} duration={5000}>
        Lets Work
      </AnimateLink>
      <AnimateLink fromX={-100} fromY={300} duration={5000}>
        Chakika
      </AnimateLink>
      <AnimateLink fromX={-100} fromY={300} duration={5000}>
        CatDog
      </AnimateLink>
    </div>
  );
}
