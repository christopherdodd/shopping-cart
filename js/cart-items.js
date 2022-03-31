class CartItems extends HTMLElement {
    constructor() {
        super();
    }

    render() {
        this.innerHTML = "";
        const table_container = document.createElement('div');
        table_container.classList.add('table-container');
        const table = document.createElement('table');
        window.cart.items.forEach((item, i) => {
            const line_price = item.price * item.qty;
            table.innerHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td style="text-align: center;">
                        ${item.qty}
                    </td>
                    <td style="text-align: right;">$${line_price}</td>
                </tr>
            `;
        });
        table_container.appendChild(table);
        this.appendChild(table_container);

        const footer = document.createElement('div');

        const cart_total = window.cart.items.reduce((total, item) => parseInt(total + (item.price*item.qty)), 0);

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

export default CartItems;