import Head from 'next/head';

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>School Dashboard</title>
        <link rel="stylesheet" href="/style.css" />
      </Head>
      <main className="container">
        <h1>Welcome to the Dashboard</h1>
        <p>You’ve successfully logged in with a valid code!</p>
      </main>
    </div>
  );
}
