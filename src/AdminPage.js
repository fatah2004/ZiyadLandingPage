import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useNavigate } from "react-router-dom";
import Header from "./components/headers/lightadmin.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

const Container = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const TableContainer = tw.div`overflow-x-auto`;

const Table = styled.table`
  ${tw`min-w-full bg-white border-collapse`}
  th, td {
    ${tw`p-2 border border-gray-200 text-sm`}
  }
  th {
    ${tw`bg-gray-100 font-semibold text-left`}
  }
`;

const LogoutButton = styled.button`
  ${tw`mt-4 ml-auto px-6 py-3 text-sm font-semibold rounded-lg text-white bg-red-500
  hover:bg-red-700 transition duration-300 focus:outline-none focus:shadow-outline`}
`;

const formatTimeElapsed = (timestamp) => {
  const now = new Date();
  const addedTime = new Date(timestamp);
  const difference = Math.abs(now - addedTime);
  const seconds = Math.floor(difference / 1000);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else {
    const days = Math.floor(seconds / 86400);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  }
};

const AdminPage = () => {
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userFormData")) || [];
    setFormData(storedData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Added</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{formatTimeElapsed(data.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Container>
    </AnimationRevealPage>
  );
};

export default AdminPage;
