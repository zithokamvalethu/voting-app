import React from "react";

const Form = (props) => {
  const { handleChange, handleSubmit, formData } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={formData.name}
        ></input>

        <input
          placeholder="Id no"
          name="id"
          type="number"
          onChange={handleChange}
        ></input>

        <textarea
          placeholder="Address"
          name="address"
          onChange={handleChange}
        ></textarea>
        <label>EFF</label>
        <input
          placeholder="EFF"
          type="radio"
          name="party"
          value="EFF"
          onChange={handleChange}
        ></input>
        <label>ANC</label>
        <input
          type="radio"
          value="ANC"
          name="party"
          onChange={handleChange}
        ></input>
        <label>DA</label>
        <input
          type="radio"
          value="DA"
          name="party"
          onChange={handleChange}
        ></input>
        <label>ASA</label>
        <input
          type="radio"
          name="party"
          value="ASA"
          onChange={handleChange}
        ></input>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};
export default Form;
