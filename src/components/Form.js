import React, { useState } from 'react';

const Form = () => {
  const initialState = {
    name: 'Name',
    email: 'email',
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
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className="form-group"
        />
      </label>
      <label htmlFor="email">
        <input
          className="form-group"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </label>
      <textarea
        className="form-group"
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
      <button type="submit" className="btn btn-danger">Start Collaboration</button>
    </form>
  );
};

export default Form;
