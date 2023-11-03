import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: center;
`;
const H1 = styled.h1`
  font-size: 11px;
`;

const IMG = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 3px;
`;
const P = styled.p`
  text-wrap: wrap;
`;
const H3 = styled.h3``;
const Product = ({ product }) => {
  const url = "https://images.bewakoof.com/t640/";
  return (
    <Container>
      <IMG src={url + product.display_image} />
      <H1>
        {product.name.length > 50 ? product.name.slice(0, 50) : product.name}
      </H1>
      <P>{product.category}</P>
      <H3>{product.price} ₹</H3>
    </Container>
  );
};

export default Product;
