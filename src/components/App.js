import '../styles/App.css';
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import React from "react";
import Footer from "./Footer";

function App() {
    return (
        <React.Fragment>
            <Banner/>
            {/*<Cart/>*/}
            <ShoppingList />
            <Footer />
        </React.Fragment>
    );
}

export default App;
