/**
 * Copyright 2025 p0tater
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js"; 
import "@haxtheweb/scroll-button/scroll-button.js";
import '@haxtheweb/a11y-gif-player/a11y-gif-player.js';
import '@haxtheweb/simple-img/simple-img.js';
export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "portfolio-very-theme";
  }

  constructor() {
    super();
    this.pages = [];
    this.title = "";
  }
  
  static get properties() {
    return {
      ...super.properties,
      pages: { type: Array },
      title: { type: String, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        scroll-behavior: smooth;
        font-family: var(--ddd-font-navigation);
      }

      scroll-button {
        position: fixed;
        bottom: var(--ddd-spacing-5);
        right: var(--ddd-spacing-5);
        z-index: 1000;
      }

      a {
        margin-right: var(--ddd-spacing-10);
        margin-left: var(--ddd-spacing-10);
        text-decoration: none !important;
        color: var(--ddd-primary-5) !important;
        font-family: var(--ddd-font-navigation);
        font-weight: var(--ddd-font-weight-medium);
        align-content: center;
      }

    `;
  }
  firstUpdated(changedProperties) {
    this.querySelectorAll('portfolio-screen').forEach((screen, index) => {
      this.pages = [...this.pages, {
        number: index,
        title: screen.title,
      }];
    })
    console.log(this.pages);
  }
  // <a11y-gif-player src="https://i.pinimg.com/originals/08/96/4c/08964cddfe354f0ee57780bda5214090.gif" __playing="true" style="width: 150px; opacity: .6;"></a11y-gif-player>

  render() {
    return html`

    <nav-bar>
      ${this.pages.map((page) => html`<a href="#screen-${page.number}" title="${page.title}">${page.title}</a> `)}
    </nav-bar>
    <div class="wrapper">
      <slot></slot>
    </div>

      <scroll-button direction="up"></scroll-button>
    `;
  }
}

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);