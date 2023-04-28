import '../styles/Cart.css'
const Cart = () => {
    const monsteraPrice = 8;
    const lierrePrice = 10;
    const flowers = 15;
    return (
        <div className='lmj-cart'>
            <p>Panier</p>
            <ul>
                <li>Monstera : {monsteraPrice} €</li>
                <li>Lierre : {lierrePrice} €</li>
                <li>Bouquet de fleurs : {flowers} €</li>
            </ul>
            <h4>Total : {monsteraPrice + lierrePrice + flowers} €</h4>
        </div>
    )
}

export default Cart