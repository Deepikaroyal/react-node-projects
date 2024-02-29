import React from "react";
import Logo from "../../assets/SvgIcons/invoicemart.svg";
import CustomButton from "../../components/Common/CustomButton";
import { useNavigate } from "react-router-dom";

const PageError = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center" }}>
      <img src={Logo} width="200" alt="menu" />
      <h2>Out of Bounds!</h2>
      <p>
        The page you were looking doesn't seem to exist or may have been removed
      </p>
      <CustomButton text={"BACK TO HOME"} onClick={() => navigate("/")} />
    </div>
  );
};

export default PageError;
