import "./App.css";
import { useUserStore } from "./store/userStore";
import superman from "./assets/superman3.png";
import BasicInfo from "./components/BasicInfo";
import Address from "./components/Address";
import { useAnimationStore } from "./store/animationStore";
import { Friends } from "./components/Friends";

function App() {
  const { name, age, address, friends } = useUserStore();
  const supermanPosition = useAnimationStore((state) => state.supermanPosition);

  return (
    <>
      <div className="relative flex flex-col gap-[30px] mx-[20px] justify-center lg:flex-row lg:justify-between lg:w-[--page-width] lg:mx-auto">
        <BasicInfo />
        <Address />
        <img
          src={superman}
          style={{
            right: `-${130 + supermanPosition}px`,
            top: `-${40 + supermanPosition}px`,
          }}
          className="absolute h-[200px] z-0 transition-all ease-in-out duration-[2s]"
        />
      </div>

      <div className="mt-[30px] mx-[20px] lg:w-[--page-width] lg:mx-auto">
        <Friends />
        <pre className="mt-10 text-[10px] text-slate-400">
          {JSON.stringify(
            {
              name,
              age,
              address,
              friends,
            },
            null,
            4
          )}
        </pre>
      </div>
    </>
  );
}

export default App;
