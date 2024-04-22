import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Contacts() {
  const [data, setData] = useState([]);
  const { userId } = useParams();

  const fetchData = async () => {
    try {
      // If userId exists, fetch data for that specific user
      if (userId) {
        const result = await axios.get(`http://localhost:8000/rtc/register/${userId}`);
        setData([result.data]);
        console.log(result.data);
      } else {
        // Fetch all data if userId is not specified
        const result = await axios.get(`http://localhost:8000/rtc/register/get`);
        setData(result.data);
        console.log(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]); // Fetch data whenever userId changes

  return (
    <>
      {data.map((dataObj, index) => (
        <div key={index}>
          <p>{dataObj.name}</p>
          <p>{dataObj.phone_number}</p>
        </div>
      ))}
    </>
  );
}

export default Contacts;
