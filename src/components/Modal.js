import { LitElement, html, css } from "lit";

export class Modal extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #111111bd;
        display: flex;
        z-index: 1;
      }
      .modal-container {
        border-radius: 42px;
        border-top: 1px solid #664dff;
        border-bottom: 3px solid #664dff;
        background: #010314;
        box-shadow: 0px 4px 100px 0px rgba(102, 77, 255, 0.2);
        width: 90%;
        margin: auto;
        max-width: 600px;
        max-height: 90%;
        padding: 3em 2.5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 10;
      }
      .modal-image {
        width: 90%;
        max-width: 300px;
        z-index: 11;
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
      @media (min-width: 480px) and (max-width: 768px) {
        .modal-image {
          width: 60%;
          max-width: 200px;
        }
        .modal-text {
          font-size: 1rem;
        }
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
    `,
  ];

  static get properties() {
    return {
      img: { type: String },
      name: { type: String },
      isOpen: { type: Boolean },
      clickAction: { type: String },
    };
  }

  close() {
    this.isOpen = false;
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent("button-click"));
    this.close;
  }

  render() {
    return html`
      <section class="modal">
        <div class="modal-container">
          <img src=${this.img} class="modal-image" />
          <p class="modal-text">${this.name}</p>
          <button class="btn" @click=${this.handleClick}>
            ${this.clickAction}Close
          </button>
        </div>
      </section>
    `;
  }
}
customElements.define("modal-component", Modal);
