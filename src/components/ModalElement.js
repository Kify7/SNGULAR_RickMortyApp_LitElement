import { LitElement, html, css } from "lit";

export class ModalELement extends LitElement {
  static get styles() {
    return css`
      .modal {
        display: none;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.8);
      }

      .modal-content {
        border-radius: 42px;
        border-top: 1px solid #664dff;
        border-bottom: 3px solid #664dff;
        background: #010314;
        box-shadow: 0px 4px 100px 0px rgba(102, 77, 255, 0.2);
        width: 90%;
        margin: 15vh 25vw;
        max-width: 600px;
        max-height: 90%;
        padding: 3em 2.5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }

      .close:hover,
      .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
      .btn {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 20px;
        border: none;
        font-size: medium;
        font-weight: bold;
        color: white;
        cursor: pointer;
        border-radius: 40px;
        border: 3px solid #7241ff;
        box-shadow: 0px 0px 10px 0px #74f;
        background: transparent;
        margin-top: 24px;
      }
      .modal-text {
        font-size: 2rem;
        background: radial-gradient(
          70.71% 70.71% at 50% 50%,
          #fff 30%,
          rgba(255, 255, 255, 0.5) 84.77%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `;
  }

  static get properties() {
    return {
      isOpen: { type: Boolean },
      img: { type: String },
      name: { type: String },
    };
  }

  constructor() {
    super();
    this.isOpen = false;
  }

  toggleModal() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return html`
      <div class="modal" style="${this.isOpen ? "display: block;" : ""}">
        <div class="modal-content">
          <img src=${this.img} class="modal-image" />
          <p class="modal-text">${this.name}</p>
          <button class="btn" @click="${this.toggleModal}">Close</button>
        </div>
      </div>
    `;
  }
}

customElements.define("modal-element", ModalELement);
