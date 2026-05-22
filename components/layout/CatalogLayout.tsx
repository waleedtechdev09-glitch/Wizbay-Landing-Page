import FilterSidebar from "./FilterSidebar";
import CatalogMobileFilters from "./CatalogMobileFilters";

type CatalogLayoutProps = {
  children: React.ReactNode;
  title?: string;
  sortLabel?: string;
  showSidebar?: boolean;
  showSortBar?: boolean;
};

export default function CatalogLayout({
  children,
  title,
  sortLabel = "Sort By",
  showSidebar = true,
  showSortBar = true,
}: CatalogLayoutProps) {
  return (
    <section className="w-full bg-white px-4 py-8 font-sans text-neutral-800 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-8 lg:flex-row">
        {showSidebar && (
          <aside className="hidden w-full shrink-0 lg:sticky lg:top-4 lg:block lg:w-[300px]">
            <FilterSidebar />
          </aside>
        )}

        <div className="w-full min-w-0 flex-1">
          {showSidebar && <CatalogMobileFilters />}

          {title && (
            <h1 className="mb-6 text-2xl font-semibold tracking-tight text-[#1e293b]">
              {title}
            </h1>
          )}

          {showSortBar && (
            <div className="mb-6 flex justify-end">
              <button
                type="button"
                className="inline-flex items-center justify-between gap-4 bg-[#f4f4f5] px-4 py-2.5 text-xs font-medium tracking-wide text-neutral-700 transition-colors hover:bg-neutral-200/80"
              >
                <span>{sortLabel}</span>
                <svg
                  className="h-3.5 w-3.5 text-neutral-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
