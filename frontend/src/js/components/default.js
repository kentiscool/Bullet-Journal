export class DefaultComponent extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = (`<a/ >`)
    }
}

customElements.define('default-component', DefaultComponent);