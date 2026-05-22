import Image from "next/image";
import type { CatalogProduct } from "./catalog-data";

type ProductGridProps = {
  items: CatalogProduct[];
};

export default function ProductGrid({ items }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((product) => (
        <article key={product.id} className="group flex w-full flex-col">
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#f4f4f4] p-8">
            {product.condition && (
              <span className="absolute left-3 top-3 z-10 border border-neutral-100 bg-white/90 px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-neutral-700 backdrop-blur-sm">
                {product.condition}
              </span>
            )}
            <Image
              src={product.image}
              alt={`${product.brand} - ${product.name}`}
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-contain mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          <div className="mt-4 flex flex-col space-y-1 px-1">
            <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
              {product.brand}
            </h3>
            <p className="truncate text-xs font-normal text-neutral-400">
              {product.name}
            </p>

            <div className="flex items-center gap-2.5 pt-1 text-xs font-medium">
              <span className="text-neutral-400 line-through">
                €{product.originalPrice.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
              <span className="text-neutral-400">-{product.discount}%</span>
              <span className="font-semibold text-[#dc2626]">
                €{product.currentPrice.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
