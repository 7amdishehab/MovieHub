import ToggleMenuLinks from "./ToggleMenuLinks";
function ToggleMenu({ setOpen }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
      <ToggleMenuLinks setOpen={setOpen} />
      <div className="flex-1" onClick={() => setOpen(false)} />
    </div>
  );
}

export default ToggleMenu;
