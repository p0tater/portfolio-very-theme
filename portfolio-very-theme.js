/**
 * Copyright 2025 p0tater
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/scroll-button/scroll-button.js";

/**
 * `portfolio-very-theme`
 * 
 * @demo index.html
 * @element portfolio-very-theme
 */
export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-theme";
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
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);

      }
      h3 span {
        font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
      }
      span {
        margin-left: auto;
        margin-top: var(--ddd-spacing-10);
        padding-right: var(--ddd-spacing-30);
        font-size: var(--ddd-font-size-m);
        font-family: var(--ddd-font-primary);
     }

    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <portfolio-screen id="screen-0">
    <span slot="title">About Me</span> 
  </portfolio-screen>
  <portfolio-screen id="screen-1">
   <span slot="title">Research</span> 
  </portfolio-screen>
  <portfolio-screen id="screen-2">
    <span slot="title">Publications</span> 
  </portfolio-screen>
  <portfolio-screen id="screen-3">
    <span slot="title">Professional Development</span>
  </portfolio-screen>
  <portfolio-screen id="screen-4">
    <span slot="title">Contact</span>
  </portfolio-screen>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
}

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);