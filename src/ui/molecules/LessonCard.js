// @ts-check

import { css, html, LitElement } from "lit";
import { when } from "lit/directives/when.js";

/**
 * @type {import("./LessonCardTypes.d.ts")}
 */
export default class LessonCard extends LitElement {
  /**
   * Return LessonCard element
   * @param {string} startTime
   * @param {string} endTime
   * @param {string} lessonName
   * @param {number | string} cabinet
   * @param {string?} note
   */
  static from(startTime, endTime, lessonName, cabinet, note = null) {
    console.log(arguments);

    const element = document.createElement("lesson-card");

    element.setAttribute("starttime", startTime);
    element.setAttribute("endtime", endTime);
    element.setAttribute("lessonname", lessonName);
    element.setAttribute("cabinet", cabinet.toString());

    if (note) {
      element.setAttribute("note", note);
    }

    return element;
  }

  static init() {
    customElements.define("lesson-card", LessonCard);
  }

  static properties = {
    startTime: {},
    endTime: {},
    lessonName: {},
    cabinet: {},
    note: {},
  };

  render() {
    /** @type {{ startTime: string, endTime: string, lessonName: string, cabinet: string, note: string }} */
    // @ts-ignore
    const { startTime, endTime, lessonName, cabinet, note } = this;

    return html`
      <div class="lesson-card">
        <time-period start="${startTime}" end="${endTime}"></time-period>
        <div class="divider"></div>
        <div class="card">
          <h1>${lessonName}</h1>
          <span>${cabinet}</span>
          ${when(note, () => html`<p .innerText=${note}></p>`)}
        </div>
      </div>
    `;
  }

  static styles = css`
    .lesson-card {
      display: flex;
      justify-items: center;
      gap: 18px;
    }

    .card {
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
      border-radius: 14px;
      background: #5659fc;
    }

    span,
    p {
      padding: 6px 17px;
      border-radius: 10px;
      background: #fff;
      color: #3e45c9;
      margin: 0;
    }

    h1 {
      color: #fff;
      font-size: large;
      font-weight: 500;
      margin: 0;
    }

    .divider {
      border-right: 1px dashed black;
    }

    @media (prefers-color-scheme: dark) {
      .divider {
        border-color: white;
      }
    }
  `;
}
