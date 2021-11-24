import React,{useState}  from "react";
import "./App.css";
import Form from "./components/form"
import Table from "./components/table";
function App() {
  const [formData, setFormData] = useState({

    name: "",
    id: "",
    address: "",
    party:"",
  });

  
  const [people, setPeople] = useState([]);

  const handleChange = (event) => {
   
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, id, address,party, } = formData;
    if (name && id && address && party) {
      setPeople([...people, formData]);
    }
    console.log(formData);
  };
  return (
    <div>
      <h1>Voting App</h1>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
       
      />

      <Table
        people={people}
        handleRemoveItem
       
      />
    </div>
  );
}

  
export default App;
