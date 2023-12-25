/* eslint-disable no-unreachable */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./movieDashboard.css";
import useFetch from "../../hooks/useFetch";


const MovieDashboard = () => {

  let url = "https://jsonplaceholder.typicode.com/albums";
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [result, loading] = useFetch(url);
  console.log(result);

  useEffect(() => {
    // let debounceSearch = debounce(handleSearch, 800);
    let debounceSearch = debounce(handleSearch, 800);
    debounceSearch(text);
  }, [text, result]);

  const handleSearch = (query) => {
      let searchedData = result?.filter((ele) =>
          ele.title.toLowerCase().includes(query.toLowerCase())
      );
      setData(searchedData);
  };



  const debounce = (func, delay) => {
    let timeOutId;
    return function (query) {
      if (timeOutId) {
        clearTimeout(timeOutId);
      }

      timeOutId = setTimeout(() => {
        func(query);
      }, delay);
    };
  };

  return (
    <div className="movie_dashboard_container">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search movie..."
      />

      {data.map((ele) => {
        return (
          <li className="list_item" key={ele.id}>
            {ele.title}
          </li>
        );
      })}
    </div>
  );
};

export default MovieDashboard;
