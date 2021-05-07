import React from 'react';

const Card = ({ name, email, id }) => {

  const price = Math.floor(Math.random() * 10000),
    salePrice = Math.floor( ( price * Math.random() ))

  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <h2>{name}</h2>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
        <p>
          {email} <br/>
          <span style={{ textDecorationLine:"line-through" }}> Original: ${ price }</span><br/>
          <u> Sale: ${ salePrice }</u>
        </p>
    </div>
  );
}

export default Card;
