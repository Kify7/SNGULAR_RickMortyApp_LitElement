import { LitElement, html } from "lit";
import "iconify-icon";

export class Icon extends LitElement {
  _render({ iclass }) {
    return html`<iconify-icon icon="mdi:home"></iconify-icon>`;
  }
}
customElements.define("fa-icon", Icon);
