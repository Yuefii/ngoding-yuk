import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ContentArtikel from "@/components/articles/ContentArtikel";
import useHTMLCodeStore from "@/hooks/useHTMLCode";
import Image from "next/image";

const artikel = () => {
  const { codes } = useHTMLCodeStore();

  return (
    <>
      <ContentArtikel
        title="Panduan Lengkap tentang Tag Element Attribute dalam HTML"
        img="/article/html.png"
      >
        <article className="mt-10 text-lg">
          <div className="my-8">
            <h1 className="text-3xl font-semibold mb-5">
              Apa itu Tag Element Atribut di HTML?
            </h1>
            <p className="text-gray-700 dark:text-white text-xl">
              Dalam dunia web development, elemen HTML adalah fondasi yang tak
              tergantikan. Namun, apakah Anda tahu bahwa menggunakan atribut
              pada elemen-elemen tersebut dapat membuka pintu untuk pengalaman
              pengguna yang lebih kaya dan interaktif? Mari kita telusuri
              bersama-sama dunia tag element attribute dalam HTML, di mana
              kekuatan tersembunyi dari kode bertemu kreativitas tanpa batas.
            </p>
          </div>
          <div className="text-xl">
            <h1 className="my-10 text-3xl font-semibold">
              Mengapa Anda Perlu Menguasai Tag Element pada HTML?
            </h1>
            <div className="space-y-6 text-gray-700 dark:text-white">
              <p>
                HTML atau HyperText Markup Language adalah bahasa dasar yang
                digunakan untuk membuat dan mengatur struktur halaman web. Dalam
                mempelajari HTML, salah satu hal yang perlu dikuasai adalah tag
                element. Tag element adalah bagian penting dalam HTML yang
                menentukan bagaimana konten pada halaman web akan ditampilkan
                dan diatur.
              </p>
              <h1>
                Berikut adalah beberapa alasan mengapa penting untuk menguasai
                tag element pada HTML :
              </h1>
              <ul className="space-y-6">
                <li className="list-decimal list-inside">
                  <span className="font-semibold">
                    Membangun Struktur Halaman Web yang Tersusun:
                  </span>
                  <p className="pl-5 mt-2">
                    Tag element memungkinkan Anda untuk membuat struktur yang
                    terorganisir pada halaman web. Dengan menguasai tag seperti
                    &lt;header&gt;, &lt;footer&gt;, &lt;nav&gt;, dan lainnya,
                    Anda dapat mengatur bagian-bagian yang berbeda dari halaman
                    web Anda dengan jelas dan terstruktur.
                  </p>
                </li>
                <li className="list-decimal list-inside">
                  <span className="font-semibold">
                    Meningkatkan Aksesibilitas:
                  </span>
                  <p className="pl-5 mt-2">
                    Penggunaan tag element yang semantik tidak hanya membantu
                    dalam mengatur struktur halaman, tetapi juga meningkatkan
                    aksesibilitas situs web. Screen reader dan mesin pencari
                    menggunakan tag element untuk memahami konten dan
                    menyampaikan informasi kepada pengguna. Dengan menggunakan
                    tag element yang sesuai, Anda membantu memastikan bahwa
                    situs web Anda dapat diakses dengan baik oleh berbagai
                    pengguna, termasuk mereka yang menggunakan teknologi bantu.
                  </p>
                </li>
                <li className="list-decimal list-inside">
                  <span className="font-semibold">
                    Memperbaiki SEO (Search Engine Optimization):
                  </span>
                  <p className="pl-5 mt-2">
                    Mesin pencari seperti Google menggunakan struktur HTML untuk
                    memahami konten suatu halaman web. Dengan menggunakan tag
                    element yang sesuai seperti &lt;title&gt;, &lt;meta&gt;,
                    &lt;h1&gt;, dan lainnya, Anda dapat membantu mesin pencari
                    memahami konten situs web Anda dengan lebih baik. Ini dapat
                    meningkatkan peringkat SEO situs web Anda dalam hasil
                    pencarian, membantu lebih banyak orang menemukan situs Anda
                    secara organik.
                  </p>
                </li>
                <li className="list-decimal list-inside">
                  <span className="font-semibold">
                    Pengalaman Pengguna yang Lebih Baik:
                  </span>
                  <p className="pl-5 mt-2">
                    Dengan menggunakan tag element yang sesuai, Anda dapat
                    menciptakan pengalaman pengguna yang lebih baik dan
                    konsisten di seluruh halaman web Anda. Tag seperti
                    &lt;p&gt;, &lt;h1&gt;, &lt;ul&gt;, dan lainnya membantu
                    membuat konten lebih mudah dibaca dan dipahami oleh
                    pengguna, serta memberikan tampilan yang konsisten di
                    berbagai platform dan perangkat.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-xl">
            <h1>
              berikut adalah contoh coding HTML yang menggunakan beberapa tag
              element secara langsung dalam sebuah halaman web sederhana :
            </h1>
            <div className="my-5 md:mx-10">
              <SyntaxHighlighter language="html" style={oneDark}>
                {codes.code2}
              </SyntaxHighlighter>
            </div>
            <h1 className="font-semibold my-10">Penjelasan</h1>
            <ul className="space-y-6">
              <li className="list-disc list-inside">
                &lt;header&gt;, &lt;nav&gt;, &lt;ul&gt;, &lt;li&gt;,
                &lt;section&gt;, dan &lt;footer&gt; adalah beberapa tag element
                yang digunakan untuk menentukan struktur halaman web seperti
                bagian kepala, navigasi, isi, dan footer.
              </li>
              <li className="list-disc list-inside">
                Setiap tag element memiliki peran dan tujuan tertentu dalam
                mengatur dan menampilkan konten halaman web.
              </li>
              <li className="list-disc list-inside">
                Tag seperti &lt;h1&gt;, &lt;h2&gt;, &lt;p&gt;, &lt;a&gt;, dan
                &lt;meta&gt; juga digunakan untuk menentukan jenis konten
                (seperti judul, paragraf, dan tautan) serta informasi penting
                lainnya (seperti metadata halaman).
              </li>
              <li className="list-disc list-inside">
                Dengan menggunakan tag element dengan benar, halaman web
                tersebut dapat diakses dengan baik oleh pengguna dan
                diinterpretasikan dengan benar oleh mesin pencari dan teknologi
                bantu.
              </li>
            </ul>
          </div>
          <div className="mt-10 space-y-6">
            <p>
              Dengan memahami dan memanfaatkan tag element attribute secara
              efektif, Anda tidak hanya meningkatkan SEO situs web Anda, tetapi
              juga meningkatkan pengalaman pengguna secara keseluruhan. Setiap
              atribut memiliki peran dan kegunaannya sendiri, dan penggunaan
              yang cerdas dari mereka dapat membuat situs web Anda menjadi lebih
              dinamis, terhubung, dan relevan.
            </p>
            <p>
              Jadi, jangan ragu untuk menjelajahi dunia tag element attribute
              dalam HTML. Dengan kreativitas dan pengetahuan yang tepat, Anda
              dapat mengangkat situs web Anda ke level berikutnya, menarik lebih
              banyak pengunjung dan menciptakan pengalaman online yang tak
              terlupakan.
            </p>
          </div>
        </article>
      </ContentArtikel>
    </>
  );
};

export default artikel;
