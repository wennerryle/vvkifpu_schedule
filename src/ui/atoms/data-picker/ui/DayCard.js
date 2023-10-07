import { LitElement, css, html } from 'lit'
import { classMap } from 'lit/directives/class-map.js'

export class DayCard extends LitElement {
    static properties = {
        active: {},
        shortNameDay: {},
        numberOfDay: {}
    }
    
    constructor() {
        super()
        this.classesMap = { active: false }
    }

    set active(val) {
        this.classesMap.active = val === '' ? true : false;
        this.requestUpdate();
    }

    get active() { return this.classesMap.active; }

    render() {
        return html`
            <div class="${classMap(this.classesMap)}">
                <p class="shortNameDay">${this.shortNameDay}</p>
                <p class="numberOfDay">${this.numberOfDay}</p>
            </div>
        `
    }

    static styles = css`
        .active {
            color: #8037FF;
            background-color: #FFFFFF;   
        }

        .active:hover {
            background-color: #394277;
            color: #FFFFFF
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
            color: #FFFFFF;
            border-radius: 26px;
            background-color: #8037FF;
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
    `
}