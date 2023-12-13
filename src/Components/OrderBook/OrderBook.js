import React from 'react';
import './OrderBook.css';

function OrderBook() {
  return (
    <>
      <div className='order-book'>
        <h3>Order Book</h3>

        {/* First Table */}
        <table className="order-table">
          <thead>
            <tr>
              <th>Price</th>
              <th>Quantity</th>
              <th>Accumulated Volume</th>
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
            <tr>
              <td>9900</td>
              <td>0.7</td>
              <td>6930</td>
            </tr>
          </tbody>
        </table>

        {/* Second Table */}
        <table className="order-table-two">
          <thead>
            <tr>
              <th>Price</th>
              <th>Quantity</th>
              <th>Accumulated Volume</th>
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
            <tr>
              <td>9900</td>
              <td>0.7</td>
              <td>6930</td>
            </tr>
          </tbody>
        </table>

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
    </>
  );
}

export default OrderBook;
