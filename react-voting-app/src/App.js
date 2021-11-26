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
   
  };
    const deleteParty = (party) => {
    const handleDelete = [...people];
    handleDelete.splice(people.party, 1);
    setPeople(handleDelete);
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
        deleteParty={ deleteParty}
     />
    </div>
  );
}

  
export default App;
