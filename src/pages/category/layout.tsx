import SeparatorComponent from "@/components/SeparatorComponent";

const Layout = ({children}: any) => {
  return (
    <>
      <div className="container mx-auto">
        <main>
          <SeparatorComponent />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
