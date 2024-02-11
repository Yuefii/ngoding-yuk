import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ArtikelSatu } from "@/constants/article/html/article_satu";
import ContentArtikel from "@/components/articles/ContentArtikel";
import useHTMLCodeStore from "@/hooks/useHTMLCode";
import Link from "next/link";

const artikel = () => {
  const { codes } = useHTMLCodeStore();

  const getCode = (items: any) => {
    switch (items.code) {
      case "code1":
        return codes.code1.trim();
      case "code2":
        return codes.code2.trim();
      case "code3":
        return codes.code3.trim();
      case "code4":
        return codes.code4.trim();
      default:
        return "";
    }
  };

  return (
    <>
      <ContentArtikel
        title="Belajar Struktur Dasar HTML untuk Pemula"
        img="/article/HTML_1.png"
      >
        {ArtikelSatu.map((item, index) => (
          <div key={index}>
            <p>{item.pendahuluan}</p>
            <div className="my-10 max-w-md border rounded-xl p-4">
              <h1 className="text-2xl font-semibold">Daftar Isi</h1>
              <ul className="my-2 list-disc list-inside">
                {item.daftar_isi &&
                  item.daftar_isi.map((items, index) => (
                    <li
                      className="font-medium cursor-pointer hover:underline"
                      key={index}
                    >
                      <Link href={`#${items.id}`}>{items.label}</Link>
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
            <p>{item.penutup}</p>
            <div className="md:hidden mt-5 border-b-2" />
          </div>
        ))}
      </ContentArtikel>
    </>
  );
};

export default artikel;
