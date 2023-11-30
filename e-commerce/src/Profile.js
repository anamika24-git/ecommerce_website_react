import React from 'react';
import Figure from 'react-bootstrap/Figure';

function Profile() {
  return (
    <div>

      <h1 style={{ textAlign: 'center', marginTop: '90px' }}>My Account</h1>
      <div className="container" style={{ display: 'flex', gap: '70px' }}>
        <div>
          <img
            src="https://previews.123rf.com/images/pandavector/pandavector1607/pandavector160700160/60027009-girl-icon-flat-single-avatar-people-icon-from-the-big-avatar-collection-stock-vector.jpg"
            alt="anamika"
            width="400px"
            height="300px"
          />
        </div>
        <div style={{ fontSize: 'x-large', paddingTop: '50px' }}>
          <ul>
            {/* User details */}
            <li><span>Name : Anamika Mishra </span></li>
            <li><span>Gender: Female </span></li>
            <li><span>email : anamikam432@gmail.com</span></li>
            <li><span>PhoneNo. : 9085612346</span></li>
          </ul>
        </div>
      </div>
      <div style={{ marginLeft: '130px' }}>
        <h3>Recent Orders</h3>
        <div class="card" style={{ border: '1px solid black', width: '80%' }}>
          <div className="order_main" style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{flex: '2'}}>
              <img src="https://www.ulcdn.net/images/products/368384/product/Ray_Console_Table_LP.jpg?1628261696" width="200px" height="100px"></img>
            </div>
            <div style={{flex: '3'}}>
              <p><b>Kemp Metal Console Table In Black Finish</b></p>
              <p>color: Black</p>
            </div>
            <div style={{flex: '1'}}>
              <p><b>Rs.23,312</b></p>
            </div>
            <div style={{flex: '1'}}>
              <p><b>Delivered on Nov 10</b></p>
              <p>item has been delivered</p>
            </div>
          </div>
        </div>
        <div class="card" style={{ border: '1px solid black', width: '80%', marginTop: '20px' }}>
          <div class="order_main" style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{flex: '2'}}>
              <img src="https://www.ulcdn.net/images/products/338758/product/Yarine_Floor_Lamp_Walnut_LP.JPG?1621322451" width="200px" height="100px"></img>
            </div>
            <div style={{flex: '3'}}>
              <p><b>Yarine Floor Lamp</b></p>
              <p>color: Brown</p>
            </div>
            <div style={{flex: '1'}}>
              <p><b>Rs.2,307</b></p>
            </div>
            <div style={{flex: '1'}}>
              <p><b>Delivered on Nov 04</b></p>
              <p>item has been delivered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
