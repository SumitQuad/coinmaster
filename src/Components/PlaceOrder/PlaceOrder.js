import React from 'react';
import "./PlaceOrder.css";

function PlaceOrder() {
  return (
    <>
      <div className='place-order'>
        <h3>Spot</h3>
        <div className="order-buttons">
          <button className='buy'>Buy</button>
          <button>Sell</button>
        </div>
        <div className='market-limit'>
          <p>Market</p>
          <p>Limit</p>
        </div>
        <form>
          <div className="input-container">
            <input type="text" placeholder="Price" />
            <span className="currency">USDT</span>
          </div>

          <div className="input-container">
            <input type="text" placeholder="Quantity" />
            <span className="currency">BTC</span>
          </div>

          <div class="tabs-container">
            <div className="tab">25%</div>
            <div className="tab">50%</div>
            <div className="tab">75%</div>
            <div className="tab">100%</div>
          </div>

          <div className="input-container">
            <input type="text" placeholder="Total Volume" />
            <span className="currency">USDT</span>
          </div>

          <div className="sign-register">
            <button className='buy'>Sign In or Register</button>
          </div>
        </form>

        <div className='assest'>
          <h1>Asset</h1>
          <div className='assest-text'>
            <h3>BTC <span>Balance</span></h3>
            <p>---</p>
          </div>

          <div className='assest-text'>
            <h3>BTC <span>Balance</span></h3>
            <p>---</p>
          </div>
        </div>



      </div>
    </>
  )
}

export default PlaceOrder
