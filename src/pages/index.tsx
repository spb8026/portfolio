// pages/index.tsx
import Layout from "@/components/Layout";
import MainContent from "@/components/maincontent";
import { Data } from "../models"; 

export default function Home() {
  const data: Data = require('../data/data.json'); 

  return (
    <Layout data={data}>
      <MainContent />
    </Layout>
  );
}
