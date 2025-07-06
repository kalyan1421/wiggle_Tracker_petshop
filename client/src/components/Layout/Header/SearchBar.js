import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    // Implement search functionality here
  };

  return (
    <div className="d-none d-lg-flex me-4">
      <Form onSubmit={handleSearch} className="search-wrapper">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Search for products, brands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <Button type="submit" className="search-btn">
            <FaSearch size={16} />
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default SearchBar; 