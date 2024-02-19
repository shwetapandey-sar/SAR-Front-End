import React from "react";

const Profile = () => {
  return (
    <div className="profile">
      <div className="info">
        <h1>Basic Information</h1>
      </div>
      <form>
        <div className="fields">
          <div className="input-field">
            <label>Name</label>
            <input type="text" placeholder="Name" required />
          </div>
          <div className="input-field">
            <label>Email</label>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-field">
            <label>Phone No.</label>
            <input type="number" placeholder="Phone No." />
          </div>
          <div className="input-field">
            <label>Aadhaar Card No.</label>
            <input type="text" placeholder="Aadhaar Card No." />
          </div>
          <div className="input-field">
            <label>PAN No.</label>
            <input type="text" placeholder="PAN No." />
          </div>
          <div className="input-field">
            <label>Passport No.</label>
            <input type="text" placeholder="Passport No." />
          </div>
          <div className="input-field">
            <label>Permanent Address</label>
            <input type="text" placeholder="Permanent Address" />
          </div>
          <div className="input-field">
            <label>Current Address</label>
            <input type="text" placeholder="Current Address" />
          </div>
          <div className="input-field">
            <label>Date Of Birth</label>
            <input type="date" placeholder="Date Of Birth" />
          </div>
          <div className="input-field">
            <label>Gender</label>
            <input type="text" placeholder="Gender" />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input type="text" placeholder="Password" required />
          </div>
        </div>
        <div className="but">
          <button>SAVE</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
