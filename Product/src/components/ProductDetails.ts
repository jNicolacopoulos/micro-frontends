import './ProductDetails.css';
import product from '../data/products.json';

export default class Product extends HTMLElement {
    state = {
        variant: 'sedan01',
    };

    connectedCallback() {
        this.render();
        this.addListeners();
    }

    addListeners() {
        const $btns = this.querySelectorAll('#styles button');
        Array.prototype.forEach.call($btns, ($btn) =>
            $btn.addEventListener('click', this.styleSelected)
        );
    }

    removeListeners() {
        const $btns = this.querySelectorAll('#styles button');
        Array.prototype.forEach.call($btns, ($btn) =>
            $btn.removeEventListener('click', this.styleSelected)
        );
    }

    styleSelected = (e: {
        currentTarget: { getAttribute: (arg0: string) => any };
    }) => {
        const sku = e.currentTarget.getAttribute('data-sku');
        this.state.variant = sku;
        this.removeListeners();
        this.render();
        this.addListeners();
    };

    render() {
        const variant = product.variants.find(
            (v) => this.state.variant === v.sku
        );
        if (variant) {
            this.innerHTML = `
            <div class="product-container">
                <div id="image"><div><img src="${variant.image}" alt="${
                variant.name
            }" /></div></div>
                <div id="info">
                    <div id="name"><h3>${product.name}</h3><small>${
                variant.price
            }</small></div>
                    <span id="description">${variant.name}</span>
                    <p id="description-long">${variant.description}</p>
                </div>
                <div id="styles">${product.variants
                    .map(this.renderStyle)
                    .join('')}</div>
            </div>
        `;
        } else {
            this.innerHTML = `<div class="product-container">No product found</div>`;
        }
    }

    renderStyle = (variant: { sku: string; image: string; name: string }) => {
        const active = this.state.variant === variant.sku ? 'active' : '';
        return `
            <button class="${active}" type="button" data-sku="${variant.sku}">
            <img src="${variant.image}" alt="${variant.name}" />
            </button>
        `;
    };

    disconnectedCallback() {
        this.removeListeners();
        this.log('disconnected');
    }

    log(...args: unknown[]) {
        console.log('🔘 product', ...args);
    }
}
