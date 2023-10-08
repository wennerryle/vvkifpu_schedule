import { LitElement, html, css } from "lit";

export class LessonCard extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="lesson-card">
        <time-period start="20:18" end="19:47"></time-period>
        <div class="divider"></div>
        <div class="card">
          <h1>Основа разработки web и мобильных приложений</h1>
          <span>41 кабинет</span>
        </div>
      </div>
    `;
  }

  static styles = css`
    .lesson-card {
      display: flex;
      gap: 18px;
    }

    .card {
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 8px;
      padding: 15px 20px;
      border-radius: 25px;
      background: #5659fc;
    }

    span {
      padding: 6px 17px;
      border-radius: 63px;
      background: #fff;
      color: #3e45c9;
    }

    h1 {
      color: #fff;
      font-size: 20px;
      font-weight: 500;
    }

    .divider {
      border: 1px dashed black;
    }
  `;
}
