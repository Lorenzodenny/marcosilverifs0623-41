import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchCity = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    setError(null); // Azzerare lo stato dell'errore prima di eseguire una nuova ricerca

    try {
      const response = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery}&count=3&language=it&format=json`
      );

      const resultsList = response.data.results;

      if (resultsList.length > 0) {
        navigate("/DettaglioMeteo/" + searchQuery);
      } else {
        setError("Città non trovata");
      }
    } catch (error) {
      setError("Si è verificato un errore nella ricerca");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <Row className="mb-3 mx-5">
        <Col>
          <Form.Group>
            <Form.Control
              className='barra-ricerca'
              type="text"
              placeholder="Ricerca località"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </Form.Group>
        </Col>
      </Row>
      {error && (
        <Row>
          <Col>
            <div className="text-danger">
              <p className='errore'>{error}</p>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};

export default SearchCity;
