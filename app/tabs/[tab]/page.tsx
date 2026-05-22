import CatalogPage from "@/components/tabs/CatalogPage";
import type { CatalogTabKey } from "@/components/tabs/catalog-data";

type TabPageProps = {
  params: Promise<{ tab: string }>;
};

export default async function TabPage({ params }: TabPageProps) {
  const { tab } = await params;
  return <CatalogPage tab={tab as CatalogTabKey} />;
}
