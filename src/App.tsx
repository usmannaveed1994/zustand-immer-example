import "./App.css";
import BasicInfo from "./components/BasicInfo";
import Address from "./components/Address";
import { Friends } from "./components/Friends";
import Superman from "./components/Superman";
import UserDataJSON from "./components/UserDataJSON";

function App() {
  return (
    <>
      <div className="relative flex flex-col gap-[30px] justify-center mx-[20px] lg:flex-row lg:justify-between lg:w-[--page-width] lg:mx-auto">
        <BasicInfo />
        <Address />
        <Superman />
      </div>

      <div className="mt-[30px] mx-[20px] lg:w-[--page-width] lg:mx-auto">
        <Friends />
        <UserDataJSON />
      </div>
    </>
  );
}

export default App;
