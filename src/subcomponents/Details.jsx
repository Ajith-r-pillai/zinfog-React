import React, { useState } from "react";
import "../components/Dashboard.css";
import "./Detail.css"
 
function Details({ Data }) {
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(event) {
    const id = parseInt(event.target.textContent, 10);
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div>
      <div >
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
            {records.map((item) => (
              <tr key={item.order_id}>
                <td>{item.order_id}</td>
                <td>{item.patient_name}</td>
                <td>{item.bill_no}</td>
                <td>{item.hospital_id}</td>
                <td>{item.test_name}</td>
                <td>{item.doctor}</td>
                <td>{item.eta}</td>
                <td>
                  <div
                    className={
                      item.status === "Ready"
                        ? "status-ready"
                        : item.status === "Partial Report"
                        ? "status-partial"
                        : "status-lab-dropped"
                    }
                  >
                    {item.status}
                  </div>
                </td>
                <td>
                  {item.status !== "Lab Dropped" ? (
                    <>
                      <i className="fa-solid fa-download"></i>{" "}
                      <i className="fa-solid fa-message"></i>
                    </>
                  ) : (
                    <>
                      <i
                        className="fa-solid fa-download"
                        style={{ visibility: "hidden" }}
                      ></i>{" "}
                      <i className="fa-solid fa-message"></i>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
<div className="pagination-list-main" >
    
          <nav >
            <ul className="pagination">
              <li className="page-item">
                <a href="#" className="page-link" onClick={prePage}>
                  Prev
                </a>
              </li>
    
              {numbers.map((n, i) => (
                <li
                  className={`page-item ${currentPage === n ? "active" : ""}`}
                  key={i}
                >
                  <a href="#" className="page-link" onClick={changeCPage}>
                    {n}
                  </a>
                </li>
              ))}
    
              <li className="page-item">
                <a href="#" className="page-link" onClick={nextPage}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
</div>
    </div>
  );
}

export default Details;

