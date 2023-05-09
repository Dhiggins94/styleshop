import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
const FeaturedProducts = ({ type }) => {
  // featrued product data will be replaced with api
  // we use the type prop so we can access and connect with the "home" page
 

  const [data, setData] = useState([]);


  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_API_URL+"/products?populate=*", {
          headers: { Authorization: "bearer " + process.env.REACT_APP_API_TOKEN }
        });
        setData(res.data.data)
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
