import React, { useState } from "react";
import { TextField, Typography, Button } from "@mui/material";

function FormComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Email is not valid.";
    if (!age) newErrors.age = "Age is required.";
    else if (isNaN(age)) newErrors.age = "Age must be a number.";

    if (Object.keys(newErrors).length === 0) {
  
      console.log(
        "Form submitted successfully! Name:",
        name,
        ", Email:",
        email,
        ", Age:",
        age
      );
      setName("");
      setEmail("");
      setAge("");
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography className="mt-3" variant="h4" gutterBottom>
        Form
      </Typography>

      <TextField
        className="mt-3"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={!!errors.name}
        helperText={errors.name}
      />
      <br />

      <TextField
        className="mt-3"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
      />
      <br />

      <TextField
        className="mt-3"
        label="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        error={!!errors.age}
        helperText={errors.age}
      />
      <br />

      <Button
        className="mt-3"
        type="submit"
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </form>
  );
}

export default FormComponent;
