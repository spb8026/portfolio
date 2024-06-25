// pages/index.tsx
import Layout from "@/components/Layout";
import MainContent from "@/components/maincontent";
import { Data } from "../models"; // Adjust the import path as per your project structure

export default function Home() {
  const data: Data = require('../data/data.json'); // Assuming data.json contains your playlist data

  return (
    <Layout data={data}>
      <MainContent />
    </Layout>
  );
}
