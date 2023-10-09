import { css, html, LitElement } from 'lit';

export default class extends LitElement {
  static properties = {
    start: {},
    end: {},
  };

  render() {
    return html`
      <div>
        <span class="start">${this.start}</span>
        <span class="end">${this.end}</span>
      </div>
    `;
  }

  static styles = css`
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 60px;
    }

    .start {
      color: black;
      font-size: 27px;
      font-weight: 500;
    }

    .end {
      color: #7a7a7a;
      font-size: 20px;
      font-weight: 400;
    }
  `;
}
