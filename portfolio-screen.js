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
    this.title = "";

  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
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

     .stuffs {
        display: flex;
        margin-top: var(--ddd-spacing-30);
        margin-left: var(--ddd-spacing-15);
        justify-content: center;
     }
   
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="screen">
 <slot name="title"></slot>
    <div class="stuffs">
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