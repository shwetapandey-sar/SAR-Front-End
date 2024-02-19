import React from "react";

const Customer = () => {
  return (
    <div className="customer">
      <h2>Customer Data</h2>
      <hr />
      <table className="customer-table">
        <tr id="header">
          <th>Customer Name</th>
          <th>Customer Address</th>
          <th>Customer Email</th>
          <th>Customer Phone</th>
        </tr>
        <tr>
          <td>abc</td>
          <td>abc</td>
          <td>abc</td>
          <td>abc</td>
        </tr>
        <tr>
          <td>abc22</td>
          <td>abc22</td>
          <td>abc22</td>
          <td>abc22</td>
        </tr>
        <tr>
          <td>abc33</td>
          <td>abc33</td>
          <td>abc33</td>
          <td>abc33</td>
        </tr>
        <tr>
          <td>abc44</td>
          <td>abc44</td>
          <td>abc44</td>
          <td>abc44</td>
        </tr>
      </table>
    </div>
  );
};

export default Customer;
