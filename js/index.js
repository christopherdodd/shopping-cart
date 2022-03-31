import CartItems from './cart-items.js';
import ProductElement from './product.js';
import QuantityInput from './qty-input.js';

window.cart = {
    items: []
}

customElements.define('product-element', ProductElement);
customElements.define('cart-items', CartItems);
customElements.define('quantity-input', QuantityInput);