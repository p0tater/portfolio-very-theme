/**
 * Copyright 2025 p0tater
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js"; 
import "@haxtheweb/scroll-button/scroll-button.js";
import '@haxtheweb/a11y-gif-player/a11y-gif-player.js';

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

      span[slot="title"] {
        font-size: var(--ddd-font-size-l);
        font-family: var(--ddd-font-secondary);
        font-weight: var(--ddd-font-weight-bold);
        align-self: flex-end;
        margin-top: var(--ddd-spacing-25);
      }
      scroll-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
      }
      img{
        max-width: 300px;
      }
      .navBar {
        position: fixed;
        top: 20vh;
        left: 0;
        right: 0;
        height: 75px;
        background-color: rgba(39, 37, 37, 0.589);
        color: var(--ddd-accent-0);
        display: flex;
        align-items: center;
        margin-left: var(--ddd-spacing-12);
        overflow: auto;
        scrollbar-width: none;
      }
      a {
        padding: var(--ddd-spacing-10);
        text-decoration: none !important;
        color: var(--ddd-primary-5) !important;
        font-family: var(--ddd-font-secondary);
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

    <div class="navBar"> 
      <a href="#screen-0">About Me</a>
      <a href="#screen-1">Research</a>
      <a href="#screen-2">Publications</a>
      <a href="#screen-3">Professional Development</a>
      <a class="contact" href="#screen-4">Contact</a>
    <a11y-gif-player src="https://i.pinimg.com/originals/08/96/4c/08964cddfe354f0ee57780bda5214090.gif" __playing="true" style="width: 140px; margin-left: auto; opacity: .6;"></a11y-gif-player>
      </div>

      <portfolio-screen id="screen-0">
        <span slot="title">About Me</span>
        <span slot="img"><img src="https://images.ctfassets.net/ni9rh5nu0d99/2p1eWsDl9umbeRKa02UEsQ/bba80b11dd34aecab19db215eaa8bb59/brandywine-01.jpg"></span>
        <span slot="content">I am a PhD student at the University of Delaware. I am also interested in the intersection of human-computer interaction and machine learning.</span>
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