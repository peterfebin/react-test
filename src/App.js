import React, {useState} from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("something")
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
      url: "http://159.89.162.18:8000/api/v1/water_meters",
    });
    response.then((data) => {
      console.log(data);
      setMessage(data.message)
    })
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {message}</h1>
        <button onClick={fetchAPI}>FetchAPI</button>
      </header>
    </div>
  );
}

export default App;
