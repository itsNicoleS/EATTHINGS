import React from 'react';
import coffeePic from '../assets/coffeePic.webp';
import styled from 'styled-components';

// Here we destructure our props into their own distinct variables
export default function Welcome({ loggedIn, setLoggedIn }) {

  // Lets log our our loggedIn variable to see it change in real time
  console.log('Welcome -> loggedIn', loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <CenteredContainer>
    <div>
      {/* Conditional (ternary) operator is checking to see if loggedIn is true. If so render the following: */}
      {loggedIn ? (
        <div>
          <span role="img" aria-label="tada">
            🎉
          </span>
          <h3>You are signed in!</h3>
          <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
            Log out
          </button>
        </div>
      ) : (
        // If we are logged out, render this:
        <div>
          <img src={coffeePic} />
        </div>
      )}
    </div>
    </CenteredContainer>
  );
}
const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh; /* Set a specific height for the container, adjust as needed */
`;


