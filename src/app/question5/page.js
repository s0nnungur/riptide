import Link from 'next/link';

export default function Question5() {
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
      5. Content Not Being Cached on Cloudflare
        </h1>

        <h2 style={{ color: '#404041' }}>Response</h2>
        <p className="response-block">
        Hi! José Miguel from Cloudflare Support here.<br /><br />
        When Cloudflare doesn’t cache your content, it’s usually because your origin server is sending response headers telling Cloudflare not to cache (like <code>Cache-Control: no-store, no-cache</code>). These headers instruct both browsers and Cloudflare to avoid caching the content.<br /><br />
        We can adjust these headers to allow caching or use Cloudflare’s Cache Rules to override them and enable caching at the edge.<br /><br />
        If you want Cloudflare to cache content regardless of the origin’s headers, we can set up Cache Rules or use the <code>Cloudflare-CDN-Cache-Control</code> header on your server.
      </p>

      <h2 style={{ color: '#404041' }}>Thought Process</h2>
      <p>
        The issue is the presence of restrictive caching headers (<code>no-store, no-cache</code>) on the origin response. This can be overriden through:<br />
        <ul>
          <li><code>Cloudflare-CDN-Cache-Control</code> header, which allows CDN-specific cache directives</li>
          <li>Dashboard Cache Rules, where we can force caching even if the origin headers say otherwise</li>
        </ul>
        Diagnosing involves inspecting response headers using tools like <code>curl -I</code> or browser devtools network panel.<br /><br />
        From there, applying cache rules or adjusting origin headers helps solve caching problems.
      </p>

      <h2 style={{ color: '#404041' }}>Tools I Would Use</h2>
      <ul>
        <li><strong>curl -I</strong> — To inspect HTTP response headers directly from the origin and Cloudflare edge</li>
        <li><strong>Browser Developer Tools</strong> — To view network requests and response headers</li>
        <li><strong>Cloudflare Dashboard</strong> — To review cache settings and create Cache Rules</li>
      </ul>

      <h2 style={{ color: '#404041' }}>References</h2>
      <ul>
        <li><a href="https://developers.cloudflare.com/cache/concepts/cdn-cache-control/" target="_blank" rel="noopener noreferrer" style={{ color: '#f48120' }}>CDN-Cache-Control</a></li>
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
