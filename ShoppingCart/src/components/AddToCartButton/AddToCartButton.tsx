import './AddToCartButton.css';

export default class AddToCartButton extends HTMLElement {
    connectedCallback() {
        this.addToCart = this.addToCart.bind(this);
        this.render();
        this.firstChild?.addEventListener('click', this.addToCart);
    }

    addToCart() {
        this.log('event sent "mf-shopping-cart:changed"');
        this.dispatchEvent(
            new CustomEvent('mf-shopping-cart:changed', {
                bubbles: true,
            })
        );
    }

    render() {
        this.innerHTML = `<button class="mf-add-to-cart" type="button">Add to Bag</button>`;
    }

    disconnectedCallback() {
        this.firstChild?.removeEventListener('click', this.addToCart);
    }

    log(...args: unknown[]) {
        console.log('🔘 add-to-cart', ...args);
    }
}
