import Head from "next/head"
import ProductCard from "../components/ProductCard"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Astro Tech Industries</title>
      </Head>

      <main>
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-2xl font-brand text-black dark:text-white">
              Astro Tech Industries
            </h1>

            <p>
              Web Development Services and iOS Applications
            </p>
          </div>

          <div className="space-y-4">
            <ProductCard comingSoon={true} title={"Astro Merchant"} description={"Space trading adventure game for iOS"} />
            <ProductCard comingSoon={true} title={"Tic Tac Squared"} description={"A Multiplayer, multidimensional spin on the classic game"} />
            <ProductCard comingSoon={true} title={"Sight Cards"} description={"Free sight words training app for Pre-K students"} />
          </div>
        </div>
      </main>
    </div>
  )
}
