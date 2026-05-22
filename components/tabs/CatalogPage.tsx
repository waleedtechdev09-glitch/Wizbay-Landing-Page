import CatalogLayout from "@/components/layout/CatalogLayout";
import BrandDirectory from "@/components/brands/BrandDirectory";
import { notFound } from "next/navigation";
import ProductGrid from "./ProductGrid";
import { catalogTabs, type CatalogTabKey } from "./catalog-data";

type CatalogPageProps = {
  tab: CatalogTabKey;
};

export default function CatalogPage({ tab }: CatalogPageProps) {
  const config = catalogTabs[tab];

  if (!config) {
    notFound();
  }

  if (config.kind === "brands") {
    return <BrandDirectory />;
  }

  return (
    <CatalogLayout
      title={config.title}
      sortLabel={config.sortLabel}
      showSidebar={config.showSidebar}
      showSortBar={config.showSortBar}
    >
      <ProductGrid items={config.products} />
    </CatalogLayout>
  );
}
