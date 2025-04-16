/**
 * Copyright 2025 p0tater
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";

export class PortfolioVeryTheme extends LitElement {
  static get tag() {
    return "portfolio-very-theme";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);