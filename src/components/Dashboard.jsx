import React from "react";
import Header from "../Header/Header";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dash-main">
      <div className="dash-header">
        <Header />
      </div>
      <div className="nav-main">
        <div className="nav-container">
          <div className="nav-firstpart">
            <p>Patient Reports</p>
          </div>
          <div className="nav-secondpart">
            <button>
              Apply Filter <i class="fa-solid fa-filter"></i>
            </button>
            <input
              type="text"
              placeholder="Search by Doctor Name/ Patient Name/ Test Name..."
            />
            <i id="search-iocn" class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <div className="dash-filter-main">
        <div className="dash-filter-container">
          <div className="form-raw">
            <div className="form-firstdate">
              <label htmlFor="">First Date</label>
              <input type="date" placeholder="01/05/2023" />
            </div>
            <div className="form-todate">
              <label htmlFor="">To Date</label>
              <input type="date" />
            </div>
            <div className="form-referby">
              <label htmlFor="">Refer by</label>

              <select name="cars" id="cars">
                <option value="volvo">Doctor Name</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className="form-raw"> 
           <div className="form-firstdate">
              <label htmlFor="">Patient Name</label>
              <input id="PatientName" type="text" placeholder="01/Sankaranarayanan/2023" />
            </div>
            <div className="form-todate">
              <label htmlFor="">Hospital ID</label>
              <input id="HospitalID" type="text"  placeholder="DH2223/000324"/>
            </div>
            <div className="form-referby">
              <label htmlFor="">Status</label>

              <select name="status" id="status">
                <option value="Ready">Ready</option>
                <option value="Partial Report">Partial Report</option>
                <option value="Lab dropped">Lab dropped</option>
           
              </select>
            </div></div>

          <div className="form-raw"> <div className="form-firstdate">
              <label htmlFor="">Bill No</label>
              <input id="BillNo" type="text" placeholder="DH2223/000123456" />
            </div>
           
             </div>
           
        </div>
        <div className="filter-footer">
                <div className="filter-footer-container">
<div className="filter-footer-firstpart">Please provide search criteria and hit search button</div>
<div className="filter-footer-secondpart">
    <button className="filter-search"> <i class="fa-solid fa-magnifying-glass"></i> Search</button>
    <button className="filter-cancel"><i class="fa-solid fa-x"></i>Clear</button>
</div>
                </div>
                </div>
       
      </div>
    </div>
  );
}

export default Dashboard;
