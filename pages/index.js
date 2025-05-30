import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Panel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="header">
        <h1>Welcome to Your Panel</h1>
      </header>
      <main style={{ padding: '2rem' }}>
        <p>Ini panel statis yang bisa Anda modifikasi.</p>
        {/* Tambahkan komponen, form, tabel, dsb. */}
      </main>
    </>
  )
}
