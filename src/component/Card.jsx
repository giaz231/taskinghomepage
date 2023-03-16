import React from 'react'

const Card = ({name,company,email,phone,website,username,addres}) => {


  return (
    <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{company}</p>
    <div className="card-actions justify-end">
    <label htmlFor="my-modal-4" className="btn bg-usee-blue">
            Details
          </label>
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
                <form>
                  <h3 className='text-xl pb-3'>{name}</h3>
                  <div className='flex justify-between'>
                    <div className=''>
                  <p>Username </p>
                  <p>Email </p>
                  <p>Phone</p>
                  <p>Website </p>
                  <p>Address  </p>
                  </div>
                  <div>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  </div>
                  <div className=''>
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
  )
}

export default Card