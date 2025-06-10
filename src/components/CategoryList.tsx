import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Elegant Solitaire Rings",
    subtitle: "Starting at ZAR299.99",
    image: "/IMG_4906_20250523_183524301.jpg",
    button: { label: "Shop Now", href: "/shop?cat=solitaire" },
  },
  {
    title: "What’s New?",
    subtitle: "Timeless elegance",
    image: "/ChatGPT Image May 23, 2025, 02_53_27 PM.png",
    button: { label: "Discover Now", href: "/shop?cat=new" },
  },
  {
    title: "Soap Products Coming Soon",
    subtitle: "Luxury beauty soaps in development",
    image: "/collection-3.jpg",
    button: { label: "Learn More", href: "/" },
  },
];

const CategoryList = () => {
  return (
    <section className="section collection py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="grid gap-8 md:grid-cols-3">
        {collections.map((col, i) => (
          <div
            className="relative collection-card has-before hover:shine rounded-2xl overflow-hidden shadow-j-2"
            key={i}
          >
            {/* Overlay image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover has-bg-image"
                sizes="33vw"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-black/50 z-10" />
            </div>
            {/* Card content */}
            <div className="relative z-20 flex flex-col h-full justify-between p-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-4 card-title">
                  {col.title}
                </h2>
                <p className="text-lg text-white/90 mb-8 card-text">
                  {col.subtitle}
                </p>
              </div>
              <Link
                href={col.button.href}
                className="btn btn-primary bg-primary text-white px-6 py-3 rounded-full font-semibold w-max card-btn"
              >
                {col.button.label}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
