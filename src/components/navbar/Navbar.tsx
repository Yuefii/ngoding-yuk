import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <nav className="z-[99999] bg-background fixed top-0 w-full p-3 border-b shadow-sm">
        <main className="md:container mx-auto flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <ul className="md:flex items-center gap-4 text-sm pr-4 hidden">
            <li>
              <Link className="hover:underline" href="/">
                Beranda
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/category">
                Kategori
              </Link>
            </li>
          </ul>
        </main>
      </nav>
    </>
  );
};

export default Navbar;
