import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from '../../services/ApiService';
import SearchComponent from '../Common/SearchComponent';
import ListCard from '../Common/ListCard';

const CandidateHome = () => {
  const navigate = useNavigate();
  const [referrals, setReferrals] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch referrals and services
    const fetchData = async () => {
      try {
        const referralsData = await getData('referrals');
        const servicesData = await getData('services');
        setReferrals(referralsData);
        setServices(servicesData);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (term) => {
    // Implement search logic here
    console.log(`Searching for ${term}`);
  };

  const handleLogout = () => {
    // Implement logout logic here
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="candidate-home">
      <SearchComponent onSearch={handleSearch} />
      <ListCard items={referrals} title="Referrals" />
      <ListCard items={services} title="Services" />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default CandidateHome;
