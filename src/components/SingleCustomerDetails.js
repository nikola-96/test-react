import { useState } from "react";

export const SingleCustomerDetails = ({ customer, handleOnClick }) => {
  const [user, setUser] = useState({ name: "sadsad", surname: "dsadasa" });
  return (
    <div>
      <input
        value={user.name}
        onChange={(event) => setUser({ ...user, name: event.target.value })}
      ></input>
      <input></input>

      <h1>
        {customer.name} {customer.surname}
      </h1>
      <button onClick={() => handleOnClick(customer.id)}>Delete</button>
    </div>
  );
};
