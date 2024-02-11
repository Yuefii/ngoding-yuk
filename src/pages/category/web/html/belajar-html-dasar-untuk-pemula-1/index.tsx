import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ContentArtikel from "@/components/articles/ContentArtikel";
import useHTMLCodeStore from "@/hooks/useHTMLCode";

const artikel = () => {
  const { codes } = useHTMLCodeStore();
  return (
    <>
      <ContentArtikel title="Belajar HTML Dasar untuk Pemula" img="/article/HTML_1.png">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          repellendus porro, quisquam vero dolore architecto consectetur quasi
          unde ipsam nisi ex, fugiat accusantium officiis, ullam odit quod
          beatae facilis ut. Ad quo dignissimos corrupti totam! At est vel
          delectus temporibus. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Enim rem sit omnis sunt, debitis, quis deleniti
          culpa commodi est, tempore necessitatibus! Provident labore ut
          laboriosam illum modi explicabo mollitia accusamus.
        </p>
        <h1 className="text-4xl font-semibold my-4">Daftar Isi</h1>
        <div className="my-4 cursor-pointer space-y-2">
          <li className="hover:underline">Lorem ipsum dolor sit amet.</li>
          <li className="hover:underline">Lorem ipsum dolor sit amet.</li>
          <li className="hover:underline">Lorem ipsum dolor sit amet.</li>
          <li className="hover:underline">Lorem ipsum dolor sit amet.</li>
          <li className="hover:underline">Lorem ipsum dolor sit amet.</li>
          <li className="hover:underline">Lorem ipsum dolor sit amet.</li>
        </div>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          eligendi quidem dolorem, impedit autem vero hic nemo asperiores
          consequuntur velit reprehenderit commodi quam tempore quas blanditiis?
          Ex, maiores hic neque assumenda quam dolorum harum obcaecati esse
          aperiam natus soluta nulla doloribus vero reiciendis itaque nam
          pariatur mollitia quod exercitationem? Ipsam animi ipsum culpa dolore!
          Nesciunt suscipit distinctio quidem dicta veniam incidunt maxime
          voluptates nobis asperiores iusto ipsam obcaecati, minus impedit
          pariatur libero itaque atque voluptatem laborum accusamus expedita
          cumque, fugiat tempore alias nostrum. Nulla ipsa voluptatum saepe fuga
          mollitia ipsum consectetur illum pariatur praesentium, distinctio modi
          ab deserunt blanditiis qui.
        </p>
        <div className="my-4">
          <h1 className="text-3xl font-semibold ">
            1. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className="md:mx-10 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            veritatis esse asperiores dolorum libero fuga hic, voluptas
            aspernatur quia officiis aliquid qui dolor repellendus cum. Maiores,
            molestias. Odio ipsam optio impedit possimus reiciendis placeat
            totam omnis sequi quam tenetur. Aut cum quos quam enim incidunt
            ipsum, et vero accusamus ratione.
          </p>
          <div className="md:mx-10">
            <SyntaxHighlighter language="html" style={oneDark}>
              {codes.code1.trim()}
            </SyntaxHighlighter>
          </div>
        </div>
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vel
          temporibus ut est necessitatibus accusantium earum dolor, magni
          debitis molestias doloremque molestiae a, ea iste nostrum rerum
          voluptatem iure reiciendis incidunt! Et corporis eum possimus minima
          esse eligendi quibusdam incidunt eaque id voluptatem ab, non
          consectetur obcaecati. Quod, nemo quisquam sapiente quia tempora eaque
          velit a, ullam corrupti perferendis fuga veniam ea cupiditate sunt
          praesentium odit accusamus voluptatum optio laboriosam blanditiis,
          reiciendis maxime culpa ratione? Eligendi soluta minima accusantium
          autem deserunt. Sunt, provident temporibus aspernatur dolore
          repellendus voluptatum. Aut id quidem aperiam quo qui harum dolore est
          facere doloribus ab!
        </p>
      </ContentArtikel>
    </>
  );
};

export default artikel;
