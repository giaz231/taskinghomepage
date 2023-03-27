import React from 'react'
import Layout from '../component/Layout'
import { useSelector } from "react-redux";
import Card from "../component/Card";

const Favorites = () => {
  const filter = useSelector((state) => state.favorite.likePage);
  console.log(filter);
  return (
    <Layout>
      {filter.map((item) => {
        return (
          <Card
            full={item}
            name={item.name}
            key={item.id}
            company={item.company.name}
            email={item.email}
            phone={item.phone}
            website={item.website}
            username={item.username}
            addres={item.address.street}
          />
        );
      })}
    </Layout>
  );
};

export default Favorites