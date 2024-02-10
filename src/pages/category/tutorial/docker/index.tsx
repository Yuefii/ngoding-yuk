import BackButton from "@/components/Back";
import Layout from "../../layout";
import Content from "@/components/articles/Content";

const WebPages = () => {
  return (
    <>
      <Layout>
        <BackButton />
        <main className="mt-3">
          <Content title="Coming Soon"></Content>
        </main>
      </Layout>
    </>
  );
};

export default WebPages;
