import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [code, setCode] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded example for testing
    const validCode = 'SCHOOL123';
    if (code === validCode) {
      router.push('/dashboard');
    } else {
      alert('Invalid code. Please try again.');
    }
  };

  return (
    <div>
      <Head>
        <title>School Platform</title>
        <link rel="stylesheet" href="/style.css" />
      </Head>
      <main className="container">
        <h1>Enter Access Code</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter your code"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}
