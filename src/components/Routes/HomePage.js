import AnimateProjectTitle from "../AnimateProjectTitle";

export default function HomePage() {
  return (
    <div class="grid grid-col-3 gap-4 h-full ">
      <div className="">
        <AnimateProjectTitle>Lets Work</AnimateProjectTitle>
        <AnimateProjectTitle>Chakika</AnimateProjectTitle>
        <AnimateProjectTitle>CatDog</AnimateProjectTitle>
      </div>
      <div className="col-end-4 bg-red-200">2</div>
    </div>
  );
}
