import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Dashboard.css";
import Footer from "../Footer/Footer";
import axios from "axios"
import Details from "../subcomponents/Details";


// import data from '../../public/data.json'

function Dashboard() {
  const [isFilterTrue, setFilterTrue] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValues, setFilterValues] = useState({
    referBy: "",
    hospitalID: "",
    patientName: "",
    billNo: "",
    status: "",
  });
  const [filteredData, setFilteredData] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  const [error, setError] = useState(null);

  const handleClickClear = () => {
    setFilterValues({
      referBy: "",
      hospitalID: "",
      patientName: "",
      billNo: "",
      status: "",
    });
    setFilterTrue(false);
    
    // Reset filteredData to the original data array
    setFilteredData(orderDetails);
  };
  
  
  // setOrderDetails(data)
  // useEffect(() => {
  //   Tabledata();
  // }, []);

  // async function Tabledata() {
  //   const token = "6q0LLX5wJthexuxQl9IAV1cuTLsSnS";
  //   const params = {
  //     user_id: 288,
  //     page_number: 1,
  //   };

  //   try {
  //     const response = await axios.post(
  //       "https://accesslabbeta.stagingserverhub.com/api/b2b/order/details",
  //       params,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     console.log(response.data);
  //     setOrderDetails(response.data.data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setError(error);
  //   }
  // }
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('data.json');
        setOrderDetails(response.data[0].data);
        // console.log(response.data[0].data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(orderDetails);

  const handleApplyFilter = () => {
    setFilterTrue(!isFilterTrue);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterValues({
      ...filterValues,
      [name]: value,
    });
  };

  const handleSearchClick = () => {
    const filtered = orderDetails.filter(
      (item) =>
        (filterValues.referBy === "" ||
          item.doctor.toLowerCase().includes(filterValues.referBy.toLowerCase())) &&
        (filterValues.hospitalID === "" ||
          item.hospital_id.toLowerCase().includes(filterValues.hospitalID.toLowerCase())) &&
        (filterValues.patientName === "" ||
          item.patient_name.toLowerCase().includes(filterValues.patientName.toLowerCase())) &&
        (filterValues.billNo === "" ||
          item.bill_no.toLowerCase().includes(filterValues.billNo.toLowerCase())) &&
        (filterValues.status === "" ||
          item.status.toLowerCase() === filterValues.status.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDatas = orderDetails.filter(
    (item) =>
      item.patient_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.test_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.doctor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayData =filteredData.length > 0 ? filteredData : searchQuery ? filteredDatas : orderDetails;

  return (
<> 
<div className="dash-header">
          <Header />
  </div>
      <div className="dash-main">
       
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
        {isFilterTrue ? (
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
                    <option value="">Doctor Name</option>
                    <option value="AJITH">AJITH</option>
                    <option value="ArunKThambi">Dr. Arun K Thambi</option>
                    <option value="JOHN">JOHN</option>
                    <option value="AbdulSiddique">Dr. Abdul Siddique</option>
                  </select>
                </div>
              </div>
              <div className="form-raw">
                <div className="form-firstdate">
                  <label htmlFor="">Patient Name</label>
                  <input
                    id="PatientName"
                    name="patientName"
                    onChange={handleFilterChange}
                    type="text"
                    placeholder="Sankaranarayanan"
                  />
                </div>
                <div className="form-todate">
                  <label htmlFor="">Hospital ID</label>
                  <input
                    id="HospitalID"
                    name="hospitalID"
                    onChange={handleFilterChange}
                    type="text"
                    placeholder="DH2223/000324"
                  />
                </div>
                <div className="form-referby">
                  <label htmlFor="">Status</label>
                  <select name="status" onChange={handleFilterChange}>
                  
                    <option value="Status">Status</option>
                    <option value="Ready">Ready</option>
                    <option value="Partial Report">Partial Report</option>
                    <option value="Lab dropped">Lab dropped</option>
                  </select>
                </div>
              </div>
              <div className="form-raw">
                <div className="form-firstdate">
                  <label htmlFor="">Bill No</label>
                  <input
                    id="BillNo"
                    name="billNo"
                    onChange={handleFilterChange}
                    type="text"
                    placeholder="DH2223/000123456"
                  />
                </div>
              </div>
            </div>
            <div className="filter-footer">
              <div className="filter-footer-container">
                <div className="filter-footer-firstpart">
                  Please provide search criteria and hit search button
                </div>
                <div className="filter-footer-secondpart">
                  <button className="filter-search" onClick={handleSearchClick}>
                    <i className="fa-solid fa-magnifying-glass"></i> Search
                  </button>
                  <button className="filter-cancel" onClick={handleClickClear}>
                    <i className="fa-solid fa-x"></i> Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      
  
  <div  className="dash-table-main">  <Details Data={displayData}></Details></div>
  
        <div>
          {" "}
          <Footer />
        </div>
      </div>
  
</>  );
}

export default Dashboard;

