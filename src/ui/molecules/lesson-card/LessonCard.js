import { css, html, LitElement } from 'lit';

export default class LessonCard extends LitElement {
  static properties = {
    startTime: {},
    endTime: {},
    lessonName: {},
    cabinet: {},
  };

  render() {
    return html`
      <div class="lesson-card">
        <time-period start="${this.startTime}" end="${this.endTime}"></time-period>
        <div class="divider"></div>
        <div class="card">
          <h1>${this.lessonName}</h1>
          <span>${this.cabinet}</span>
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

/**
 * Return LessonCard element
 * @param {string} startTime
 * @param {string} endTime
 * @param {string} lessonName
 * @param {number} cabinet
 */
export function createLessonCard(startTime, endTime, lessonName, cabinet) {
  const element = document.createElement('lesson-card');

  element.setAttribute('starttime', startTime);
  element.setAttribute('endtime', endTime);
  element.setAttribute('lessonname', lessonName);
  element.setAttribute('cabinet', cabinet);

  return element;
}
