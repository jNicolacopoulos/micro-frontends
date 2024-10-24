import './Cart.css';

export default class Cart extends HTMLElement {
    itemsCount = 0;

    connectedCallback() {
        this.refresh = this.refresh.bind(this);
        this.log('connected');
        this.render();
        window.addEventListener('mf-shopping-cart:changed', this.refresh);
    }

    refresh() {
        this.log('event recieved "mf-shopping-cart:changed"');
        this.itemsCount++;
        this.render();
    }

    render() {
        this.innerHTML = `
      <div class="mf-shop-cart-container">
        <i class="fas fa-shopping-bag"></i>
        <span class="mf-shop-cart-count">${this.itemsCount}</span>
      </div>
      `;
    }

    disconnectedCallback() {
        window.removeEventListener('mf-shopping-cart:changed', this.refresh);
        this.log('disconnected');
    }

    log(...args: unknown[]) {
        console.log('🛒 shopping-cart', ...args);
    }
}
