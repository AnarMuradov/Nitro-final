import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FetchSection = () => {
  const [api, setApi] = useState([]);
  const [search, setSearch] = useState("");
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);

  return (
    <section>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => setProperty({ choosenProperty: "title", asc: true })}
        >
          A-z
        </button>
        <button
          onClick={() => setProperty({ choosenProperty: "title", asc: false })}
        >
          z-A
        </button>
        <button onClick={() => setProperty(null)}>deffault</button>
      </div>
      {api
        .filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))
        .sort(
          (a, b) => {
            if (property && property.asc === false) {
              return a[property.choosenProperty].toLowerCase() >
                b[property.choosenProperty].toLowerCase()
                ? 1
                : b[property.choosenProperty].toLowerCase() >
                  a[property.choosenProperty].toLowerCase()
                ? -1
                : 0;
            } else if (property && property.asc === true) {
              return a[property.choosenProperty].toLowerCase() <
                b[property.choosenProperty].toLowerCase()
                ? 1
                : b[property.choosenProperty].toLowerCase() <
                  a[property.choosenProperty].toLowerCase()
                ? -1
                : 0;
            }
          }
          // property!==null ?(
          // (a[property.asc] > b[property.asc]) ? 1 : ((b[property.asc] > a[property.asc]) ? -1 : 0)):0
        )
        .map((x) => {
          return (
            <div key={x._id}>
              <i className={x.icon}></i>
              <div>{x.title}</div>
              <div>{x.text}</div>
              <Link to={`/DetailPage/${x._id}`}>
                <button>Detail</button>
              </Link>
            </div>
          );
        })}
    </section>
  );
};

export default FetchSection;
