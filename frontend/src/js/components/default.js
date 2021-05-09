export class DefaultComponent extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = (`<a href="MyPage.html">My page</a>`)
    }
}

customElements.define('default-component', DefaultComponent);