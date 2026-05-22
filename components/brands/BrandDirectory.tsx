const brandNames = [
  "A-Style",
  "A.G. Spalding & Bros.",
  "A.P.C.",
  "Accademia Militare",
  "Acne Studios",
  "Add",
  "Adidas Originals",
  "Aglini",
  "Agolde",
  "Aidan Mattox",
  "Akris",
  "Alainpaul",
  "Alberta Ferretti",
  "Alessandra Rich",
  "AllSaints",
  "Alo Yoga",
  "Ami Paris",
  "Anderson's",
  "Anna Sui",
  "Armani",
  "Balenciaga",
  "Balmain",
  "Barbour",
  "Bally",
  "Bottega Veneta",
  "Brunello Cucinelli",
  "Burberry",
  "C.P. Company",
  "Calvin Klein",
  "Cartier",
  "Celine",
  "Cerruti 1881",
  "Chanel",
  "Coach",
  "Dior",
  "Dolce & Gabbana",
  "Dsquared2",
  "Fendi",
  "Ganni",
  "Gucci",
  "Hermès",
  "Jimmy Choo",
  "Loewe",
  "Louis Vuitton",
  "Miu Miu",
  "Moncler",
  "Montblanc",
  "Off-White",
  "Prada",
  "Ray-Ban",
  "Saint Laurent",
  "Tiffany & Co.",
  "Tom Ford",
  "Versace",
  "Yves Saint Laurent",
  "Zadig & Voltaire",
].sort((a, b) => a.localeCompare(b));

const groupedBrands = brandNames.reduce<Record<string, string[]>>((acc, brand) => {
  const letter = brand[0]?.toUpperCase() ?? "#";
  if (!acc[letter]) {
    acc[letter] = [];
  }
  acc[letter].push(brand);
  return acc;
}, {});

const letters = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(65 + index),
);

export default function BrandDirectory() {
  const availableLetters = letters.filter((letter) => groupedBrands[letter]);

  return (
    <section className="w-full bg-white px-4 py-8 font-sans text-neutral-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-wrap gap-5 border-b border-slate-200 pb-4 text-sm font-medium text-slate-500">
          {letters.map((letter) => {
            const active = letter === "A";
            const hasBrands = Boolean(groupedBrands[letter]);
            return (
              <a
                key={letter}
                href={`#brand-${letter.toLowerCase()}`}
                className={`pb-3 transition-colors ${
                  active
                    ? "border-b-2 border-black text-black"
                    : hasBrands
                      ? "hover:text-black"
                      : "cursor-default text-slate-300"
                }`}
              >
                {letter}
              </a>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#1e293b]">
              All Brands
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-500">
              Browse brands alphabetically and jump to any letter in one tap.
            </p>
          </div>

          <label className="relative w-full max-w-[360px]">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.2-5.2m1.7-4.3a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search Brands"
              className="w-full border-b border-slate-200 bg-transparent py-3 pl-12 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-black focus:outline-none"
            />
          </label>
        </div>

        <div className="mt-10 space-y-14">
          {availableLetters.map((letter) => (
            <section key={letter} id={`brand-${letter.toLowerCase()}`}>
              <div className="flex items-center gap-6">
                <div className="h-px flex-1 bg-slate-200" />
                <h2 className="text-4xl font-light tracking-tight text-slate-700">
                  {letter}
                </h2>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {groupedBrands[letter].map((brand) => (
                  <a
                    key={brand}
                    href="#"
                    className="text-[18px] font-normal tracking-tight text-slate-700 transition-colors hover:text-black"
                    title={brand}
                  >
                    <span className="block max-w-[240px] truncate">{brand}</span>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
