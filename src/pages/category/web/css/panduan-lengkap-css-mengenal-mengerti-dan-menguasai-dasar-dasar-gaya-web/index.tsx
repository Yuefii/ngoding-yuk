import Link from "next/link";
import ContentArtikel from "@/components/articles/ContentArtikel";
import { ArtikelCssSatu } from "@/constants/article/css/article_css_satu";

const artikel = () => {
  return (
    <>
      <ContentArtikel
        title="Panduan Lengkap CSS: Mengenal, Mengerti, dan Menguasai Dasar-dasar Gaya Web"
        img="/article/css.png"
      >
        {ArtikelCssSatu.map((item, index) => (
          <div key={index}>
            <p className="mb-5 text-justify">{item.pendahuluan}</p>
            <p className="mb-5 text-justify">{item.apa_itu}</p>
            <p className="mb-5 text-justify">{item.mengapa}</p>
            <div className="my-10 max-w-md border rounded-xl p-4">
              <h1 className="text-2xl font-semibold">Daftar Isi</h1>
              <ul className="my-2 list-disc list-inside">
                {item.daftar_isi &&
                  item.daftar_isi.map((items, index) => (
                    <li
                      className="font-medium cursor-pointer hover:underline"
                      key={index}
                    >
                      <Link
                        className="text-blue-800 hover:text-blue-950"
                        href={`#${items.id}`}
                      >
                        {items.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <ul className="my-2">
              {item.daftar_isi &&
                item.daftar_isi.map((items, index) => (
                  <li key={index}>
                    <h1 id={items.id} className="text-2xl font-semibold">
                      {items.label}
                    </h1>
                    <div className="my-5 p-5">
                      {items.kontens &&
                        items.kontens.map((konten, index) => (
                          <p className="my-2" key={index}>
                            {konten.konten}
                          </p>
                        ))}
                    </div>
                  </li>
                ))}
            </ul>
            <p className="text-justify">{item.penutup}</p>
            <div className="md:hidden mt-5 border-b-2" />
          </div>
        ))}
      </ContentArtikel>
    </>
  );
};

export default artikel;
