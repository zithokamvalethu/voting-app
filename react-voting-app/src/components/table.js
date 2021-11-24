import React from "react";

const Table = (props) => {
  const { people } = props;


  const deleteParty=(party) =>{
    return () => {
      const setState=(prevState => ({
        people: prevState.people.filter(person => person.party !== party)
      }));
    };
  }
  

  return (
    <div>
      <table className="table" id="voters-list">
        <thead>
          <tr>
            <th>NAME</th>
            <th>ID NUMBER</th>
            <th>ADDRESS</th>
            <th>POLITICAL PARTY</th>
            <th>REMOVE</th>
          </tr>
        </thead>

        <tbody>
          {people.map((person, id) => (
            <tr key={id}>
              <td>{person.name}</td>
              <td>{person.id}</td>
              <td>{person.address}</td>
              <td>{person.party}</td>
              <div className="deleteBtn">
                <td>
                  <button onClick={deleteParty(person.party)}>DELETE</button>
                </td>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
