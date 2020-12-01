import React, { useState } from 'react';

const Form = () => {
  const initialState = {
    name: '',
    email: '',
    message: '',
  };
  const [data, setData] = useState(initialState);
  const { name, email, message } = data;

  const handleChange = e => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = () => {

  };

  return (
    <form className="form-container" onSubmint={handleSubmit}>
      <label htmlFor="name" className="width-100">
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className="width-100"
          placeholder="Name"
        />
      </label>
      <label htmlFor="email" className="width-100">
        <input
          className="width-100"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </label>
      <textarea
        className="width-100"
        name="message"
        rows="4"
        cols="30"
        value={message}
        placeholder="Enter your message here..."
        onChange={handleChange}
        required
      >
        {message}
      </textarea>
      <button type="submit" className="btn btn-danger pb-2 mt-3">Start Collaboration</button>
    </form>
  );
};

export default Form;
