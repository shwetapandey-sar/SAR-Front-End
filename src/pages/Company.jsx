import React from "react";

const Company = () => {
  return (
    <div className="company">
      <div className="info">
        <h1>Company Details</h1>
      </div>
      <form>
        <div className="fields">
          <div className="input-field">
            <label>Company Name</label>
            <input
              type="text"
              placeholder="Company Name"
              required
            />
          </div>
          <div className="input-field">
            <label>Company Email</label>
            <input
              type="email"
              placeholder="Company Email"
              required
            />
          </div>
          <div className="input-field">
            <label>Company Phone No.</label>
            <input
              type="number"
              placeholder="Company Phone No."
            />
          </div>

          <div className="input-field">
            <label>Company Address</label>
            <input type="text" placeholder="Company Address" />
          </div>

          <div className="input-field">
            <label>Start Time :</label>
            <input type="text" placeholder="09:00 am" />
          </div>
          <div className="input-field">
            <label>End Time :</label>
            <input type="text" placeholder="06:00 pm" required />
          </div>
        </div>
        <div className="but">
          <button>SAVE</button>
        </div>
      </form>
    </div>
  );
};

export default Company;
