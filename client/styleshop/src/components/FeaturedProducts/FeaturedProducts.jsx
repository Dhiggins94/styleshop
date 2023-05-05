import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
const FeaturedProducts = ({ type }) => {
  // featrued product data will be replaced with api
  // we use the type prop so we can access and connect with the "home" page
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8498312/pexels-photo-8498312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/8498314/pexels-photo-8498314.jpeg",
      title: "Suit",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/14917974/pexels-photo-14917974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/14917972/pexels-photo-14917972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Hat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/8499385/pexels-photo-8499385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Dress",
      img2: "https://images.pexels.com/photos/8499397/pexels-photo-8499397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/8498401/pexels-photo-8498401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/8498411/pexels-photo-8498411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];

  const [products, setProducts] = useState([]);


  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(process.env.REACT_APP_API_URL+"/products", {
          headers: { Authorization: "bearer " + process.env.REACT_APP_API_TOKEN }
        });
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData();
},[])






  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
          mattis enim ut tellus elementum sagittis.
        </p>
      </div>
      <div className="bottom">
        {/* iterates our data, lets us use "item" to access it in other files */}
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
