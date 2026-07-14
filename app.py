import streamlit as st
import pandas as pd
from supabase import create_client, Client

# 1. Connect to your free Supabase database
SUPABASE_URL = "https://klcxryswheaxwheacmsf.supabase.co/rest/v1/"
SUPABASE_KEY = "sb_publishable_4YlGPoC6rkOZNMLhWiBhnQ_SElW7gd5"
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# 2. Page Configuration & Layout
st.set_page_config(page_title="Trading Ecosystem", layout="wide")

# 3. Sidebar Navigation Panel
st.sidebar.title("Navigation")
current_view = st.sidebar.radio(
    "Go To:", 
    ["🏠 Command Center", "📚 Strategy Vault", "📈 Risk Gate", "📊 Analytics Lab"]
)

# 4. VIEW: COMMAND CENTER
if current_view == "🏠 Command Center":
    st.title("Welcome to the Ecosystem Dashboard")
    st.info("Your ultimate hub for disciplined execution and psychological consistency.")

# 5. VIEW: RISK GATE (The Free Position Sizing Calculator)
elif current_view == "📈 Risk Gate":
    st.title("Risk Gate & Calculator")
    
    col1, col2 = st.columns(2)
    with col1:
        balance = st.number_input("Account Balance ($)", min_value=100.0, value=10000.0)
        risk = st.number_input("Risk Percentage (%)", min_value=0.1, max_value=10.0, value=1.0)
        stop_loss = st.number_input("Stop Loss (Pips/Points)", min_value=1.0, value=20.0)
        strategy = st.selectbox("Select Strategy Used", ["Trend Following", "Mean Reversion", "Breakout"])
    
    # Live Frontend Calculation (Zero server cost)
    risk_amount = balance * (risk / 100.0)
    calculated_lot_size = risk_amount / stop_loss
    
    with col2:
        st.metric(label="Cash Amount At Risk", value=f"${risk_amount:,.2f}")
        st.metric(label="Calculated Lot Size", value=f"{calculated_lot_size:.2f} lots")
        
        # Save Trade Data Button
        if st.button("Log & Save Trade to Supabase"):
            data = {
                "user_email": "test_trader@ecosystem.com",
                "strategy_name": strategy,
                "account_balance": balance,
                "risk_percent": risk,
                "stop_loss_pips": stop_loss,
                "lot_size": calculated_lot_size
            }
            response = supabase.table("trade_log").insert(data).execute()
            st.success("Trade securely logged into your ecosystem!")

# 6. VIEW: ANALYTICS LAB (The Journal)
elif current_view == "📊 Analytics Lab":
    st.title("Analytics Lab & Journal History")
    
    # Fetch historical data from Supabase
    response = supabase.table("trade_log").select("*").execute()
    
    if response.data:
        df = pd.DataFrame(response.data)
        # Display crisp metrics
        st.metric(label="Total Trades Executed", value=len(df))
        # Display clear data table
        st.dataframe(df[["created_at", "strategy_name", "account_balance", "risk_percent", "lot_size"]])
    else:
        st.warning("No logged trades found yet. Go to the Risk Gate to log your first trade.")
