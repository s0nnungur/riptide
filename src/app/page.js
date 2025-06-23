import Link from 'next/link';

const questions = [
  {
    id: 1,
    title: "Site down, your nameservers are down",
    fullText: "I am having trouble reaching my website http://example.com/ from different networks. Are your nameservers working properly?"
  },
  {
    id: 2,
    title: "Why is my site coming from California?!",
    fullText: "I’m in London, but looking at your IPs it shows that you are serving my website from California. Can that be right? Why is that? I thought you were supposed to serve my website from some places close to me?"
  },
  {
    id: 3,
    title: "Workers not applied",
    fullText: "I've just added a Worker on the Cloudflare Dashboard for my website: it works in the debugger but doesn't work when I query the site. Why is that? Is there anything to activate or anything I could check?"
  },
  {
    id: 4,
    title: "Cloudflare Nameservers",
    fullText: "How are Cloudflare's nameservers different from the DNS provided by Google DNS or OpenDNS? Can I delegate to Cloudflare nameservers while still using my host’s DNS?"
  },
  {
    id: 5,
    title: "Content not Being Cached",
    fullText: "After activating Cloudflare on my site, I am seeing that resources on my pages are not being cached;"},

  {
    id: 6,
    title: "Redirection based on user agent",
    fullText: "I want to redirect visitor with specific user agent (*MSIE 8.0* for example) to a different page. It seems this is not possible with Cloudflare Page Rules. Is there any other way to achieve that using Cloudflare?"
  }
];

export default function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: '700px', margin: 'auto', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#333' }}>
      <h1 style={{ color: '#f4812', marginBottom: '2rem' }}>Cloudflare Support Test Questions</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {questions.map(({ id, title, fullText }) => (
          <li key={id} style={{ marginBottom: '2rem' }}>
            <Link href={`/question${id}`} style={{ fontWeight: '600', fontSize: '1.2rem', color: '#faad3f', textDecoration: 'none' }}>
              {id}. {title}
            </Link>
            <p style={{ marginTop: '0.3rem', color: '#555', whiteSpace: 'pre-line' }}>{fullText}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}


