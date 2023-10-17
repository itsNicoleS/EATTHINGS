import React from 'react';

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

            <section className="FeaturedMenu">
                <h2>Featured Menu</h2>
                {/* Featured menu items go here */}
                <div className="MenuItem">
                    <img src="food-item-1.jpg" alt="Food Item 1" />
                    <h3>Food Item 1</h3>
                    <p>Description of Food Item 1.</p>
                </div>
                <div className="MenuItem">
                    <img src="food-item-2.jpg" alt="Food Item 2" />
                    <h3>Food Item 2</h3>
                    <p>Description of Food Item 2.</p>
                </div>
            </section>

        </div>
    );
}

export default App;
