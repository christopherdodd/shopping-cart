import CartItems from './cart-items.js';
import ProductElement from './product.js';

window.cart = {
    items: []
}

customElements.define('product-element', ProductElement);
customElements.define('cart-items', CartItems);