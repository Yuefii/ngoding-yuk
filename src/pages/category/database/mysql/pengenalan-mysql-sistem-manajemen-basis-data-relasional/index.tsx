import { ArtikelSatu } from "@/constants/article/database/mysql/article_satu";

import ContentArtikel from "@/components/articles/ContentArtikel";
import Link from "next/link";

const artikel = () => {
  return (
    <>
      <ContentArtikel
        title="Pengenalan MySQL : Sistem Manajemen Basis Data Relasional"
        img="/article/mysql.png"
      >
        {ArtikelSatu.map((item, index) => (
          <div key={index}>
            <p className="mb-5 text-justify">{item.pendahuluan}</p>
            <div className="my-10 max-w-md border rounded-xl p-4">
              <h1 className="text-2xl font-semibold">Daftar Isi</h1>
              <ul className="my-2 list-disc list-inside">
                {item.lanjutan &&
                  item.lanjutan.map((items, index) => (
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
            <div className="my-2">
              {item.lanjutan &&
                item.lanjutan.map((items, index) => (
                  <div key={index}>
                    <h1 id={items.id} className="text-2xl font-semibold">
                      {items.judul}
                    </h1>
                    <p className="mt-5">{items.pembahasan}</p>
                    <p className="mt-5 font-semibold">{items.label}</p>
                    <ul className="p-5 list-inside list-decimal">
                      {items.kontens &&
                        items.kontens.map((konten, index) => (
                          <li className="my-2" key={index}>
                            {konten.konten}
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
            </div>
            <div className="space-y-4">
              <p className="text-justify">{item.penutup}</p>
            </div>
            <div className="md:hidden mt-5 border-b-2" />
          </div>
        ))}
      </ContentArtikel>
    </>
  );
};

export default artikel;
