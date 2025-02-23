import { TextField } from "@mui/material";
import { useUserStore } from "../store/userStore";

const Address = () => {
  const { address, updateCity, updateCountry } = useUserStore();

  return (
    <section className="section z-10">
      <h1 className="section-heading mb-5">Address</h1>
      <div className="flex">
        <TextField
          sx={{ marginRight: 5 }}
          label="Country"
          variant="standard"
          value={address?.country}
          onChange={(e) => updateCountry(e.target.value)}
        />
        <TextField
          label="City"
          variant="standard"
          value={address?.city}
          onChange={(e) => updateCity(e.target.value)}
        />
      </div>
    </section>
  );
};

export default Address;
