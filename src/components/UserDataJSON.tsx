import { useUserStore } from "../store/userStore";

const UserDataJSON = () => {
  const { name, age, address, friends } = useUserStore();

  return (
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
  );
};

export default UserDataJSON;
