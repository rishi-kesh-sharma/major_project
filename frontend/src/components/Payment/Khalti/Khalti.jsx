import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import styles from "../../../styles/styles";

const KHALTI_PUBLIC_KEY = "test_public_key_9b53ff42bd284ec0b03a5e6fc5de40fb";
const Khalti = ({ orderData }) => {
  let config = {
    publicKey: KHALTI_PUBLIC_KEY,
    productIdentity: "1234567890",
    productName: "Iphone",
    productUrl: "http://gameofthrones.com/buy/Dragons",
    eventHandler: {
      onSuccess(payload) {
        // hit merchant api for initiating verification
        console.log(payload);
      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error);
      },
    },
    // one can set the order of payment options and also the payment options based on the order and items in the array
    paymentPreference: [
      //   "MOBILE_BANKING",
      "KHALTI",
      //   "EBANKING",
      //   "CONNECT_IPS",
      //   "SCT",
    ],
  };
  let checkout = new KhaltiCheckout({ ...config });
  console.log(Number(orderData.totalPrice) * 100);
  return (
    <div>
      {/* <div
        className={`${styles.button} !bg-primary text-white h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600]`}
        onClick={() => setOpen(true)}>
        Pay Now
      </div> */}
      <button
        className={`${styles.button} !bg-primary text-white h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600]`}
        onClick={() => {
          //   checkout.show({ amount: Number(orderData.totalPrice) * 100 });
          checkout.show({ amount: 100 * 100 });
        }}>
        Pay with Khalti
      </button>
    </div>
  );
};

export default Khalti;
