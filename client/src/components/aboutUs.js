import React from 'react';
import styled from 'styled-components';
const aboutUs = () => {
    return (
        <Box>
            <HeaderContainer>
                <Column>

                    <Heading> About Us </Heading>

                    <Paragraph>

                        Call me Ishmael. Some years ago—never mind how long precisely—having little
                        or no money in my purse, and nothing particular to interest me on shore,
                        I thought I would sail about a little and see the watery part of the world.
                        It is a way I have of driving off the spleen and regulating the circulation.
                        Whenever I find myself growing grim about the mouth; whenever it is a damp,
                        drizzly November in my soul; whenever I find myself involuntarily pausing
                        before coffin warehouses, and bringing up the rear of every funeral I meet;
                        and especially whenever my hypos get such an upper hand of me, that it
                        requires a strong moral principle to prevent me from deliberately stepping
                        into the street, and methodically knocking people's hats off—then, I
                        account it high time tozz get to sea as soon as I can. This is my
                        substitute for pistol and ball. With a philosophical flourish Cato throws
                        himself upon his sword; I quietly take to the ship. There is nothing
                        surprising in this. If they but knew it, almost all men in their degree,
                        some time or other, cherish very nearly the same feelings towards the
                        ocean with me.

                    </Paragraph>

                </Column>
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

const Heading = styled.h2`
    font-size: 36px;
    color: #333;
`;

const Paragraph = styled.p`
    font-size: 18px;
    line-height: 1.6;
    color: #666;
`;

export default aboutUs;