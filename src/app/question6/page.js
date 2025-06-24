import Link from 'next/link';

export default function Question6() {
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
        6. Redirection Based on User Agent
      </h1>

      <h2 style={{ color: '#404041' }}>Response</h2>
      <div className="response-block">
        <p>Hi! José Miguel from Cloudflare Support here.</p>
        <p>
          You&apos;re right — Page Rules can&apos;t match on user agent headers. But we can achieve this using a{' '}
          <strong>Single Redirect Rule</strong> in Cloudflare.
        </p>
        <p>
          You&apos;ll want to create a redirect rule where the condition is:
          <br />
          <code>http.user_agent contains &quot;MSIE 8.0&quot;</code>
          <br />
          Then set your desired redirect target URL.
        </p>
      </div>

      <h2 style={{ color: '#404041' }}>Thought Process</h2>
      <p>
        Page Rules don&apos;t support matching against request headers like user-agent. Knowing that, I looked into the{' '}
        <a
          href="https://developers.cloudflare.com/rules/url-forwarding/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#f48120' }}
        >
          Redirect Rules
        </a>{' '}
        feature under Cloudflare Rules.
        <br />
        <br />
        Since this is a static condition and not something dynamic or needing complex logic, a Single Redirect works best.
      </p>

      <h2 style={{ color: '#404041' }}>Tools I Would Use</h2>
      <ul>
        <li>
          <strong>Cloudflare Dashboard</strong> — to create and configure the redirect rule
        </li>
        <li>
          <strong>curl -A</strong> — to test and simulate different user agents
        </li>
      </ul>

      <h2 style={{ color: '#404041' }}>References</h2>
      <ul>
        <li>
          <a
            href="https://developers.cloudflare.com/rules/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#f48120' }}
          >
            Cloudflare Rules Overview
          </a>
        </li>
        <li>
          <a
            href="https://developers.cloudflare.com/rules/url-forwarding/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#f48120' }}
          >
            Redirect Rules Documentation
          </a>
        </li>
      </ul>

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
