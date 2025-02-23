import { useAnimationStore } from "../store/animationStore";
import superman from "../assets/superman3.png";

const Superman = () => {
  const supermanPosition = useAnimationStore((state) => state.supermanPosition);

  return (
    <img
      src={superman}
      style={{
        right: `-${130 + supermanPosition}px`,
        top: `-${40 + supermanPosition}px`,
      }}
      className="absolute h-[200px] z-0 transition-all ease-in-out duration-[2s]"
    />
  );
};

export default Superman;
