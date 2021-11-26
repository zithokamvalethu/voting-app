import React from "react";

const Table = (props) => {
  const { people} = props;

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
                  <button onClick={()=>props.deleteParty()} >DELETE</button>
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
