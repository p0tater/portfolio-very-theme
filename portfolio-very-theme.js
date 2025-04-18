/**
 * Copyright 2025 p0tater
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js"; 
import "@haxtheweb/scroll-button/scroll-button.js";


export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "portfolio-very-theme";
  }

  static get styles() {
    return css`
      :host {
        display: block;
        scroll-behavior: smooth;
      }

      .contact {
        margin-left: auto;
      }
      portfolio-screen {
        display: block;
      }
      span {
        font-size: var(--ddd-font-size-l);
        padding-left: 115vh;
        padding-top: 10vh;
        font-family: var(--ddd-font-secondary);
        font-weight: var(--ddd-font-weight-bold);
      }
      scroll-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
      }
    `;
  }
  screenJump(hash) {
    console.log(hash);
    //const target = this.shadowRoot.querySelector(`${hash}`);
    const target = this.shadowRoot.getElementById(`${hash}`);
    console.log(target);
    target.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return html`

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
        <div id="screen"></div>
        <span slot="title">Contact</span>
      </portfolio-screen>
      <scroll-button direction="up"></scroll-button>
    `;
  }
}

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);