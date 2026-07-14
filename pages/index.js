import Link from 'next/link';

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: '#0B0F19', color: '#F3F4F6', fontFamily: 'sans-serif', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* 1. GLASSMORPHIC NAVIGATION BAR */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 80px', borderBottom: '1px solid #1F2937', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, backgroundColor: 'rgba(11, 15, 25, 0.8)' }}>
        <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#10B981', letterSpacing: '1px' }}>🎯 QUANTUM ECOSYSTEM</div>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#features" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.95rem' }}>Features</a>
          <a href="#pricing" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.95rem' }}>Systems</a>
          {/* Link pointing directly to your trading terminal dashboard */}
          <Link href="/dashboard" style={{ backgroundColor: '#10B981', color: 'white', padding: '10px 22px', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.9rem', boxShadow: '0px 4px 14px rgba(16, 185, 129, 0.3)' }}>Launch Platform</Link>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10B981', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '25px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
          🚀 STOP BLOWING TRADING ACCOUNTS
        </div>
        <h1 style={{ fontSize: '3.8rem', fontWeight: '800', lineHeight: '1.15', letterSpacing: '-1px', marginBottom: '25px', background: 'linear-gradient(to right, #FFFFFF, #9CA3AF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          The Terminal That Forces Absolute Discipline.
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#9CA3AF', lineHeight: '1.6', marginBottom: '40px', maxWidth: '650px' }}>
          Whether you are a beginner or a struggling intermediate, our embedded risk models, automated checklist gatekeepers, and mechanical systems eliminate human error.
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="/dashboard" style={{ backgroundColor: '#10B981', color: 'white', padding: '16px 36px', borderRadius: '8px', fontSize: '1.05rem', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0px 4px 20px rgba(16, 185, 129, 0.4)' }}>Get Started For Free</Link>
          <a href="#features" style={{ border: '1px solid #374151', color: 'white', padding: '16px 36px', borderRadius: '8px', fontSize: '1.05rem', fontWeight: 'bold', textDecoration: 'none' }}>See How It Works</a>
        </div>
      </section>

      {/* 3. VALUE PROPOSITION TRIPLE CARDS */}
      <section id="features" style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlignment: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '50px', textAlign: 'center' }}>Engineered for Behavioral Success</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          <div style={{ backgroundColor: '#111827', padding: '35px', borderRadius: '12px', border: '1px solid #1F2937' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>🛡️</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px' }}>The Mathematical Risk Gate</h3>
            <p style={{ color: '#9CA3AF', lineHeight: '1.5', fontSize: '0.95rem' }}>Never guess your position sizing again. Input your stop loss, and our frontend engine automatically hardlocks your maximum loss variables.</p>
          </div>

          <div style={{ backgroundColor: '#111827', padding: '35px', borderRadius: '12px', border: '1px solid #1F2937' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>🔒</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px' }}>Pre-Trade Checklist Lock</h3>
            <p style={{ color: '#9CA3AF', lineHeight: '1.5', fontSize: '0.95rem' }}>Emotional trades kill progress. The platform physically blocks database access and trade logging until every structural rule aligns.</p>
          </div>

          <div style={{ backgroundColor: '#111827', padding: '35px', borderRadius: '12px', border: '1px solid #1F2937' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>📊</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '12px' }}>Leak Detection Journal</h3>
            <p style={{ color: '#9CA3AF', lineHeight: '1.5', fontSize: '0.95rem' }}>Securely powered by Supabase. Your trade metrics are processed through continuous statistical logs to spot where you leak money.</p>
          </div>

        </div>
      </section>

      {/* 4. FOOTER */}
      <footer style={{ borderTop: '1px solid #1F2937', padding: '40px 80px', textAlign: 'center', color: '#4B5563', fontSize: '0.85rem', marginTop: '60px' }}>
        © {new Date().getFullYear()} Quantum Trading Ecosystem. All rights reserved. Financial speculative trading involves substantial risk.
      </footer>
    </div>
  );
}
