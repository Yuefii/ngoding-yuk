import { POPULAR } from "@/constants/popular";
import Layout from "./layout";
import Popular from "@/components/articles/Popular";

const CategoryPages = () => {
  return (
    <>
      <Layout>
        <main className="mt-5">
          <h1 className="font-bold text-2xl">Artikel Populer</h1>
          <div className="mt-3">
            <div className="grid grid-cols-12 lg:gap-5">
              {POPULAR.map((item, index) => (
                <Popular
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

export default CategoryPages;
