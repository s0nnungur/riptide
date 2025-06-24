import Link from 'next/link';

export default function Question3() {
  return (
    <main style={{
      padding: '2rem',
      maxWidth: '700px',
      margin: 'auto',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333',
      lineHeight: '1.6',
    }}>
      <h1 style={{ color: '#404041', marginBottom: '1rem' }}>
        3. Workers not applied
      </h1>
      <h2 style={{ color: '#404041' }}>Response</h2>
<p className="response-block">
  Hi there, José Miguel from Cloudflare Support!<br /><br />
  I know it can be confusing when things work in the debugger but not live — been there myself. This usually happens when the Worker isn&apos;t attached to a route that matches real traffic.
  <br /><br />
  Check the “Triggers” section in the dashboard and make sure you&apos;ve set a route like <code>example.com/*</code>. 
  <br /><br />
  Let me know if that helps or if you&apos;d like a hand checking the setup.
</p>

      <h2 style={{ color: '#404041' }}>Thought Process</h2>
      <h3>How I approached this question</h3>
      <p>
        I don&apos;t have direct experience deploying Workers through the Dashboard — my answer is based on research and Cloudflare&apos;s official documentation. I reviewed several key sections to confirm the relationship between Worker triggers, routes, and proxied traffic.
      </p>

      <h3>Key Concepts Researched</h3>
      <ul>
        <li>Workers only run on requests that match an explicitly defined route.</li>
        <li>The DNS record must be proxied for the Worker to execute.</li>
        <li>The Debugger tool runs in isolation and doesn&apos;t confirm full deployment behavior.</li>
      </ul>

        <h2 style={{ color: '#404041' }}>References</h2>      <ul>
        <li>
          <a href="https://developers.cloudflare.com/workers/platform/routes/" target="_blank" rel="noopener noreferrer">
            Defining routes for Workers
          </a>
        </li>
      </ul>

      <Link href="/">
        <button style={{
          marginTop: '2rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#f48120',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem',
        }}>
          ← Back to Index
        </button>
      </Link>
    </main>
  );
}
