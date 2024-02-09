import { useRouter } from "next/router";
import SeparatorComponent from "@/components/SeparatorComponent";

const disable = [
  "/category/web/html",
  "/category/web/css",
  "/category/web/javascript",
  "/category/database/mysql",
  "/category/database/postgresql",
  "/category/database/mongodb",
  "/category/tutorial/vscode",
  "/category/tutorial/docker",
  "/category/tutorial/xampp",
];

const Layout = ({ children }: any) => {
  const { pathname } = useRouter();

  return (
    <>
      <div className="container mx-auto">
        <main className="mb-20">
          {!disable.includes(pathname) && <SeparatorComponent />}
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
