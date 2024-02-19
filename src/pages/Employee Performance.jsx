import React from 'react';
import { useState } from 'react';
import {Box, Button} from '@mui/material';
import './Employee Performance.scss';
import SearchIcon from '@mui/icons-material/Search';

const EmployeePerformance = ({ employee }) => {
  
  const [setSearchTerms, searchTerms] = useState({
    term1: '',
    term2: '',
    term3: '',
  });
    
  const handleSearch = (inputName, value) => {
    setSearchTerms((prevSearchTerms) => ({
      ...prevSearchTerms,
      [inputName]: value,
    }));
  };
  return (

    <div>
    <nav>
        <span > Employee Performance </span>
        <hr/>
    </nav>
    <div style={{ display: 'flex'}}>
      <input className="search-bar"
        type="text"
        placeholder="Select Project"
        value={searchTerms.term1}
        onChange={(e) => handleSearch('term1', e.target.value)}
        style={{ marginRight: '15px' }}
      />
      <input className="search-bar"
        type="text"
        placeholder="Select Employee"
        value={searchTerms.term2}
        onChange={(e) => handleSearch('term2', e.target.value)}
        style={{ marginRight: '15px'}}
      />
      <input className="search-bar"
        type="text"
        placeholder="Last 3 Months"
        value={searchTerms.term3}
        onChange={(e) => handleSearch('term3', e.target.value)}
        style={{ marginRight: '270px'}}
        /> 
        <Button variant='contained' onClick={handleSearch}> <SearchIcon/> Search </Button>
        </div>

      <div style={{ textAlign: 'right' }}>
      <Box>
        <Button style={{ marginRight: '20px' }} type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Excel</Button>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>CSV</Button>
      </Box>
      </div>
      <hr />
      <table className="customer-table">
        <tr id="header 1">
          <th>Customer Name</th>
          <th>Customer Address</th>
          <th>Customer Email</th>
          <th>Customer Phone</th>
        </tr>
        <tr>
          <td>abc</td>
          <td>abc</td>
          <td>abc</td>
          <td>abc</td>
        </tr>
        <tr>
          <td>abc22</td>
          <td>abc22</td>
          <td>abc22</td>
          <td>abc22</td>
        </tr>
        <tr>
          <td>abc33</td>
          <td>abc33</td>
          <td>abc33</td>
          <td>abc33</td>
        </tr>
        <tr>
          <td>abc44</td>
          <td>abc44</td>
          <td>abc44</td>
          <td>abc44</td>
        </tr>
      </table>
      </div> 
      
  );
};
  
export default EmployeePerformance;