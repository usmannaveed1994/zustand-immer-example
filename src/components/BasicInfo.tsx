import { TextField } from "@mui/material";
import { useUserStore } from "../store/userStore";

const BasicInfo = () => {
  const { name, age, updateName, updateAge } = useUserStore();
  return (
    <section className="section">
      <h1 className="section-heading mb-5">Basic Info</h1>
      <TextField
        sx={{ marginRight: 5 }}
        label="Name"
        variant="standard"
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
      <TextField
        label="Age"
        variant="standard"
        value={age}
        onChange={(e) => updateAge(Number(e.target.value) || 0)}
      />
    </section>
  );
};

export default BasicInfo;
