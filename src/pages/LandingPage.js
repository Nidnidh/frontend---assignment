import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchComponent from '../components/Common/SearchComponent';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSearch = (term) => {
    // Implement search logic here
    console.log(`Searching for ${term}`);
  };

  return (
    <div className="landing-page">
      <SearchComponent onSearch={handleSearch} />
      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  );
};

export default LandingPage;
