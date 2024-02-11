const Content = ({ children, title }: any) => {
  return (
    <>
      <h1 className="font-bold text-4xl">{title}</h1>
      <div className="mt-3">
        <div className="grid grid-cols-12 gap-5">{children}</div>
      </div>
    </>
  );
};

export default Content;
