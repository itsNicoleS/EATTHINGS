import React from 'react';
import styled from "styled-components";

const Header = () => {
  return (
    <Box>
      <h2
        style={{
          color: "red",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        Restaurant At The End of the Universe
      </h2>
      <HeaderContainer>
        <Row>
          <Column>
            <HeaderLink href="#">
              Contact Us
            </HeaderLink>
          </Column>
          <Column>

            <HeaderLink href="#">
              About Us
            </HeaderLink>
          </Column>
          <Column>

            <HeaderLink href="#">
              503.123.1234
            </HeaderLink>
          </Column>
          <Column>

            <HeaderLink href="#">
              1234 SE Whatever St.
              Portland, OR 97123
            </HeaderLink>
          </Column>
        </Row>
      </HeaderContainer>
    </Box>
  );
};

const Box = styled.div`
    padding: 5% 2.5%;
    background: #f9c74f;
    bottom: 0;
    width: 95%;
 
    @media (max-width: 1000px) {
         padding: 70px 30px;
    }
`;
const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(185px, 1fr)
    );
    grid-gap: 20px;
 
    @media (max-width: 1000px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        );
    }
`;

const HeaderLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
 
    &:hover {
        color: green;
        transition: 200ms ease-in;
    }
`;

export default Header;