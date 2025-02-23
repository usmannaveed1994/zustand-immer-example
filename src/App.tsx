import "./App.css";
import { useUserStore } from "./store/userStore";
import BasicInfo from "./components/BasicInfo";
import Address from "./components/Address";
import { Friends } from "./components/Friends";
import Superman from "./components/Superman";

function App() {
  const { name, age, address, friends } = useUserStore();

  return (
    <>
      <div className="relative flex flex-col gap-[30px] mx-[20px] justify-center lg:flex-row lg:justify-between lg:w-[--page-width] lg:mx-auto">
        <BasicInfo />
        <Address />
        <Superman />
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
