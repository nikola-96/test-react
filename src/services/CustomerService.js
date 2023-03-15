class CustomerService {
  constructor() {
    this.customers = [
      { id: 1, name: "Nikola", surname: "Markovic" },
      { id: 2, name: "Zika", surname: "Zikic" },
      { id: 3, name: "Pera", surname: "Peric" },
    ];
  }
  getAll() {
    return this.customers;
  }
  delete(id) {
    const neWCustomers = this.customers.filter(
      (customer) => customer.id !== id
    );
    this.customers = neWCustomers;

    return true;
  }
}

export const customerService = new CustomerService();
