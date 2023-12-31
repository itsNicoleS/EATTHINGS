
import React from "react";
import styled from "styled-components";


const Footer = () => {
    return (
        <Box>
            <h2
                style={{
                    color: "red",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                The Bottom of the Page
            </h2>
            <FooterContainer>
                <Row>
                    <Column>
                        <FooterLink href="/ContactUs">
                            Contact Us
                        </FooterLink>
                    </Column>
                    <Column>

                        <FooterLink href="/aboutUs">
                            About Us
                        </FooterLink>
                    </Column>
                    <Column>

                        <FooterLink href="tel:123-456-7890">
                            503.123.1234
                        </FooterLink>
                    </Column>
                    <Column>

                        <FooterLink href="googlemaps.com?? ">
                            1234 SE Whatever St.
                            Portland, OR 97123
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
const Box = styled.div`
    padding: 5% 2.5%;
    background: #f9c55f;
    bottom: 0;
    width: 100%;
 
    @media (max-width: 1000px) {
        // padding: 70px 30px;
    }
`;

const FooterContainer = styled.div`
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

const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
 
    &:hover {
        color: green;
        transition: 200ms ease-in;
    }
`;

export default Footer;