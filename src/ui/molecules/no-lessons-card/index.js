import { css, html, LitElement } from 'lit';

export default class NoLessonsCard extends LitElement {
  render() {
    return html`
      <div class="lesson-card">
        <div class="card">
          <h1>На этот день нету пар.</h1>
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

    h1 {
      color: #fff;
      font-size: 20px;
      font-weight: 500;
    }
  `;
}

export function createNoLessonsCard() {
  return document.createElement('no-lessons-card');
}
