import React from 'react';
import Card from '../components/card.js';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Restaurant Name</h1>
                <nav>
                    <ul>
                        <li>Location</li>
                        <li>Order Catering</li>
                        <li>Whatever else</li>
                    </ul>
                </nav>
            </header>
            <section className="card">
            <Card> </Card>
            </section>
        </div>
    );
}

export default App;
