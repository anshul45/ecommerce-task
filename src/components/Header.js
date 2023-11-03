import Logo from "../assets/Logo.png";
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { showCategory, showSearch } from "../utils/productSlice";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2;
  padding: 0px 30px;
  box-shadow: 0px 0px 20px 20px lightgrey;
`;
const Container1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 5px;
`;
const Image = styled.img`
  width: 70px;
  height: 70px;
  cursor: pointer;
`;
const Input = styled.input`
  width: 300px;
  padding: 10px;
  border-radius: 7px;
`;
const Cart = styled.h1`
  cursor: pointer;
`;
const Hr = styled.hr`
  margin: 5px;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Category = styled.h1`
  cursor: pointer;
  font-size: 20px;
`;

const Header = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    dispatch(showSearch(value));
  };
  const allCategory = ["All", "Casual Shoes", "T-Shirt", "Shirt"];
  return (
    <Wrapper>
      <Container1>
        <Image src={Logo} alt="Logo" />

        <Input
          placeholder=" What are you looking for?"
          value={searchValue}
          onChange={handleSearchChange}
        />

        <Cart>👜</Cart>
      </Container1>
      <Hr />

      <Container2>
        {allCategory.map((category, index) => (
          <Category
            key={index}
            onClick={() => dispatch(showCategory(category))}
          >
            {category}
          </Category>
        ))}
      </Container2>
    </Wrapper>
  );
};

export default Header;
