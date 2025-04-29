/**
 * Copyright 2025 p0tater
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `nav-bar`
 * 
 * @demo index.html
 * @element nav-bar
 */
export class navBar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nav-bar";
  }


  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
    :host {
        position: fixed;
        top: 20vh;
        width: 100vw;
        height: 75px;
        background-color: var(--ddd-theme-default-potential70);
        color: var(--ddd-accent-0);
        display: flex;
        align-items: center;
        margin-left: var(--ddd-spacing-12);
    }

    header{
      display: flex;
      width: 100%;
    }

     a, hax-logo {
      margin-left: auto;
      margin-right: var(--ddd-spacing-10);
      height: 30px;
      text-decoration: none !important;
      color: var(--ddd-primary-5) !important;
      margin-top: var(--ddd-spacing-1);

    }
   
    `];
  }

  /*

   <a href="#screen-0" @click="${() => this.screenJump('screen-0')}">About Me</a>
    <a href="#screen-1" @click="${() => this.screenJump('screen-1')}">Research</a>
    <a href="#screen-2" @click="${() => this.screenJump('screen-2')}">Publications</a>
    <a href="#screen-3" @click="${() => this.screenJump('screen-3')}">Professional Development</a>
    <a class="contact" href="#screen-4" @click="${() => this.screenJump('screen-4')}">Contact</a>


  */

  // Lit render the HTML
  render() {
    return html`
    <header class="navBar">
        <slot>

        </slot>
        <a href="https://hax.psu.edu"><hax-logo size="mini"></hax-logo></a>
    </header>
`;
  }


}

globalThis.customElements.define(navBar.tag, navBar);