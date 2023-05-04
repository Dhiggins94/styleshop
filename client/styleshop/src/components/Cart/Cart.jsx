import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8498312/pexels-photo-8498312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/8498314/pexels-photo-8498314.jpeg",
      desc:"Yellow suit",
      title: "Suit",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/14917974/pexels-photo-14917974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/14917972/pexels-photo-14917972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc:"Gray hat",
      title: "Hat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map(item => (
        <div className="item" key={item.id}>
        <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1x${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete"/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
