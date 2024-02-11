import ContentArtikel from "@/components/articles/ContentArtikel";
import { ArtikelSatu } from "@/constants/article/tutorial/article_satu";
import Link from "next/link";

const artikel = () => {
  return (
    <>
      <ContentArtikel
        title="Cara Menginstall Visual Studio Code di Windows"
        img="/article/VSCODE.png"
      >
        {ArtikelSatu.map((item, index) => (
          <div key={index}>
            <p className="mb-5 text-justify">{item.pendahuluan}</p>
            <div className="my-10 max-w-md border rounded-xl p-4">
              <h1 className="text-2xl font-semibold">Daftar Isi</h1>
              <ul className="my-2 list-disc list-inside">
                {item.langkah_langkah &&
                  item.langkah_langkah.map((items, index) => (
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
              {item.langkah_langkah &&
                item.langkah_langkah.map((items, index) => (
                  <div key={index}>
                    <h1 id={items.id} className="text-2xl font-semibold">
                      {items.label}
                    </h1>
                    <ul className="my-5 border rounded-lg md:mx-10 p-5 list-inside list-decimal">
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
              <p className="text-justify">{item.penutup_lanjutan}</p>
              <p className="text-justify text-2xl font-semibold">
                {item.caption}
              </p>
            </div>
            <div className="md:hidden mt-5 border-b-2" />
          </div>
        ))}
      </ContentArtikel>
    </>
  );
};

export default artikel;
