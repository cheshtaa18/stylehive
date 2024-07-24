import React from 'react';
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };
 
  const stripePromise = loadStripe(
    "pk_test_51NbRLtSAEin7MumyjkZYNP18185mXIhfYyL6pRc0LK9tEUw0U7QzfjpG56NxQlUSk7gGH4xiVUAktSNFRhOkzJ4q009RUaYqCx"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      // Create an array of line items in the required format
      const lineItems = products.map((product) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.title,
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: product.quantity,
      }));

      // Create a session on the server
      const response = await axios.post("http://localhost:1337/api/orders", {
        products: lineItems,
      });

      const sessionId = response.data.stripeSession.id;

      // Redirect to Stripe Checkout
      await stripe.redirectToCheckout({
        sessionId: sessionId,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='cart'>
      <h1>Products in Your Cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={`http://localhost:1337${item.img}`} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x Rs.{item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>Rs.{totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
