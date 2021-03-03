import React, { useEffect } from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { useHistory, useLocation } from "react-router-dom";
import { Business, YelpSearchResponse } from '../jays-types';
import SubmitButton from './input-button';
import Navbar from './navbar';
import TextField from './text-field';
import YelpItem from './yelp-item';



const YelpItems = styled.ul`
  width: 100%;
  max-width: 50%; 
  padding: 0;
  list-style: none;

  li {
    margin-bottom: 2rem;
  }

  @media (max-width: 450px) {
        max-width: 80%; 
    }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const LoaderStyles = styled.div`
    margin-top: 6rem;
`;

const MainPage = () => {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const history = useHistory();
  const locationUrl = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(locationUrl.search);
    setLocation(params.get('location') || "");
    setType(params.get('foodType') || "");
  }, [locationUrl]);

  const saveQuery = () => {
      const params = new URLSearchParams();
    if (location) {
      params.append("location", location);
    }
    else {
      params.delete("location");
    }
    if (type) {
      params.append("foodType", type);
    }
    else {
      params.delete("foodType")
    }
    history.push({search: params.toString()})
  }
  
   
  const locationInfo = async () => {
    const url = `https://jays-backend.herokuapp.com/restaurants?location=${location}&type=${type && type.trim() !== '' ? type : 'food'}`;
    const response = await axios.get<YelpSearchResponse>(url);

    return (response.data.businesses);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log("Submitting");
    saveQuery();
    setIsLoading(true);
    event.preventDefault();
    const results: Business[] = await locationInfo();
    setBusinesses(results ? results : []);
    setIsLoading(false);
  }

  const renderBusinesses = () => {
    return businesses.map((business: Business) => {
      return ( 
        <li key={business.id}>
          <YelpItem business={business}/>
        </li>
      );
    });
  }

  
  return (
      <>
       <Navbar />
       <MainContent>
        <form id="InputForm" onSubmit={handleSubmit}>
          
          <TextField 
              type="text"
              value={location}
              onChange={event => setLocation(event.target.value)}
              placeholder="City"
            />
          <TextField 
              type="text"
              value={type}
              onChange={event => setType(event.target.value)}
              placeholder="Type of Food"
            />
          <SubmitButton disabled={isLoading || location.trim() === ""}/>
        </form>
        {isLoading ? 
        <LoaderStyles>
          <Loader
              type="TailSpin"
              color="#ffffff"
              height={100}
              width={100}
              
          />
          </LoaderStyles>
          :
          <YelpItems>
            {renderBusinesses()}
          </YelpItems>
        }
        </MainContent>
    </>
  )
}

export default MainPage;


