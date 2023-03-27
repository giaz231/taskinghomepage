import React from 'react'
import { useDispatch } from "react-redux";
import { ADDLIKE } from "../redux/favoriteSlice";

const Card = ({
  name,
  company,
  email,
  phone,
  website,
  username,
  addres,
  full,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="card card-side bg-base-100 shadow-xl w-1/3">
      <figure>
        <img
          src="https://xsgames.co/randomusers/avatar.php?g=male"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{company}</p>
        <div className="card-actions justify-end">
          <div className="flex flex-wrap gap-1">
            <label
              className="btn bg-usee-blue"
              onClick={() => {
                dispatch(ADDLIKE(full));
              }}
            >
              Save
            </label>
            <label htmlFor="my-modal-4" className="btn bg-usee-blue">
              Details
            </label>
          </div>
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
              <form>
                <h3 className="text-xl pb-3">{name}</h3>
                <div className="flex justify-between">
                  <div className="">
                    <p>Username </p>
                    <p>Email </p>
                    <p>Phone</p>
                    <p>Website </p>
                    <p>Address </p>
                  </div>
                  <div>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                  </div>
                  <div className="">
                    <p>{username}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{website}</p>
                    <p>{addres}</p>
                  </div>
                </div>
              </form>
            </label>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Card