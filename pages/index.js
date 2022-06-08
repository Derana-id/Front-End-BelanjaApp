import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Belanja | Home</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="bg-primary drop-shadow-2xl">
        <h1 className="text-secondary text-3xl">Landing</h1>
      </div>
    </div>
  );
}
