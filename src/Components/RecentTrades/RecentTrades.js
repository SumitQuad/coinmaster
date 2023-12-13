import React from 'react'
import "./RecentTrades.css";

function RecentTrades() {
    return (
        <div className='recent-container'>
              <div className='recent-trades'>
        <h3>Recent Trades</h3>
        <table className="order-table">
          <thead>
            <tr>
              <th>Price</th>
              <th>Amount</th>
              <th>Total(BTC)</th>
            </tr>
          </thead>
          <tbody>
            {/* Add your order book data here */}
            <tr>
              <td>10000</td>
              <td>0.5</td>
              <td>5000</td>
            </tr>
            <tr>
              <td>9900</td>
              <td>0.7</td>
              <td>6930</td>
            </tr>
            {/* Add more rows as needed */}
            <tr>
              <td>9900</td>
              <td>0.7</td>
              <td>6930</td>
            </tr>
            <tr>
              <td>9900</td>
              <td>0.7</td>
              <td>6930</td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>
    )
}

export default RecentTrades
