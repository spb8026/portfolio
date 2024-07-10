// pages/index.tsx
import Layout from "@/components/Layout";
import MainContent from "@/components/maincontent";

export default function Home() {
  const data: Data = require('../data/data.json'); 

  return (
    <Layout >
      <MainContent />
    </Layout>
  );
}
