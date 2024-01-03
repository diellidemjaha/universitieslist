// UniversityStats.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UniversityStats = () => {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);

  const searchUniversities = async () => {
    try {
      const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
      setUniversities(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container mt-5">
    <h1 className="text-center mb-4">Universities by Country</h1>

    {/* Card for the search field */}
    <div className="card mb-4">
      <img src="src\assets\university.jpg" className="card-img-top" alt="Card Image" />
      <div className="card-body">
        <label htmlFor="countryInput" className="form-label">Enter Country:</label>
        <input
          type="text"
          className="form-control"
          id="countryInput"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={searchUniversities}>Search</button>
      </div>
    </div>

      <div className="p-5 mb-4 bg-light rounded-3">
        {universities.map((university, index) => (
          <div key={university.name}>
            {index === 0 ? (
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">{university.name}</h1>
                <p className="col-md-8 fs-4">
                  <strong>Country:</strong> {university.country}<br />
                  <strong>Web Pages:</strong> {university.web_pages.join(', ')}
                </p>
                <Link to={university.web_pages[0]} target="_blank" className="btn btn-primary btn-lg">Go to website</Link>
              </div>
            ) : null}
          </div>
        ))}
        <div className="row align-items-md-stretch">
          {universities.slice(1).map((university) => (
            <div key={university.name} className="col-md-6 mb-4">
              <div className="h-100 p-5 text-white bg-success rounded-3">
                <h2>{university.name}</h2>
                <p>Country: {university.country}</p>
                <p>Web Pages: {university.web_pages.join(', ')}</p>
                <Link to={university.web_pages[0]} target="_blank" className="btn btn-outline-light" type="button">Go to website</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversityStats;
