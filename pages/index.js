import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Connect to your existing free Supabase database dynamically via environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Dashboard() {
  const [currentView, setCurrentView] = useState('command_center');
  
  // Position Sizing Calculator States
  const [balance, setBalance] = useState(10000);
  const [risk, setRisk] = useState(1);
  const [stopLoss, setStopLoss] = useState(20);
  const [strategy, setStrategy] = useState('Trend Following');

  // Checklist States
  const [rule1, setRule1] = useState(false);
  const [rule2, setRule2] = useState(false);
  const [rule3, setRule3] = useState(false);

  // Live Math Operations (Zero server cost frontend processing)
  const riskAmount = balance * (risk / 100);
  const lotSize = stopLoss > 0 ? (riskAmount / stopLoss) : 0;
  const allRulesMet = rule1 && rule2 && rule3;

  // Save Trade Function
  async function logTrade() {
    const { data, error } = await supabase.from('trade_log').insert([
      {
        user_email: 'nextjs_trader@ecosystem.com',
        strategy_name: strategy,
        account_balance: balance,
        risk_percent: risk,
        stop_loss_pips: stop_loss,
        lot_size: lotSize
      }
    ]);
    if (error) alert('Error logging trade: ' + error.message);
    else alert('🚀 Trade successfully logged to Supabase!');
  }

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#111827', color: '#F3F4F6', fontFamily: 'sans-serif' }}>
      
      {/* 1. SIDEBAR NAVIGATION */}
      <div style={{ width: '240px', backgroundColor: '#1F2937', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#10B981', marginBottom: '20px' }}>TRADING ECOSYSTEM</h2>
        <button onClick={() => setCurrentView('command_center')} style={{ padding: '10px', textAlign: 'left', backgroundColor: currentView === 'command_center' ? '#374151' : 'transparent', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>🏠 Command Center</button>
        <button onClick={() => setCurrentView('riskgate')} style={{ padding: '10px', textAlign: 'left', backgroundColor: currentView === 'riskgate' ? '#374151' : 'transparent', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>📈 Risk Gate</button>
      </div>

      {/* 2. MAIN DISPLAY CONTENT AREA */}
      <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        
        {/* VIEW: COMMAND CENTER */}
        {currentView === 'command_center' && (
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>🎯 Trader Command Center</h1>
            <p style={{ color: '#9CA3AF' }}>Welcome back. This premium interface never goes to sleep and responds instantly.</p>
          </div>
        )}

        {/* VIEW: RISK GATE (THE GATEKEEPER CALCULATOR) */}
        {currentView === 'riskgate' && (
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>📈 Risk Gate & System Gatekeeper</h1>
            
            <div style={{ display: 'flex', gap: '40px' }}>
              {/* Left Column: Calculator Inputs */}
              <div style={{ flex: 1, backgroundColor: '#1F2937', padding: '20px', borderRadius: '8px' }}>
                <h3 style={{ marginBottom: '15px' }}>1. Position Math</h3>
                <label style={{ display: 'block', marginBottom: '10px' }}>Account Balance ($)<br/>
                  <input type="number" value={balance} onChange={(e) => setBalance(Number(e.target.value))} style={{ width: '100%', padding: '8px', marginTop: '5px', backgroundColor: '#374151', border: 'none', borderRadius: '4px', color: 'white' }} />
                </label>
                <label style={{ display: 'block', marginBottom: '10px' }}>Risk Percentage (%)<br/>
                  <input type="number" value={risk} onChange={(e) => setRisk(Number(e.target.value))} style={{ width: '100%', padding: '8px', marginTop: '5px', backgroundColor: '#374151', border: 'none', borderRadius: '4px', color: 'white' }} />
                </label>
                <label style={{ display: 'block', marginBottom: '10px' }}>Stop Loss (Pips/Points)<br/>
                  <input type="number" value={stopLoss} onChange={(e) => setStopLoss(Number(e.target.value))} style={{ width: '100%', padding: '8px', marginTop: '5px', backgroundColor: '#374151', border: 'none', borderRadius: '4px', color: 'white' }} />
                </label>
              </div>

              {/* Right Column: Pre-Trade Checklist Gating */}
              <div style={{ flex: 1, backgroundColor: '#1F2937', padding: '20px', borderRadius: '8px' }}>
                <h3 style={{ marginBottom: '15px' }}>2. Pre-Trade Checklist</h3>
                <label style={{ display: 'flex', gap: '10px', marginBottom: '10px', cursor: 'pointer' }}><input type="checkbox" checked={rule1} onChange={(e) => setRule1(e.target.checked)} /> Has higher timeframe trend direction aligned?</label>
                <label style={{ display: 'flex', gap: '10px', marginBottom: '10px', cursor: 'pointer' }}><input type="checkbox" checked={rule2} onChange={(e) => setRule2(e.target.checked)} /> Is price sitting at a key structural level?</label>
                <label style={{ display: 'flex', gap: '10px', marginBottom: '20px', cursor: 'pointer' }}><input type="checkbox" checked={rule3} onChange={(e) => setRule3(e.target.checked)} /> Are you emotionally detached from the risk outcome?</label>
                
                <hr style={{ borderColor: '#374151', marginBottom: '20px' }} />
                <p style={{ margin: '5px 0' }}>💵 Cash Amount At Risk: <strong>${riskAmount.toFixed(2)}</strong></p>
                <p style={{ margin: '5px 0', fontSize: '1.2rem', color: '#10B981' }}>📊 Calculated Lot Size: <strong>{lotSize.toFixed(2)} lots</strong></p>
                
                {allRulesMet ? (
                  <button onClick={logTrade} style={{ width: '100%', padding: '12px', marginTop: '15px', backgroundColor: '#10B981', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>🚀 Log & Save Position</button>
                ) : (
                  <div style={{ width: '100%', padding: '12px', marginTop: '15px', backgroundColor: '#EF4444', color: 'white', borderRadius: '5px', textAlign: 'center', fontSize: '0.9rem' }}>🔒 Locked: Check all pre-trade rules to enable logging</div>
                )}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
