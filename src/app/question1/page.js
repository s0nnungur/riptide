import Link from 'next/link';

export default function Question1() {
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
        1. Site down, your nameservers are down
      </h1>

      <h2 style={{ color: '#404041' }}>Response</h2>
      <div className="response-block">
        Hi, José Miguel here from Cloudflare Support — thanks for reaching out!
        <br />
        <br />
        Your domain isn&apos;t using Cloudflare&apos;s nameservers, so Cloudflare
        isn&apos;t managing your DNS. This means any site access issues are
        likely caused by your current DNS provider or registrar.
        <br />
        <br />
        Please check your domain&apos;s nameserver settings and DNS records with
        your provider. If you want, I can help you switch your domain to use
        Cloudflare&apos;s nameservers and manage your DNS here.
        <br />
        <br />
      </div>

      <h2 style={{ color: '#404041' }}>Thought Process</h2>
      <p>
        <b>Tools used:</b> <code>nslookup</code> (Windows), <code>dig</code>{' '}
        (Linux), Cloudflare documentation
      </p>

      <h3>DNS Resolution Checks</h3>
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
        {`C:\\Users\\josem>nslookup example.com
Server:  UnKnown
Address:  88.214.178.1

Non-authoritative answer:
Name:    example.com
Addresses: 96.7.128.175, 23.192.228.80, ...`}
      </pre>
      <ul style={{ marginBottom: '1rem' }}>
        <li>Server: Unknown → DNS IP known, hostname unresolved</li>
        <li>Non-authoritative answer → Info is cached</li>
      </ul>
      <p>Conclusion: DNS is working — Cloudflare nameservers are up.</p>

      <h3>Authoritative Nameservers</h3>
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
        {`C:\\Users\\josem>nslookup -type=NS example.com

Non-authoritative answer:
example.com nameserver = a.iana-servers.net
example.com nameserver = b.iana-servers.net`}
      </pre>
      <p>
        The domain is <strong>NOT</strong> using Cloudflare nameservers.
      </p>

      <h2 style={{ color: '#404041' }}>References</h2>
      <ul>
        <li>
          <a
            href="https://developers.cloudflare.com/dns/get-started/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#f48120' }}
          >
            Getting Started with Cloudflare DNS
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
