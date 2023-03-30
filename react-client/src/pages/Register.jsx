import React from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../authcomponents/RegistrationForm";

const Register = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div className="content text-center px-4">
            <h2 className="text-primary">Welcome to The Bubble !</h2>
            <p className="content">
              This is a new social media site that will allow you to share your
              thoughts and experiences with your friends. Register now and start
              enjoying! <br />
              Or if you already have an account, please{" "}
              <Link to="/login/">login</Link>.
            </p>
          </div>
        </div>
        <div className="col-md-5 p-5">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
