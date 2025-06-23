import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import Filter from "@/components/Filter";
import SignupModal from "@/components/SignupModal";
import { Suspense } from "react";

const Shop = async ({ searchParams }: { searchParams?: any }) => {
  return (
    <>
      <SignupModal />
      <div className="min-h-screen bg-white">
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <h1 className="text-2xl mb-8">Shop All Products</h1>
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="w-full lg:w-1/4 mb-8 lg:mb-0">
              <Filter searchParams={searchParams} />
            </aside>
            <main className="w-full lg:w-3/4">
              <Suspense fallback={<Skeleton />}>
                <ProductList categoryId={""} searchParams={searchParams} />
              </Suspense>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
