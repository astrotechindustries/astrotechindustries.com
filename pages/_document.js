import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=optional"
            rel="stylesheet"
          />
        </Head>

        <body className="text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
          <div className="grid place-items-center h-screen">
            <div className="px-4 py-8">
              <Main />
            </div>
          </div>

          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
