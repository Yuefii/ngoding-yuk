import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ArtikelDua } from "@/constants/article/html/article_dua";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import Link from "next/link";
import ContentArtikel from "@/components/articles/ContentArtikel";
import useHTMLCodeStore from "@/hooks/useHTMLCode";

const artikel = () => {
  const { codes } = useHTMLCodeStore();

  const getCode = (items: any) => {
    switch (items.code) {
      case "code5":
        return codes.code5.trim();
      case "code6":
        return codes.code6.trim();
      case "code7":
        return codes.code7.trim();
      default:
        return "";
    }
  };

  return (
    <>
      <ContentArtikel
        title="Belajar Membuat Form, Tabel dan Semantik HTML"
        img="/article/html.png"
      >
        {ArtikelDua.map((item, index) => (
          <div key={index}>
            <p className="mb-5 text-justify">{item.pendahuluan}</p>
            <Link
              className="text-xl text-blue-800 hover:text-blue-950 hover:underline"
              href="/category/web/html/belajar-struktur-dasar-html-untuk-pemula"
            >
              Belajar Struktur Dasar HTML untuk Pemula
            </Link>
            {item.penjelasan &&
              item.penjelasan.map((items, index) => (
                <div className="my-5" key={index}>
                  <h1 className="text-2xl mb-3 font-semibold">{items.label}</h1>
                  <p className="font-normal">{items.konten}</p>
                </div>
              ))}
            <div className="my-10 max-w-md border rounded-xl p-4">
              <h1 className="text-2xl font-semibold">Daftar Isi</h1>
              <ul className="my-2 list-disc list-inside">
                {item.daftar_isi &&
                  item.daftar_isi.map((items, index) => (
                    <li
                      className="font-medium cursor-pointer hover:underline"
                      key={index}
                    >
                      <Link className="text-blue-800 hover:text-blue-950" href={`#${items.id}`}>{items.label}</Link>
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
                    <div className="my-5 md:mx-10">
                      <SyntaxHighlighter language="html" style={oneDark}>
                        {getCode(items)}
                      </SyntaxHighlighter>
                    </div>
                    <h3 className="md:mx-10 text-lg font-medium">
                      Adapun beberapa Tag HTML diatas ini adalah penjelasannya:
                    </h3>
                    <div className="my-5 border rounded-lg md:mx-10 p-5">
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
