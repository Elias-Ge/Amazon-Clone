import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/Login/Login";
import { useStateValue } from "./components/stateProvider/StateProvider";
import { useEffect } from "react";
import { auth } from "./Firebase";
import Payment from "./components/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/orders/Orders";

const promise = loadStripe(
  "pk_test_51LxoZMEM2hUGaw1sdPAo5w3lmKDryWHn9LtOwWrBCCpFiUTVPWeG0cTSRG0eMIWqL8ISOjbaV76iLPKsliRVcy7o00Ny2T3SCt"
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //The user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // Any clean up operation goes in here
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header /> <Checkout />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
              <Header/>
              <Elements stripe={promise}>
                <Payment />
              </Elements>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
