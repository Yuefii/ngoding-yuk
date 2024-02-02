import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <nav className="z-[99999] bg-background fixed top-0 flex items-center w-full p-3 border-b shadow-sm">
        <Logo />
      </nav>
    </>
  );
};

export default Navbar;
