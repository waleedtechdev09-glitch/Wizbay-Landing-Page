import ProductGrid from "./ProductGrid";
import { audienceCatalogs, type AudienceKey } from "./audience-data";

type AudienceCatalogProps = {
  audience: AudienceKey;
};

export default function AudienceCatalog({ audience }: AudienceCatalogProps) {
  const catalog = audienceCatalogs[audience];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white px-5 py-5 shadow-sm sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-[#1e293b]">
            {catalog.title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            {catalog.subtitle}
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-between gap-4 bg-[#f4f4f5] px-4 py-2.5 text-xs font-medium tracking-wide text-neutral-700 transition-colors hover:bg-neutral-200/80"
        >
          <span>{catalog.sortLabel}</span>
          <svg
            className="h-3.5 w-3.5 text-neutral-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <ProductGrid items={catalog.products} />
    </div>
  );
}
