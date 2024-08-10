import { useState } from 'react';

function FormComponent() {
  const [nameValue, setNameValue] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  //   function handleNameChange(e) {
  //     const { value } = e.target;
  //     setNameValue(value);
  //   }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    // call the api and pass the input values

    console.log(nameValue, 'namevalue');
    setNameValue('');
    setFormData({
      name: '',
      email: '',
    });
  }

  console.log(formData);

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;
