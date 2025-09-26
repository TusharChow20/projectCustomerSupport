import React from "react";
import { SlCalender } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { toast } from "react-toastify";
const arryFunc = (match, customer) => {
  if (match === "High") {
    return (
      <p className="text-red-500">{customer.priority.toUpperCase()} PRIORITY</p>
    );
  } else if (match === "Medium") {
    return (
      <p className="text-yellow-500">
        {customer.priority.toUpperCase()} PRIORITY
      </p>
    );
  } else {
    return (
      <p className="text-green-600">
        {customer.priority.toUpperCase()} PRIORITY
      </p>
    );
  }
};
const handleBtn = (pogress) => {
  if (pogress === "Open") {
    return (
      <button className="btn bg-green-500 text-white xl:text-xl xl:p-3 rounded-2xl">
        <div className="w-4 h-4 bg-green-600 rounded-full"></div>
        <p>{pogress}</p>
      </button>
    );
  } else {
    return (
      <button className="btn bg-yellow-500 text-white xl:text-xl xl:p-3 rounded-2xl">
        <div className="w-4 h-4 bg-yellow-600 rounded-full"></div>
        <p>In-Progress</p>
      </button>
    );
  }
};

const CustomerTickets = ({ customer, storeCustomer, setStoreCustomer }) => {
  const notify = () => toast("In Progress");
  const handleClick = () => {
    const updateCustomerTicket = { ...customer, status: "In-Progress" };
    setStoreCustomer([...storeCustomer, updateCustomerTicket]);
    notify();
  };

  return (
    <div onClick={handleClick} className="p-4 bg-white rounded-xl space-y-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">{customer.title}</h1>
        {handleBtn(customer.status)}
      </div>
      <p>{customer.description}</p>
      <div className="xl:flex justify-between">
        <div className="flex gap-3">
          <p>#100{customer.id}</p>
          {arryFunc(customer.priority, customer)}
        </div>
        <div className="flex gap-4">
          <p>{customer.customer}</p>
          <p className="flex gap-2 items-center">
            <SlCalender /> {customer.createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;
