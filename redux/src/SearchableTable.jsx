import React, { useState } from 'react'
import Table from './Table'
const SearchableTable = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data);
  
    const handleSearch = (e) => {
      const term = e.target.value;
      setSearchTerm(term);
      const filtered = data.filter((row) =>
        Object.values(row).some(
          (value) => typeof value === 'string' && value.toLowerCase().includes(term.toLowerCase())
        )
      );
      setFilteredData(filtered);
    };
  
    return (
      <div>
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
        <Table data={filteredData} />
      </div>
    );
  };
  export default SearchableTable;