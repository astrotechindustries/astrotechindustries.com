import Head from "next/head"

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
          </div>
        </div>
      </main>
    </div>
  )
}
