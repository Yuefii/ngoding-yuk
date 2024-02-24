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
        title="Panduan Praktis untuk Pemula dalam Memahami Struktur Dasar HTML"
        img="/article/html.png"
      >
        <article className="mt-10 text-lg">
          <div className="my-8">
            <h1 className="text-2xl font-semibold mb-5">Apa itu HTML?</h1>
            <p className="text-gray-700">
              HTML, adalah singkatan dari HyperText Markup Language, yang
              merupakan bahasa markup yang digunakan untuk membuat struktur
              dasar pada halaman web. Bagi pemula, memahami elemen-elemen dasar
              HTML adalah langkah pertama dalam pengembangan web.
            </p>
          </div>
          <div className="text-gray-700 space-y-5 text-lg">
            <h1 className="text-2xl font-semibold my-2">
              Mengapa Perlu Menguasai HTML?
            </h1>
            <p>Pertanyaannya adalah, mengapa Anda harus mempelajari HTML?</p>
            <p>
              HTML bukan sekadar fondasi, tapi juga inti dari segala kemajuan
              dalam dunia pemrograman web. Dengan demikian, tidak ada alasan
              untuk melewatkannya.
            </p>
            <p>
              Bagi para web developer, pemahaman tentang HTML membuka pintu
              untuk mengubah tampilan blog secara kreatif dan sesuai keinginan.
            </p>
            <p>
              HTML bukan hanya sekadar langkah awal, tetapi juga pintu gerbang
              utama sebelum memasuki dunia CSS dan Javascript, yang membentuk
              dasar dari pengalaman pengguna yang interaktif dan menarik.
            </p>
            <p>
              Jadi, apa alasan Anda untuk tidak mempelajari HTML? Mulailah
              petualangan Anda dalam dunia pemrograman web bersama NgodingYuk!
            </p>
          </div>
          <div className="my-10 space-y-8 text-lg">
            <h1 className="text-2xl font-semibold my-2">
              Mari Membuat Dokumen HTML Pertamamu!
            </h1>
            <p>
              Inilah saat yang dinanti-nantikan! Waktunya untuk mempraktikkan
              pembuatan dokumen HTML sendiri. Dan percayalah, ini jauh lebih
              mudah daripada yang kamu bayangkan.
            </p>
            <div className="my-5 md:mx-10">
              <SyntaxHighlighter language="html" style={oneDark}>
                {codes.code1}
              </SyntaxHighlighter>
            </div>
            <p>
              Ayo, mari kita mulai dengan membuka teks editor favoritmu, lalu
              kalian buat file bernama hello-word.html dan menuliskan kode-kode
              berikut.
            </p>
            <div className="mx-5">
              <Image
                className="w-full rounded"
                src="/article/html/pengenalan/buat-file.png"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <p>
              Saatnya untuk menyaksikan keajaiban! Buka file hello-world.html
              yang baru saja kamu buat dengan web browser favoritmu.
            </p>
            <div className="mx-5">
              <Image
                className="w-full rounded"
                src="/article/html/pengenalan/buka-file.png"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <div className="mx-5">
              <Image
                className="w-full rounded"
                src="/article/html/pengenalan/hasil-hello-world.png"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <p>Tadaa! 🎉</p>
            <p>
              Lihatlah, kita berhasil membuat halaman web pertama kita
              menggunakan HTML!
            </p>

            <p>
              Kode HTML di atas merupakan landasan dari halaman web sederhana
              yang bisa membuka pintu dunia digital bagi pemula. Mari kita kupas
              secara singkat:
            </p>
            <ul className="pl-5 list-inside list-disc space-y-4">
              <li>
                <span className="font-semibold">&lt;!DOCTYPE html&gt; </span> :
                Ini adalah deklarasi dokumen yang memberitahu web browser bahwa
                halaman menggunakan versi HTML terbaru.
              </li>
              <li>
                <span className="font-semibold">
                  &lt;html lang=&quot;id&quot;&gt;
                </span>
                : Menandakan bahwa dokumen HTML menggunakan bahasa Indonesia
                (kode &quot;id&quot;). Ini membantu mesin pencari dan pembaca
                manusia memahami konten dalam konteks yang sesuai.
              </li>
              <li>
                <span className="font-semibold">&lt;head&gt;</span> : Bagian ini
                berisi informasi tentang dokumen, seperti judul halaman yang
                akan muncul di tab browser (&lt;title&gt;).
              </li>
              <li>
                <span className="font-semibold">
                  &lt;title&gt;Mari Kita Belajar HTML | NgodingYuk&lt;/title&gt;
                </span>
                : Judul halaman yang akan ditampilkan di tab browser, sangat
                penting untuk memberikan gambaran singkat tentang isi halaman.
              </li>
              <li>
                &lt;body&gt; : Inilah tempat konten utama halaman web
                ditempatkan.
              </li>
              <li>
                <span className="font-semibold">
                  &lt;p&gt;Hello World!&lt;/p&gt;
                </span>
                : Ini adalah elemen paragraf yang berisi teks &quot;Hello
                World!&quot;, sebuah tradisi dalam dunia pemrograman untuk
                menunjukkan keberhasilan sederhana dalam membuat program.
              </li>
              <li>
                <span className="font-semibold">&lt;/html&gt; </span> : Penutup
                dari dokumen HTML.
              </li>
            </ul>
          </div>
          <p>
            Selamat! Anda baru saja melangkah ke dalam dunia coding dengan
            membuat halaman web sederhana menggunakan HTML. Ini adalah awal dari
            perjalanan menarik Anda dalam menguasai teknologi web. Teruslah
            belajar dan berlatih, dan jangan ragu untuk terjun ke dalam
            komunitas pembelajar coding untuk mendapatkan lebih banyak inspirasi
            dan dukungan.Semoga perjalanan ini membawa Anda ke tempat-tempat
            yang menakjubkan dalam dunia digital!
          </p>
        </article>
      </ContentArtikel>
    </>
  );
};

export default artikel;
