import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Dashboard.css";
import Footer from "../Footer/Footer";
import axios from "axios";

function Dashboard() {
  const [isFilterTrue, setFilterTrue] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValues, setFilterValues] = useState({
    referBy: "",
    hospitalID: "",
    patientName: "",
    billNo: "",
    status: ""
  });
  const [filteredData, setFilteredData] = useState([]);

  async function Tabledata() {
  const token="6q0LLX5wJthexuxQl9IAV1cuTLsSnS"
    const data = new URLSearchParams();
    data.append('user_id', 288);
    data.append('page_number', 1);
  
    try {
      const response = await axios.post('https://accesslabbeta.stagingserverhub.com/api/b2b/order/details', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
           'Authorization': `Bearer ${token}`
        }
      });
  
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error; 
    }
  }
  useEffect(()=>{
    Tabledata()
  },[])

  const handleApplyFilter = () => {
    setFilterTrue(!isFilterTrue);
  };

  const data = [
    { orderid: 1, date: '2023-05-01', patientName: 'Sankaranarayanan', doctorName: 'Larry', hospitalId: 'DH2223/000324', status: 'Ready', billNo: 'DH2223/000123456', ETA: '05/05/2023', TestName: 'Anti Leukemia 1 Serum' },
    { orderid: 2, date: '2023-05-02', patientName: 'Jacob', doctorName: 'Larry', hospitalId: 'DH2223/000325', status: 'Partial Report', billNo: 'DH2223/000123457', ETA: '05/05/2023', TestName: 'Anti Leukemia 1 Serum' },
    { orderid: 3, date: '2023-05-03', patientName: 'Larry', doctorName: 'Larry', hospitalId: 'DH2223/000326', status: 'Lab dropped', billNo: 'DH2223/000123458', ETA: '05/05/2023', TestName: 'Anti Leukemia 1 Serum' }
  ];



  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterValues({
      ...filterValues,
      [name]: value
    });
  };

  const handleSearchClick = () => {
    const filtered = data.filter(item =>
      (filterValues.referBy === "" || item.doctorName.toLowerCase().includes(filterValues.referBy.toLowerCase())) &&
      (filterValues.hospitalID === "" || item.hospitalId.toLowerCase().includes(filterValues.hospitalID.toLowerCase())) &&
      (filterValues.patientName === "" || item.patientName.toLowerCase().includes(filterValues.patientName.toLowerCase())) &&
      (filterValues.billNo === "" || item.billNo.toLowerCase().includes(filterValues.billNo.toLowerCase())) &&
      (filterValues.status === "" || item.status.toLowerCase() === filterValues.status.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDatas = data.filter(item =>
    item.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.TestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.doctorName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayData = filteredData.length > 0 ? filteredData : (searchQuery ? filteredDatas : data);

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
            <button onClick={handleApplyFilter}>
              Apply Filter <i className="fa-solid fa-filter"></i>
            </button>
            <input
              type="text"
              placeholder="Search by Doctor Name/ Patient Name/ Test Name..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <i id="search-iocn" className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      {isFilterTrue ?
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
                <select name="referBy" onChange={handleFilterChange}>
                  <option value="">Select</option>
                  <option value="Larry">Larry</option>
                  <option value="Saab">Saab</option>
                  <option value="Mercedes">Mercedes</option>
                  <option value="Audi">Audi</option>
                </select>
              </div>
            </div>
            <div className="form-raw">
              <div className="form-firstdate">
                <label htmlFor="">Patient Name</label>
                <input  id="PatientName" name="patientName" onChange={handleFilterChange} type="text" placeholder="Sankaranarayanan" />
              </div>
              <div className="form-todate">
                <label htmlFor="">Hospital ID</label>
                <input id="HospitalID" name="hospitalID" onChange={handleFilterChange} type="text" placeholder="DH2223/000324" />
              </div>
              <div className="form-referby">
                <label htmlFor="">Status</label>
                <select name="status" onChange={handleFilterChange}>
                  <option value="">Select</option>
                  <option value="Ready">Ready</option>
                  <option value="Partial Report">Partial Report</option>
                  <option value="Lab dropped">Lab dropped</option>
                </select>
              </div>
            </div>
            <div className="form-raw">
              <div className="form-firstdate">
                <label htmlFor="">Bill No</label>
                <input id="BillNo" name="billNo" onChange={handleFilterChange} type="text" placeholder="DH2223/000123456" />
              </div>
            </div>
          </div>
          <div className="filter-footer">
            <div className="filter-footer-container">
              <div className="filter-footer-firstpart">Please provide search criteria and hit search button</div>
              <div className="filter-footer-secondpart">
                <button className="filter-search" onClick={handleSearchClick}><i className="fa-solid fa-magnifying-glass"></i> Search</button>
                <button className="filter-cancel" onClick={() => setFilterValues({
                  referBy: "",
                  hospitalID: "",
                  patientName: "",
                  billNo: "",
                  status: ""
                })}><i className="fa-solid fa-x"></i> Clear</button>
              </div>
            </div>
          </div>
        </div>
        : ''
      }
      <div className="dash-table-main">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Order No</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Bill No</th>
              <th scope="col">Hospital ID</th>
              <th scope="col">Test Name</th>
              <th scope="col">Doctor Name</th>
              <th scope="col">ETA</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayData.map(item => (
              <tr key={item.orderid}>
                <td>{item.orderid}</td>
                <td>{item.patientName}</td>
                <td>{item.billNo}</td>
                <td>{item.hospitalId}</td>
                <td>{item.TestName}</td>
                <td>{item.doctorName}</td>
                <td>{item.ETA}</td>
                <td >
 <div className={item.status === "Ready" ? "status-ready" : item.status === "Partial Report" ? "status-partial" : "status-lab-dropped"}> {item.status}</div>
</td>

                
                <td>
  {item.status !== "Lab dropped" ? (
      <>
     <i className="fa-solid fa-download" ></i>  <i className="fa-solid fa-message"></i>
    </>
  ) : (
    <>
      <i className="fa-solid fa-download" style={{ visibility: "hidden" }}></i>  <i className="fa-solid fa-message"></i>
    </>
  )}
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    <div> <Footer/></div>
    </div>
  );
}

export default Dashboard;

