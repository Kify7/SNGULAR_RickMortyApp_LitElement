import { LitElement, html, css, notEqual, nothing } from "lit";
import { GetData } from "./components/getData";
import { ModalELement } from "./components/ModalElement";
import { Characters } from "./components/Characters";

class RickMortyApp extends LitElement {
  static styles = [
    css`
      :host {
        width: 100%;
      }
      span {
        font-weight: bold;
      }
      get-data {
        display: none;
      }
      .name {
        font-size: 1.5rem;
      }

      .feature {
        font-size: small;
        color: white;
      }
      .container {
        display: flex;
        padding: 24px;
        flex-wrap: wrap;
        background: black;
        justify-content: center;
        align-items: center;
      }
      .card {
        width: 350px;
        height: 250px;
        color: white;
        // border-radius: 20px;
        border-radius: 50px;
        border: 1px solid var(--Stock, #2a2b3a);
        background-image: linear-gradient(
          180deg,
          hsl(0deg 0% 0%) 0%,
          hsl(252deg 100% 11%) 10%,
          hsl(253deg 98% 12%) 21%,
          hsl(251deg 81% 14%) 31%,
          hsl(251deg 71% 16%) 43%,
          hsl(252deg 65% 18%) 56%,
          hsl(253deg 54% 22%) 70%,
          hsl(253deg 46% 26%) 88%,
          hsl(253deg 40% 31%) 95%,
          hsl(253deg 36% 35%) 98%,
          hsl(253deg 32% 39%) 100%
        );
        padding: 16px;
        margin: 16px;
      }
      .card-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
      .modal-image {
        width: 20%;
        max-width: 40px;
        object-fit: contain;
      }
    `,
  ];

  static get properties() {
    return {
      characters: { type: Array },
      isOpen: { type: Boolean },
      img: { type: String, reflect: true },
      name: { type: String, reflect: true },
    };
  }
  constructor() {
    super();
    this.characters = [];
    this.img = "";
    this.name = "";
    this.addEventListener("ApiData", (e) => {
      this._formatData(e.detail.data);
    });
  }

  _formatData(data) {
    const characters = [];
    data["results"].map((character) => {
      characters.push({
        img: character.image,
        name: character.name,
        gender: character.gender,
        status: character.status,
      });
    });
    this.characters = characters;
  }

  handleClick(img, name) {
    const modal = this.shadowRoot.querySelector("modal-element");
    modal.toggleModal();
    console.log(this.isOpen);
    this.img = img;
    this.name = name;
  }

  render() {
    return html`
      <main class="container">
        <get-data
          url="https://rickandmortyapi.com/api/character"
          method="GET"
        ></get-data>
        ${this.charactersTemplate}
      </main>
    `;
  }

  get charactersTemplate() {
    return html`
      ${this.characters.map(
        (character) => html`
          <div class="card">
            <div class="card-content">
              <h2 class="name">${character.name}</h2>
              <p class="feature"><span>Gender:</span> ${character.gender}</p>
              <p class="feature"><span>Status:</span> ${character.status}</p>
              <button
                @click=${() => this.handleClick(character.img, character.name)}
                class="btn"
              >
                Open image
              </button>
            </div>
          </div>
          <modal-element .img=${this.img} name=${
          this.name
        }></modal-element>></modal-element>
        `
      )}
    `;
  }
}

customElements.define("rick-morty-app", RickMortyApp);
