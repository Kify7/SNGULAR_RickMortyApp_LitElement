import { LitElement, html, css } from "lit";

export class GetData extends LitElement {
  static get properties() {
    return {
      url: { type: String },
      data: { type: Object },
      method: { type: String },
    };
  }
  constructor() {
    super();
  }

  firstUpdated() {
    this.getData();
  }

  render() {
    return html``;
  }

  sendData(data) {
    this.dispatchEvent(
      new CustomEvent("ApiData", {
        detail: { data },
        bubbles: true,
        composed: true,
      })
    );
  }

  getData() {
    fetch(this.url, { method: this.method })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((data) => this.sendData(data))
      .catch((error) => {
        console.log(error);
      });
  }
}
customElements.define("get-data", GetData);
