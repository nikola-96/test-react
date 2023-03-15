import { useState } from "react";

import { customerService } from "../services/CustomerService";
import { SingleCustomerDetails } from "../components/SingleCustomerDetails";

export const AppCustomers = () => {
  const [customers, setCustomers] = useState(customerService.getAll());

  const handleDeleteCustomer = (id) => {
    const isDeleted = customerService.delete(id);
    if (isDeleted) {
      setCustomers(customers.filter((customer) => customer.id !== id));
    }
  };

  return (
    <div>
      {customers.map((customer) => (
        <SingleCustomerDetails
          key={customer.id}
          customer={customer}
          handleOnClick={handleDeleteCustomer}
        />
      ))}
    </div>
  );
};
