import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";


const ClientProfile = () => {

  const [clientData, setClientData] = useState('')
  const navigate = useNavigate()
  const { clientId } = useParams()
  const token = localStorage.getItem('token')
  console.log("token",token);
  console.log("clientid",clientId);
  useEffect(() => {
      
    if (!token) {
        navigate('loginForm')
    }

    const fetchClient = async () => {
      try {
          let response = await axios.get(`http://localhost:8000/rtc/login/get/user/${clientId}`, {
              headers: {
                  Authorization: token
              }
          })
          if (response.data.success) {
              console.log('client data res: ',response);
              setClientData(response.data.user)
          }
      } catch (err) {
          console.log(err);
          
      }
  }
    fetchClient()

}, [clientId, navigate, token]);
return (
  <Container>
    <div className="profile-info bg-blue-400 h-20 w-[90%] m-auto flex mt-5 rounded-lg">
      <div className="profile-image h-20 w-20 bg-gray-50 flex items-center justify-center rounded-full overflow-hidden">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" />
      </div>
      <div className="profile-details flex items-center ml-3">
        <h2>{clientData.name}</h2>
      </div>
    </div>
    <div className="action-container flex w-[90%] m-auto mt-4">
      <div className="action-menu  bg-gray-200 rounded-lg p-4">
      <h2>{clientData.name}</h2>
      </div>
      <div className="chat-menu w-1/4 bg-gray-200 rounded-lg p-4">
      <div className="message-box flex-1 bg-blue-700 mx-2 my-2 border-2 rounded-lg">
        <form className="flex items-center">
          <input className="w-full py-2 px-3 h-12 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800" type="text" />
          <button type="button" className="ml-6 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 focus:outline-none">Send</button>
        </form>
      </div>
      </div>
      
    </div>
  </Container>
);
};

const Container = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;
background-color: #131324;
.action-container {
  width: 90%;
  max-width: 1200px;
}
.profile-info, .message-box {
  border-radius: 10px;
}
.profile-image img {
  width: 100%;
  height: auto;
}
.action-menu{
  width:50%;
  gap: 1rem;
  height:420px;
  background-color: #708090;
  margin-right:20px;
}
.chat-menu{
  width:50%;
  height:420px;
  background-color: #708090;
}
`;

export default ClientProfile;