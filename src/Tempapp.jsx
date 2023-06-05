import React, { useState, useEffect } from "react";
import "./index.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Haridwar");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8bf08a5366567a3aec99d2f67e49a96b`;

      const response = await fetch(url);

      const resJson = await response.json();

      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputdata">
          <input
            type="search"
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errorMsg">No data Found</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp} °C</h1>
              <h3 className="tempin_max">
                Min : {city.temp_min} °C | Max : {city.temp_max} °C
              </h3>
            </div>
            <div className="wave -one"> </div>
            <div className="wave -two"> </div>
            <div className="wave -three"> </div>
          </>
        )}
      </div>
    </>
  );
};

export default Tempapp;
