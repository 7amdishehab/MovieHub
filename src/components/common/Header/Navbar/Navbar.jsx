import { useState } from "react";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import ToggleMenuBtn from "../ToggleMenu/ToggleMenuBtn";
import NavLinks from "./NavLinks";
import ToggleModeBtn from "../ToggleModeBtn";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavLinks />
      <div className="flex justify-center items-center gap-5">
        <ToggleModeBtn />
        <ToggleMenuBtn setOpen={setOpen} />
      </div>
      {open && <ToggleMenu setOpen={setOpen} />}
    </>
  );
}

export default Navbar;
