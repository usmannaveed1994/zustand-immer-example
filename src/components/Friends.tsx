import {
  Checkbox,
  ClickAwayListener,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useUserStore } from "../store/userStore";
import { HOBBIES } from "../constants/user";
import { useAnimationStore } from "../store/animationStore";

export const Friends = () => {
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1);
  const { supermanPosition, updateSupermanPosition } = useAnimationStore();
  const { friends, updateFriendName, removeFriend, initFriend, updateHobbies } =
    useUserStore();

  const removeRow = (e: React.MouseEvent<HTMLElement>, index: number) => {
    e.stopPropagation();
    removeFriend(index);
    setSelectedRowIndex(-1);
  };

  const addRow = () => {
    if (friends.length && !friends[friends.length - 1].name) return;

    initFriend();
    updateSupermanPosition(supermanPosition + 250);
  };

  const hobbiesChanged = (e: SelectChangeEvent, friendIndex: number) => {
    const hobbies = e.target.value;
    updateHobbies(
      friendIndex,
      typeof hobbies === "string" ? hobbies.split(",") : hobbies
    );
  };

  return (
    <section className="section">
      <h1 className="section-heading mb-5">Friends</h1>
      <ClickAwayListener onClickAway={() => setSelectedRowIndex(-1)}>
        <div>
          {friends.map((friend, i) => (
            <div
              key={`${friend}_${i}`}
              onClick={() => setSelectedRowIndex(i)}
              className="relative flex flex-col lg:flex-row gap-3 mb-3 py-[10px] px-[15px] bg-[#AEEA94] cursor-pointer"
            >
              <div className="w-[230px]">
                <span className="text-[--text-primary] font-bold mr-3">
                  Name
                </span>
                <span
                  className={`${
                    selectedRowIndex === i ? "inline" : "hidden"
                  } w-[120px]`}
                >
                  <TextField
                    variant="standard"
                    value={friends[i].name}
                    onChange={(e) => updateFriendName(i, e.target.value)}
                  />
                </span>
                <span className={`${selectedRowIndex === i ? "hidden" : ""}`}>
                  {friend.name}
                </span>
              </div>
              <div>
                <span className="text-[--text-primary] font-bold mr-3">
                  Hobbies
                </span>
                <span
                  className={`${selectedRowIndex === i ? "hidden" : "inline"}`}
                >
                  {friend.hobbies.join(", ")}
                </span>
                <span
                  className={`w-[200px] ${
                    selectedRowIndex === i ? "inline" : "hidden"
                  }`}
                >
                  <Select
                    multiple
                    value={friend.hobbies || []}
                    onChange={(e) => hobbiesChanged(e as SelectChangeEvent, i)}
                    onClose={() => setSelectedRowIndex(-1)}
                    onBlur={() => setSelectedRowIndex(-1)}
                    input={<OutlinedInput label="Hobbies" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={{
                      keepMounted: true,
                      disablePortal: true,
                    }}
                    sx={{ width: "200px" }}
                  >
                    {HOBBIES.map((hobby) => (
                      <MenuItem key={hobby} value={hobby}>
                        <Checkbox checked={friend.hobbies.includes(hobby)} />
                        <ListItemText primary={hobby} />
                      </MenuItem>
                    ))}
                  </Select>
                </span>
              </div>
              <div
                className="absolute -right-[20px] items-center text-xs px-[5px] py-[2px] bg-[#fffbca] text-[--text-primary] cursor-pointer"
                onClick={(e) => removeRow(e, i)}
              >
                Delete
              </div>
            </div>
          ))}
        </div>
      </ClickAwayListener>
      <div
        onClick={addRow}
        className="w-10 h-10 rounded-full flex items-center justify-center text-xs text-white bg-[--text-primary] cursor-pointer"
      >
        Add
      </div>
    </section>
  );
};
