import React from "react";
import { useParams } from "react-router-dom";

const RegisterPage = () => {
  let { registerId } = useParams();
  return <div>{registerId}</div>;
};

export default RegisterPage;
