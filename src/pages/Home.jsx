import React from 'react'
import Layout from '../component/Layout'
import Card from '../component/Card'
import { useState,useEffect } from "react";
import axios from "axios";
import Hero from "../component/Hero";

const Home = () => {
  const [users, setUser] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(6);
  const [searchInput, setSearchInput] = useState("");
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSearchInput("");
  };

  const userList = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    userList();
  }, []);

  return (
    <Layout>
      <Hero />
      <div className="hero bg-alta-light text-alta-dark ">
        <div className="hero-content text-center grid gap-10 ">
          <div className="my-20 flex flex-auto pb-10">
            <div>
              <h2 className="sm:text-2xl xl:text-5xl font-bold text-usee-grey">
                An employee
              </h2>
            </div>
            <div className="mx-20 px-10"></div>
            <div>
              <h2 className="sm:text-2xl xl:text-5xl font-bold text-usee-grey ">
                you can see
              </h2>
            </div>
            <div className="m-2"></div>
          </div>
          <div className="mt-10"></div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" form-control w-96 mx-auto ">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search users by name"
            className="input input-bordered"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {currentUsers.map((item) => (
          <Card
            name={item.name}
            company={item.company.name}
            email={item.email}
            phone={item.phone}
            website={item.website}
            username={item.username}
            addres={item.address.street}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <ul className="pagination">
          {[...Array(Math.ceil(filteredUsers.length / usersPerPage))].map(
            (_, i) => (
              <li className="btn-group">
                <button
                  onClick={() => paginate(i + 1)}
                  className="btn bg-usee-blue"
                >
                  {i + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </Layout>
  );
};

export default Home