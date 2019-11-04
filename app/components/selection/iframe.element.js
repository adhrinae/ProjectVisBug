import { MetatipStyles } from "../styles.store"

export class Iframe extends HTMLElement {
  constructor() {
    super()
    this.$shadow = this.attachShadow({mode: 'closed'})
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = [MetatipStyles]
  }

  render() {
    this.$shadow.innerHTML = `
      <figure>
        <h5>This element is an iframe</h5>
        <h6>So that VisBug cannot handle this element right now.</h6>
        <h6>Ctrl(Cmd) + Click to open this iframe in a new tab and turn on VisBug again.</h6>
      </figure>
    `
  }
}

customElements.define('visbug-iframe', Iframe)
