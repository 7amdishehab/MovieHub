import { useState } from "react";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import ToggleMenuBtn from "../ToggleMenu/ToggleMenuBtn";
import NavLinks from "./NavLinks";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavLinks />
      <ToggleMenuBtn setOpen={setOpen} />
      {open && <ToggleMenu setOpen={setOpen} />}
    </>
  );
}

export default Navbar;
