import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstname: "John",
    lastname: "Henry",
    admin: false,
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value
    })
  }
function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} name="firstname" value={formData.firstname} />
      <input type="text" onChange={handleChange} name="lastname" value={formData.lastname} />
      <input type="checkbox" name="admin" checked={formData.admin} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
