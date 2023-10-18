import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP, } from '../utils/mutations';
import Auth from '../utils/auth';


function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., sending the data to an API
    try {
      const { data } = await signup({
        variables: { ...formData }
      }
      )
      Auth.login(data.signup.token)
      console.log('Form submitted:', formData);
    }
    catch (error) {
      console.log(error);
    }
  };

  const [signup, { error }] = useMutation(SIGNUP)

  return (
    <div className="SignUp">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;