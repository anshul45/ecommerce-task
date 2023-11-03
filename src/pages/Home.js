import React, { useState } from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  gap: 70px;
`;
const Filter = styled.div`
  flex: 0.5;
`;
const Items = styled.div`
  padding-top: 100px;
  flex: 3;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 30px;
  gap: 40px;
`;
const PaginationButton = styled.div`
  margin-bottom: 100px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 460px;
  padding-right: 260px;
`;
const Button = styled.div`
  padding: 7px 15px;
  border: 1px solid black;
  border-radius: 7px;
  cursor: pointer;
  background-color: lightgrey;
`;
const Home = () => {
  const ProductData = useSelector((store) => store.product.data);
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(ProductData.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  const FilterData = ProductData?.slice(startIndex, endIndex);

  return (
    <Wrapper>
      <Header />
      <Container>
        <Filter>
          <Sidebar />
        </Filter>
        <Items>
          {FilterData.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </Items>
      </Container>
      <PaginationButton>
        <Button onClick={prevPage}>prev</Button>
        <Button onClick={nextPage}>next</Button>
      </PaginationButton>
    </Wrapper>
  );
};

export default Home;
