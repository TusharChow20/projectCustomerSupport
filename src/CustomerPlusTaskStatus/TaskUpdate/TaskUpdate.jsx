import React from "react";
import { toast } from "react-toastify";
const remainingPlayer = (
  storeCustomer,
  setStoreCustomer,
  customer,
  resolved,
  setResolved,
  remove,
  setRemove
) => {
  const remaining = storeCustomer.filter(
    (rcustomer) =>
      // console.log(rcustomer);
      rcustomer.id !== customer.id
  );
  setStoreCustomer(remaining);
  //   removeCart([]);
  setRemove([...remove, customer.id]);
  setResolved([...resolved, customer]);
};
const TaskUpdate = ({
  storeCustomer,
  setStoreCustomer,
  resolved,
  setResolved,
  remove,
  setRemove,
}) => {
  const notify = () => toast("Completed");
  return (
    <div>
      <div>
        <h1 className="text-3xl font-semibold">Task Status</h1>
        {storeCustomer.length !== 0 ? (
          <div className="mt-4">
            {storeCustomer.map((customer) => {
              return (
                <div key={customer.id} className="flex flex-col gap-y-5">
                  <div className="p-4 bg-white space-y-3">
                    <h1>{customer.title}</h1>
                    <button
                      onClick={() => {
                        remainingPlayer(
                          storeCustomer,
                          setStoreCustomer,
                          customer,
                          resolved,
                          setResolved,
                          remove,
                          setRemove
                        );
                        notify();
                      }}
                      className="bg-green-500 w-full p-3 cursor-pointer"
                    >
                      Complete
                    </button>
                  </div>
                  <div></div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-2xl">Select a ticket to add to Task Status</p>
        )}
      </div>

      <div>
        <h1 className="text-3xl font-semibold mt-4">Resolved Task</h1>
        {resolved.length != 0 ? (
          <div className="mt-4">
            {resolved.map((resolve) => {
              return (
                <div key={resolve.id} className="flex flex-col gap-y-5">
                  <div className="p-4 bg-[#E0E7FF] shadow-xl space-y-3">
                    <h1>{resolve.title}</h1>
                  </div>
                  <div></div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-2xl">No resolved tasks yet.</p>
        )}
      </div>
    </div>
  );
};

export default TaskUpdate;
