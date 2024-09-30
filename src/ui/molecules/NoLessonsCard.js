import { css, html, LitElement } from "lit";

export default class NoLessonsCard extends LitElement {
  static init() {
    customElements.define("no-lessons-card", NoLessonsCard);
  }

  render() {
    return html`
      <div class="card">
        <h1>На этот день нет пар.</h1>
      </div>
    `;
  }

  static styles = css`
    .card {
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 8px;
      padding: 15px 20px;
      border-radius: 14px;
      background: #5659fc;
    }

    h1 {
      color: #fff;
      font-size: large;
      font-weight: 500;
    }
  `;
}

export function createNoLessonsCard() {
  return document.createElement("no-lessons-card");
}
