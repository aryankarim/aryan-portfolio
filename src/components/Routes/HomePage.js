import AnimateProjectTitle from "../AnimateProjectTitle";

export default function HomePage() {
  return (
    <div className="grid grid-col-3 gap-4 h-full ">
      <div className="flex flex-col justify-center items-center">
        <AnimateProjectTitle>Lets Work</AnimateProjectTitle>
        <AnimateProjectTitle>Chakika</AnimateProjectTitle>
        <AnimateProjectTitle>CatDog</AnimateProjectTitle>
      </div>
      <div className="flex justify-center items-center col-end-4">
        <div
          className="bg-gray-900 rounded-full"
          style={{ height: "110px", width: "110px" }}
        ></div>
      </div>
    </div>
  );
}
