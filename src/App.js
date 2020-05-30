import React from "react";
import axios from "axios";

function App() {
  const requestAPI = ({ url, ...params }) => {
    return axios
      .request({
        url: `${url}`,
        ...params,
      })
      .then((response) => {
        if (response.status !== 200) console.log("Request Failed", response);
        return response;
      })
      .then((response) => response.data)
      .catch((e) => console.log(e));
  };

  const fetchAPI = async () => {
    const response = requestAPI({
      method: "get",
      url: "http://localhost:3001",
    });

    console.log(response);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        <button onClick={fetchAPI}>FetchAPI</button>
      </header>
    </div>
  );
}

export default App;
