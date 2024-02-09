import BackButton from "@/components/Back";
import Layout from "../../layout";
import Popular from "@/components/articles/Popular";
import { MYSQL } from "@/constants/mysql";

const WebPages = () => {
  return (
    <>
      <Layout>
        <BackButton />
        <main className="mt-5 max-w-6xl">
          <h1 className="font-bold text-4xl">Artikel Belajar MYSQL DASAR</h1>
          <div className="mt-3">
            <div className="grid grid-cols-12 lg:gap-5">
              {MYSQL.map((item, index) => (
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
