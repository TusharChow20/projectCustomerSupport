import React, { use } from "react";
import CustomerTickets from "./CustomerTickets/CustomerTickets";
import TaskUpdate from "./TaskUpdate/TaskUpdate";

const CustomerTask = ({
  customerPromise,
  storeCustomer,
  setStoreCustomer,
  resolved,
  setResolved,
  remove,
  setRemove,
}) => {
  const customerData = use(customerPromise);

  const displayCustomer = customerData.filter(
    (data) => !remove.includes(data.id)
  );

  return (
    <div className="w-full md:flex mt-15">
      <div className="md:w-2/3  md:px-15">
        <h1 className="text-center md:text-left text-2xl md:text-3xl font-semibold">
          Customer Tickets
        </h1>
        <div className="lg:flex mt-3">
          <div className="space-y-4 space-x-3.5">
            {displayCustomer
              .filter((customer) => customer.id % 2 != 0)
              .map((customer) => (
                <CustomerTickets
                  key={customer.id}
                  customer={customer}
                  storeCustomer={storeCustomer}
                  setStoreCustomer={setStoreCustomer}
                ></CustomerTickets>
              ))}
          </div>
          <div className="space-y-4 space-x-3.5">
            {displayCustomer
              .filter((customer) => customer.id % 2 == 0)
              .map((customer) => (
                <CustomerTickets
                  key={customer.id}
                  customer={customer}
                  storeCustomer={storeCustomer}
                  setStoreCustomer={setStoreCustomer}
                ></CustomerTickets>
              ))}
          </div>
        </div>
      </div>
      <TaskUpdate
        storeCustomer={storeCustomer}
        setStoreCustomer={setStoreCustomer}
        customerData={customerData}
        resolved={resolved}
        setResolved={setResolved}
        remove={remove}
        setRemove={setRemove}
      ></TaskUpdate>
    </div>
  );
};

export default CustomerTask;
