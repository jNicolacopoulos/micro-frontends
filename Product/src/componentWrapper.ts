import { defineCustomElement } from 'vue';
import ProductDetails from './components/ProductDetails/ProductDetails.vue';
import './component.css';

const ProductDetailsElement = defineCustomElement(ProductDetails, {
    shadowRoot: false,
});

window.customElements.define('mf-product', ProductDetailsElement);
