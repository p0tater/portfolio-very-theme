/**
 * Copyright 2025 p0tater
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
//import "@haxtheweb/scroll-button/scroll-button.js";

/**
 * `portfolio-screen`
 * 
 * @demo index.html
 * @element portfolio-screen
 */
export class PortfolioScreen extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-screen";
  }

  constructor() {
    super();
    this.title = "Default";
    this.pagenumber = 0;

  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String, reflect: true },
      pagenumber: { type: Number, reflect: true, attribute: 'pagenumber' }, 
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
     .screen {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
     }

     .core {
        display: flex;
        justify-content: space-evenly;
        //margin: var(--ddd-spacing-25)  var(--ddd-spacing-30) 0  var(--ddd-spacing-30);
        margin-top: var(--ddd-spacing-20);
     }

     :host(:nth-of-type(even)) .core {
      flex-flow: row-reverse;
    }
    .title{
     align-self: flex-end;
     font-size: var(--ddd-font-size-xl);
     font-family: var(--ddd-font-navigation);
     font-weight: var(--ddd-font-weight-regular);   
     margin-top: var(--ddd-spacing-27);
    }
     
   
    `];
  }

  firstUpdated(changedProperties) {
    if(super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    
  }


  // Lit render the HTML
  render() {
    return html`
<div class="screen">
 <div class="title"> ${this.title}</div>
    <div class="core">
        <slot name="img"></slot>
        <slot name="content"></slot>
     </div>

</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
}

globalThis.customElements.define(PortfolioScreen.tag, PortfolioScreen);