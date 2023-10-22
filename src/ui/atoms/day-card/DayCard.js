import { css, html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

export class DayCard extends LitElement {
  static properties = {
    active: {},
    shortNameOfDay: {},
    numberOfDay: {},
  };

  constructor() {
    super();
    this.classesMap = { active: false };
  }

  set active(val) {
    this.classesMap.active = typeof val === 'string';
    this.requestUpdate();
  }

  get active() {
    return this.classesMap.active;
  }

  render() {
    return html`
      <div class="${classMap(this.classesMap)}">
        <p class="shortNameDay">${this.shortNameOfDay}</p>
        <p class="numberOfDay">${this.numberOfDay}</p>
      </div>
    `;
  }

  static styles = css`
    .active {
      color: #8037ff;
      background-color: #ffffff;
    }

    .active:hover {
      background-color: #e7e7e7;
      color: #8037ff;
    }

    p {
      margin: 0;
    }

    div {
      display: flex;
      transition: background-color 0.2s;
      cursor: pointer;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 62px;
      height: 77px;
      color: #ffffff;
      border-radius: 26px;
      background-color: #8037ff;
    }

    div:hover {
      background-color: #a16aff;
    }

    .shortNameDay {
      text-align: center;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .numberOfDay {
      font-size: 26px;
      font-style: normal;
      font-weight: 400;
    }
  `;
}

/**
 * Returns DayCard component that can be inserted into HTML
 * @param {dayjs.Dayjs} dayJSObject Object dayjs
 * @param {boolean} isActive Make card selected
 */
export function createDayCard(dayJSObject, isActive) {
  const element = document.createElement('day-card');

  element.setAttribute('shortnameofday', dayJSObject.format('dd'));
  element.setAttribute('numberofday', dayJSObject.format('D'));
  if (isActive) element.setAttribute('active', '');

  return element;
}
