import Layout from "../../layout";
import Popular from "@/components/articles/Popular";
import { HTML } from "@/constants/html";

const WebPages = () => {
  return (
    <>
      <Layout>
        <main className="mt-5">
          <h1 className="font-bold text-4xl">Artikel Belajar HTML DASAR</h1>
          <div className="mt-3">
            <div className="grid grid-cols-12 lg:gap-5">
              {HTML.map((item, index) => (
                <Popular
                  href={item.href}
                  key={index}
                  img={item.img}
                  judul={item.judul}
                  konten={item.konten}
                />
              ))}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default WebPages;
