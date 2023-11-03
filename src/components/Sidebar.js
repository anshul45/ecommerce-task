import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  sortByPriceHigh,
  sortByPriceLow,
  showCategory,
} from "../utils/productSlice";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 100px;
  padding-left: 35px;
`;
const H1 = styled.h1``;

const Category = styled.div`
  content-align: center;
  cursor: pointer;
`;

const Options = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const Button = styled.div`
  padding: 5px;
  font-size: 15px;
  width: fit-content;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
`;

const Hr = styled.hr`
  width: 200px;
`;

const Sidebar = () => {
  const dispatch = useDispatch();
  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);

  const allCategory = ["All", "Casual Shoes", "T-Shirt", "Shirt"];
  return (
    <Wrapper>
      <H1>Fliters</H1>
      <Hr />
      <Category onClick={() => setIsOpenPrice(!isOpenPrice)}>
        Price {isOpenPrice ? "⯅" : "⯆"}
      </Category>
      {isOpenPrice && (
        <Options>
          <Button onClick={() => dispatch(sortByPriceHigh())}>
            Low to high
          </Button>
          <Button onClick={() => dispatch(sortByPriceLow())}>
            High to low
          </Button>
        </Options>
      )}
      <Hr />
      <Category onClick={() => setIsOpenCategory(!isOpenCategory)}>
        Category
        {isOpenCategory ? "⯅" : "⯆"}
      </Category>
      {isOpenCategory && (
        <Options>
          {allCategory.map((category, index) => (
            <Button
              key={index}
              onClick={() => dispatch(showCategory(category))}
            >
              {category}
            </Button>
          ))}
        </Options>
      )}
    </Wrapper>
  );
};

export default Sidebar;
