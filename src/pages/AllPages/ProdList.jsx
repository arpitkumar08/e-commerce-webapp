import React from 'react';
import BestSeller from '../../Components/BestSeller';
import Pricelessthan20 from '../../Components/Pricelessthan20';
import AllProducts from '../../Components/AllProducts';

const ProdList = () => {
  return (
    <>
      <BestSeller  />
      <Pricelessthan20  />
      <AllProducts  />
    </>
  );
};

export default ProdList;
