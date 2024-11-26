import{aN as Ge,av as pn,r as Hs,aD as zs,Z as qs,$ as Ws,a6 as Us,a9 as ki,aa as Ci,d as Vs}from"./index-D4hFuwop.js";import{r as at,x as F,E as st,Z as Gs,T as Xi}from"./lit-element-Cxe0nT8i.js";import{e as Zi,i as Ji,t as Qi}from"./directive-CF8sV3Lr.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*gn(e,t){if(e!==void 0){let r=0;for(const n of e)yield t(n,r++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ze(e,t,r){return e?t(e):r?.(e)}const Ks=`
:host {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  line-height: 1;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
form#itemfilter {
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}
form#itemfilter:not(.inline) {
  overflow-y: auto;
}
details {
  width: 100%;
}
`,Pr=`
:host, :root {
  --item-color: color-mix(
    in srgb,
    var(--primary-color) 10%,
    transparent
  );
  --item-hover-color: color-mix(
    in srgb,
    var(--secondary-color) 30%,
    transparent
  );
  --item-select-color: var(--primary-color);
  --inline-bg-color: color-mix(
    in srgb,
    var(--secondary-color) 10%,
    transparent
  );
  --border-color: color-mix(
    in srgb,
    #000000 20%,
    transparent
  );
  --background-color: #fff;
  --padding: 0.5rem;
  --text-transform: capitalize;
}
* {
  font-family: Roboto, sans-serif;
}
ul {
  padding-left: 0;
  margin-top: 0;
}
li {
  list-style: none;
}
li span {
  text-overflow: ellipsis;
  white-space: nowrap;
}
li label {
  display: flex;
  align-items: center;
}
details summary > * {
  display: inline;
}
details summary {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0002;
  padding: .5rem var(--padding);
}

details > summary::-webkit-details-marker {
  display: none;
}

.title {
  font-size: 13px;
  align-items: center;
  text-transform: var(--text-transform);
}
.subtitle {
  font-size: 11px;
  opacity: .7;
  margin-top: 6px;
}
.title-container {
  display: flex;
  flex-direction: column;
}
h6.main-heading {
  font-size: 1rem;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-top: var(--padding);
  padding: 0 var(--padding);
}
details summary .title {
  display: flex;
  font-weight: 500;
}
details.details-filter summary::after,
details.details-results summary::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230009' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  height: 24px;
  width: 24px;
}
details.details-filter summary::after {
  position: absolute;
  right: 8px;
  transform: rotate(90deg);
}
details[open] summary::before {
  transform: rotate(90deg);
}
details[open] summary::after {
  transform: rotate(270deg);
}
eox-itemfilter-expandcontainer {
  max-height: 200px;
}
eox-itemfilter-expandcontainer > [data-type=filter] {
  display: block;
  height: calc(100% - 32px);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 var(--padding);
}
[data-type=filter] .title,
details summary {
  text-transform: var(--text-transform);
}
li,
label,
details,
input[type="checkbox"],
input[type="radio"] {
  cursor: pointer;
}
input[type="checkbox"],
input[type="radio"] {
  margin: 0;
}
input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 5px 7px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
}
section:not(section:last-of-type) {
  margin-bottom: 1rem;
}
#section-results {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
}
ul:not(#filters) > li {
  padding: 5px 0;
}
ul#results li {
  padding: 5px var(--padding);
}
section {
  position: relative;
  background-color: var(--background-color);
}
button#filter-reset {
  position: absolute;
  top: 0;
  right: var(--padding);
  padding: 2px 10px;
}
.count {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary-color);
  padding: 0 12px;
  height: 20px;
  border-radius: 10px;
  color: var(--primary-color);
  font-weight: 500;
  margin-left: 9px;
}
eox-itemfilter-range,
tc-range-slider {
  align-items: center;
  display: block;
}
tc-range-slider {
  width: calc(100% - 16px);
  margin-left: 8px;
  margin-right: 8px;
  --width: 100%;
}
.range-before,
.range-after {
  font-size: small;
}
.range-before,
.range-after {
  margin: 1rem 0px;
}

button.reset-icon:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
eox-itemfilter-expandcontainer button.reset-icon {
  margin-left: 4px;
  margin-top: -5px;
  height: 14px;
  width: 14px;
}
eox-itemfilter-expandcontainer button.reset-icon:before {
  height: 14px;
  width: 14px;
}
.inline-content {
  border: 1.5px solid var(--secondary-color);
  border-radius: 4px;
  max-height: 300px;
  overflow-y: auto;
  background: var(--inline-bg-color);
  margin-top: 4px;
  padding: 8px;
}
.inline-container {
  position: relative;
  align-items: center;
}
.inline-container-wrapper {
  width: 100%;
  position: relative;
}
.inline-container {
  position: relative;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  height: 24px;
  padding: 8px;
  flex: 1;
  justify-content: space-between;
  cursor: text;
  transition: all 0.2s ease-in-out;
  display: flex;
}
.inline-container:hover {
  border: 1px solid var(--primary-color);
}
[popover] {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  border: none;
}
.input-container {
  display: flex;
  flex: 1;
  align-items: center;
}
.input-container input,
.input-container input:focus {
  height: 100%;
  border: none;
  outline: none;
  border: 0;
  min-width: 25%;
}
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1px;
  top: 5px;
  height: calc(100% - 10px);
  width: 34px;
  background: white;
}
button.icon {
  color: #004170;
  height: 24px;
  font-size: large;
  width: unset;
}
.inline-container::-webkit-scrollbar {
  height: 2px;
}
.inline-container::-webkit-scrollbar-thumb {
  background: lightgrey;
  border-radius: 2px;
}
.hidden {
  height: 0;
  padding: 0;
  border: none;
}
.hidden:hover {
  border: none;
}
.chip-title {
  pointer-events: none;
  text-transform: var(--text-transform);
}
.chip {
  display: flex;
  align-items: center;
  background: var(--item-color);
  border-radius: 30px;
  margin-right: 4px;
  padding: 5px 10px;
  font-size: small;
  cursor: default;
  white-space: nowrap;
}
.chip.highlighted {
  background: var(--primary-color);
  color: white;
}
.chip-close {
  cursor: pointer;
  font-weight: 600;
  position: absolute;
  right: -25px;
  background: white;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  height: 24px;
  width: 24px;
}
.chip-close:before {
  position: absolute;
  text-indent: 0;
  line-height: initial;
  height: 24px;
  width: 24px;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
.chip-container {
  position: relative;
  max-width: 75%;
}
.autocomplete-container,
.text-container {
  position: relative;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: text;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background: white;
}
.autocomplete-container-wrapper,
.text-container-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.autocomplete-container-wrapper::-webkit-scrollbar {
  display: none;
}
.chip-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.chip-wrapper::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}
.autocomplete-input,
.text-input {
  flex: 1;
  border: 1px solid var(--border-color);
  outline: none;
  box-sizing: border-box;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  min-width: 150px;
}
input[type="text"].text-input,
input[type="text"].autocomplete-input {
  padding: 9px 6px !important;
  border-radius: 4px;
}
.text-input:hover,
.autocomplete-input:hover {
  border: 1px solid var(--primary-color);
}
.text-input:invalid {
  border: 1px solid red;
}
.selected-items {
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
}
.select li:hover,
.multiselect li:hover,
eox-itemfilter-results li:hover {
  background: var(--item-hover-color);
}
eox-itemfilter-results li.highlighted {
  color: var(--background-color);
  background: var(--item-select-color);
}
.selected-item span {
  margin-right: 8px;
}
.selected-item button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
}
.multiselect-container,
.select-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.multiselect-container label,
.select-container label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.multiselect-container input,
.select-container input {
  margin-right: 8px;
}
.select-overflow {
  max-height: 185px;
  overflow-y: auto;
}
.chip-title strong {
  font-weight: 500;
}
.chip-wrapper {
  max-width: 100%;
  overflow-x: scroll;
}
.chip-container {
  display: flex;
  flex: 0;
}
.input-container.dirty-filter-input {
  margin-left: 25px;
}
.error-validation {
  position: relative;
  color: red;
  font-size: x-small;
  top: -8px;
}
`,Ys=`:root,:host { --spacing: 1rem; --block-spacing-vertical: calc(var(--spacing) * 2); --block-spacing-horizontal: var(--spacing); --background-color: var(--eox-background-color, white); --color: var(--eox-color, #2c3d49); --h-color: var(--eox-h-color, var(--color)); --hover-transparency: var(--eox-hover-transparency, 20%); --bg-hover-transparency: var(--eox-bg-hover-transparency, 40%); --btn-hover-transparency: var(--eox-btn-hover-transparency, 80%); --primary-color: var(--eox-primary-color, #004170); --primary-color-hover: color-mix( in srgb, var(--primary-color) var(--hover-transparency), transparent ); --primary-bg-color-hover: color-mix( in srgb, var(--primary-color) var(--bg-hover-transparency), transparent ); --primary-btn-color-hover: color-mix( in srgb, var(--primary-color) var(--btn-hover-transparency), transparent ); --secondary-color: var(--eox-secondary-color, #c6d4df); --secondary-color-hover: color-mix( in srgb, var(--secondary-color) var(--hover-transparency), transparent ); --secondary-bg-color-hover: color-mix( in srgb, var(--secondary-color) var(--bg-hover-transparency), transparent ); --secondary-btn-color-hover: color-mix( in srgb, var(--secondary-color) var(--btn-hover-transparency), transparent ); --success: var(--eox-success, #26cc0f); --warning: var(--eox-warning, #f18e32); --error: var(--eox-error, #ff5252); --header-font-family: var(--eox-header-font-family, "Roboto", sans-serif); --body-font-family: var(--eox-body-font-family, "Roboto", sans-serif);}* { font-size: normal; font-family: var(--body-font-family); color: var(--eox-color);}h1,h2,h3,h4,h5,h6 { font-family: var(--header-font-family);}span,p,div,main,label { font-family: var(--body-font-family);}@media (min-width: 576px) { .container { max-width: 510px; padding-right: 0; padding-left: 0; --block-spacing-vertical: calc(var(--spacing) * 2.5); }}@media (min-width: 768px) { .container { max-width: 700px; --block-spacing-vertical: calc(var(--spacing) * 3); }}@media (min-width: 992px) { .container { max-width: 920px; --block-spacing-vertical: calc(var(--spacing) * 3.5); }}@media (min-width: 1200px) { .container { max-width: 1130px; --block-spacing-vertical: calc(var(--spacing) * 4); }}.container { width: 100%; margin-right: auto; margin-left: auto; display: block; padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);}h1,h2,h3 { line-height: 120%; margin-top: 0.8rem; margin-bottom: 0.8rem;}p { --font-size: 1rem; font-weight: 400; line-height: 170%; margin-top: 0.8rem; margin-bottom: 1.6rem; font-size: var(--font-size);}body { padding: 0; margin: 0;}.sb-show-main.sb-main-padded { padding: 0;}h1,h2,h3,h4,h5,h6 { --font-weight: 700;}h1 { --font-size: 3rem; --typography-spacing-vertical: 0.5rem;}h2 { --font-size: 2rem; --typography-spacing-vertical: 0.5rem;}h3 { --font-size: 1.75rem; --typography-spacing-vertical: 0.5rem;}h4 { --font-size: 1.5rem; --typography-spacing-vertical: 0.5rem;}h5 { --font-size: 1.25rem; --typography-spacing-vertical: 0.5rem;}h1,h2,h3,h4,h5,h6 { margin-top: 0; margin-bottom: var(--typography-spacing-vertical); color: var(--h-color); font-weight: var(--font-weight); font-size: var(--font-size); font-family: var(--header-font-family);}button,.button { display: inline-flex; position: relative; align-items: center; color: #fff; border-width: 0; outline: none; border-radius: 4px; padding: 16px; height: 36px; cursor: pointer; font-family: inherit; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 1.25px; font-weight: 500; box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); transition-property: box-shadow, transform, opacity, background; transition-duration: 0.28s; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);}button:hover:not([disabled]):not(.icon):not(.json-editor-btntype-*),.button:hover:not([disabled]):not(.icon) { box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); background: var(--primary-btn-color-hover);}button,button:active,.button,.button:active { background: var(--primary-color);}button[disabled],.button[disabled] { opacity: 0.5; cursor: not-allowed;}button.block,.button.block { display: block;}button.outline,.button.outline { background: transparent; box-shadow: none; color: var(--primary-color); outline: 1px solid var(--primary-color);}button.outline:hover,.button.outline:hover { background: transparent;}button.icon,.button.icon,button[class*="json-editor-btntype-"] { background: transparent; border: none; box-shadow: none; padding: 0; border-radius: 50%; width: 24px; height: 24px; text-indent: -9999px;}button.icon-text,.button.icon-text { text-indent: 26px;}button.icon-text.block,.button.icon-text.block { text-indent: 20px;}button.icon:before,button.icon-text:before,.button.icon:before,.button.icon-text:before { position: absolute; text-indent: 0; line-height: initial;}button.icon-text.block:before,.button.icon-text.block:before { text-indent: -54px;}button.icon:before,.button.icon:before,button[class*="json-editor-btntype-"]::before { width: 24px; height: 24px; margin-right: 0;}button.icon-text:before,.button.icon-text:before { width: 18px; height: 18px;}button.small,.button.small { height: 28px; padding: 12.4px; font-size: 0.75rem;}button.smallest.icon,button.smallest.icon::before { height: 16px; width: 16px; padding: 0;}input[type="checkbox"] { appearance: none; -webkit-appearance: none; margin: 0; cursor: pointer; display: flex; flex-direction: row; align-items: center; width: 24px; height: 24px;}input[type="checkbox"]:after { display: block; content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-blank-outline%3C/title%3E%3Cpath d='M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z' /%3E%3C/svg%3E"); width: 20px; height: 20px; margin-right: 4px;}input[type="checkbox"]:checked:after { content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-marked%3C/title%3E%3Cpath d='M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z' /%3E%3C/svg%3E");}textarea { height: 90px; resize: none; border-radius: 4px; box-sizing: border-box !important; width: 100%; padding: 5px 7px; border: 1px solid var(--secondary-color); font-size: smaller; background: var(--background-color);}input[type="text"],input[type="url"],input[type="email"],input[type="password"],input[type="text"],input[type="number"],input[type="search"],input[type="tel"],select { box-sizing: border-box; width: 100%; margin-top: 0.5rem; margin-bottom: 0.5rem; padding: 5px 7px; border-radius: 4px; border: 1px solid #0004;}ul.list-wrap { padding: 0;}ul.list-wrap li:hover,ul.list-wrap li.selected { background: var(--secondary-bg-color-hover);}ul.list-wrap li { list-style: none; padding: 4px;}ul.list-wrap li { border-bottom: 1.2px solid var(--secondary-color);}ul.list-wrap li:first-child { border-top: 1.2px solid var(--secondary-color);}ul.list-wrap li .list { width: 100%; align-items: center; justify-content: space-between; display: flex; align-items: center; cursor: pointer; font-size: small; gap: 10px;}ul.list-wrap li .list span { display: flex; align-items: center; cursor: pointer; font-size: small; flex-grow: 1;}input[type="radio"] { appearance: none; -webkit-appearance: none; margin: 0; cursor: pointer; display: flex; flex-direction: row; align-items: center; width: 24px; height: 24px;}label span { font-size: small;}input[type="radio"]:after { display: block; content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-blank%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' /%3E%3C/svg%3E"); width: 20px; height: 20px; margin-right: 4px;}input[type="radio"]:checked:after { content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-marked%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z' /%3E%3C/svg%3E");}input[type="range"] { -webkit-appearance: none; width: 90%; margin-left: 5%; height: 6px; border-radius: 5px; background: #d7dcdf; outline: none; padding: 0;}input[type="range"]::-webkit-slider-thumb { appearance: none; width: 15px; height: 15px; border-radius: 50%; background: #2c3e50; cursor: pointer; transition: background 0.15s ease-in-out;}.range-slider { margin: 60px 0 0 0;}.range-slider { width: 100%;}input[type="range"]::-webkit-slider-thumb:hover { background: #00416f;}input[type="range"]:active::-webkit-slider-thumb { background: #00416f;}input[type="range"]::-moz-range-thumb { width: 15px; height: 15px; border: 0; border-radius: 50%; background: #2c3e50; cursor: pointer; transition: background 0.15s ease-in-out;}input[type="range"]::-moz-range-thumb:hover { background: #00416f;}input[type="range"]:active::-moz-range-thumb { background: #00416f;}input[type="range"]:focus::-webkit-slider-thumb { box-shadow: 0 0 0 3px #fff0, 0 0 0 6px #00416f00;}.range-slider__value { display: inline-block; position: relative; width: 60px; color: #fff; line-height: 20px; text-align: center; border-radius: 3px; background: #2c3e50; padding: 5px 10px; margin-left: 8px;}.range-slider__value:after { position: absolute; top: 8px; left: -7px; width: 0; height: 0; border-top: 7px solid transparent; border-right: 7px solid #2c3e50; border-bottom: 7px solid transparent; content: "";}input::-moz-focus-inner,input::-moz-focus-outer { border: 0;}`;class Fs extends at{static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}constructor(){super(),this.filterObject={},this.unstyled=!1}#e(t){this.dispatchEvent(new CustomEvent("details-toggled",{detail:t,bubbles:!0,composed:!0}))}render(){return F`
      <style>
        ${!this.unstyled&&Pr}
      </style>

      ${ze(this.filterObject.featured,()=>F`<slot name="filter"></slot>`,()=>F`<details
            @toggle="${this.#e}"
            class="details-filter"
            ?open=${this.filterObject.expanded||st}
          >
            <summary>
              <span
                class="title"
                style="${!this.filterObject.title&&"text-transform: var(--text-transform)"}"
              >
                ${this.filterObject.title||this.filterObject.key||"Filter"}
                <slot name="reset-button"></slot>
              </span>
            </summary>
            <div>
              <slot name="filter"></slot>
            </div>
          </details>`)}
    `}}customElements.define("eox-itemfilter-expandcontainer",Fs);function gt(e){return Array.isArray?Array.isArray(e):rs(e)==="[object Array]"}const Xs=1/0;function Zs(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-Xs?"-0":t}function Js(e){return e==null?"":Zs(e)}function it(e){return typeof e=="string"}function es(e){return typeof e=="number"}function Qs(e){return e===!0||e===!1||eo(e)&&rs(e)=="[object Boolean]"}function ts(e){return typeof e=="object"}function eo(e){return ts(e)&&e!==null}function Ve(e){return e!=null}function Yn(e){return!e.trim().length}function rs(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const to="Incorrect 'index' type",ro=e=>`Invalid value for key ${e}`,no=e=>`Pattern length exceeds max of ${e}.`,io=e=>`Missing ${e} property in key`,so=e=>`Property 'weight' in key '${e}' must be a positive integer`,Li=Object.prototype.hasOwnProperty;class oo{constructor(t){this._keys=[],this._keyMap={};let r=0;t.forEach(n=>{let i=ns(n);this._keys.push(i),this._keyMap[i.id]=i,r+=i.weight}),this._keys.forEach(n=>{n.weight/=r})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ns(e){let t=null,r=null,n=null,i=1,o=null;if(it(e)||gt(e))n=e,t=Ei(e),r=ri(e);else{if(!Li.call(e,"name"))throw new Error(io("name"));const a=e.name;if(n=a,Li.call(e,"weight")&&(i=e.weight,i<=0))throw new Error(so(a));t=Ei(a),r=ri(a),o=e.getFn}return{path:t,id:r,weight:i,src:n,getFn:o}}function Ei(e){return gt(e)?e:e.split(".")}function ri(e){return gt(e)?e.join("."):e}function ao(e,t){let r=[],n=!1;const i=(o,a,l)=>{if(Ve(o))if(!a[l])r.push(o);else{let u=a[l];const d=o[u];if(!Ve(d))return;if(l===a.length-1&&(it(d)||es(d)||Qs(d)))r.push(Js(d));else if(gt(d)){n=!0;for(let g=0,y=d.length;g<y;g+=1)i(d[g],a,l+1)}else a.length&&i(d,a,l+1)}};return i(e,it(t)?t.split("."):t,0),n?r:r[0]}const lo={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},co={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},uo={location:0,threshold:.6,distance:100},fo={useExtendedSearch:!1,getFn:ao,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var K={...co,...lo,...uo,...fo};const ho=/[^ ]+/g;function po(e=1,t=3){const r=new Map,n=Math.pow(10,t);return{get(i){const o=i.match(ho).length;if(r.has(o))return r.get(o);const a=1/Math.pow(o,.5*e),l=parseFloat(Math.round(a*n)/n);return r.set(o,l),l},clear(){r.clear()}}}class bi{constructor({getFn:t=K.getFn,fieldNormWeight:r=K.fieldNormWeight}={}){this.norm=po(r,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((r,n)=>{this._keysMap[r.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,it(this.docs[0])?this.docs.forEach((t,r)=>{this._addString(t,r)}):this.docs.forEach((t,r)=>{this._addObject(t,r)}),this.norm.clear())}add(t){const r=this.size();it(t)?this._addString(t,r):this._addObject(t,r)}removeAt(t){this.records.splice(t,1);for(let r=t,n=this.size();r<n;r+=1)this.records[r].i-=1}getValueForItemAtKeyId(t,r){return t[this._keysMap[r]]}size(){return this.records.length}_addString(t,r){if(!Ve(t)||Yn(t))return;let n={v:t,i:r,n:this.norm.get(t)};this.records.push(n)}_addObject(t,r){let n={i:r,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(t):this.getFn(t,i.path);if(Ve(a)){if(gt(a)){let l=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:d,value:g}=u.pop();if(Ve(g))if(it(g)&&!Yn(g)){let y={v:g,i:d,n:this.norm.get(g)};l.push(y)}else gt(g)&&g.forEach((y,w)=>{u.push({nestedArrIndex:w,value:y})})}n.$[o]=l}else if(it(a)&&!Yn(a)){let l={v:a,n:this.norm.get(a)};n.$[o]=l}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function is(e,t,{getFn:r=K.getFn,fieldNormWeight:n=K.fieldNormWeight}={}){const i=new bi({getFn:r,fieldNormWeight:n});return i.setKeys(e.map(ns)),i.setSources(t),i.create(),i}function go(e,{getFn:t=K.getFn,fieldNormWeight:r=K.fieldNormWeight}={}){const{keys:n,records:i}=e,o=new bi({getFn:t,fieldNormWeight:r});return o.setKeys(n),o.setIndexRecords(i),o}function tn(e,{errors:t=0,currentLocation:r=0,expectedLocation:n=0,distance:i=K.distance,ignoreLocation:o=K.ignoreLocation}={}){const a=t/e.length;if(o)return a;const l=Math.abs(n-r);return i?a+l/i:l?1:a}function yo(e=[],t=K.minMatchCharLength){let r=[],n=-1,i=-1,o=0;for(let a=e.length;o<a;o+=1){let l=e[o];l&&n===-1?n=o:!l&&n!==-1&&(i=o-1,i-n+1>=t&&r.push([n,i]),n=-1)}return e[o-1]&&o-n>=t&&r.push([n,o-1]),r}const Nt=32;function bo(e,t,r,{location:n=K.location,distance:i=K.distance,threshold:o=K.threshold,findAllMatches:a=K.findAllMatches,minMatchCharLength:l=K.minMatchCharLength,includeMatches:u=K.includeMatches,ignoreLocation:d=K.ignoreLocation}={}){if(t.length>Nt)throw new Error(no(Nt));const g=t.length,y=e.length,w=Math.max(0,Math.min(n,y));let m=o,_=w;const k=l>1||u,q=k?Array(y):[];let B;for(;(B=e.indexOf(t,_))>-1;){let ue=tn(t,{currentLocation:B,expectedLocation:w,distance:i,ignoreLocation:d});if(m=Math.min(ue,m),_=B+g,k){let ve=0;for(;ve<g;)q[B+ve]=1,ve+=1}}_=-1;let X=[],Y=1,ce=g+y;const te=1<<g-1;for(let ue=0;ue<g;ue+=1){let ve=0,Me=ce;for(;ve<Me;)tn(t,{errors:ue,currentLocation:w+Me,expectedLocation:w,distance:i,ignoreLocation:d})<=m?ve=Me:ce=Me,Me=Math.floor((ce-ve)/2+ve);ce=Me;let fe=Math.max(1,w-Me+1),ie=a?y:Math.min(w+Me,y)+g,He=Array(ie+2);He[ie+1]=(1<<ue)-1;for(let O=ie;O>=fe;O-=1){let S=O-1,A=r[e.charAt(S)];if(k&&(q[S]=+!!A),He[O]=(He[O+1]<<1|1)&A,ue&&(He[O]|=(X[O+1]|X[O])<<1|1|X[O+1]),He[O]&te&&(Y=tn(t,{errors:ue,currentLocation:S,expectedLocation:w,distance:i,ignoreLocation:d}),Y<=m)){if(m=Y,_=S,_<=w)break;fe=Math.max(1,2*w-_)}}if(tn(t,{errors:ue+1,currentLocation:w,expectedLocation:w,distance:i,ignoreLocation:d})>m)break;X=He}const Z={isMatch:_>=0,score:Math.max(.001,Y)};if(k){const ue=yo(q,l);ue.length?u&&(Z.indices=ue):Z.isMatch=!1}return Z}function mo(e){let t={};for(let r=0,n=e.length;r<n;r+=1){const i=e.charAt(r);t[i]=(t[i]||0)|1<<n-r-1}return t}class ss{constructor(t,{location:r=K.location,threshold:n=K.threshold,distance:i=K.distance,includeMatches:o=K.includeMatches,findAllMatches:a=K.findAllMatches,minMatchCharLength:l=K.minMatchCharLength,isCaseSensitive:u=K.isCaseSensitive,ignoreLocation:d=K.ignoreLocation}={}){if(this.options={location:r,threshold:n,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:d},this.pattern=u?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const g=(w,m)=>{this.chunks.push({pattern:w,alphabet:mo(w),startIndex:m})},y=this.pattern.length;if(y>Nt){let w=0;const m=y%Nt,_=y-m;for(;w<_;)g(this.pattern.substr(w,Nt),w),w+=Nt;if(m){const k=y-Nt;g(this.pattern.substr(k),k)}}else g(this.pattern,0)}searchIn(t){const{isCaseSensitive:r,includeMatches:n}=this.options;if(r||(t=t.toLowerCase()),this.pattern===t){let _={isMatch:!0,score:0};return n&&(_.indices=[[0,t.length-1]]),_}const{location:i,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,ignoreLocation:d}=this.options;let g=[],y=0,w=!1;this.chunks.forEach(({pattern:_,alphabet:k,startIndex:q})=>{const{isMatch:B,score:X,indices:Y}=bo(t,_,k,{location:i+q,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,includeMatches:n,ignoreLocation:d});B&&(w=!0),y+=X,B&&Y&&(g=[...g,...Y])});let m={isMatch:w,score:w?y/this.chunks.length:1};return w&&n&&(m.indices=g),m}}class $t{constructor(t){this.pattern=t}static isMultiMatch(t){return Pi(t,this.multiRegex)}static isSingleMatch(t){return Pi(t,this.singleRegex)}search(){}}function Pi(e,t){const r=e.match(t);return r?r[1]:null}class vo extends $t{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const r=t===this.pattern;return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class wo extends $t{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const n=t.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class xo extends $t{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const r=t.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class Mo extends $t{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const r=!t.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class $o extends $t{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const r=t.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class _o extends $t{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const r=!t.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class os extends $t{constructor(t,{location:r=K.location,threshold:n=K.threshold,distance:i=K.distance,includeMatches:o=K.includeMatches,findAllMatches:a=K.findAllMatches,minMatchCharLength:l=K.minMatchCharLength,isCaseSensitive:u=K.isCaseSensitive,ignoreLocation:d=K.ignoreLocation}={}){super(t),this._bitapSearch=new ss(t,{location:r,threshold:n,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:d})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class as extends $t{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let r=0,n;const i=[],o=this.pattern.length;for(;(n=t.indexOf(this.pattern,r))>-1;)r=n+o,i.push([n,r-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const ni=[vo,as,xo,Mo,_o,$o,wo,os],Ri=ni.length,Ao=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,So="|";function ko(e,t={}){return e.split(So).map(r=>{let n=r.trim().split(Ao).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=n.length;o<a;o+=1){const l=n[o];let u=!1,d=-1;for(;!u&&++d<Ri;){const g=ni[d];let y=g.isMultiMatch(l);y&&(i.push(new g(y,t)),u=!0)}if(!u)for(d=-1;++d<Ri;){const g=ni[d];let y=g.isSingleMatch(l);if(y){i.push(new g(y,t));break}}}return i})}const Co=new Set([os.type,as.type]);class Lo{constructor(t,{isCaseSensitive:r=K.isCaseSensitive,includeMatches:n=K.includeMatches,minMatchCharLength:i=K.minMatchCharLength,ignoreLocation:o=K.ignoreLocation,findAllMatches:a=K.findAllMatches,location:l=K.location,threshold:u=K.threshold,distance:d=K.distance}={}){this.query=null,this.options={isCaseSensitive:r,includeMatches:n,minMatchCharLength:i,findAllMatches:a,ignoreLocation:o,location:l,threshold:u,distance:d},this.pattern=r?t:t.toLowerCase(),this.query=ko(this.pattern,this.options)}static condition(t,r){return r.useExtendedSearch}searchIn(t){const r=this.query;if(!r)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:i}=this.options;t=i?t:t.toLowerCase();let o=0,a=[],l=0;for(let u=0,d=r.length;u<d;u+=1){const g=r[u];a.length=0,o=0;for(let y=0,w=g.length;y<w;y+=1){const m=g[y],{isMatch:_,indices:k,score:q}=m.search(t);if(_){if(o+=1,l+=q,n){const B=m.constructor.type;Co.has(B)?a=[...a,...k]:a.push(k)}}else{l=0,o=0,a.length=0;break}}if(o){let y={isMatch:!0,score:l/o};return n&&(y.indices=a),y}}return{isMatch:!1,score:1}}}const ii=[];function Eo(...e){ii.push(...e)}function si(e,t){for(let r=0,n=ii.length;r<n;r+=1){let i=ii[r];if(i.condition(e,t))return new i(e,t)}return new ss(e,t)}const an={AND:"$and",OR:"$or"},oi={PATH:"$path",PATTERN:"$val"},ai=e=>!!(e[an.AND]||e[an.OR]),Po=e=>!!e[oi.PATH],Ro=e=>!gt(e)&&ts(e)&&!ai(e),Ti=e=>({[an.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function ls(e,t,{auto:r=!0}={}){const n=i=>{let o=Object.keys(i);const a=Po(i);if(!a&&o.length>1&&!ai(i))return n(Ti(i));if(Ro(i)){const u=a?i[oi.PATH]:o[0],d=a?i[oi.PATTERN]:i[u];if(!it(d))throw new Error(ro(u));const g={keyId:ri(u),pattern:d};return r&&(g.searcher=si(d,t)),g}let l={children:[],operator:o[0]};return o.forEach(u=>{const d=i[u];gt(d)&&d.forEach(g=>{l.children.push(n(g))})}),l};return ai(e)||(e=Ti(e)),n(e)}function To(e,{ignoreFieldNorm:t=K.ignoreFieldNorm}){e.forEach(r=>{let n=1;r.matches.forEach(({key:i,norm:o,score:a})=>{const l=i?i.weight:null;n*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(t?1:o))}),r.score=n})}function Do(e,t){const r=e.matches;t.matches=[],Ve(r)&&r.forEach(n=>{if(!Ve(n.indices)||!n.indices.length)return;const{indices:i,value:o}=n;let a={indices:i,value:o};n.key&&(a.key=n.key.src),n.idx>-1&&(a.refIndex=n.idx),t.matches.push(a)})}function Oo(e,t){t.score=e.score}function jo(e,t,{includeMatches:r=K.includeMatches,includeScore:n=K.includeScore}={}){const i=[];return r&&i.push(Do),n&&i.push(Oo),e.map(o=>{const{idx:a}=o,l={item:t[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,l)}),l})}class _t{constructor(t,r={},n){this.options={...K,...r},this.options.useExtendedSearch,this._keyStore=new oo(this.options.keys),this.setCollection(t,n)}setCollection(t,r){if(this._docs=t,r&&!(r instanceof bi))throw new Error(to);this._myIndex=r||is(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){Ve(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const r=[];for(let n=0,i=this._docs.length;n<i;n+=1){const o=this._docs[n];t(o,n)&&(this.removeAt(n),n-=1,i-=1,r.push(o))}return r}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:r=-1}={}){const{includeMatches:n,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:l}=this.options;let u=it(t)?it(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return To(u,{ignoreFieldNorm:l}),o&&u.sort(a),es(r)&&r>-1&&(u=u.slice(0,r)),jo(u,this._docs,{includeMatches:n,includeScore:i})}_searchStringList(t){const r=si(t,this.options),{records:n}=this._myIndex,i=[];return n.forEach(({v:o,i:a,n:l})=>{if(!Ve(o))return;const{isMatch:u,score:d,indices:g}=r.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:d,value:o,norm:l,indices:g}]})}),i}_searchLogical(t){const r=ls(t,this.options),n=(l,u,d)=>{if(!l.children){const{keyId:y,searcher:w}=l,m=this._findMatches({key:this._keyStore.get(y),value:this._myIndex.getValueForItemAtKeyId(u,y),searcher:w});return m&&m.length?[{idx:d,item:u,matches:m}]:[]}const g=[];for(let y=0,w=l.children.length;y<w;y+=1){const m=l.children[y],_=n(m,u,d);if(_.length)g.push(..._);else if(l.operator===an.AND)return[]}return g},i=this._myIndex.records,o={},a=[];return i.forEach(({$:l,i:u})=>{if(Ve(l)){let d=n(r,l,u);d.length&&(o[u]||(o[u]={idx:u,item:l,matches:[]},a.push(o[u])),d.forEach(({matches:g})=>{o[u].matches.push(...g)}))}}),a}_searchObjectList(t){const r=si(t,this.options),{keys:n,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:l})=>{if(!Ve(a))return;let u=[];n.forEach((d,g)=>{u.push(...this._findMatches({key:d,value:a[g],searcher:r}))}),u.length&&o.push({idx:l,item:a,matches:u})}),o}_findMatches({key:t,value:r,searcher:n}){if(!Ve(r))return[];let i=[];if(gt(r))r.forEach(({v:o,i:a,n:l})=>{if(!Ve(o))return;const{isMatch:u,score:d,indices:g}=n.searchIn(o);u&&i.push({score:d,key:t,value:o,idx:a,norm:l,indices:g})});else{const{v:o,n:a}=r,{isMatch:l,score:u,indices:d}=n.searchIn(o);l&&i.push({score:u,key:t,value:o,norm:a,indices:d})}return i}}_t.version="7.0.0";_t.createIndex=is;_t.parseIndex=go;_t.config=K;_t.parseQuery=ls;Eo(Lo);function cs(e,t){const r=new _t(t.filterProperties,{keys:["title"]}),n=e.target.value,o=r.search(n).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(t.filters).forEach(a=>{t.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!n?"":"none"})}function No(e,t){const r=e.target.getAttribute("data-close").replace("|","-");t.querySelector(`#filter-${r}`).reset(),t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}const li=Math.min,nr=Math.max,ln=Math.round,rn=Math.floor,xt=e=>({x:e,y:e});function us(e){return e.split("-")[0]}function Bo(e){return e.split("-")[1]}function Io(e){return e==="x"?"y":"x"}function Ho(e){return e==="y"?"height":"width"}function ds(e){return["top","bottom"].includes(us(e))?"y":"x"}function zo(e){return Io(ds(e))}function fs(e){const{x:t,y:r,width:n,height:i}=e;return{width:n,height:i,top:r,left:t,right:t+n,bottom:r+i,x:t,y:r}}function Di(e,t,r){let{reference:n,floating:i}=e;const o=ds(t),a=zo(t),l=Ho(a),u=us(t),d=o==="y",g=n.x+n.width/2-i.width/2,y=n.y+n.height/2-i.height/2,w=n[l]/2-i[l]/2;let m;switch(u){case"top":m={x:g,y:n.y-i.height};break;case"bottom":m={x:g,y:n.y+n.height};break;case"right":m={x:n.x+n.width,y};break;case"left":m={x:n.x-i.width,y};break;default:m={x:n.x,y:n.y}}switch(Bo(t)){case"start":m[a]-=w*(r&&d?-1:1);break;case"end":m[a]+=w*(r&&d?-1:1);break}return m}const qo=async(e,t,r)=>{const{placement:n="bottom",strategy:i="absolute",middleware:o=[],platform:a}=r,l=o.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(t));let d=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:g,y}=Di(d,n,u),w=n,m={},_=0;for(let k=0;k<l.length;k++){const{name:q,fn:B}=l[k],{x:X,y:Y,data:ce,reset:te}=await B({x:g,y,initialPlacement:n,placement:w,strategy:i,middlewareData:m,rects:d,platform:a,elements:{reference:e,floating:t}});g=X??g,y=Y??y,m={...m,[q]:{...m[q],...ce}},te&&_<=50&&(_++,typeof te=="object"&&(te.placement&&(w=te.placement),te.rects&&(d=te.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):te.rects),{x:g,y}=Di(d,w,u)),k=-1)}return{x:g,y,placement:w,strategy:i,middlewareData:m}};function yn(){return typeof window<"u"}function ar(e){return hs(e)?(e.nodeName||"").toLowerCase():"#document"}function Ke(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function lt(e){var t;return(t=(hs(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function hs(e){return yn()?e instanceof Node||e instanceof Ke(e).Node:!1}function Je(e){return yn()?e instanceof Element||e instanceof Ke(e).Element:!1}function ot(e){return yn()?e instanceof HTMLElement||e instanceof Ke(e).HTMLElement:!1}function Oi(e){return!yn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ke(e).ShadowRoot}function Rr(e){const{overflow:t,overflowX:r,overflowY:n,display:i}=Qe(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(i)}function Wo(e){return["table","td","th"].includes(ar(e))}function bn(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function mi(e){const t=vi(),r=Je(e)?Qe(e):e;return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(r.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(r.contain||"").includes(n))}function Uo(e){let t=Mt(e);for(;ot(t)&&!sr(t);){if(mi(t))return t;if(bn(t))return null;t=Mt(t)}return null}function vi(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function sr(e){return["html","body","#document"].includes(ar(e))}function Qe(e){return Ke(e).getComputedStyle(e)}function mn(e){return Je(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Mt(e){if(ar(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Oi(e)&&e.host||lt(e);return Oi(t)?t.host:t}function ps(e){const t=Mt(e);return sr(t)?e.ownerDocument?e.ownerDocument.body:e.body:ot(t)&&Rr(t)?t:ps(t)}function Cr(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const i=ps(e),o=i===((n=e.ownerDocument)==null?void 0:n.body),a=Ke(i);if(o){const l=ci(a);return t.concat(a,a.visualViewport||[],Rr(i)?i:[],l&&r?Cr(l):[])}return t.concat(i,Cr(i,[],r))}function ci(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function gs(e){const t=Qe(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=ot(e),o=i?e.offsetWidth:r,a=i?e.offsetHeight:n,l=ln(r)!==o||ln(n)!==a;return l&&(r=o,n=a),{width:r,height:n,$:l}}function wi(e){return Je(e)?e:e.contextElement}function ir(e){const t=wi(e);if(!ot(t))return xt(1);const r=t.getBoundingClientRect(),{width:n,height:i,$:o}=gs(t);let a=(o?ln(r.width):r.width)/n,l=(o?ln(r.height):r.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Vo=xt(0);function ys(e){const t=Ke(e);return!vi()||!t.visualViewport?Vo:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Go(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==Ke(e)?!1:t}function Bt(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const i=e.getBoundingClientRect(),o=wi(e);let a=xt(1);t&&(n?Je(n)&&(a=ir(n)):a=ir(e));const l=Go(o,r,n)?ys(o):xt(0);let u=(i.left+l.x)/a.x,d=(i.top+l.y)/a.y,g=i.width/a.x,y=i.height/a.y;if(o){const w=Ke(o),m=n&&Je(n)?Ke(n):n;let _=w,k=ci(_);for(;k&&n&&m!==_;){const q=ir(k),B=k.getBoundingClientRect(),X=Qe(k),Y=B.left+(k.clientLeft+parseFloat(X.paddingLeft))*q.x,ce=B.top+(k.clientTop+parseFloat(X.paddingTop))*q.y;u*=q.x,d*=q.y,g*=q.x,y*=q.y,u+=Y,d+=ce,_=Ke(k),k=ci(_)}}return fs({width:g,height:y,x:u,y:d})}function Ko(e){let{elements:t,rect:r,offsetParent:n,strategy:i}=e;const o=i==="fixed",a=lt(n),l=t?bn(t.floating):!1;if(n===a||l&&o)return r;let u={scrollLeft:0,scrollTop:0},d=xt(1);const g=xt(0),y=ot(n);if((y||!y&&!o)&&((ar(n)!=="body"||Rr(a))&&(u=mn(n)),ot(n))){const w=Bt(n);d=ir(n),g.x=w.x+n.clientLeft,g.y=w.y+n.clientTop}return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-u.scrollLeft*d.x+g.x,y:r.y*d.y-u.scrollTop*d.y+g.y}}function Yo(e){return Array.from(e.getClientRects())}function ui(e,t){const r=mn(e).scrollLeft;return t?t.left+r:Bt(lt(e)).left+r}function Fo(e){const t=lt(e),r=mn(e),n=e.ownerDocument.body,i=nr(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),o=nr(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let a=-r.scrollLeft+ui(e);const l=-r.scrollTop;return Qe(n).direction==="rtl"&&(a+=nr(t.clientWidth,n.clientWidth)-i),{width:i,height:o,x:a,y:l}}function Xo(e,t){const r=Ke(e),n=lt(e),i=r.visualViewport;let o=n.clientWidth,a=n.clientHeight,l=0,u=0;if(i){o=i.width,a=i.height;const d=vi();(!d||d&&t==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}return{width:o,height:a,x:l,y:u}}function Zo(e,t){const r=Bt(e,!0,t==="fixed"),n=r.top+e.clientTop,i=r.left+e.clientLeft,o=ot(e)?ir(e):xt(1),a=e.clientWidth*o.x,l=e.clientHeight*o.y,u=i*o.x,d=n*o.y;return{width:a,height:l,x:u,y:d}}function ji(e,t,r){let n;if(t==="viewport")n=Xo(e,r);else if(t==="document")n=Fo(lt(e));else if(Je(t))n=Zo(t,r);else{const i=ys(e);n={...t,x:t.x-i.x,y:t.y-i.y}}return fs(n)}function bs(e,t){const r=Mt(e);return r===t||!Je(r)||sr(r)?!1:Qe(r).position==="fixed"||bs(r,t)}function Jo(e,t){const r=t.get(e);if(r)return r;let n=Cr(e,[],!1).filter(l=>Je(l)&&ar(l)!=="body"),i=null;const o=Qe(e).position==="fixed";let a=o?Mt(e):e;for(;Je(a)&&!sr(a);){const l=Qe(a),u=mi(a);!u&&l.position==="fixed"&&(i=null),(o?!u&&!i:!u&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Rr(a)&&!u&&bs(e,a))?n=n.filter(g=>g!==a):i=l,a=Mt(a)}return t.set(e,n),n}function Qo(e){let{element:t,boundary:r,rootBoundary:n,strategy:i}=e;const a=[...r==="clippingAncestors"?bn(t)?[]:Jo(t,this._c):[].concat(r),n],l=a[0],u=a.reduce((d,g)=>{const y=ji(t,g,i);return d.top=nr(y.top,d.top),d.right=li(y.right,d.right),d.bottom=li(y.bottom,d.bottom),d.left=nr(y.left,d.left),d},ji(t,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function ea(e){const{width:t,height:r}=gs(e);return{width:t,height:r}}function ta(e,t,r){const n=ot(t),i=lt(t),o=r==="fixed",a=Bt(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const u=xt(0);if(n||!n&&!o)if((ar(t)!=="body"||Rr(i))&&(l=mn(t)),n){const m=Bt(t,!0,o,t);u.x=m.x+t.clientLeft,u.y=m.y+t.clientTop}else i&&(u.x=ui(i));let d=0,g=0;if(i&&!n&&!o){const m=i.getBoundingClientRect();g=m.top+l.scrollTop,d=m.left+l.scrollLeft-ui(i,m)}const y=a.left+l.scrollLeft-u.x-d,w=a.top+l.scrollTop-u.y-g;return{x:y,y:w,width:a.width,height:a.height}}function Fn(e){return Qe(e).position==="static"}function Ni(e,t){if(!ot(e)||Qe(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return lt(e)===r&&(r=r.ownerDocument.body),r}function ms(e,t){const r=Ke(e);if(bn(e))return r;if(!ot(e)){let i=Mt(e);for(;i&&!sr(i);){if(Je(i)&&!Fn(i))return i;i=Mt(i)}return r}let n=Ni(e,t);for(;n&&Wo(n)&&Fn(n);)n=Ni(n,t);return n&&sr(n)&&Fn(n)&&!mi(n)?r:n||Uo(e)||r}const ra=async function(e){const t=this.getOffsetParent||ms,r=this.getDimensions,n=await r(e.floating);return{reference:ta(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function na(e){return Qe(e).direction==="rtl"}const ia={convertOffsetParentRelativeRectToViewportRelativeRect:Ko,getDocumentElement:lt,getClippingRect:Qo,getOffsetParent:ms,getElementRects:ra,getClientRects:Yo,getDimensions:ea,getScale:ir,isElement:Je,isRTL:na};function sa(e,t){let r=null,n;const i=lt(e);function o(){var l;clearTimeout(n),(l=r)==null||l.disconnect(),r=null}function a(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),o();const{left:d,top:g,width:y,height:w}=e.getBoundingClientRect();if(l||t(),!y||!w)return;const m=rn(g),_=rn(i.clientWidth-(d+y)),k=rn(i.clientHeight-(g+w)),q=rn(d),X={rootMargin:-m+"px "+-_+"px "+-k+"px "+-q+"px",threshold:nr(0,li(1,u))||1};let Y=!0;function ce(te){const Z=te[0].intersectionRatio;if(Z!==u){if(!Y)return a();Z?a(!1,Z):n=setTimeout(()=>{a(!1,1e-7)},1e3)}Y=!1}try{r=new IntersectionObserver(ce,{...X,root:i.ownerDocument})}catch{r=new IntersectionObserver(ce,X)}r.observe(e)}return a(!0),o}function oa(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=n,d=wi(e),g=i||o?[...d?Cr(d):[],...Cr(t)]:[];g.forEach(B=>{i&&B.addEventListener("scroll",r,{passive:!0}),o&&B.addEventListener("resize",r)});const y=d&&l?sa(d,r):null;let w=-1,m=null;a&&(m=new ResizeObserver(B=>{let[X]=B;X&&X.target===d&&m&&(m.unobserve(t),cancelAnimationFrame(w),w=requestAnimationFrame(()=>{var Y;(Y=m)==null||Y.observe(t)})),r()}),d&&!u&&m.observe(d),m.observe(t));let _,k=u?Bt(e):null;u&&q();function q(){const B=Bt(e);k&&(B.x!==k.x||B.y!==k.y||B.width!==k.width||B.height!==k.height)&&r(),k=B,_=requestAnimationFrame(q)}return r(),()=>{var B;g.forEach(X=>{i&&X.removeEventListener("scroll",r),o&&X.removeEventListener("resize",r)}),y?.(),(B=m)==null||B.disconnect(),m=null,u&&cancelAnimationFrame(_)}}const aa=(e,t,r)=>{const n=new Map,i={platform:ia,...r},o={...i.platform,_c:n};return qo(e,t,{...i,platform:o})};function la(e){const t=e.renderRoot.querySelector(".inline-container-wrapper"),r=e.renderRoot.querySelector("[popover]");return oa(t,r,()=>{r.matches(":popover-open")&&aa(t,r,{strategy:"fixed"}).then(({x:i,y:o})=>{Object.assign(r.style,{left:`${i}px`,top:`${o}px`,width:`${t.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function vs(e){e.renderRoot.querySelector("#eox-itemfilter-input-search").value="",cs({target:{value:""}},e)}function ca(e,t){t.inlineMode&&e.stopPropagation()}function ua(e){e.inlineMode&&(e.showDropdown=!0)}function da(e,t){t.inlineMode&&(e.stopPropagation(),t.showDropdown=!0)}function fa(e,t){t.inlineMode&&e.key==="Escape"&&t.showDropdown&&(vs(t),t.showDropdown=!1)}function ha(e,t){t.inlineMode&&e.target.tagName!=="DROPDOWN-FORM"&&e.target.tagName!=="EOX-ITEMFILTER"&&t.showDropdown&&(vs(t),t.showDropdown=!1)}function pa(e,t){var r=0,n=0,i=0,o=0,a=0,l=0,u=0,d=0,g=null,y=null,w=e[0],m=e[1],_=t.length;for(r;r<_;r++){n=0;var k=t[r].length-1,q=t[r];if(g=q[0],g[0]!==q[k][0]&&g[1]!==q[k][1])throw new Error("First and last coordinates in a ring must be the same");for(a=g[0]-w,l=g[1]-m,n;n<k;n++){if(y=q[n+1],d=y[1]-m,l<0&&d<0||l>0&&d>0){g=y,l=d,a=g[0]-w;continue}if(u=y[0]-e[0],d>0&&l<=0){if(o=a*d-u*l,o>0)i=i+1;else if(o===0)return 0}else if(l>0&&d<=0){if(o=a*d-u*l,o<0)i=i+1;else if(o===0)return 0}else if(d===0&&l<0){if(o=a*d-u*l,o===0)return 0}else if(l===0&&d<0){if(o=a*d-u*l,o===0)return 0}else if(l===0&&d===0){if(u<=0&&a>=0)return 0;if(a<=0&&u>=0)return 0}g=y,l=d,a=u}}return i%2!==0}function It(e,t,r={}){const n={type:"Feature"};return(r.id===0||r.id)&&(n.id=r.id),r.bbox&&(n.bbox=r.bbox),n.properties=t||{},n.geometry=e,n}function ga(e,t,r={}){if(!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");if(e.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!Bi(e[0])||!Bi(e[1]))throw new Error("coordinates must contain numbers");return It({type:"Point",coordinates:e},t,r)}function ya(e,t,r={}){if(e.length<2)throw new Error("coordinates must be an array of two or more positions");return It({type:"LineString",coordinates:e},t,r)}function di(e,t={}){const r={type:"FeatureCollection"};return t.id&&(r.id=t.id),t.bbox&&(r.bbox=t.bbox),r.features=e,r}function ba(e,t,r={}){return It({type:"MultiLineString",coordinates:e},t,r)}function Bi(e){return!isNaN(e)&&e!==null&&!Array.isArray(e)}function ws(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function ma(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function or(e){return e.type==="Feature"?e.geometry:e}function Fe(e,t,r={}){if(!e)throw new Error("point is required");if(!t)throw new Error("polygon is required");const n=ws(e),i=or(t),o=i.type,a=t.bbox;let l=i.coordinates;if(a&&va(n,a)===!1)return!1;o==="Polygon"&&(l=[l]);let u=!1;for(var d=0;d<l.length;++d){const g=pa(n,l[d]);if(g===0)return!r.ignoreBoundary;g&&(u=!0)}return u}function va(e,t){return t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[0]&&t[3]>=e[1]}class xs{constructor(t=[],r=wa){if(this.data=t,this.length=this.data.length,this.compare=r,this.length>0)for(let n=(this.length>>1)-1;n>=0;n--)this._down(n)}push(t){this.data.push(t),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const t=this.data[0],r=this.data.pop();return this.length--,this.length>0&&(this.data[0]=r,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:r,compare:n}=this,i=r[t];for(;t>0;){const o=t-1>>1,a=r[o];if(n(i,a)>=0)break;r[t]=a,t=o}r[t]=i}_down(t){const{data:r,compare:n}=this,i=this.length>>1,o=r[t];for(;t<i;){let a=(t<<1)+1,l=r[a];const u=a+1;if(u<this.length&&n(r[u],l)<0&&(a=u,l=r[u]),n(l,o)>=0)break;r[t]=l,t=a}r[t]=o}}function wa(e,t){return e<t?-1:e>t?1:0}function Ms(e,t){return e.p.x>t.p.x?1:e.p.x<t.p.x?-1:e.p.y!==t.p.y?e.p.y>t.p.y?1:-1:1}function xa(e,t){return e.rightSweepEvent.p.x>t.rightSweepEvent.p.x?1:e.rightSweepEvent.p.x<t.rightSweepEvent.p.x?-1:e.rightSweepEvent.p.y!==t.rightSweepEvent.p.y?e.rightSweepEvent.p.y<t.rightSweepEvent.p.y?1:-1:1}class Ii{constructor(t,r,n,i){this.p={x:t[0],y:t[1]},this.featureId=r,this.ringId=n,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(t){return this.p.x===t.p.x&&this.p.y===t.p.y}}function Ma(e,t){if(e.type==="FeatureCollection"){const r=e.features;for(let n=0;n<r.length;n++)Hi(r[n],t)}else Hi(e,t)}let nn=0,sn=0,on=0;function Hi(e,t){const r=e.type==="Feature"?e.geometry:e;let n=r.coordinates;(r.type==="Polygon"||r.type==="MultiLineString")&&(n=[n]),r.type==="LineString"&&(n=[[n]]);for(let i=0;i<n.length;i++)for(let o=0;o<n[i].length;o++){let a=n[i][o][0],l=null;sn=sn+1;for(let u=0;u<n[i][o].length-1;u++){l=n[i][o][u+1];const d=new Ii(a,nn,sn,on),g=new Ii(l,nn,sn,on+1);d.otherEvent=g,g.otherEvent=d,Ms(d,g)>0?(g.isLeftEndpoint=!0,d.isLeftEndpoint=!1):(d.isLeftEndpoint=!0,g.isLeftEndpoint=!1),t.push(d),t.push(g),a=l,on=on+1}}nn=nn+1}class $a{constructor(t){this.leftSweepEvent=t,this.rightSweepEvent=t.otherEvent}}function _a(e,t){if(e===null||t===null||e.leftSweepEvent.ringId===t.leftSweepEvent.ringId&&(e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.rightSweepEvent)||e.leftSweepEvent.isSamePoint(t.leftSweepEvent)||e.leftSweepEvent.isSamePoint(t.rightSweepEvent)))return!1;const r=e.leftSweepEvent.p.x,n=e.leftSweepEvent.p.y,i=e.rightSweepEvent.p.x,o=e.rightSweepEvent.p.y,a=t.leftSweepEvent.p.x,l=t.leftSweepEvent.p.y,u=t.rightSweepEvent.p.x,d=t.rightSweepEvent.p.y,g=(d-l)*(i-r)-(u-a)*(o-n),y=(u-a)*(n-l)-(d-l)*(r-a),w=(i-r)*(n-l)-(o-n)*(r-a);if(g===0)return!1;const m=y/g,_=w/g;if(m>=0&&m<=1&&_>=0&&_<=1){const k=r+m*(i-r),q=n+m*(o-n);return[k,q]}return!1}function Aa(e,t){t=t||!1;const r=[],n=new xs([],xa);for(;e.length;){const i=e.pop();if(i.isLeftEndpoint){const o=new $a(i);for(let a=0;a<n.data.length;a++){const l=n.data[a];if(t&&l.leftSweepEvent.featureId===i.featureId)continue;const u=_a(o,l);u!==!1&&r.push(u)}n.push(o)}else i.isLeftEndpoint===!1&&n.pop()}return r}function Sa(e,t){const r=new xs([],Ms);return Ma(e,r),Aa(r,t)}var ka=Sa;function xi(e,t,r={}){const{removeDuplicates:n=!0,ignoreSelfIntersections:i=!1}=r;let o=[];e.type==="FeatureCollection"?o=o.concat(e.features):e.type==="Feature"?o.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&o.push(It(e)),t.type==="FeatureCollection"?o=o.concat(t.features):t.type==="Feature"?o.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&o.push(It(t));const a=ka(di(o),i);let l=[];if(n){const u={};a.forEach(d=>{const g=d.join(",");u[g]||(u[g]=!0,l.push(d))})}else l=a;return di(l.map(u=>ga(u)))}function $s(e,t,r){if(e!==null)for(var n,i,o,a,l,u,d,g=0,y=0,w,m=e.type,_=m==="FeatureCollection",k=m==="Feature",q=_?e.features.length:1,B=0;B<q;B++){d=_?e.features[B].geometry:k?e.geometry:e,w=d?d.type==="GeometryCollection":!1,l=w?d.geometries.length:1;for(var X=0;X<l;X++){var Y=0,ce=0;if(a=w?d.geometries[X]:d,a!==null){u=a.coordinates;var te=a.type;switch(g=0,te){case null:break;case"Point":if(t(u,y,B,Y,ce)===!1)return!1;y++,Y++;break;case"LineString":case"MultiPoint":for(n=0;n<u.length;n++){if(t(u[n],y,B,Y,ce)===!1)return!1;y++,te==="MultiPoint"&&Y++}te==="LineString"&&Y++;break;case"Polygon":case"MultiLineString":for(n=0;n<u.length;n++){for(i=0;i<u[n].length-g;i++){if(t(u[n][i],y,B,Y,ce)===!1)return!1;y++}te==="MultiLineString"&&Y++,te==="Polygon"&&ce++}te==="Polygon"&&Y++;break;case"MultiPolygon":for(n=0;n<u.length;n++){for(ce=0,i=0;i<u[n].length;i++){for(o=0;o<u[n][i].length-g;o++){if(t(u[n][i][o],y,B,Y,ce)===!1)return!1;y++}ce++}Y++}break;case"GeometryCollection":for(n=0;n<a.geometries.length;n++)if($s(a.geometries[n],t)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function Ca(e,t){var r,n,i,o,a,l,u,d,g,y,w=0,m=e.type==="FeatureCollection",_=e.type==="Feature",k=m?e.features.length:1;for(r=0;r<k;r++){for(l=m?e.features[r].geometry:_?e.geometry:e,d=m?e.features[r].properties:_?e.properties:{},g=m?e.features[r].bbox:_?e.bbox:void 0,y=m?e.features[r].id:_?e.id:void 0,u=l?l.type==="GeometryCollection":!1,a=u?l.geometries.length:1,i=0;i<a;i++){if(o=u?l.geometries[i]:l,o===null){if(t(null,w,d,g,y)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(o,w,d,g,y)===!1)return!1;break}case"GeometryCollection":{for(n=0;n<o.geometries.length;n++)if(t(o.geometries[n],w,d,g,y)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}w++}}function cn(e,t){Ca(e,function(r,n,i,o,a){var l=r===null?null:r.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return t(It(r,i,{bbox:o,id:a}),n,0)===!1?!1:void 0}var u;switch(l){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var d=0;d<r.coordinates.length;d++){var g=r.coordinates[d],y={type:u,coordinates:g};if(t(It(y,i),n,d)===!1)return!1}})}function fi(e,t={}){const r=or(e);switch(!t.properties&&e.type==="Feature"&&(t.properties=e.properties),r.type){case"Polygon":return La(r,t);case"MultiPolygon":return Ea(r,t);default:throw new Error("invalid poly")}}function La(e,t={}){const n=or(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{};return _s(n,i)}function Ea(e,t={}){const n=or(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{},o=[];return n.forEach(a=>{o.push(_s(a,i))}),di(o)}function _s(e,t){return e.length>1?ba(e,t):ya(e[0],t)}function Pa(e,t,r={}){var n;const i=(n=r.ignoreSelfIntersections)!=null?n:!1;let o=!0;return cn(e,a=>{cn(t,l=>{if(o===!1)return!1;o=Ra(a.geometry,l.geometry,i)})}),o}function Ra(e,t,r){switch(e.type){case"Point":switch(t.type){case"Point":return!ja(e.coordinates,t.coordinates);case"LineString":return!zi(t,e);case"Polygon":return!Fe(e,t)}break;case"LineString":switch(t.type){case"Point":return!zi(e,t);case"LineString":return!Ta(e,t,r);case"Polygon":return!qi(t,e,r)}break;case"Polygon":switch(t.type){case"Point":return!Fe(t,e);case"LineString":return!qi(e,t,r);case"Polygon":return!Da(t,e,r)}}return!1}function zi(e,t){for(let r=0;r<e.coordinates.length-1;r++)if(Oa(e.coordinates[r],e.coordinates[r+1],t.coordinates))return!0;return!1}function Ta(e,t,r){return xi(e,t,{ignoreSelfIntersections:r}).features.length>0}function qi(e,t,r){for(const i of t.coordinates)if(Fe(i,e))return!0;return xi(t,fi(e),{ignoreSelfIntersections:r}).features.length>0}function Da(e,t,r){for(const i of e.coordinates[0])if(Fe(i,t))return!0;for(const i of t.coordinates[0])if(Fe(i,e))return!0;return xi(fi(e),fi(t),{ignoreSelfIntersections:r}).features.length>0}function Oa(e,t,r){const n=r[0]-e[0],i=r[1]-e[1],o=t[0]-e[0],a=t[1]-e[1];return n*a-i*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?e[0]<=r[0]&&r[0]<=t[0]:t[0]<=r[0]&&r[0]<=e[0]:a>0?e[1]<=r[1]&&r[1]<=t[1]:t[1]<=r[1]&&r[1]<=e[1]}function ja(e,t){return e[0]===t[0]&&e[1]===t[1]}function Na(e,t,r={}){var n;const i=(n=r.ignoreSelfIntersections)!=null?n:!1;let o=!1;return cn(e,a=>{cn(t,l=>{if(o===!0)return!0;o=!Pa(a.geometry,l.geometry,{ignoreSelfIntersections:i})})}),o}var Ba=Na;function un(e,t={}){if(e.bbox!=null&&t.recompute!==!0)return e.bbox;const r=[1/0,1/0,-1/0,-1/0];return $s(e,n=>{r[0]>n[0]&&(r[0]=n[0]),r[1]>n[1]&&(r[1]=n[1]),r[2]<n[0]&&(r[2]=n[0]),r[3]<n[1]&&(r[3]=n[1])}),r}function dn(e,t,r={}){const n=ws(e),i=ma(t);for(let o=0;o<i.length-1;o++){let a=!1;if(r.ignoreEndVertices&&(o===0&&(a="start"),o===i.length-2&&(a="end"),o===0&&o+1===i.length-1&&(a="both")),Ia(i[o],i[o+1],n,a,typeof r.epsilon>"u"?null:r.epsilon))return!0}return!1}function Ia(e,t,r,n,i){const o=r[0],a=r[1],l=e[0],u=e[1],d=t[0],g=t[1],y=r[0]-l,w=r[1]-u,m=d-l,_=g-u,k=y*_-w*m;if(i!==null){if(Math.abs(k)>i)return!1}else if(k!==0)return!1;if(n){if(n==="start")return Math.abs(m)>=Math.abs(_)?m>0?l<o&&o<=d:d<=o&&o<l:_>0?u<a&&a<=g:g<=a&&a<u;if(n==="end")return Math.abs(m)>=Math.abs(_)?m>0?l<=o&&o<d:d<o&&o<=l:_>0?u<=a&&a<g:g<a&&a<=u;if(n==="both")return Math.abs(m)>=Math.abs(_)?m>0?l<o&&o<d:d<o&&o<l:_>0?u<a&&a<g:g<a&&a<u}else return Math.abs(m)>=Math.abs(_)?m>0?l<=o&&o<=d:d<=o&&o<=l:_>0?u<=a&&a<=g:g<=a&&a<=u;return!1}function Ha(e,t){var r=or(e),n=or(t),i=r.type,o=n.type;switch(i){case"Point":switch(o){case"MultiPoint":return za(r,n);case"LineString":return dn(r,n,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return Fe(r,n,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return qa(r,n);case"LineString":return Wa(r,n);case"Polygon":case"MultiPolygon":return Ua(r,n);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return Va(r,n);case"Polygon":case"MultiPolygon":return Ga(r,n);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return Ka(r,n);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function za(e,t){var r,n=!1;for(r=0;r<t.coordinates.length;r++)if(Ss(t.coordinates[r],e.coordinates)){n=!0;break}return n}function qa(e,t){for(var r=0;r<e.coordinates.length;r++){for(var n=!1,i=0;i<t.coordinates.length;i++)Ss(e.coordinates[r],t.coordinates[i])&&(n=!0);if(!n)return!1}return!0}function Wa(e,t){for(var r=!1,n=0;n<e.coordinates.length;n++){if(!dn(e.coordinates[n],t))return!1;r||(r=dn(e.coordinates[n],t,{ignoreEndVertices:!0}))}return r}function Ua(e,t){for(var r=!0,n=!1,i=0;i<e.coordinates.length;i++){if(n=Fe(e.coordinates[i],t),!n){r=!1;break}n=Fe(e.coordinates[i],t,{ignoreBoundary:!0})}return r&&n}function Va(e,t){for(var r=0;r<e.coordinates.length;r++)if(!dn(e.coordinates[r],t))return!1;return!0}function Ga(e,t){var r=un(t),n=un(e);if(!As(r,n))return!1;for(var i=!1,o=0;o<e.coordinates.length;o++){if(!Fe(e.coordinates[o],t))return!1;if(i||(i=Fe(e.coordinates[o],t,{ignoreBoundary:!0})),!i&&o<e.coordinates.length-1){var a=Ya(e.coordinates[o],e.coordinates[o+1]);i=Fe(a,t,{ignoreBoundary:!0})}}return i}function Ka(e,t){var r=un(e),n=un(t);if(!As(n,r))return!1;for(var i=0;i<e.coordinates[0].length;i++)if(!Fe(e.coordinates[0][i],t))return!1;return!0}function As(e,t){return!(e[0]>t[0]||e[2]<t[2]||e[1]>t[1]||e[3]<t[3])}function Ss(e,t){return e[0]===t[0]&&e[1]===t[1]}function Ya(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2]}var Fa=Ha;const Xa=(e,t)=>t?Ba(e,t):!0,Za=(e,t)=>t?Fa(e,t):!0;function Ja(e,t="highlight",r="title"){const n=(o,a,l)=>{const u=a.split(".");let d;for(d=0;d<u.length-1;d++)o=o[u[d]];o[u[d]]=l},i=(o,a=[])=>{let l="",u=0;return a.forEach(d=>{const g=d[1]+1;l+=[o.substring(u,d[0]),`<mark class="${t}">`,o.substring(d[0],g),"</mark>"].join(""),u=g}),l+=o.substring(u),l};return e.filter(({matches:o})=>o&&o.length).map(({item:o,matches:a})=>{const l={...o};return a.forEach(u=>{u.key===r&&n(l,u.key,i(u.value,u.indices))}),l})}var ks={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(Ge,function(){var r=1e3,n=6e4,i=36e5,o="millisecond",a="second",l="minute",u="hour",d="day",g="week",y="month",w="quarter",m="year",_="date",k="Invalid Date",q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,B=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,X={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(O){var S=["th","st","nd","rd"],A=O%100;return"["+O+(S[(A-20)%10]||S[A]||S[0])+"]"}},Y=function(O,S,A){var j=String(O);return!j||j.length>=S?O:""+Array(S+1-j.length).join(A)+O},ce={s:Y,z:function(O){var S=-O.utcOffset(),A=Math.abs(S),j=Math.floor(A/60),L=A%60;return(S<=0?"+":"-")+Y(j,2,"0")+":"+Y(L,2,"0")},m:function O(S,A){if(S.date()<A.date())return-O(A,S);var j=12*(A.year()-S.year())+(A.month()-S.month()),L=S.clone().add(j,y),V=A-L<0,G=S.clone().add(j+(V?-1:1),y);return+(-(j+(A-L)/(V?L-G:G-L))||0)},a:function(O){return O<0?Math.ceil(O)||0:Math.floor(O)},p:function(O){return{M:y,y:m,w:g,d,D:_,h:u,m:l,s:a,ms:o,Q:w}[O]||String(O||"").toLowerCase().replace(/s$/,"")},u:function(O){return O===void 0}},te="en",Z={};Z[te]=X;var ue="$isDayjsObject",ve=function(O){return O instanceof He||!(!O||!O[ue])},Me=function O(S,A,j){var L;if(!S)return te;if(typeof S=="string"){var V=S.toLowerCase();Z[V]&&(L=V),A&&(Z[V]=A,L=V);var G=S.split("-");if(!L&&G.length>1)return O(G[0])}else{var le=S.name;Z[le]=S,L=le}return!j&&L&&(te=L),L||!j&&te},fe=function(O,S){if(ve(O))return O.clone();var A=typeof S=="object"?S:{};return A.date=O,A.args=arguments,new He(A)},ie=ce;ie.l=Me,ie.i=ve,ie.w=function(O,S){return fe(O,{locale:S.$L,utc:S.$u,x:S.$x,$offset:S.$offset})};var He=function(){function O(A){this.$L=Me(A.locale,null,!0),this.parse(A),this.$x=this.$x||A.x||{},this[ue]=!0}var S=O.prototype;return S.parse=function(A){this.$d=function(j){var L=j.date,V=j.utc;if(L===null)return new Date(NaN);if(ie.u(L))return new Date;if(L instanceof Date)return new Date(L);if(typeof L=="string"&&!/Z$/i.test(L)){var G=L.match(q);if(G){var le=G[2]-1||0,be=(G[7]||"0").substring(0,3);return V?new Date(Date.UTC(G[1],le,G[3]||1,G[4]||0,G[5]||0,G[6]||0,be)):new Date(G[1],le,G[3]||1,G[4]||0,G[5]||0,G[6]||0,be)}}return new Date(L)}(A),this.init()},S.init=function(){var A=this.$d;this.$y=A.getFullYear(),this.$M=A.getMonth(),this.$D=A.getDate(),this.$W=A.getDay(),this.$H=A.getHours(),this.$m=A.getMinutes(),this.$s=A.getSeconds(),this.$ms=A.getMilliseconds()},S.$utils=function(){return ie},S.isValid=function(){return this.$d.toString()!==k},S.isSame=function(A,j){var L=fe(A);return this.startOf(j)<=L&&L<=this.endOf(j)},S.isAfter=function(A,j){return fe(A)<this.startOf(j)},S.isBefore=function(A,j){return this.endOf(j)<fe(A)},S.$g=function(A,j,L){return ie.u(A)?this[j]:this.set(L,A)},S.unix=function(){return Math.floor(this.valueOf()/1e3)},S.valueOf=function(){return this.$d.getTime()},S.startOf=function(A,j){var L=this,V=!!ie.u(j)||j,G=ie.p(A),le=function(Se,re){var ke=ie.w(L.$u?Date.UTC(L.$y,re,Se):new Date(L.$y,re,Se),L);return V?ke:ke.endOf(d)},be=function(Se,re){return ie.w(L.toDate()[Se].apply(L.toDate("s"),(V?[0,0,0,0]:[23,59,59,999]).slice(re)),L)},xe=this.$W,$e=this.$M,Te=this.$D,Ae="set"+(this.$u?"UTC":"");switch(G){case m:return V?le(1,0):le(31,11);case y:return V?le(1,$e):le(0,$e+1);case g:var De=this.$locale().weekStart||0,se=(xe<De?xe+7:xe)-De;return le(V?Te-se:Te+(6-se),$e);case d:case _:return be(Ae+"Hours",0);case u:return be(Ae+"Minutes",1);case l:return be(Ae+"Seconds",2);case a:return be(Ae+"Milliseconds",3);default:return this.clone()}},S.endOf=function(A){return this.startOf(A,!1)},S.$set=function(A,j){var L,V=ie.p(A),G="set"+(this.$u?"UTC":""),le=(L={},L[d]=G+"Date",L[_]=G+"Date",L[y]=G+"Month",L[m]=G+"FullYear",L[u]=G+"Hours",L[l]=G+"Minutes",L[a]=G+"Seconds",L[o]=G+"Milliseconds",L)[V],be=V===d?this.$D+(j-this.$W):j;if(V===y||V===m){var xe=this.clone().set(_,1);xe.$d[le](be),xe.init(),this.$d=xe.set(_,Math.min(this.$D,xe.daysInMonth())).$d}else le&&this.$d[le](be);return this.init(),this},S.set=function(A,j){return this.clone().$set(A,j)},S.get=function(A){return this[ie.p(A)]()},S.add=function(A,j){var L,V=this;A=Number(A);var G=ie.p(j),le=function($e){var Te=fe(V);return ie.w(Te.date(Te.date()+Math.round($e*A)),V)};if(G===y)return this.set(y,this.$M+A);if(G===m)return this.set(m,this.$y+A);if(G===d)return le(1);if(G===g)return le(7);var be=(L={},L[l]=n,L[u]=i,L[a]=r,L)[G]||1,xe=this.$d.getTime()+A*be;return ie.w(xe,this)},S.subtract=function(A,j){return this.add(-1*A,j)},S.format=function(A){var j=this,L=this.$locale();if(!this.isValid())return L.invalidDate||k;var V=A||"YYYY-MM-DDTHH:mm:ssZ",G=ie.z(this),le=this.$H,be=this.$m,xe=this.$M,$e=L.weekdays,Te=L.months,Ae=L.meridiem,De=function(re,ke,et,me){return re&&(re[ke]||re(j,V))||et[ke].slice(0,me)},se=function(re){return ie.s(le%12||12,re,"0")},Se=Ae||function(re,ke,et){var me=re<12?"AM":"PM";return et?me.toLowerCase():me};return V.replace(B,function(re,ke){return ke||function(et){switch(et){case"YY":return String(j.$y).slice(-2);case"YYYY":return ie.s(j.$y,4,"0");case"M":return xe+1;case"MM":return ie.s(xe+1,2,"0");case"MMM":return De(L.monthsShort,xe,Te,3);case"MMMM":return De(Te,xe);case"D":return j.$D;case"DD":return ie.s(j.$D,2,"0");case"d":return String(j.$W);case"dd":return De(L.weekdaysMin,j.$W,$e,2);case"ddd":return De(L.weekdaysShort,j.$W,$e,3);case"dddd":return $e[j.$W];case"H":return String(le);case"HH":return ie.s(le,2,"0");case"h":return se(1);case"hh":return se(2);case"a":return Se(le,be,!0);case"A":return Se(le,be,!1);case"m":return String(be);case"mm":return ie.s(be,2,"0");case"s":return String(j.$s);case"ss":return ie.s(j.$s,2,"0");case"SSS":return ie.s(j.$ms,3,"0");case"Z":return G}return null}(re)||G.replace(":","")})},S.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},S.diff=function(A,j,L){var V,G=this,le=ie.p(j),be=fe(A),xe=(be.utcOffset()-this.utcOffset())*n,$e=this-be,Te=function(){return ie.m(G,be)};switch(le){case m:V=Te()/12;break;case y:V=Te();break;case w:V=Te()/3;break;case g:V=($e-xe)/6048e5;break;case d:V=($e-xe)/864e5;break;case u:V=$e/i;break;case l:V=$e/n;break;case a:V=$e/r;break;default:V=$e}return L?V:ie.a(V)},S.daysInMonth=function(){return this.endOf(y).$D},S.$locale=function(){return Z[this.$L]},S.locale=function(A,j){if(!A)return this.$L;var L=this.clone(),V=Me(A,j,!0);return V&&(L.$L=V),L},S.clone=function(){return ie.w(this.$d,this)},S.toDate=function(){return new Date(this.valueOf())},S.toJSON=function(){return this.isValid()?this.toISOString():null},S.toISOString=function(){return this.$d.toISOString()},S.toString=function(){return this.$d.toUTCString()},O}(),At=He.prototype;return fe.prototype=At,[["$ms",o],["$s",a],["$m",l],["$H",u],["$W",d],["$M",y],["$y",m],["$D",_]].forEach(function(O){At[O[1]]=function(S){return this.$g(S,O[0],O[1])}}),fe.extend=function(O,S){return O.$i||(O(S,He,fe),O.$i=!0),fe},fe.locale=Me,fe.isDayjs=ve,fe.unix=function(O){return fe(1e3*O)},fe.en=Z[te],fe.Ls=Z,fe.p={},fe})})(ks);var Qa=ks.exports;const Lr=pn(Qa);let Cs;const el=(e,t)=>{Cs=new _t(e,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...t})},tl=async(e,t,r)=>{const n=Object.entries(t).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[u,d])=>{const g="$or",y=[],w=(m,_)=>{const k={};d.type==="text"?k[m]=`${_}`:k[u]=`="${m}"`,y.push(k)};return Object.entries(d.state).filter(([,m])=>m).forEach(([m,_])=>w(m,_)),y.length>0&&l.push({[g]:y}),l},[]);let i;if(!(n.length>0)&&r.matchAllWhenEmpty!==!1)i=e;else{const l={$and:[...n]},u=Cs.search(l);i=r.enableHighlighting?Ja(u,"highlight",r.titleProperty):u.map(d=>d.item)}const o=Object.entries(t).filter(([,l])=>l.type==="range").reduce((l,[u,d])=>(l[u]={min:d.state.min,max:d.state.max,format:d.format},l),{});if(Object.keys(o).length>0){const l=[];for(let u=0;u<i.length;u++){const d={};for(const[g,y]of Object.entries(o)){const w=_=>y.format==="date"?Lr(_).unix():_,m=pi(g,i[u]);m?Array.isArray(m)?d[g]=o[g].min<=w(m[1])&&w(m[0])<=o[g].max:w(m)>=o[g].min&&w(m)<=o[g].max?d[g]=!0:d[g]=!1:d[g]=!0}Object.values(d).every(g=>!!g)&&l.push(i[u])}i=[...l]}const a=Object.entries(t).filter(([,l])=>l.type==="spatial").reduce((l,[u,d])=>(l[u]={geometry:d.state.geometry,mode:d.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let u=0;u<i.length;u++){const d={};for(const g of Object.keys(a)){const y=pi(g,i[u]),w=a[g].mode||"within";y&&(w==="within"?Za(y,a[g].geometry):Xa(y,a[g].geometry))?d[g]=!0:d[g]=!1}Object.values(d).every(g=>!!g)&&l.push(i[u])}i=[...l]}return i};function rl(e,t){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...e&&{format:"GeoJSON"},...e&&{url:t}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function vn(e){if(!e.dirty)return null;switch(e.type){case"multiselect":for(const r in e.state)e.state.hasOwnProperty(r)&&(e.state[r]=!1);break;case"range":e.state.min=e.min,e.state.max=e.max;break;case"select":for(const r in e.state)e.state.hasOwnProperty(r)&&(e.state[r]=!1);break;case"spatial":e.state.geometry=void 0;break;case"text":e.keys.forEach(r=>{e.state[r]=void 0});break}return delete e.stringifiedState,delete e.dirty,e}function Wi(e,t){return e*2+t}function nl(e){return Object.keys(e).map(t=>({title:F`${e[t].title||e[t].key}:
        <strong>${e[t].stringifiedState}</strong>`,key:t})).filter(t=>e[t.key].dirty)}function hi(e){return Object.values(e).map(t=>t.dirty).filter(t=>t).length>0}async function il(e,t,r){return await(await fetch(`${r.externalFilter(e,t)}`)).json()}function Ls(e,t,r){let n;if(e.detail?n=e.detail.target:n=e.target,n?.classList.contains("details-filter")){if(!n.open||t?.expandMultipleFilters)return;r.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const o=i.shadowRoot.querySelector(".details-filter");o&&o!==n&&o.removeAttribute("open")})}else{if(!n?.open||t?.expandMultipleResults)return;r.querySelectorAll("details").forEach(i=>{i!==n&&i.removeAttribute("open")})}}function pi(e,t){return e?.includes(".")?e.split(".").reduce((r,n)=>r&&r[n],t):t[e]}class sl extends at{static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}constructor(){super(),this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=this.#i.bind(this),this._handleKeyDown=this.#n.bind(this)}set showDropdown(t){this.renderRoot.querySelector("[popover]").togglePopover(t)}get showDropdown(){return this.renderRoot.querySelector("[popover]")?.matches(":popover-open")}#e(){setTimeout(()=>this._overlayCleanup=la(this))}#t(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),this.#e()}connectedCallback(){super.connectedCallback(),this.inlineMode&&this.#t()}#r(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()}disconnectedCallback(){this.inlineMode&&this.#r(),super.disconnectedCallback()}_overlayCleanup(){}#i(t){ha(t,this)}#n(t){fa(t,this)}#s(t){da(t,this)}#a(){ua(this)}#o(t){ca(t,this)}#l(t){No(t,this)}#c(t){cs(t,this)}updateInline(){this.inlineMode&&this.requestUpdate()}updated(t){t.has("inlineMode")&&(this.inlineMode?this.#t():this.#r())}render(){return F`
      <style>
        ${!this.unstyled&&Pr}
      </style>
      ${this.inlineMode?F`
            <div
              class="inline-container-wrapper"
              @click="${this.#s}"
            >
              <div class="inline-container" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${nl(this.filters)}
                      .controller=${{remove:t=>this.#l(t)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${ze(hi(this.filters),()=>F`
                      <span
                        class="chip-close"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      ></span>
                    `)}
                </div>
                <div
                  class="input-container ${hi(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${this.#s}"
                    @focus="${this.#a}"
                    @input="${this.#c}"
                    placeholder="Search and add filter"
                    aria-haspopup="true"
                    aria-expanded="${this.showDropdown}"
                  />
                </div>
              </div>
              <div popover="manual">
                <div
                  class="inline-content"
                  slot="content"
                  @keydown="${this.#n}"
                  @click="${this.#o}"
                  @focus="${this.#o}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:F`<slot name="section"></slot>`}
    `}}customElements.define("eox-itemfilter-container",sl);var ol="Expected a function",Ui=NaN,al="[object Symbol]",ll=/^\s+|\s+$/g,cl=/^[-+]0x[0-9a-f]+$/i,ul=/^0b[01]+$/i,dl=/^0o[0-7]+$/i,fl=parseInt,hl=typeof Ge=="object"&&Ge&&Ge.Object===Object&&Ge,pl=typeof self=="object"&&self&&self.Object===Object&&self,gl=hl||pl||Function("return this")(),yl=Object.prototype,bl=yl.toString,ml=Math.max,vl=Math.min,Xn=function(){return gl.Date.now()};function wl(e,t,r){var n,i,o,a,l,u,d=0,g=!1,y=!1,w=!0;if(typeof e!="function")throw new TypeError(ol);t=Vi(t)||0,gi(r)&&(g=!!r.leading,y="maxWait"in r,o=y?ml(Vi(r.maxWait)||0,t):o,w="trailing"in r?!!r.trailing:w);function m(Z){var ue=n,ve=i;return n=i=void 0,d=Z,a=e.apply(ve,ue),a}function _(Z){return d=Z,l=setTimeout(B,t),g?m(Z):a}function k(Z){var ue=Z-u,ve=Z-d,Me=t-ue;return y?vl(Me,o-ve):Me}function q(Z){var ue=Z-u,ve=Z-d;return u===void 0||ue>=t||ue<0||y&&ve>=o}function B(){var Z=Xn();if(q(Z))return X(Z);l=setTimeout(B,k(Z))}function X(Z){return l=void 0,w&&n?m(Z):(n=i=void 0,a)}function Y(){l!==void 0&&clearTimeout(l),d=0,n=u=i=l=void 0}function ce(){return l===void 0?a:X(Xn())}function te(){var Z=Xn(),ue=q(Z);if(n=arguments,i=this,u=Z,ue){if(l===void 0)return _(u);if(y)return l=setTimeout(B,t),m(u)}return l===void 0&&(l=setTimeout(B,t)),a}return te.cancel=Y,te.flush=ce,te}function gi(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function xl(e){return!!e&&typeof e=="object"}function Ml(e){return typeof e=="symbol"||xl(e)&&bl.call(e)==al}function Vi(e){if(typeof e=="number")return e;if(Ml(e))return Ui;if(gi(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=gi(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(ll,"");var r=ul.test(e);return r||dl.test(e)?fl(e.slice(2),r?2:8):cl.test(e)?Ui:+e}var $l=wl;const wn=pn($l);function _l(e){const t=e.renderRoot.querySelector("input[type='text']");t.value="",vn(e.filterObject),e.requestUpdate()}function Al(e){const t=e.renderRoot.querySelector("input[type='text']");e.isValid=t.checkValidity(),e.filterObject.keys.forEach(r=>{e.filterObject.state[r]=t.value}),e.filterObject.dirty=!0,e.filterObject.stringifiedState=t.value,e.dispatchEvent(new CustomEvent("filter")),t.value===""&&e.reset()}function Sl(e){if(e.filterObject=vn(e.filterObject),e.filterObject){const t=e.querySelector("tc-range-slider"),r=e.filterObject.min,n=e.filterObject.max;t.value1!==r&&(t.value1=r),t.value2!==n&&(t.value2=n)}e.requestUpdate()}function kl(e,t){const[r,n]=e.detail.values;(r!==t.filterObject.state.min||n!==t.filterObject.state.max)&&([t.filterObject.state.min,t.filterObject.state.max]=[r,n],t.filterObject.dirty=!0),t.filterObject.dirty&&(t.filterObject.stringifiedState=t.filterObject.format==="date"?`${Lr(r)} - ${Lr(n)}`:`${r} - ${n}`),t.dispatchEvent(new CustomEvent("filter")),r===t.filterObject.min&&n===t.filterObject.max?t.reset():t.requestUpdate()}function Cl(e,t,r){const n=r.filterObject.format==="date",i=r.filterObject.state[e],o=n?Lr.unix(i):i;return F`<div class="range-${t}">${o}</div>`}function Ll(e){El(-1,e),vn(e.filterObject),e.requestUpdate()}function El(e,t){t.selectedItems=[],Mi(t),Ps(t)}function Es(e,t){const r=t.selectedItems.indexOf(e);r>=0?t.selectedItems=t.selectedItems.filter((n,i)=>i!==r):t.type==="multiselect"?t.selectedItems=[...t.selectedItems,e]:(t.selectedItems=[e],t.showSuggestions=!1),Mi(t),Ps(t)}function Pl(e,t){t.query=e.target.value,t.showSuggestions=!0}function Rl(e,t){switch(e.key){case"ArrowDown":t.highlightedIndex=Math.min(t.highlightedIndex+1,t.filteredSuggestions.length-1);break;case"ArrowUp":t.highlightedIndex=Math.max(t.highlightedIndex-1,0);break;case"Enter":t.highlightedIndex>=0&&Es(t.filteredSuggestions[t.highlightedIndex],t);break;case"Escape":t.showSuggestions=!1;break}}function Tl(e,t){(e.has("suggestions")||e.has("query"))&&Mi(t)}function Dl(e,t){const r=e.filterObject?.sort||((n,i)=>n.localeCompare(i));return t.sort(r).map(n=>n)}function Mi(e){let t;e.query&&(t=new _t(e.suggestions,{threshold:.4}).search(e.query).map(n=>n.item)),e.filteredSuggestions=Dl(e,t||e.suggestions),e.filterObject?.filterKeys&&(e.filteredSuggestions=e.filterObject?.filterKeys.map(r=>`${r}`),e.filterObject.state=e.filterObject?.filterKeys.map(r=>`${r}`).reduce((r,n)=>(n in r||(r[n]=void 0),r),e.filterObject.state)),e.highlightedIndex=-1}function Ps(e){Object.keys(e.filterObject.state).forEach(t=>{e.filterObject.state[t]=e.selectedItems.includes(t)}),e.filterObject.stringifiedState=Object.keys(e.filterObject.state).filter(t=>e.filterObject.state[t]).join(", ")||"",e.filterObject.dirty=e.filterObject.stringifiedState.length>0,e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}function Ol(e){vn(e.filterObject),e.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),e.requestUpdate()}function jl(e){e.renderRoot.querySelector("#eox-map").innerHTML="",Rs(e)}function Nl(e,t){t.filterObject.state.mode=e;const r=new CustomEvent("filter",{detail:{[t.filterObject.key]:{}}});t.dispatchEvent(r)}function Rs(e){const t=e.renderRoot.querySelector("#eox-map");t.innerHTML===""&&(t.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const r=e.geometry&&Bl(e.geometry),n=rl(e.geometry,r);e.eoxMap=e.renderRoot.querySelector("eox-map"),setTimeout(()=>{e.eoxMap.layers=n;const i=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});e.dispatchEvent(a)};e.eoxMap.interactions.drawInteraction.on("drawend",o=>{i(o.feature),e.eoxMap.removeInteraction("drawInteraction")}),e.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{i(o.features.getArray()[0])})},1e3)}function Bl(e){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:e}]}))}`}class Il extends at{static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}constructor(){super(),this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.unstyled=!1}#e=()=>{Al(this)};reset(){_l(this)}debouncedInputHandler=wn(this.#e,500,{leading:!0});createRenderRoot(){return this}render(){return ze(this.filterObject,()=>F`
        <style></style>
        <div class="text-container">
          <div class="text-container-wrapper">
            <input
              type="text"
              placeholder=${this.filterObject.placeholder}
              data-cy="search"
              class="text-input"
              part="input-search"
              value="${Object.values(this.filterObject.state)[0]}"
              tabindex=${this.tabIndex}
              pattern="${this.filterObject.validation?.pattern||".*"}"
              @input="${this.debouncedInputHandler}"
              @click=${t=>t.stopPropagation()}
            />
          </div>
        </div>
        <small class="error-validation"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `)}}customElements.define("eox-itemfilter-text",Il);function Hl(e,t,r){return e.filter(n=>{const i=n[r.config.aggregateResults];let o;return r.filters[r.config.aggregateResults]&&(o=Object.keys(r.filters[r.config.aggregateResults]).filter(l=>r.filters[r.config.aggregateResults].state[l])),(o?.length?o.includes(t):!0)&&Array.isArray(i)?i.includes(t):i===t})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:zl}=Gs,Gi=()=>document.createComment(""),kr=(e,t,r)=>{const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const o=n.insertBefore(Gi(),i),a=n.insertBefore(Gi(),i);r=new zl(o,a,e,e.options)}else{const o=r._$AB.nextSibling,a=r._$AM,l=a!==e;if(l){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==a._$AU&&r._$AP(u)}if(o!==i||l){let u=r._$AA;for(;u!==o;){const d=u.nextSibling;n.insertBefore(u,i),u=d}}}return r},jt=(e,t,r=e)=>(e._$AI(t,r),e),ql={},Wl=(e,t=ql)=>e._$AH=t,Ul=e=>e._$AH,Zn=e=>{e._$AP?.(!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const n=t.nextSibling;t.remove(),t=n}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ki=(e,t,r)=>{const n=new Map;for(let i=t;i<=r;i++)n.set(e[i],i);return n},Vl=Zi(class extends Ji{constructor(e){if(super(e),e.type!==Qi.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const i=[],o=[];let a=0;for(const l of e)i[a]=n?n(l,a):a,o[a]=r(l,a),a++;return{values:o,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const i=Ul(e),{values:o,keys:a}=this.dt(t,r,n);if(!Array.isArray(i))return this.ut=a,o;const l=this.ut??=[],u=[];let d,g,y=0,w=i.length-1,m=0,_=o.length-1;for(;y<=w&&m<=_;)if(i[y]===null)y++;else if(i[w]===null)w--;else if(l[y]===a[m])u[m]=jt(i[y],o[m]),y++,m++;else if(l[w]===a[_])u[_]=jt(i[w],o[_]),w--,_--;else if(l[y]===a[_])u[_]=jt(i[y],o[_]),kr(e,u[_+1],i[y]),y++,_--;else if(l[w]===a[m])u[m]=jt(i[w],o[m]),kr(e,i[y],i[w]),w--,m++;else if(d===void 0&&(d=Ki(a,m,_),g=Ki(l,y,w)),d.has(l[y]))if(d.has(l[w])){const k=g.get(a[m]),q=k!==void 0?i[k]:null;if(q===null){const B=kr(e,i[y]);jt(B,o[m]),u[m]=B}else u[m]=jt(q,o[m]),kr(e,i[y],q),i[k]=null;m++}else Zn(i[w]),w--;else Zn(i[y]),y++;for(;m<=_;){const k=kr(e,u[_+1]);jt(k,o[m]),u[m++]=k}for(;y<=w;){const k=i[y++];k!==null&&Zn(k)}return this.ut=a,Wl(e,u),Xi}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class yi extends Ji{constructor(t){if(super(t),this.it=st,t.type!==Qi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===st||t==null)return this._t=void 0,this.it=t;if(t===Xi)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}yi.directiveName="unsafeHTML",yi.resultType=1;const Jn=Zi(yi);function Gl(e,t){return F`
    <details
      class="details-results"
      @toggle=${t.handleAccordion}
      ?open=${t.config.expandResults||st}
    >
      <summary>
        <span class="title">
          ${e}
          <span class="count"
            >${t.aggregateResults(t.results,e).length}</span
          >
        </span>
      </summary>
      <div>
        ${Ts(e,t)}
      </div>
    </details>
  `}function Ts(e,t){const r=t.results,n=e?t.aggregateResults(r,e):r,i=t.config,o=a=>t.selectedResult?.[i.idProperty]===a[i.idProperty]?"highlighted":st;return F`
    <ul>
      ${Vl(n,a=>a.id,a=>F`
          <li class=${o(a)}>
            <span
              id="${a.id}"
              @click=${()=>{t.selectedResult===a?t.selectedResult=null:t.selectedResult=a,t.dispatchEvent(new CustomEvent("result",{detail:t.selectedResult}))}}
            >
              ${ze(i.subTitleProperty,()=>F`
                  <div class="title-container">
                    <span class="title"
                      >${Jn(a[i.titleProperty])}</span
                    >
                    <span class="subtitle"
                      >${Jn(a[i.subTitleProperty])}</span
                    >
                  </div>
                `,()=>F`
                  <span class="title"
                    >${Jn(a[i.titleProperty])}</span
                  >
                `)}
            </span>
          </li>
        `)}
    </ul>
  `}class Kl extends at{static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Object},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object}}}constructor(){super(),this.config=null,this.filters={},this.resultAggregation=[],this.selectedResult=null}#e(t){return Ts(t,this)}#t(t){return Gl(t,this)}aggregateResults(t,r){return Hl(t,r,this)}createRenderRoot(){return this}handleAccordion(t){Ls(t,this.config,this)}render(){return F`
      <section id="section-results">
        <div>
          <h6 class="main-heading">Results</h6>
        </div>
        <div id="container-results" class="scroll">
          ${ze(this.results.length<1,()=>F`<small class="no-results">No matching items</small>`,()=>st)}
          <ul id="results" part="results">
            ${ze(this.config.aggregateResults,()=>gn(this.resultAggregation.filter(t=>this.aggregateResults(this.results,t).length),t=>F`${ze(this.aggregateResults(this.results,t).length===1&&this.config.autoSpreadSingle,()=>F`<div style="margin-left: -8px">
                          ${this.#e(t)}
                        </div>`,()=>this.#t(t))}`),()=>this.#e())}
          </ul>
        </div>
      </section>
    `}}customElements.define("eox-itemfilter-results",Kl);const Yl=`input[type="checkbox"] { appearance: none; -webkit-appearance: none; margin: 0; cursor: pointer; display: flex; flex-direction: row; align-items: center; width: 24px; height: 24px;}input[type="checkbox"]:after { display: block; content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-blank-outline%3C/title%3E%3Cpath d='M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z' /%3E%3C/svg%3E"); width: 20px; height: 20px; margin-right: 4px;}input[type="checkbox"]:checked:after { content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-marked%3C/title%3E%3Cpath d='M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z' /%3E%3C/svg%3E");}`,Fl=`input[type="radio"] { appearance: none; -webkit-appearance: none; margin: 0; cursor: pointer; display: flex; flex-direction: row; align-items: center; width: 24px; height: 24px;}label span { font-size: small;}input[type="radio"]:after { display: block; content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-blank%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' /%3E%3C/svg%3E"); width: 20px; height: 20px; margin-right: 4px;}input[type="radio"]:checked:after { content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-marked%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z' /%3E%3C/svg%3E");}`;class Xl extends at{static properties={filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}};constructor(){super(),this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(t){Tl(t,this)}#e(t){Pl(t,this)}#t(t){Rl(t,this)}#r(t){Es(t,this)}reset(){Ll(this)}debouncedInputHandler=wn(this.#r,500,{leading:!0});firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(t=>this.filterObject.state[t]?t:null).filter(t=>!!t),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}render(){const t=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow":st;return F`
      <style>
        ${!this.unstyled&&Pr}
        ${!this.unstyled&&Yl}
        ${!this.unstyled&&Fl}
      </style>
      ${ze(this.suggestions.length>10,()=>F`<div class="autocomplete-container">
            <div class="autocomplete-container-wrapper">
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||""}"
                @input=${this.#e}
                @keydown=${this.#t}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${r}">
        <ul class="${this.type}">
          ${this.filteredSuggestions.map(n=>F`
              <li
                data-identifier="${n.toString().toLowerCase()}"
                data-title="${n}"
              >
                <label>
                  <input
                    type="${t}"
                    name=${n}
                    .checked=${this.selectedItems.includes(n)}
                    @change=${()=>this.debouncedInputHandler(n)}
                    @keydown=${i=>{i.key===" "&&this.inlineMode&&this.debouncedInputHandler(n)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title">${n}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}customElements.define("eox-itemfilter-select",Xl);(()=>{var e=Object.defineProperty,t=Math.pow,r=(c,p,M)=>p in c?e(c,p,{enumerable:!0,configurable:!0,writable:!0,value:M}):c[p]=M,n=(c,p,M)=>(r(c,typeof p!="symbol"?p+"":p,M),M),i=(c,p)=>` ${p&&p.length>0?p.map(M=>`<link rel="stylesheet" href="${M}" />`).join(""):""} <style> ${c} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,o=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",l="pointers-min-distance",u="pointers-max-distance",d="range-dragging",g="data",y="min",w="max",m="step",_="round",k="type",q="theme",B="rtl",X="btt",Y="disabled",ce="keyboard-disabled",te="mousewheel-disabled",Z="slider-width",ue="slider-height",ve="slider-radius",Me="slider-bg",fe="slider-bg-hover",ie="slider-bg-fill",He="pointer-width",At="pointer-height",O="pointer-radius",S="pointer-bg",A="pointer-bg-hover",j="pointer-bg-focus",L="pointer-shadow",V="pointer-shadow-hover",G="pointer-shadow-focus",le="pointer-border",be="pointer-border-hover",xe="pointer-border-focus",$e="animate-onclick",Te="css-links",Ae="vertical",De="horizontal",se=(c,p,M,v,C)=>{let H=p-c;return H===0?M:(v-M)*(C-c)/H+M},Se=c=>!isNaN(parseFloat(c))&&isFinite(c),re=(c,p)=>Se(c)?Number(c):p,ke=(c,p)=>p===0?0:Math.round(c/p)*p,et=(c,p=1/0)=>{if(p===1/0)return c;let M=t(10,p);return Math.round(c*M)/M},me=c=>c==null?!1:typeof c=="boolean"?c:c.trim().toLowerCase()==="true",$n=(c,p)=>{c.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:p}}))},Tr=(c,p)=>{c.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:p}}))},Dr=(c,p)=>{c.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:p}}))},Or=(c,p)=>{c.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:p}}))},_n=(c,p)=>{if(!p||p.length<=0)return;let M=p.map(C=>Se(C)?re(C,C):C),v={values:M||[]};v.value=M[0],v.value0=M[0],v.value1=M[0];for(let C=1;C<M.length;C++)v[`value${C+1}`]=M[C];c.dispatchEvent(new CustomEvent("change",{detail:v}))},ur=(c,p,M)=>{let v=0,C,H,z,E,R=!1,J=(W,he,Ce,_e,we,ge)=>{let Oe=v;Ce!==void 0&&W>Ce&&(W=Ce),he!==void 0&&W<he&&(W=he),v=W;let je=v;return(_e===Ae&&ge||_e===De&&we)&&(je=100-je),_e===Ae?p.style.top=`${je}%`:p.style.left=`${je}%`,Oe!==v},ne=W=>W===p||p.contains(W),I=(W,he,Ce,_e)=>{C=W,H=he,z=Ce,E=_e},oe=W=>{R=W,p.classList.toggle("disabled",R),R?p.setAttribute("aria-disabled","true"):p.hasAttribute("aria-disabled")&&p.removeAttribute("aria-disabled")},We=(W,he)=>{he==null?p.removeAttribute(W):p.setAttribute(W,he)},Ee=W=>p.getAttribute(W),N=W=>{if(!R){switch(W.key){case"ArrowLeft":{W.preventDefault(),typeof C=="function"&&C(M);break}case"ArrowRight":{W.preventDefault(),typeof H=="function"&&H(M);break}case"ArrowUp":{W.preventDefault(),typeof z=="function"&&z(M);break}case"ArrowDown":{W.preventDefault(),typeof E=="function"&&E(M);break}}Or(c,W)}},ee=()=>{R||$n(c,p)};return p.className=`pointer pointer-${M}`,p.addEventListener("keydown",N),p.addEventListener("click",ee),{$pointer:p,get percent(){return v},get disabled(){return R},set disabled(W){oe(W)},updatePosition:J,isClicked:ne,setCallbacks:I,setAttr:We,getAttr:Ee,destroy:()=>{p.removeEventListener("keydown",N),p.removeEventListener("click",ee),p.remove()}}},An=c=>{if(c==null)return;if(Array.isArray(c))return c;if(c.trim()==="")return;let p=c.split(","),M=[],v=!0;for(let C=0;C<p.length;C++){let H=p[C].trim();H!==""&&(M.push(H),Se(H)||(v=!1))}return v?M.map(C=>Number(C)):M},Sn=(c,p)=>p?p.findIndex(M=>M===c||M.toString().trim()===c.toString().trim()):-1,kn=c=>({updatePosition:(p,M,v,C)=>{if(M.length<=0)return;let H=M.length===1,z=M[0],E=M[M.length-1];p===Ae?(c.style.removeProperty("width"),c.style.removeProperty("right"),c.style.removeProperty("left"),H?c.style.height=`${z}%`:c.style.height=`${Math.abs(z-E)}%`,C?(c.style.bottom="0%",H?c.style.top="auto":c.style.top=`${Math.min(100-E,100-z)}%`):(c.style.bottom="auto",H?c.style.top="0%":c.style.top=`${Math.min(z,E)}%`)):(c.style.removeProperty("height"),c.style.removeProperty("top"),c.style.removeProperty("bottom"),H?c.style.width=`${z}%`:c.style.width=`${Math.abs(z-E)}%`,v?(c.style.right="0%",H?c.style.left="auto":c.style.left=`${Math.min(100-E,100-z)}%`):(c.style.right="auto",H?c.style.left="0%":c.style.left=`${Math.min(z,E)}%`))}}),jr="--animate-onclick",Cn="--width",dr="--height",Ln="--panel-bg-border-radius",En="--panel-bg",Pn="--panel-bg-hover",Rn="--panel-bg-fill",Tn="--pointer-width",zt="--pointer-height",fr="--pointer-border-radius",Nr="--pointer-bg",Br="--pointer-bg-hover",Xe="--pointer-bg-focus",yt="--pointer-shadow",Dn="--pointer-shadow-hover",qt="--pointer-shadow-focus",Ir="--pointer-border",On="--pointer-border-hover",jn="--pointer-border-focus",St=(c,p,M)=>{let v=new Map;for(let C of c.attributes){let H=C.nodeName.trim().toLowerCase();if(!p.test(H))continue;let z=H.replace(/\D/g,"").trim(),E=z===""||z==="0"||z==="1"?0:re(z,0)-1,R=M&&typeof M=="function"?M(C.value):C.value;v.set(E,R)}return v},Nn=c=>{if(!c)return null;let p=c.getAttribute(Te);if(!p)return null;let M=p.split(";"),v=[];for(let C of M)C.trim()!==""&&v.push(C.trim());return v},Wt=[[Cn,Z,"sliderWidth",null],[dr,ue,"sliderHeight",null],[Ln,ve,"sliderRadius",null],[En,Me,"sliderBg",null],[Pn,fe,"sliderBgHover",null],[Rn,ie,"sliderBgFill",null],[Tn,He,"pointer#Width",/^pointer([0-9]*)-width$/],[zt,At,"pointer#Height",/^pointer([0-9]*)-height$/],[fr,O,"pointer#Radius",/^pointer([0-9]*)-radius$/],[Nr,S,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Br,A,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Xe,j,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[yt,L,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[Dn,V,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[qt,G,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[Ir,le,"pointer#Border",/^pointer([0-9]*)-border$/],[On,be,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[jn,xe,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],kt=(c,p,M)=>{let v=null,C=[],H=new Map,z=(N,ee=p)=>{let W=[...ee.classList];for(let he of W)he.startsWith(N)&&p.classList.remove(he)},E=()=>{z("shape");let N=p.querySelectorAll(".pointer");for(let ee of N)z("shape",ee)},R=N=>{v=N,z("theme-"),typeof N=="string"&&p.classList.add(`theme-${N}`)},J=()=>{if(E(),!(C.length<=0)){p.classList.add("shape",`shape-${C[0]}`);for(let N=1;N<C.length;N++){let ee=C[N];if(!ee)continue;let W=p.querySelector(`.pointer-${N}`);!W||W.classList.add("shape",`shape-${ee}`)}}},ne=(N,ee)=>{C[N]=ee,J()},I=()=>{E();let N=St(c,/^pointer([0-9]*)-shape$/);if(!(N.size<=0)){for(let ee of N){let W=ee[0];C[W]=ee[1]}J()}},oe=(N,ee)=>`${N}-${ee}`,We=(N,ee,W)=>{let he=M[W];if(!he)return;let Ce=W===0?p:he.$pointer;if(ee==null){H.has(oe(N,W))&&H.delete(oe(N,W)),Ce.style.removeProperty(N);return}H.set(oe(N,W),ee),Ce.style.setProperty(N,ee)},Ee=(N,ee)=>H.get(oe(N,ee));return(()=>{for(let N of Wt){let[ee,W,he,Ce]=N;if(Ce){let we=St(c,Ce);for(let ge of we){let Oe=ge[0],je=ge[1];We(ee,je,Oe)}}else{let we=c.getAttribute(W);We(ee,we,0)}let _e=[];if(he.indexOf("#")===-1)_e.push([he,0]);else{_e.push([he.replace("#",""),0]),_e.push([he.replace("#","0"),0]),_e.push([he.replace("#","1"),0]);for(let we=1;we<M.length;we++)_e.push([he.replace("#",(we+1).toString()),we])}for(let we of _e)try{let ge=we[0],Oe=we[1];Object.prototype.hasOwnProperty.call(c,ge)||Object.defineProperty(c,ge,{get(){return Ee(ee,Oe)},set:je=>{We(ee,je,Oe)}})}catch(ge){console.error(ge)}}R(c.getAttribute(q)),I()})(),{setStyle:We,getStyle:Ee,get theme(){return v},set theme(N){R(N)},get pointerShapes(){return C},setPointerShape:ne}},tt="animate-on-click",Ut="range-dragging",hr=(c,p,M,v)=>{let C=[],H=ne=>{for(let I of C)I.update&&typeof I.update=="function"&&I.update(ne)},z=()=>{for(let ne of C)ne.destroy&&typeof ne.destroy=="function"&&ne.destroy()},E=(ne,I)=>{for(let oe of C)oe.onAttrChange&&typeof oe.onAttrChange=="function"&&oe.onAttrChange(ne,I)},R=ne=>{if(ne.gettersAndSetters){for(let I of ne.gettersAndSetters)if(!(!I.name||!I.attributes))try{Object.prototype.hasOwnProperty.call(c,I.name)||Object.defineProperty(c,I.name,I.attributes)}catch(oe){console.error("defineSettersGetters error:",oe)}}},J=ne=>{var I;if(!ne.css)return;let oe=(I=c.shadowRoot)==null?void 0:I.querySelector("style");!oe||(oe.innerHTML+=ne.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let ne of window.tcRangeSliderPlugins){let I=ne();C.push(I),I.init&&typeof I.init=="function"&&(I.init(c,p,M,v),R(I),J(I))}},update:H,onAttrChange:E,destroy:z}},Ct=10,Hr=20,Bn=(c,p)=>{let M=new Map,v=/^value([0-9]*)$/;for(let E of c.attributes){let R=E.nodeName.trim().toLowerCase();if(!v.test(R))continue;let J=R.replace("value","").trim(),ne=J===""||J==="0"||J==="1"?0:re(J,0)-1,I=Se(E.value)?re(E.value,0):E.value;M.set(ne,I)}let C=Math.max(...Array.from(M.keys())),H=[];H.push([ur(c,p,0),M.get(0)]);let z=p;for(let E=1;E<=C;E++){let R=p.cloneNode(!0);z.after(R),z=R,H.push([ur(c,R,E),M.get(E)])}return H},zr=(c,p,M,v,C,H,z)=>{try{Object.defineProperty(c,v,{configurable:!0,get(){if(!p)return;let E=p.pointers[M];if(!E)return;let R=p.getTextValue(E.percent);return Se(R)?re(R,R):R},set:E=>{p.pointers[M]?p?.setValue(E,M):p?.addPointer(E)}}),Object.defineProperty(c,C,{configurable:!0,get(){var E,R;return(R=(E=p?.pointers[M])==null?void 0:E.getAttr("aria-label"))!=null?R:void 0},set:E=>{!p||p.setAriaLabel(M,E)}}),Object.defineProperty(c,H,{configurable:!0,get(){var E,R;return(R=(E=p?.styles)==null?void 0:E.pointerShapes[M])!=null?R:null},set:E=>{!p||!p.styles||p.styles.setPointerShape(M,E)}}),Object.defineProperty(c,z,{configurable:!0,get(){var E;return(E=p?.pointers[M].disabled)!=null?E:!1},set:E=>{if(!p)return;let R=p?.pointers[M];!R||(R.disabled=E)}})}catch(E){console.error(E)}},In=(c,p)=>{let M=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let v=2;v<Ct;v++)M.push([`value${v}`,`ariaLabel${v}`,`pointer${v}Shape`,`pointer${v}Disabled`,v-1]);for(let v of M)zr(c,p,v[4],v[0],v[1],v[2],v[3])},qr=(c,p,M)=>{var v;let C=(v=M.shadowRoot)==null?void 0:v.querySelector(".container");if(C)for(let H of c)p?C.prepend(H.$pointer):C.append(H.$pointer)},Vt=(c,p)=>{if(!(!p||c.length<=1)){for(let M of c)M.$pointer.style.zIndex=Hr.toString();p.$pointer.style.zIndex=(Hr*2).toString()}},Lt=0,bt=100,qe=2,Wr="0.3s",Hn=(c,p,M)=>{let v=M.map(h=>h[0]),C=null,H=null,z=null,E=null,R=Lt,J=bt,ne,I,oe=De,We=qe,Ee=!1,N=!1,ee=!1,W=0,he=1/0,Ce=!1,_e,we,ge=!1,Oe=!1,je=!1,rt=Wr,Ur=[],gr=h=>{ge||(h.preventDefault&&h.preventDefault(),ct(h),window.addEventListener("mousemove",ct),window.addEventListener("mouseup",Gt),Tr(c,h))},Gt=h=>{ge||(_e=void 0,we=void 0,window.removeEventListener("mousemove",ct),window.removeEventListener("mouseup",Gt),rt&&p.classList.add(tt),Dr(c,h))},Wn=(h,x)=>{if(v.length<=0)return;if(v.length===1)return v[0].isClicked(h)&&rt&&p.classList.remove(tt),v[0];let T=Vn(h);if(Ce){let ae=x,Ie=Rt(ae);Ie!==void 0&&(ae=ke(ae,Ie)),T?(_e=ae,we=0,rt&&p.classList.remove(tt)):_e!==void 0&&(we=ae-_e,_e=ae)}if(!Un(h)&&!T){for(let ae of v)if(!(!ae.isClicked(h)||ae.disabled))return rt&&p.classList.remove(tt),ae;for(let ae of v)if(C===ae)return ae}let Q=1/0,de=null;for(let ae of v){if(ae.disabled)continue;let Ie=Math.abs(x-ae.percent);Ie<Q&&(Q=Ie,de=ae)}return de},Kt=()=>v.findIndex(h=>C===h&&!h.disabled),ct=h=>{let x;if(oe===Ae){let{height:Q,top:de}=p.getBoundingClientRect(),ae=h.type.indexOf("mouse")!==-1?h.clientY:h.touches[0].clientY;x=Math.min(Math.max(0,ae-de),Q)*100/Q}else{let{width:Q,left:de}=p.getBoundingClientRect(),ae=h.type.indexOf("mouse")!==-1?h.clientX:h.touches[0].clientX;x=Math.min(Math.max(0,ae-de),Q)*100/Q}if((Ee||N)&&(x=100-x),C=Wn(h.target,x),C&&Vt(v,C),Ce&&v.length>1&&we!==void 0){let Q=v[0],de=v[v.length-1],ae=Q.percent+we<0,Ie=de.percent+we>100;if(ae||Ie)return;for(let pt=0;pt<v.length;pt++)Le(pt,v[pt].percent+we);return}let T=Kt();T!==-1&&(Le(T,x),C?.$pointer.focus())},Yt=h=>{if(ge||document.activeElement!==c||C?.disabled)return;h.stopPropagation(),h.preventDefault();let x=h.deltaY<0,T=Ee||N,Q=x?!T:T,de=Kt();de!==-1&&(Q?Et(de,v[de].percent):Pt(de,v[de].percent))},Vr=h=>{ge||Oe||(oe===Ae?N?Le(h,100):Le(h,0):Ee?Pt(h,v[h].percent):Et(h,v[h].percent))},Gr=h=>{ge||Oe||(oe===Ae?N?Le(h,0):Le(h,100):Ee?Et(h,v[h].percent):Pt(h,v[h].percent))},Kr=h=>{ge||Oe||(oe===Ae?N?Pt(h,v[h].percent):Et(h,v[h].percent):Ee?Le(h,100):Le(h,0))},Yr=h=>{ge||Oe||(oe===Ae?N?Et(h,v[h].percent):Pt(h,v[h].percent):Ee?Le(h,0):Le(h,100))},Un=h=>h.classList.contains("panel"),Vn=h=>h.classList.contains("panel-fill"),Et=(h,x)=>{if(x===void 0)return;let T=Rt(x);T==null&&(T=1),x-=T,x<0&&(x=0),Le(h,x)},Pt=(h,x)=>{if(x===void 0)return;let T=Rt(x);T==null&&(T=1),x+=T,x>100&&(x=100),Le(h,x)},ut=()=>{!E||E.update({percents:Xr(),values:Zr(),$pointers:br(),min:Tt(),max:Jr(),data:mr(),step:yr(),round:Xt(),type:vr(),textMin:Ft(),textMax:dt(),rightToLeft:Ze(),bottomToTop:xr(),pointersOverlap:Ot(),pointersMinDistance:Zt(),pointersMaxDistance:wr(),rangeDragging:Ue(),disabled:Mr(),keyboardDisabled:Dt(),mousewheelDisabled:Qt()})},Fr=()=>{ut()},Gn=h=>{if(!(ee||v.length<=1||J===R))if(h===0){let x=he*100/(J-R);return Math.max(0,v[h+1].percent-x)}else{let x=W*100/(J-R);return Math.min(v[h-1].percent+x,100)}},Kn=h=>{if(!(ee||v.length<=1||J===R))if(h===v.length-1){let x=he*100/(J-R);return Math.min(v[h-1].percent+x,100)}else{let x=W*100/(J-R);return Math.max(0,v[h+1].percent-x)}},Rt=h=>{let x;if(typeof ne=="function"){let T=se(0,100,R,J,h);x=ne(T,h)}else x=ne;if(Se(x)){let T=J-R;return x=T===0?0:x*100/T,x}},mt=h=>{if(h===void 0)return;let x=se(0,100,R,J,h);return I!==void 0?I[Math.round(x)]:et(x,We)},Ft=()=>I!==void 0?I[R]:R,dt=()=>I!==void 0?I[J]:J,yr=()=>ne,vt=h=>{var x;return h<=0||ee?Ft():(x=mt(v[h-1].percent))!=null?x:""},nt=h=>{var x;return v.length<=1||h>=v.length-1||ee?dt():(x=mt(v[h+1].percent))!=null?x:""},Xr=()=>v.map(h=>h.percent),Zr=()=>v.map(h=>mt(h.percent)),br=()=>v.map(h=>h.$pointer),Tt=()=>R,Jr=()=>J,mr=()=>I,vr=()=>oe,Xt=()=>We,Zt=()=>W,wr=()=>he,Jt=h=>Ur[h],Ze=()=>Ee,xr=()=>N,Mr=()=>ge,Dt=()=>Oe,Qt=()=>je,Ot=()=>ee,Ue=()=>Ce,Le=(h,x)=>{if(x===void 0)return;let T=Rt(x);T!==void 0&&(x=ke(x,T));let Q=v[h];if(!Q)return;let de=Q.updatePosition(x,Gn(h),Kn(h),oe,Ee,N);H?.updatePosition(oe,v.map(ae=>ae.percent),Ee,N),ut();for(let ae of v){let Ie=mt(ae.percent);Ie!==void 0&&(ae.setAttr("aria-valuenow",Ie.toString()),ae.setAttr("aria-valuetext",Ie.toString()))}$r(),de&&_n(c,v.map(ae=>mt(ae.percent)))},Ye=()=>{for(let h=0;h<v.length;h++)Le(h,v[h].percent)},Qr=(h,x)=>{R=I!==void 0?0:re(h,Lt),J=I!==void 0?I.length-1:re(x,bt),ft(R),ht(J)},$r=()=>{var h,x;for(let T=0;T<v.length;T++){let Q=v[T];Q.setAttr("aria-valuemin",((h=vt(T))!=null?h:"").toString()),Q.setAttr("aria-valuemax",((x=nt(T))!=null?x:"").toString())}},ft=h=>{R=re(h,Lt),R>J&&(J=R+bt),Ye()},ht=h=>{J=re(h,bt),J<R&&(J=R+bt),Ye()},er=h=>{ee=!0;for(let x=0;x<h.length;x++)tr(h[x],x);ee=!1;for(let x=0;x<h.length;x++)tr(h[x],x)},tr=(h,x)=>{let T;I!==void 0?(T=h==null?0:Sn(h,I),T===-1&&(T=0)):(T=re(h,R),T<R&&(T=R),T>J&&(T=J));let Q=se(R,J,0,100,T);Le(x,Q)},rr=h=>{if(h==null){ne=void 0;return}if(typeof h=="function"){ne=h,Ye();return}if(Se(h)){ne=re(h,1);let x=Math.abs(J-R);ne>x&&(ne=void 0),Ye();return}ne=void 0},_r=h=>{ee=h,Ye()},Ar=h=>{(!Se(h)||h<0)&&(h=0),W=h},wt=h=>{(!Se(h)||h<0)&&(h=1/0),he=h},Sr=h=>{ge=h,p.classList.toggle("disabled",ge),ge?p.setAttribute("aria-disabled","true"):p.hasAttribute("aria-disabled")&&p.removeAttribute("aria-disabled")},en=h=>{Oe=h},s=h=>{je=h,je?document.removeEventListener("wheel",Yt):document.addEventListener("wheel",Yt,{passive:!1})},f=h=>{if(h==null){I=void 0;return}if(I=An(h),I===void 0||I.length<=0){I=void 0;return}ft(0),ht(I.length-1),ne===void 0&&rr(1)},b=h=>{var x;typeof h=="string"?oe=h.trim().toLowerCase()===Ae?Ae:De:oe=De;let T=(x=c.shadowRoot)==null?void 0:x.querySelector(".range-slider-box");if(!T)return;T.className=`range-slider-box type-${oe}`,Ye();let Q=oe===Ae?"vertical":"horizontal";for(let de of v)de.setAttr("aria-orientation",Q)},$=h=>{Ee=h,v.length>1&&qr(v,Ee,c),Ye(),ut()},D=h=>{N=h,v.length>1&&qr(v,N,c),Ye(),ut()},P=h=>{We=re(h,qe),We<0&&(We=qe),ut()},U=h=>{h==null||h.toString().trim().toLowerCase()==="false"?(rt=void 0,p.style.removeProperty(jr),p.classList.remove(tt)):(rt=h.toString(),p.style.setProperty(jr,rt),p.classList.add(tt))},ye=(h,x)=>{let T=v[h];!T||(T.setAttr("aria-label",x),Ur[h]=x)},pe=h=>{if(_e=void 0,v.length<=1){Ce=!1,p.classList.remove(Ut);return}Ce=h,p.classList.toggle(Ut,Ce)},Pe=()=>{Sr(me(c.getAttribute(Y))),Oe=me(c.getAttribute(ce)),je=me(c.getAttribute(te));let h=St(c,/^pointer([0-9]*)-disabled$/,x=>me(x));for(let x of h){let T=x[0];!v[T]||(v[T].disabled=x[1])}},Ne=()=>{let h=St(c,/^aria-label([0-9]*)$/);for(let x of h){let T=x[0];ye(T,x[1])}},Be=h=>{let x=v.length,T=v[x-1].$pointer,Q=T.cloneNode(!0);T.after(Q);let de=ur(c,Q,x);return de.setCallbacks(Vr,Gr,Kr,Yr),v.push(de),tr(h,x),Ye(),ut(),x},Re=()=>{let h=v.length,x=v[h-1];return x?(x.destroy(),v.pop(),v.length<=1&&pe(!1),Ye(),ut(),h-1):-1};return(()=>{var h,x;for(let Q of v)Q.setCallbacks(Vr,Gr,Kr,Yr);let T=(h=c.shadowRoot)==null?void 0:h.querySelector(".panel-fill");T&&(H=kn(T)),b(c.getAttribute(k)),$(me(c.getAttribute(B))),D(me(c.getAttribute(X))),Qr(c.getAttribute(y),c.getAttribute(w)),rr(c.getAttribute(m)),f(c.getAttribute(g)),er(M.map(Q=>Q[1])),_r(me(c.getAttribute(a))),Ar(re(c.getAttribute(l),0)),wt(re(c.getAttribute(u),1/0)),pe(me(c.getAttribute(d))),P(re(c.getAttribute(_),qe)),Pe(),Ne(),z=kt(c,p,v),U((x=c.getAttribute($e))!=null?x:Wr),p.addEventListener("mousedown",gr),p.addEventListener("mouseup",Gt),p.addEventListener("touchmove",ct),p.addEventListener("touchstart",ct),je||document.addEventListener("wheel",Yt,{passive:!1}),E=hr(c,Fr,{setValues:er,setMin:ft,setMax:ht,setStep:rr,setPointersOverlap:_r,setPointersMinDistance:Ar,setPointersMaxDistance:wt,setDisabled:Sr,setType:b,setRightToLeft:$,setBottomToTop:D,setRound:P,setKeyboardDisabled:en,setMousewheelDisabled:s,setRangeDragging:pe,setData:f},{getPercents:Xr,getValues:Zr,getPointerElements:br,getMin:Tt,getMax:Jr,getStep:yr,getData:mr,getType:vr,getRound:Xt,getTextMin:Ft,getTextMax:dt,isRightToLeft:Ze,isBottomToTop:xr,isDisabled:Mr,isKeyboardDisabled:Dt,isMousewheelDisabled:Qt,isPointersOverlap:Ot,isRangeDraggingEnabled:Ue,getPointersMinDistance:Zt,getPointersMaxDistance:wr}),E.init()})(),{get pointers(){return v},get styles(){return z},get pluginsManager(){return E},get min(){return Ft()},get max(){return dt()},get step(){return yr()},get pointersOverlap(){return Ot()},set pointersOverlap(h){_r(h)},get pointersMinDistance(){return Zt()},set pointersMinDistance(h){Ar(h)},get pointersMaxDistance(){return wr()},set pointersMaxDistance(h){wt(h)},get disabled(){return Mr()},set disabled(h){Sr(h)},get data(){return mr()},get type(){return vr()},set type(h){b(h)},get rightToLeft(){return Ze()},set rightToLeft(h){$(h)},get bottomToTop(){return xr()},set bottomToTop(h){D(h)},get round(){return Xt()},set round(h){P(h)},get animateOnClick(){return rt},set animateOnClick(h){U(h)},get keyboardDisabled(){return Dt()},set keyboardDisabled(h){en(h)},get mousewheelDisabled(){return Qt()},set mousewheelDisabled(h){s(h)},get rangeDragging(){return Ue()},set rangeDragging(h){pe(h)},setMin:ft,setMax:ht,setValue:tr,setStep:rr,setData:f,getTextValue:mt,setAriaLabel:ye,getAriaLabel:Jt,addPointer:Be,removePointer:Re,destroy:()=>{p.removeEventListener("mousedown",gr),p.removeEventListener("mouseup",Gt),p.removeEventListener("touchmove",ct),p.removeEventListener("touchstart",ct),document.removeEventListener("wheel",Yt);for(let h of v)h.destroy();E?.destroy()}}},zn=(c,p,M)=>{let v=Wt.find(([E,R,J,ne])=>R.replace("#","")===p.replace(/\d+/g,""));if(v&&c.styles){let[E,R,J,ne]=v,I=p.replace(/\D/g,"").trim(),oe=I===""||I==="0"||I==="1"?0:re(I,0)-1;c.styles.setStyle(E,M,oe);return}switch(c&&c.pluginsManager&&c.pluginsManager.onAttrChange(p,M),p){case y:{c.setMin(M);break}case w:{c.setMax(M);break}case m:{c.setStep(M);break}case a:{c.pointersOverlap=me(M);break}case l:{c.pointersMinDistance=re(M,0);break}case d:{c.rangeDragging=me(M);break}case u:{c.pointersMaxDistance=re(M,1/0);break}case Y:{c.disabled=me(M);break}case ce:{c.keyboardDisabled=me(M);break}case te:{c.mousewheelDisabled=me(M);break}case g:{c.setData(M);break}case k:{c.type=M;break}case B:{c.rightToLeft=me(M);break}case X:{c.bottomToTop=me(M);break}case _:{c.round=re(M,qe);break}case q:{c.styles&&(c.styles.theme=M);break}case $e:{c.animateOnClick=M;break}}let C=null;if(/^value([0-9]*)$/.test(p)&&(C="value"),/^pointer([0-9]*)-disabled$/.test(p)&&(C="pointer-disabled"),/^aria-label([0-9]*)$/.test(p)&&(C="aria-label"),/^pointer([0-9]*)-shape$/.test(p)&&(C="pointer-shape"),!C)return;let H=p.replace(/\D/g,"").trim(),z=H===""||H==="0"||H==="1"?0:re(H,0)-1;switch(C){case"value":{c.setValue(M,z);break}case"pointer-disabled":{let E=c?.pointers[z];if(!E)return;E.disabled=me(M);break}case"aria-label":{c.setAriaLabel(z,M);break}case"pointer-shape":{c.styles&&c.styles.setPointerShape(z,M);break}}},qn=class extends HTMLElement{constructor(){super(),n(this,"slider"),n(this,"_externalCSSList",[]),n(this,"_observer",null),this.attachShadow({mode:"open"})}set step(c){this.slider&&this.slider.setStep(c)}get step(){var c;return(c=this.slider)==null?void 0:c.step}set disabled(c){this.slider&&(this.slider.disabled=c)}get disabled(){var c,p;return(p=(c=this.slider)==null?void 0:c.disabled)!=null?p:!1}set data(c){var p;(p=this.slider)==null||p.setData(c)}get data(){var c;return(c=this.slider)==null?void 0:c.data}set min(c){var p;(p=this.slider)==null||p.setMin(c)}get min(){var c;return(c=this.slider)==null?void 0:c.min}set max(c){var p;(p=this.slider)==null||p.setMax(c)}get max(){var c;return(c=this.slider)==null?void 0:c.max}set round(c){!this.slider||(this.slider.round=c)}get round(){var c,p;return(p=(c=this.slider)==null?void 0:c.round)!=null?p:qe}set type(c){!this.slider||(this.slider.type=c??De)}get type(){var c;return((c=this.slider)==null?void 0:c.type)||De}set pointersOverlap(c){!this.slider||(this.slider.pointersOverlap=c)}get pointersOverlap(){var c,p;return(p=(c=this.slider)==null?void 0:c.pointersOverlap)!=null?p:!1}set pointersMinDistance(c){!this.slider||(this.slider.pointersMinDistance=c)}get pointersMinDistance(){var c,p;return(p=(c=this.slider)==null?void 0:c.pointersMinDistance)!=null?p:0}set pointersMaxDistance(c){!this.slider||(this.slider.pointersMaxDistance=c)}get pointersMaxDistance(){var c,p;return(p=(c=this.slider)==null?void 0:c.pointersMaxDistance)!=null?p:1/0}set theme(c){!this.slider||!this.slider.styles||(this.slider.styles.theme=c)}get theme(){var c,p,M;return(M=(p=(c=this.slider)==null?void 0:c.styles)==null?void 0:p.theme)!=null?M:null}set rtl(c){!this.slider||(this.slider.rightToLeft=c)}get rtl(){var c,p;return(p=(c=this.slider)==null?void 0:c.rightToLeft)!=null?p:!1}set btt(c){!this.slider||(this.slider.bottomToTop=c)}get btt(){var c,p;return(p=(c=this.slider)==null?void 0:c.bottomToTop)!=null?p:!1}set keyboardDisabled(c){!this.slider||(this.slider.keyboardDisabled=c)}get keyboardDisabled(){var c,p;return(p=(c=this.slider)==null?void 0:c.keyboardDisabled)!=null?p:!1}set mousewheelDisabled(c){!this.slider||(this.slider.mousewheelDisabled=c)}get mousewheelDisabled(){var c,p;return(p=(c=this.slider)==null?void 0:c.mousewheelDisabled)!=null?p:!1}set animateOnClick(c){!this.slider||(this.slider.animateOnClick=c)}get animateOnClick(){var c;return(c=this.slider)==null?void 0:c.animateOnClick}get rangeDragging(){var c,p;return(p=(c=this.slider)==null?void 0:c.rangeDragging)!=null?p:!1}set rangeDragging(c){this.slider&&(this.slider.rangeDragging=me(c))}get externalCSSList(){return this._externalCSSList}addPointer(c){var p,M;if(!this.slider)return;let v=(M=(p=this.slider)==null?void 0:p.addPointer(c))!=null?M:0;zr(this,this.slider,v,`value${v+1}`,`ariaLabel${v+1}`,`pointerShape${v+1}`,`pointer${v+1}Disabled`)}removePointer(){var c;!this.slider||(c=this.slider)==null||c.removePointer()}addCSS(c){if(!this.shadowRoot)return;let p=document.createElement("style");p.textContent=c,this.shadowRoot.appendChild(p)}connectedCallback(){var c,p;if(!this.shadowRoot)return;this._externalCSSList=Nn(this),this.shadowRoot.innerHTML=i(o,this._externalCSSList);let M=(c=this.shadowRoot)==null?void 0:c.querySelector(".pointer");if(!M)return;let v=(p=this.shadowRoot)==null?void 0:p.getElementById("range-slider");if(!v)return;let C=Bn(this,M);this.slider=Hn(this,v,C),In(this,this.slider),this._observer=new MutationObserver(H=>{H.forEach(z=>{var E;if(!this.slider||z.type!=="attributes")return;let R=z.attributeName;!R||zn(this.slider,R,(E=this.getAttribute(R))!=null?E:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},pr=qn;window.tcRangeSlider=pr,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",pr),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends pr{})})();class Zl extends at{static properties={filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}};constructor(){super(),this.filterObject={},this.tabIndex=0,this.inputHandler=this.#e.bind(this),this.debouncedInputHandler=wn(this.inputHandler,0,{leading:!0})}#e(t){kl(t,this)}#t(t,r){return Cl(t,r,this)}reset(){Sl(this)}createRenderRoot(){return this}render(){return ze(this.filterObject,()=>F`
        ${this.#t("min","before")}
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.min||this.filterObject.state.min}"
          value2="${this.filterObject.max||this.filterObject.state.max}"
          step="${this.filterObject.step||1}"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        ${this.#t("max","after")}
      `)}}customElements.define("eox-itemfilter-range",Zl);class Jl extends at{static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}constructor(){super(),this.filterObject={},this.tabIndex=0}reset(){Ol(this)}createRenderRoot(){return this}#e(t){Nl(t,this)}render(){return ze(this.filterObject,()=>F`
        <form style="display: inline">
          ${gn(["intersects","within"],t=>F`
              <label>
                <input
                  tabindex=${this.tabIndex}
                  type="radio"
                  name="mode"
                  .checked="${(this.filterObject.state.mode||"")===t||st}"
                  value="${t}"
                  @click=${()=>this.#e(t)}
                />
                <small>${t} filter geometry</small>
              </label>
            `)}
        </form>
        <eox-itemfilter-spatial-filter
          exportparts="map: spatial-filter-map"
          .geometry="${this.filterObject.state?.geometry}"
          @filter="${t=>{this.filterObject.state.geometry=t.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
        ></eox-itemfilter-spatial>
      `)}}customElements.define("eox-itemfilter-spatial",Jl);class Ql extends at{static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}constructor(){super(),this.geometry=null,this.eoxMap=null}firstUpdated(){this.#e()}#e(){Rs(this)}reset(){jl(this)}render(){return F`<div id="eox-map"></div>`}}customElements.define("eox-itemfilter-spatial-filter",Ql);function ec(e,t){t.renderRoot.querySelectorAll(".chip").forEach(r=>{r.classList.remove("highlighted")}),e.target.classList.add("highlighted"),t.requestUpdate()}function tc(e,t){const{code:r,target:n}=e;n.id==="eox-itemfilter-input-search"&&(t.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(r)||(r==="Space"&&e.preventDefault(),["Escape","Space","Enter"].includes(r)||e.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(r)&&rc(r,e.target.value??"",t)))}function rc(e,t,r){const n=r.renderRoot.querySelector(".chip.highlighted");if((e==="Escape"||t)&&n&&n.classList.remove("highlighted"),e==="Backspace"&&!t){if(r.items.length){n&&(n.querySelector(".chip-item-close").click(),r.items.splice(Array.from(r.renderRoot.querySelectorAll(".chip")).indexOf(n),1));const i=r.renderRoot.querySelectorAll(".chip")[r.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),r.requestUpdate()}r._dispatchEvent()}if((e==="ArrowLeft"||e==="ArrowRight")&&!t){if(r.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const o=r.renderRoot.querySelector(".chip.highlighted");o&&(i=Array.from(r.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),i=i+(e==="ArrowLeft"?-1:1),e==="ArrowLeft"&&i<0&&(i=r.renderRoot.querySelectorAll(".chip").length-1),e==="ArrowRight"&&i>r.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(r.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}class nc extends at{static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}constructor(){super(),this.items={},this.controller={}}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",this.#e.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this.#e.bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}#e(t){tc(t,this)}#t(t){ec(t,this)}render(){return F`
      <style>
        ${Pr}
      </style>
      <span class="chip-container">
        ${gn(this.items,t=>F`
            <span class="chip" @click=${this.#t.bind(this)}>
              <span class="chip-title">${t.title}</span>
                <span
                  class="chip-item-close hidden"
                  data-close=${t.key}
                  @click=${r=>{r.stopPropagation(),this.controller.remove(r),this.requestUpdate()}}
                ></span>
            </span>
            </span>
          `)}
      </span>
    `}}customElements.define("eox-itemfilter-chips",nc);const ic=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),Yi=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var sc=200,$i="__lodash_hash_undefined__",oc=1/0,ac="[object Function]",lc="[object GeneratorFunction]",cc=/[\\^$.*+?()[\]{}|]/g,uc=/^\[object .+?Constructor\]$/,dc=typeof Ge=="object"&&Ge&&Ge.Object===Object&&Ge,fc=typeof self=="object"&&self&&self.Object===Object&&self,_i=dc||fc||Function("return this")();function hc(e,t){var r=e?e.length:0;return!!r&&gc(e,t,0)>-1}function pc(e,t,r,n){for(var i=e.length,o=r+-1;++o<i;)if(t(e[o],o,e))return o;return-1}function gc(e,t,r){if(t!==t)return pc(e,yc,r);for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1}function yc(e){return e!==e}function bc(e,t){return e.has(t)}function mc(e,t){return e?.[t]}function vc(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}function Ds(e){var t=-1,r=Array(e.size);return e.forEach(function(n){r[++t]=n}),r}var wc=Array.prototype,xc=Function.prototype,Os=Object.prototype,Qn=_i["__core-js_shared__"],Fi=function(){var e=/[^.]+$/.exec(Qn&&Qn.keys&&Qn.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),js=xc.toString,Ai=Os.hasOwnProperty,Mc=Os.toString,$c=RegExp("^"+js.call(Ai).replace(cc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_c=wc.splice,Ac=Si(_i,"Map"),ei=Si(_i,"Set"),Er=Si(Object,"create");function Ht(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Sc(){this.__data__=Er?Er(null):{}}function kc(e){return this.has(e)&&delete this.__data__[e]}function Cc(e){var t=this.__data__;if(Er){var r=t[e];return r===$i?void 0:r}return Ai.call(t,e)?t[e]:void 0}function Lc(e){var t=this.__data__;return Er?t[e]!==void 0:Ai.call(t,e)}function Ec(e,t){var r=this.__data__;return r[e]=Er&&t===void 0?$i:t,this}Ht.prototype.clear=Sc;Ht.prototype.delete=kc;Ht.prototype.get=Cc;Ht.prototype.has=Lc;Ht.prototype.set=Ec;function lr(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Pc(){this.__data__=[]}function Rc(e){var t=this.__data__,r=xn(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():_c.call(t,r,1),!0}function Tc(e){var t=this.__data__,r=xn(t,e);return r<0?void 0:t[r][1]}function Dc(e){return xn(this.__data__,e)>-1}function Oc(e,t){var r=this.__data__,n=xn(r,e);return n<0?r.push([e,t]):r[n][1]=t,this}lr.prototype.clear=Pc;lr.prototype.delete=Rc;lr.prototype.get=Tc;lr.prototype.has=Dc;lr.prototype.set=Oc;function cr(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function jc(){this.__data__={hash:new Ht,map:new(Ac||lr),string:new Ht}}function Nc(e){return Mn(this,e).delete(e)}function Bc(e){return Mn(this,e).get(e)}function Ic(e){return Mn(this,e).has(e)}function Hc(e,t){return Mn(this,e).set(e,t),this}cr.prototype.clear=jc;cr.prototype.delete=Nc;cr.prototype.get=Bc;cr.prototype.has=Ic;cr.prototype.set=Hc;function fn(e){var t=-1,r=e?e.length:0;for(this.__data__=new cr;++t<r;)this.add(e[t])}function zc(e){return this.__data__.set(e,$i),this}function qc(e){return this.__data__.has(e)}fn.prototype.add=fn.prototype.push=zc;fn.prototype.has=qc;function xn(e,t){for(var r=e.length;r--;)if(Xc(e[r][0],t))return r;return-1}function Wc(e){if(!Ns(e)||Kc(e))return!1;var t=Zc(e)||vc(e)?$c:uc;return t.test(Yc(e))}function Uc(e,t,r){var n=-1,i=hc,o=e.length,a=!0,l=[],u=l;if(o>=sc){var d=Vc(e);if(d)return Ds(d);a=!1,i=bc,u=new fn}else u=l;e:for(;++n<o;){var g=e[n],y=g;if(g=g!==0?g:0,a&&y===y){for(var w=u.length;w--;)if(u[w]===y)continue e;l.push(g)}else i(u,y,r)||(u!==l&&u.push(y),l.push(g))}return l}var Vc=ei&&1/Ds(new ei([,-0]))[1]==oc?function(e){return new ei(e)}:Jc;function Mn(e,t){var r=e.__data__;return Gc(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Si(e,t){var r=mc(e,t);return Wc(r)?r:void 0}function Gc(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Kc(e){return!!Fi&&Fi in e}function Yc(e){if(e!=null){try{return js.call(e)}catch{}try{return e+""}catch{}}return""}function Fc(e){return e&&e.length?Uc(e):[]}function Xc(e,t){return e===t||e!==e&&t!==t}function Zc(e){var t=Ns(e)?Mc.call(e):"";return t==ac||t==lc}function Ns(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Jc(){}var Qc=Fc;const Bs=pn(Qc);var hn={exports:{}};hn.exports;(function(e,t){var r=200,n="Expected a function",i="__lodash_hash_undefined__",o=1,a=2,l=1/0,u=9007199254740991,d="[object Arguments]",g="[object Array]",y="[object Boolean]",w="[object Date]",m="[object Error]",_="[object Function]",k="[object GeneratorFunction]",q="[object Map]",B="[object Number]",X="[object Object]",Y="[object Promise]",ce="[object RegExp]",te="[object Set]",Z="[object String]",ue="[object Symbol]",ve="[object WeakMap]",Me="[object ArrayBuffer]",fe="[object DataView]",ie="[object Float32Array]",He="[object Float64Array]",At="[object Int8Array]",O="[object Int16Array]",S="[object Int32Array]",A="[object Uint8Array]",j="[object Uint8ClampedArray]",L="[object Uint16Array]",V="[object Uint32Array]",G=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,le=/^\w*$/,be=/^\./,xe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$e=/[\\^$.*+?()[\]{}|]/g,Te=/\\(\\)?/g,Ae=/^\[object .+?Constructor\]$/,De=/^(?:0|[1-9]\d*)$/,se={};se[ie]=se[He]=se[At]=se[O]=se[S]=se[A]=se[j]=se[L]=se[V]=!0,se[d]=se[g]=se[Me]=se[y]=se[fe]=se[w]=se[m]=se[_]=se[q]=se[B]=se[X]=se[ce]=se[te]=se[Z]=se[ve]=!1;var Se=typeof Ge=="object"&&Ge&&Ge.Object===Object&&Ge,re=typeof self=="object"&&self&&self.Object===Object&&self,ke=Se||re||Function("return this")(),et=t&&!t.nodeType&&t,me=et&&!0&&e&&!e.nodeType&&e,$n=me&&me.exports===et,Tr=$n&&Se.process,Dr=function(){try{return Tr&&Tr.binding("util")}catch{}}(),Or=Dr&&Dr.isTypedArray;function _n(s,f){for(var b=-1,$=s?s.length:0,D=Array($);++b<$;)D[b]=f(s[b],b,s);return D}function ur(s,f){for(var b=-1,$=f.length,D=s.length;++b<$;)s[D+b]=f[b];return s}function An(s,f){for(var b=-1,$=s?s.length:0;++b<$;)if(f(s[b],b,s))return!0;return!1}function Sn(s){return function(f){return f?.[s]}}function kn(s,f){for(var b=-1,$=Array(s);++b<s;)$[b]=f(b);return $}function jr(s){return function(f){return s(f)}}function Cn(s,f){return s?.[f]}function dr(s){var f=!1;if(s!=null&&typeof s.toString!="function")try{f=!!(s+"")}catch{}return f}function Ln(s){var f=-1,b=Array(s.size);return s.forEach(function($,D){b[++f]=[D,$]}),b}function En(s,f){return function(b){return s(f(b))}}function Pn(s){var f=-1,b=Array(s.size);return s.forEach(function($){b[++f]=$}),b}var Rn=Array.prototype,Tn=Function.prototype,zt=Object.prototype,fr=ke["__core-js_shared__"],Nr=function(){var s=/[^.]+$/.exec(fr&&fr.keys&&fr.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Br=Tn.toString,Xe=zt.hasOwnProperty,yt=zt.toString,Dn=RegExp("^"+Br.call(Xe).replace($e,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),qt=ke.Symbol,Ir=ke.Uint8Array,On=zt.propertyIsEnumerable,jn=Rn.splice,St=qt?qt.isConcatSpreadable:void 0,Nn=En(Object.keys,Object),Wt=vt(ke,"DataView"),kt=vt(ke,"Map"),tt=vt(ke,"Promise"),Ut=vt(ke,"Set"),hr=vt(ke,"WeakMap"),Ct=vt(Object,"create"),Hr=Ze(Wt),Bn=Ze(kt),zr=Ze(tt),In=Ze(Ut),qr=Ze(hr),Vt=qt?qt.prototype:void 0,Lt=Vt?Vt.valueOf:void 0,bt=Vt?Vt.toString:void 0;function qe(s){var f=-1,b=s?s.length:0;for(this.clear();++f<b;){var $=s[f];this.set($[0],$[1])}}function Wr(){this.__data__=Ct?Ct(null):{}}function Hn(s){return this.has(s)&&delete this.__data__[s]}function zn(s){var f=this.__data__;if(Ct){var b=f[s];return b===i?void 0:b}return Xe.call(f,s)?f[s]:void 0}function qn(s){var f=this.__data__;return Ct?f[s]!==void 0:Xe.call(f,s)}function pr(s,f){var b=this.__data__;return b[s]=Ct&&f===void 0?i:f,this}qe.prototype.clear=Wr,qe.prototype.delete=Hn,qe.prototype.get=zn,qe.prototype.has=qn,qe.prototype.set=pr;function c(s){var f=-1,b=s?s.length:0;for(this.clear();++f<b;){var $=s[f];this.set($[0],$[1])}}function p(){this.__data__=[]}function M(s){var f=this.__data__,b=ge(f,s);if(b<0)return!1;var $=f.length-1;return b==$?f.pop():jn.call(f,b,1),!0}function v(s){var f=this.__data__,b=ge(f,s);return b<0?void 0:f[b][1]}function C(s){return ge(this.__data__,s)>-1}function H(s,f){var b=this.__data__,$=ge(b,s);return $<0?b.push([s,f]):b[$][1]=f,this}c.prototype.clear=p,c.prototype.delete=M,c.prototype.get=v,c.prototype.has=C,c.prototype.set=H;function z(s){var f=-1,b=s?s.length:0;for(this.clear();++f<b;){var $=s[f];this.set($[0],$[1])}}function E(){this.__data__={hash:new qe,map:new(kt||c),string:new qe}}function R(s){return dt(this,s).delete(s)}function J(s){return dt(this,s).get(s)}function ne(s){return dt(this,s).has(s)}function I(s,f){return dt(this,s).set(s,f),this}z.prototype.clear=E,z.prototype.delete=R,z.prototype.get=J,z.prototype.has=ne,z.prototype.set=I;function oe(s){var f=-1,b=s?s.length:0;for(this.__data__=new z;++f<b;)this.add(s[f])}function We(s){return this.__data__.set(s,i),this}function Ee(s){return this.__data__.has(s)}oe.prototype.add=oe.prototype.push=We,oe.prototype.has=Ee;function N(s){this.__data__=new c(s)}function ee(){this.__data__=new c}function W(s){return this.__data__.delete(s)}function he(s){return this.__data__.get(s)}function Ce(s){return this.__data__.has(s)}function _e(s,f){var b=this.__data__;if(b instanceof c){var $=b.__data__;if(!kt||$.length<r-1)return $.push([s,f]),this;b=this.__data__=new z($)}return b.set(s,f),this}N.prototype.clear=ee,N.prototype.delete=W,N.prototype.get=he,N.prototype.has=Ce,N.prototype.set=_e;function we(s,f){var b=Ue(s)||Ot(s)?kn(s.length,String):[],$=b.length,D=!!$;for(var P in s)Xe.call(s,P)&&!(D&&(P=="length"||br(P,$)))&&b.push(P);return b}function ge(s,f){for(var b=s.length;b--;)if(Qt(s[b][0],f))return b;return-1}var Oe=Gn(Ur);function je(s,f,b,$,D){var P=-1,U=s.length;for(b||(b=Zr),D||(D=[]);++P<U;){var ye=s[P];b(ye)?ur(D,ye):D[D.length]=ye}return D}var rt=Kn();function Ur(s,f){return s&&rt(s,f,wt)}function gr(s,f){f=Tt(f,s)?[f]:Fr(f);for(var b=0,$=f.length;s!=null&&b<$;)s=s[Jt(f[b++])];return b&&b==$?s:void 0}function Gt(s){return yt.call(s)}function Wn(s,f){return s!=null&&f in Object(s)}function Kt(s,f,b,$,D){return s===f?!0:s==null||f==null||!ft(s)&&!ht(f)?s!==s&&f!==f:ct(s,f,Kt,b,$,D)}function ct(s,f,b,$,D,P){var U=Ue(s),ye=Ue(f),pe=g,Pe=g;U||(pe=nt(s),pe=pe==d?X:pe),ye||(Pe=nt(f),Pe=Pe==d?X:Pe);var Ne=pe==X&&!dr(s),Be=Pe==X&&!dr(f),Re=pe==Pe;if(Re&&!Ne)return P||(P=new N),U||tr(s)?Rt(s,f,b,$,D,P):mt(s,f,pe,b,$,D,P);if(!(D&a)){var h=Ne&&Xe.call(s,"__wrapped__"),x=Be&&Xe.call(f,"__wrapped__");if(h||x){var T=h?s.value():s,Q=x?f.value():f;return P||(P=new N),b(T,Q,$,D,P)}}return Re?(P||(P=new N),Ft(s,f,b,$,D,P)):!1}function Yt(s,f,b,$){var D=b.length,P=D;if(s==null)return!P;for(s=Object(s);D--;){var U=b[D];if(U[2]?U[1]!==s[U[0]]:!(U[0]in s))return!1}for(;++D<P;){U=b[D];var ye=U[0],pe=s[ye],Pe=U[1];if(U[2]){if(pe===void 0&&!(ye in s))return!1}else{var Ne=new N,Be;if(!(Be===void 0?Kt(Pe,pe,$,o|a,Ne):Be))return!1}}return!0}function Vr(s){if(!ft(s)||mr(s))return!1;var f=Qr(s)||dr(s)?Dn:Ae;return f.test(Ze(s))}function Gr(s){return ht(s)&&$r(s.length)&&!!se[yt.call(s)]}function Kr(s){return typeof s=="function"?s:s==null?Sr:typeof s=="object"?Ue(s)?Et(s[0],s[1]):Vn(s):en(s)}function Yr(s){if(!vr(s))return Nn(s);var f=[];for(var b in Object(s))Xe.call(s,b)&&b!="constructor"&&f.push(b);return f}function Un(s,f){var b=-1,$=Le(s)?Array(s.length):[];return Oe(s,function(D,P,U){$[++b]=f(D,P,U)}),$}function Vn(s){var f=yr(s);return f.length==1&&f[0][2]?Zt(f[0][0],f[0][1]):function(b){return b===s||Yt(b,s,f)}}function Et(s,f){return Tt(s)&&Xt(f)?Zt(Jt(s),f):function(b){var $=_r(b,s);return $===void 0&&$===f?Ar(b,s):Kt(f,$,void 0,o|a)}}function Pt(s){return function(f){return gr(f,s)}}function ut(s){if(typeof s=="string")return s;if(er(s))return bt?bt.call(s):"";var f=s+"";return f=="0"&&1/s==-l?"-0":f}function Fr(s){return Ue(s)?s:wr(s)}function Gn(s,f){return function(b,$){if(b==null)return b;if(!Le(b))return s(b,$);for(var D=b.length,P=-1,U=Object(b);++P<D&&$(U[P],P,U)!==!1;);return b}}function Kn(s){return function(f,b,$){for(var D=-1,P=Object(f),U=$(f),ye=U.length;ye--;){var pe=U[++D];if(b(P[pe],pe,P)===!1)break}return f}}function Rt(s,f,b,$,D,P){var U=D&a,ye=s.length,pe=f.length;if(ye!=pe&&!(U&&pe>ye))return!1;var Pe=P.get(s);if(Pe&&P.get(f))return Pe==f;var Ne=-1,Be=!0,Re=D&o?new oe:void 0;for(P.set(s,f),P.set(f,s);++Ne<ye;){var h=s[Ne],x=f[Ne];if($)var T=U?$(x,h,Ne,f,s,P):$(h,x,Ne,s,f,P);if(T!==void 0){if(T)continue;Be=!1;break}if(Re){if(!An(f,function(Q,de){if(!Re.has(de)&&(h===Q||b(h,Q,$,D,P)))return Re.add(de)})){Be=!1;break}}else if(!(h===x||b(h,x,$,D,P))){Be=!1;break}}return P.delete(s),P.delete(f),Be}function mt(s,f,b,$,D,P,U){switch(b){case fe:if(s.byteLength!=f.byteLength||s.byteOffset!=f.byteOffset)return!1;s=s.buffer,f=f.buffer;case Me:return!(s.byteLength!=f.byteLength||!$(new Ir(s),new Ir(f)));case y:case w:case B:return Qt(+s,+f);case m:return s.name==f.name&&s.message==f.message;case ce:case Z:return s==f+"";case q:var ye=Ln;case te:var pe=P&a;if(ye||(ye=Pn),s.size!=f.size&&!pe)return!1;var Pe=U.get(s);if(Pe)return Pe==f;P|=o,U.set(s,f);var Ne=Rt(ye(s),ye(f),$,D,P,U);return U.delete(s),Ne;case ue:if(Lt)return Lt.call(s)==Lt.call(f)}return!1}function Ft(s,f,b,$,D,P){var U=D&a,ye=wt(s),pe=ye.length,Pe=wt(f),Ne=Pe.length;if(pe!=Ne&&!U)return!1;for(var Be=pe;Be--;){var Re=ye[Be];if(!(U?Re in f:Xe.call(f,Re)))return!1}var h=P.get(s);if(h&&P.get(f))return h==f;var x=!0;P.set(s,f),P.set(f,s);for(var T=U;++Be<pe;){Re=ye[Be];var Q=s[Re],de=f[Re];if($)var ae=U?$(de,Q,Re,f,s,P):$(Q,de,Re,s,f,P);if(!(ae===void 0?Q===de||b(Q,de,$,D,P):ae)){x=!1;break}T||(T=Re=="constructor")}if(x&&!T){var Ie=s.constructor,pt=f.constructor;Ie!=pt&&"constructor"in s&&"constructor"in f&&!(typeof Ie=="function"&&Ie instanceof Ie&&typeof pt=="function"&&pt instanceof pt)&&(x=!1)}return P.delete(s),P.delete(f),x}function dt(s,f){var b=s.__data__;return Jr(f)?b[typeof f=="string"?"string":"hash"]:b.map}function yr(s){for(var f=wt(s),b=f.length;b--;){var $=f[b],D=s[$];f[b]=[$,D,Xt(D)]}return f}function vt(s,f){var b=Cn(s,f);return Vr(b)?b:void 0}var nt=Gt;(Wt&&nt(new Wt(new ArrayBuffer(1)))!=fe||kt&&nt(new kt)!=q||tt&&nt(tt.resolve())!=Y||Ut&&nt(new Ut)!=te||hr&&nt(new hr)!=ve)&&(nt=function(s){var f=yt.call(s),b=f==X?s.constructor:void 0,$=b?Ze(b):void 0;if($)switch($){case Hr:return fe;case Bn:return q;case zr:return Y;case In:return te;case qr:return ve}return f});function Xr(s,f,b){f=Tt(f,s)?[f]:Fr(f);for(var $,D=-1,U=f.length;++D<U;){var P=Jt(f[D]);if(!($=s!=null&&b(s,P)))break;s=s[P]}if($)return $;var U=s?s.length:0;return!!U&&$r(U)&&br(P,U)&&(Ue(s)||Ot(s))}function Zr(s){return Ue(s)||Ot(s)||!!(St&&s&&s[St])}function br(s,f){return f=f??u,!!f&&(typeof s=="number"||De.test(s))&&s>-1&&s%1==0&&s<f}function Tt(s,f){if(Ue(s))return!1;var b=typeof s;return b=="number"||b=="symbol"||b=="boolean"||s==null||er(s)?!0:le.test(s)||!G.test(s)||f!=null&&s in Object(f)}function Jr(s){var f=typeof s;return f=="string"||f=="number"||f=="symbol"||f=="boolean"?s!=="__proto__":s===null}function mr(s){return!!Nr&&Nr in s}function vr(s){var f=s&&s.constructor,b=typeof f=="function"&&f.prototype||zt;return s===b}function Xt(s){return s===s&&!ft(s)}function Zt(s,f){return function(b){return b==null?!1:b[s]===f&&(f!==void 0||s in Object(b))}}var wr=Dt(function(s){s=rr(s);var f=[];return be.test(s)&&f.push(""),s.replace(xe,function(b,$,D,P){f.push(D?P.replace(Te,"$1"):$||b)}),f});function Jt(s){if(typeof s=="string"||er(s))return s;var f=s+"";return f=="0"&&1/s==-l?"-0":f}function Ze(s){if(s!=null){try{return Br.call(s)}catch{}try{return s+""}catch{}}return""}function xr(s,f){return je(Mr(s,f))}function Mr(s,f){var b=Ue(s)?_n:Un;return b(s,Kr(f))}function Dt(s,f){if(typeof s!="function"||f&&typeof f!="function")throw new TypeError(n);var b=function(){var $=arguments,D=f?f.apply(this,$):$[0],P=b.cache;if(P.has(D))return P.get(D);var U=s.apply(this,$);return b.cache=P.set(D,U),U};return b.cache=new(Dt.Cache||z),b}Dt.Cache=z;function Qt(s,f){return s===f||s!==s&&f!==f}function Ot(s){return Ye(s)&&Xe.call(s,"callee")&&(!On.call(s,"callee")||yt.call(s)==d)}var Ue=Array.isArray;function Le(s){return s!=null&&$r(s.length)&&!Qr(s)}function Ye(s){return ht(s)&&Le(s)}function Qr(s){var f=ft(s)?yt.call(s):"";return f==_||f==k}function $r(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=u}function ft(s){var f=typeof s;return!!s&&(f=="object"||f=="function")}function ht(s){return!!s&&typeof s=="object"}function er(s){return typeof s=="symbol"||ht(s)&&yt.call(s)==ue}var tr=Or?jr(Or):Gr;function rr(s){return s==null?"":ut(s)}function _r(s,f,b){var $=s==null?void 0:gr(s,f);return $===void 0?b:$}function Ar(s,f){return s!=null&&Xr(s,f,Wn)}function wt(s){return Le(s)?we(s):Yr(s)}function Sr(s){return s}function en(s){return Tt(s)?Sn(Jt(s)):Pt(s)}e.exports=xr})(hn,hn.exports);var eu=hn.exports;const Is=pn(eu);function tu(e,t,r){let n=[];e.filterProperties.length&&e.filterProperties.forEach(o=>{const a={},l=d=>o.format==="date"?Lr(d).unix():parseFloat(d);t.forEach(d=>{if(o.type==="range"){const g=pi(o.key,d);if(Array.isArray(g)){const y=[l(g[0]),l(g[1])];a.min=a.min!==void 0?Math.min(a.min,y[0]):y[0],a.max=a.max!==void 0?Math.max(a.max,y[1]):y[1]}else{const y=l(g);a.min=a.min!==void 0?Math.min(a.min,y):y,a.max=a.max!==void 0?Math.max(a.max,y):y}return}Array.isArray(d[o.key])?d[o.key].forEach(g=>{a[g]=void 0}):o.type==="spatial"?(a.geometry=void 0,a.mode=o.mode||"intersects"):o.key?.includes(".")?Bs(Is(r.items,o.key)).filter(g=>g).forEach(g=>{a[g]=void 0}):a[d[o.key]]=void 0});const u=o.key||o.keys.join("|");r.filters[u]=Object.assign({type:o.type||"multiselect",dirty:o.state?!1:void 0,key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),r.filters[u].state=Object.assign({},a,o.state)}),e.matchAllWhenEmpty!==!1&&(r.results=r.sortResults(t),r.requestUpdate()),e.aggregateResults&&(n=Array.from(new Set(t.reduce((o,a)=>o.concat(a[e.aggregateResults]),[]))).sort((o,a)=>o.localeCompare(a)));const i=[];return Object.values(r.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{i.includes(a)||i.push(a)}):(o.type==="select"||o.type==="multiselect")&&(i.includes(o.key)||i.push(o.key))}),el(t,Object.assign({keys:i},e.fuseConfig)),n}async function ru(e,t,r){let n;r.externalFilter?n=await il(t,r.filters,e):n=await tl(t,r.filters,e),r.results=r.sortResults(n)}function nu(e,t,r){const n=`filter-${e.key}`.replace("|","-");switch(e.type){case"text":return F`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${n}"
        .tabIndex=${t}
        .filterObject=${e}
        .unstyled=${r.unstyled}
        @filter=${()=>r.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return F`
        <eox-itemfilter-select
          .inlineMode=${r.inlineMode||!1}
          data-type="filter"
          id="${n}"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${Bs(Is(r.items,e.key)).filter(i=>i)}"
          type="${e.type}"
          .unstyled=${r.unstyled}
          @filter=${()=>r.search()}
        ></eox-itemfilter-select>
      `;case"range":return F`
        <eox-itemfilter-range
          id="${n}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .unstyled=${r.unstyled}
          @filter=${()=>r.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return F`
        <eox-itemfilter-spatial
          id="${n}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          @filter=${()=>r.search()}
        ></eox-itemfilter-spatial>
      `;default:return F``}}function iu(e,t){return[...e].sort((r,n)=>r[t.titleProperty].localeCompare(n[t.titleProperty]))}function su(e,t,r){return F`
    ${ze(e.dirty,()=>F`
        <button
          type="button"
          tabindex=${t}
          slot="reset-button"
          class="reset-icon icon"
          @click=${n=>{const i=n.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),r.search(),r.requestUpdate()}}
        >
          ${r.unstyled?"Reset":st}
        </button>
      `)}
  `}function ou(e){e.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{typeof t.reset=="function"&&t.reset()}),e.search()}class au extends at{static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},unstyled:{type:Boolean}}}#e=[];#t=[];#r=ic;constructor(){super(),this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=wn(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.unstyled=!1}apply(){this.#e=tu(this.#r,this.#t,this),this.search()}async searchHandler(){await ru(this.#r,this.#t,this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(t){return iu(t,this.#r)}#i(t,r){return nu(t,r,this)}#n(t,r){return su(t,r,this)}resetFilters(){ou(this)}firstUpdated(t){let r={};Yi.map(n=>{r={...r,[n]:this[n]}}),this.#r=r,this.#t=this.items?.map((n,i)=>Object.assign({id:n[this.idProperty]||`item-${i}`},n))||[],this.apply()}updated(t){Yi.map(r=>{if(t.has(r))return this.firstUpdated(),!0})}updateResult(t){this.selectedResult=t.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}render(){return F`
      <style>
        ${Ks}
        ${!this.unstyled&&Pr}
        ${!this.unstyled&&Ys}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":st}
        @submit="${t=>t.preventDefault()}"
      >
        ${ze(this.filterProperties,()=>F`
            <eox-itemfilter-container
              .filters=${this.filters}
              .filterProperties=${this.filterProperties}
              .inlineMode=${this.inlineMode||!1}
              @reset=${()=>this.resetFilters()}
              @filter=${()=>this.search()}
            >
              <section slot="section">
                ${ze(!this.inlineMode,()=>F`
                    <slot name="filterstitle"
                      ><h6 class="main-heading">Filters</h6></slot
                    >
                  `)}
                <ul id="filters">
                  ${gn(Object.values(this.filters),(t,r)=>F` <li>
                        <eox-itemfilter-expandcontainer
                          .filterObject=${t}
                          @details-toggled=${n=>Ls(n,this.#r,this)}
                          data-details="${t.key}"
                        >
                          ${this.#n(t,Wi(r,1))}
                          ${this.#i(t,Wi(r,2))}
                        </eox-itemfilter-expandcontainer>
                      </li>`)}
                </ul>
                ${ze(!this.inlineMode&&this.#r.filterProperties&&!this.inlineMode&&this.#r.filterProperties&&hi(this.filters),()=>F`
                    <button
                      type="button"
                      id="filter-reset"
                      class="outline small icon-text reset-icon"
                      data-cy="filter-reset"
                      @click=${()=>this.resetFilters()}
                    >
                      Reset all
                    </a>
                  `)}
              </section>
            </eox-itemfilter-container>
          `)}
        ${ze(this.#r?.showResults&&this.results,()=>F`
            <eox-itemfilter-results
              .config=${this.#r}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${this.#e}
              .selectedResult=${this.selectedResult}
              @result=${this.updateResult}
            ></eox-itemfilter-results>
          `)}
      </form>
    `}}customElements.define("eox-itemfilter",au);const lu={slot:"filterstitle",style:{margin:"14px 8px"}},cu={slot:"resultstitle",style:{margin:"14px 8px"}},ti="float:right; height:15px; padding:4px;  margin-top:-4px; background-color:white;",uu="float:right; height:15px; padding:4px;  margin-top:-4px; background-color:#9bcaeb;",pu={__name:"EodashItemFilter",props:{enableCompare:{type:Boolean,default:!1},filtersTitle:{type:String,default:"Indicators"},resultsTitle:{type:String,default:""},titleProperty:{type:String,default:"title"},aggregateResults:{type:String,default:"themes"},enableHighlighting:{type:Boolean,default:!0},expandMultipleFilters:{type:Boolean,default:!0},expandMultipleResults:{type:Boolean,default:!0},filterProperties:{type:Array,default:()=>[{keys:["title","themes","description"],title:"Search",type:"text"},{key:"themes",title:"Theme Filter",type:"multiselect"}]}},setup(e){const t=e,r=async l=>{i.value?.shadowRoot?.querySelectorAll(".compareMapButton").forEach(d=>d.setAttribute("style",ti));const u=l.detail;u&&(o.resetSelectedCompareSTAC(),await o.loadSelectedSTAC(u.href))},n={titleProperty:t.titleProperty,filterProperties:t.filterProperties,aggregateResults:t.aggregateResults,enableHighlighting:t.enableHighlighting,expandMultipleFilters:t.expandMultipleFilters,expandMultipleResults:t.expandMultipleResults},i=Hs(null),o=zs(),a=()=>{setTimeout(()=>{i.value?.shadowRoot.querySelectorAll("details>summary").forEach(l=>l.setAttribute("style","width: 100%")),i.value?.shadowRoot.querySelectorAll("details>div li").forEach(l=>{let u=document.createElement("button");u.className="compareMapButton",u.dataset.id=l.children[0].id,u.onclick=async y=>{i.value?.shadowRoot?.querySelectorAll(".compareMapButton").forEach(_=>{_.setAttribute("style",ti)});const w=y.currentTarget;w?.setAttribute("style",uu);const m=i.value?.items.find(_=>_.id===w?.dataset.id);m&&await o.loadSelectedCompareSTAC(m.href)},u.setAttribute("style",ti);const d=document.createElementNS("http://www.w3.org/2000/svg","svg"),g=document.createElementNS("http://www.w3.org/2000/svg","path");d.setAttribute("width","15"),d.setAttribute("height","15"),d.setAttribute("viewBox","0 0 24 24"),g.setAttribute("d","M19,3H14V5H19V18L14,12V21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,18H5L10,12M10,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H10V23H12V1H10V3Z"),d.appendChild(g),u.appendChild(d),l.append(u)})},100)};return qs(()=>{const l=document.createElement("style");l.innerHTML=`
    section {
      margin: 0 !important;
    }
    section button#filter-reset {
      padding: 0 8px;
      top: 8px;
      right: 8px;
    }
  `,i.value?.shadowRoot?.appendChild(l);const u=o.stac?.filter(d=>d.rel==="child");i.value.items=u,t.enableCompare&&a()}),(l,u)=>(Ws(),Us("eox-itemfilter",Vs({class:"fill-height"},n,{ref_key:"eoxItemFilter",ref:i,style:{overflow:"auto"},onSelect:r}),[ki("h4",lu,Ci(e.filtersTitle),1),ki("h4",cu,Ci(e.resultsTitle),1)],16))}};export{pu as default};
