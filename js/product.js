class ProductElement extends HTMLElement {
    constructor() {
        super();

        this.image = this.getAttribute('image');
        this.name = this.getAttribute('name');
        this.id = this.getAttribute('id');
        this.price = this.getAttribute('price');

        this.innerHTML = `
            <div class="image-container">
                <img class="product-image" src="${this.image}">
            </div>
            <h2>${this.name}</h2>
        `

        const button = document.createElement('button');
        button.innerHTML = "Add to cart";
        button.addEventListener('click', this.addToCart.bind(this));
        this.appendChild(button);
    }

    addToCart() {
        const itemObj = {
            id: this.id,
            name: this.name,
            qty: 1,
            price: this.price
        }

        const item_in_cart = window.cart.items.find(item => item.id == itemObj.id);
        
        if(item_in_cart) {
            item_in_cart.qty++;
        } else {
            window.cart.items.push(itemObj);
        }

    }
}

export default ProductElement;