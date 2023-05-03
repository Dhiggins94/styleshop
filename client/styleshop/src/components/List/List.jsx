import React from "react";
import "./List.scss";
import Card from "../Card/Card"
const List = () => {
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
  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
