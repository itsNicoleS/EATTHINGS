import React from 'react';
import Card from '../components/card.js';


function App({ loggedIn, setLoggedIn }) {

    return (

        <div className="App">
            <header className="App-header">
                <h1>Restaurant Name</h1>
                <nav>
                    <ul>
                        <li>Location Address</li>
                        <li>Order Catering button? </li>
                        <li>Whatever else you might want!</li>
                    </ul>
                </nav>
            </header>
            <section className="card">
                <Card loggedIn={loggedIn} setLoggedIn={setLoggedIn}> </Card>
            </section>
        </div>
    );
}

export default App;
