import { createRoot } from 'react-dom/client';
import { Account } from './components/Account/Account';

type AccountElementProps = {
    userId?: string;
};

class AccountElement extends HTMLElement {
    private _props: AccountElementProps | undefined;
    static get observedAttributes() {
        return ['user-id'];
    }

    connectedCallback() {
        this._props = {};
        this.initialize();
    }

    initialize() {
        this._props = {
            userId: this.getAttribute('user-id') as string,
        };

        if (this._props.userId) {
            this.render();
        }
    }

    disconnectedCallback() {
        const root = createRoot(this);
        root.unmount();
    }

    attributeChangedCallback(
        _attr: string,
        _oldValue: string,
        newValue: string
    ) {
        if (this._props && newValue) {
            this.initialize();
        }
    }

    render() {
        const root = createRoot(this);
        root.render(<Account {...this._props} />);
    }
}

window.customElements.define('mf-account', AccountElement);
