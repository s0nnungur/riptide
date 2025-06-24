import Link from 'next/link';

export default function Question2() {
  return (
    <main
      style={{
        padding: '2rem',
        maxWidth: '700px',
        margin: 'auto',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#333',
        lineHeight: '1.6',
      }}
    >
      <h1 style={{ color: '#404041', marginBottom: '1rem' }}>
        2. Why is my site coming from California?!
      </h1>

      <h2 style={{ color: '#404041' }}>Response</h2>
      <div className="response-block">
        Hi, José Miguel here from Cloudflare Support — thanks for reaching out!
        <br />
        <br />
        Cloudflare routes traffic based on speed and availability, not just geographic distance. So while you&apos;re in London, routing through California can happen temporarily depending on network conditions.
        <br />
        <br />
        This is expected and helps ensure your site stays fast and stable.
      </div>

      <h2 style={{ color: '#404041' }}>Thought Process</h2>
      <h3>CDN Routing Behavior</h3>
      <ul>
        <li>Cloudflare uses latency-based routing, not always physical proximity.</li>
        <li>Factors like congestion, availability, or upstream provider issues can shift traffic.</li>
      </ul>

      <h3>How to Identify the Routing</h3>
      <p>You can check which Cloudflare data center responded using the <code>CF-Ray</code> header:</p>
      <pre
        style={{
          backgroundColor: '#1e1e1e',
          color: '#d4d4d4',
          padding: '1rem',
          borderRadius: '6px',
          overflowX: 'auto',
          marginBottom: '1rem',
        }}
      >
        {`curl -I https://yourdomain.com

HTTP/2 200 
...
CF-Ray: 1234567890abcdef-LHR`}
      </pre>
      <p>
        The last part (like <code>LHR</code> above) shows the responding data center — LHR is London, for example.
      </p>

      <Link href="/">
        <button
          style={{
            marginTop: '2rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#f48120',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          ← Back to Index
        </button>
      </Link>
    </main>
  );
}
