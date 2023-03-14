import React from 'react'
import { useNavigate } from "react-router-dom";

const Card = ({name,company}) => {
  const navi = useNavigate();

  return (
    <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{company}</p>
    <div className="card-actions justify-end">
    <label htmlFor="my-modal-4" className="btn">Details</label>
    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer">
  <label className="modal-box relative" htmlFor="">
   <ul>
    <li className='text-xl'>Username</li>
    <li className='text-xl'>Email</li>
    <li className='text-xl'>Address </li>
    <li className='text-xl'>Phone</li>
    <li className='text-xl'>Company</li>
   </ul>
  </label>
</label>
    </div>
  </div>
</div>
  )
}

export default Card