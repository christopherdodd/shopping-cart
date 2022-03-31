class CartItems extends HTMLElement {
    constructor() {
        super();
    }

    updateQty(index, value) {
        window.cart.items[index].qty = value;
        this.render();
    }

    render() {
        this.innerHTML = "";
        const table_container = document.createElement('div');
        table_container.classList.add('table-container');
        const table = document.createElement('table');
        window.cart.items.forEach((item, i) => {
            const line_price = item.price * item.qty;
            if(item.qty != 0) {
                table.innerHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td style="text-align: center;">
                        <quantity-input class="quantity">
                            <button class="quantity__button" type="button" name="minus">-</button>
                            <input
                                type="number"
                                value="${item.qty}"
                                min="0"
                                id="Quantity-${i}"
                                data-index="${i}"
                            ></input>
                            <button class="quantity__button" type="button" name="plus">+</button>
                        </quantity-input>
                    </td>
                    <td style="text-align: right;">$${line_price}</td>
                </tr>
            `;
            }
        });
        table_container.appendChild(table);
        this.appendChild(table_container);

        const footer = document.createElement('div');

        const cart_total = window.cart.items.reduce((total, item) => parseInt(total + (item.price*item.qty)), 0);

        if(cart_total != 0) {
            footer.innerHTML = `
                <table class="cart-footer">
                    <tr>
                        <td>Total:</td>
                        <td style="text-align: right;">$${cart_total}</td>
                    </tr>
                </table>
            `;
            this.appendChild(footer);
        }
    }
}

export default CartItems;