import Link from 'next/link';

export default function Question4() {
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
        4. Cloudflare Nameservers vs. Google DNS/OpenDNS
      </h1>

      <h2>Response</h2>
      <p className="response-block">
        Hi there, José Miguel from Cloudflare Support!<br /><br />
        Cloudflare’s nameservers host your DNS settings. Google DNS and OpenDNS don’t host anything — they just look up DNS records to help users reach your site.<br /><br />
        If you point your nameservers to Cloudflare, Cloudflare becomes your DNS provider. That means you’ll want to make sure all your DNS records (like A or CNAME records) are correctly added to Cloudflare.
      </p>

      <h2>Thought Process</h2>

      <h3>What I gathered through research</h3>
      <ul>
        <li><strong>Cloudflare Nameservers</strong> are authoritative — meaning they answer DNS queries based on the records you configure in Cloudflare.</li>
        <li><strong>Google DNS / OpenDNS</strong> are public resolvers — they retrieve DNS info, but don’t manage your DNS settings themselves.</li>
      </ul>

      <h3>Common scenario</h3>
      <p>
        I looked into how Cloudflare works when hosting providers are involved. It’s common to host a site elsewhere but still delegate DNS to Cloudflare. In that case, users should:
      </p>
      <ol>
        <li>Change their domain’s nameservers at the registrar to the ones Cloudflare provides</li>
        <li>Add matching DNS records in Cloudflare that point to their host’s IP address</li>
      </ol>

      <h3>Partial (CNAME) Setup</h3>
      <p>
        I also came across something called a <strong>CNAME setup</strong>. This lets users keep their current DNS provider but still route specific subdomains through Cloudflare. This seems to be more relevant on Enterprise plans.
      </p>

      <h3>Example DNS Record</h3>
      <pre style={{
        backgroundColor: '#1e1e1e',
        color: '#d4d4d4',
        padding: '1rem',
        borderRadius: '6px',
        overflowX: 'auto',
        marginBottom: '1rem',
      }}>
{`Type: A
Name: example.com
Content: 192.0.2.123
Proxy status: Proxied`}
      </pre>

      <p>
        This example shows how Cloudflare can direct traffic to a third-party host while still applying its protection and performance features.
      </p>

      <p>
        <h2 style={{ color: '#404041' }}>References</h2>
        <li><a href="https://developers.cloudflare.com/dns/concepts/" target="_blank">DNS Concepts</a></li>
        <li><a href="https://developers.cloudflare.com/dns/get-started/" target="_blank">Getting Started with Cloudflare DNS</a></li>
      </p>

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
