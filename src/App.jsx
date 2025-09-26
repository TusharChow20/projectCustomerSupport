import "./App.css";
import CustomerTask from "./CustomerPlusTaskStatus/CustomerTask";
import BannerSection from "./BannerSection/bannerSection";
import Navbar from "./NavBar/Navbar";
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import FooterSection from "./Footer/FooterSection";

const fetchCustomerData = async () => {
  const res = await fetch("./tickets.json");
  return res.json();
};

// const removeCart = () => {};
const customerPromise = fetchCustomerData();
function App() {
  const [storeCustomer, setStoreCustomer] = useState([]);
  const [resolved, setResolved] = useState([]);

  // const [toggle, setToggle] = useState(true);
  // console.log(oddManage);
  const [remove, setRemove] = useState([]);
  return (
    <>
      <div className="bg-[#db9e9e1a]">
        <Navbar></Navbar>
        <BannerSection
          storeCustomer={storeCustomer}
          resolved={resolved}
        ></BannerSection>
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <CustomerTask
            customerPromise={customerPromise}
            storeCustomer={storeCustomer}
            setStoreCustomer={setStoreCustomer}
            resolved={resolved}
            setResolved={setResolved}
            remove={remove}
            setRemove={setRemove}
          ></CustomerTask>
        </Suspense>
        <FooterSection></FooterSection>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
