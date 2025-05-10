import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Components/Input";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Role, setRole] = useState("");
  const navigate = useNavigate();
  function onFOrmSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      email.length > 0 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      password.length > 0 &&
      confirmPassword === password &&
      Role != null &&
      name != null
    ) {
      navigate("/verify");
    } else {
      console.log("Some thing is missing or email is in incorrect format");
      console.log(email);
      console.log(password);
      console.log(Role);
      console.log(name);
      console.log(confirmPassword);
    }
  }

  return (
    <div>
      <div>
        <form onSubmit={onFOrmSubmit}>
          <Input
            placeHolder="Name"
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
