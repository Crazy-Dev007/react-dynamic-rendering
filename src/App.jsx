import empdetails from "./data";
function App() {
  return (
    <div className="App">
      <div className="Container-fluid m-2">
        <div className="row">
          <h1>Employee Details</h1>
        </div>
        <hr />
        <div className="row">
          <div className="container">
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">Company</th>
                  <th scope="col">Contact</th>
                  <th scope="col">City</th>

                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {empdetails.map((items, index) => {
                  return (
                    <tr key={index}>
                      <th> {items.company.name}</th>
                      <td> {items.name} </td>
                      <td> {items.address.city}</td>

                      <td className="p-1">
                        {" "}
                        <button className="btn btn-danger">
                          View Details
                        </button>{" "}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
