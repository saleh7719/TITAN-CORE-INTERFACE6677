import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="omni-container">
      <nav className="top-nav">
        <div style={{ fontWeight: 'bold', letterSpacing: '2px' }}>OMNI_SENTINEL <span style={{ color: '#10b981' }}>v77.0.4</span></div>
        <div style={{ fontSize: '0.8rem', color: '#666' }}>SYSTEM_STATUS: <span style={{ color: '#10b981' }}>OPTIMAL</span></div>
        <button style={{ background: '#10b981', border: 'none', padding: '8px 20px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>EMERGENCY LOCK</button>
      </nav>

      <div className="main-layout">
        {/* Left Sidebar: Assets & Tools */}
        <aside className="panel">
          <h4 style={{ fontSize: '0.7rem', color: '#444', marginBottom: '20px' }}>INFRASTRUCTURE MAP</h4>
          {['Security Layers', 'Database Clusters', 'Global Nodes', 'API Gateways', 'Encryption Keys', 'User Access'].map(item => (
            <div key={item} style={{ padding: '10px 0', fontSize: '0.85rem', borderBottom: '1px solid #111', cursor: 'pointer' }}>
              <span className="status-dot"></span> {item}
            </div>
          ))}
        </aside>

        {/* Center: Main Dashboard */}
        <main className="panel" style={{ background: '#080808' }}>
          <div className="stat-grid">
            <div className="stat-card"><h5>THREATS</h5><h2 style={{ color: '#10b981' }}>0</h2></div>
            <div className="stat-card"><h5>UPTIME</h5><h2>99.9%</h2></div>
            <div className="stat-card"><h5>LOAD</h5><h2>14%</h2></div>
          </div>

          <div style={{ height: '300px', border: '1px solid #222', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(rgba(16, 185, 129, 0.05), transparent)' }}>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ fontSize: '4rem', margin: '0', opacity: '0.1' }}>V77</h1>
              <p style={{ letterSpacing: '5px', color: '#10b981' }}>SCANNING NETWORK...</p>
            </div>
          </div>

          <div className="terminal-box">
            <div>{'>'} INITIALIZING SALEH_CORE_SYSTEM... DONE</div>
            <div>{'>'} ESTABLISHING ENCRYPTED UPLINK... DONE</div>
            <div>{'>'} VERCEL DEPLOYMENT SYNCED... READY</div>
            <div style={{ color: '#fff' }}>{'>'} AWAITING COMMAND_</div>
          </div>
        </main>

        {/* Right Sidebar: Logs & Activity */}
        <aside className="panel">
          <h4 style={{ fontSize: '0.7rem', color: '#444', marginBottom: '20px' }}>LIVE SECURITY FEED</h4>
          <div style={{ fontSize: '0.75rem', lineHeight: '2' }}>
            <p style={{ color: '#10b981' }}>[12:44:01] Access Granted: SALEH_MASTER</p>
            <p>[12:44:05] GitHub Sync: Completed</p>
            <p>[12:44:10] SSL Certificate: Valid</p>
            <p style={{ color: '#ef4444' }}>[12:44:15] Ping Blocked: Unknown Origin</p>
            <p>[12:44:20] Nodes Balanced: Global</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default App;