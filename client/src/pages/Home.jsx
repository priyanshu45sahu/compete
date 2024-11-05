import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/compete");
  };
  return (
    <>
      <div>
        <button onClick={handleRedirect}>Let's Compete</button>
      </div>
    </>
  );
};

export default Home;
