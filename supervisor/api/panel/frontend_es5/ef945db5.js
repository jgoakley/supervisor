"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[7576],{77576:function(e,t,n){n(44577);var r,i,o,a,l,s,c=n(27530),d=(n(70719),n(53947)),u=n(37500),f=n(63550),p=n(51346),h=n(47181);n(66255),n(3555);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t,n,r,i,o,a){try{var l=e[o](a),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(r,i)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){m(o,r,i,a,l,"next",e)}function l(e){m(o,r,i,a,l,"throw",e)}a(void 0)}))}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=I(e);if(t){var i=I(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return x(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(){E=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var i=t.placement;if(t.kind===r&&("static"===i||"prototype"===i)){var o="static"===i?e:n;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var r=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],r=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!P(e))return n.push(e);var t=this.decorateElement(e,i);n.push(t.element),n.push.apply(n,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:n,finishers:r};var o=this.decorateConstructor(n,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,n){var r=t[e.placement];if(!n&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var l=this.fromElementDescriptor(e),s=this.toElementFinisherExtras((0,i[o])(l)||l);e=s.element,this.addElementPlacement(e,t),s.finisher&&r.push(s.finisher);var c=s.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);n.push.apply(n,c)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;r>=0;r--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(i)||i);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var l=a+1;l<e.length;l++)if(e[a].key===e[l].key&&e[a].placement===e[l].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=L(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:n,placement:r,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:M(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=M(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function C(e){var t,n=L(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function O(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function P(e){return e.decorators&&e.decorators.length}function _(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function M(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function L(e){var t=function(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===v(t)?t:String(t)}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D(e,t,n){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}},D(e,t,n||e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}function S(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(0,d.hC)("vaadin-combo-box-item",(0,u.iv)(r||(r=S(['\n    :host {\n      padding: 0;\n    }\n    :host([focused]:not([disabled])) {\n      background-color: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.12);\n    }\n    :host([selected]:not([disabled])) {\n      background-color: transparent;\n      color: var(--mdc-theme-primary);\n      --mdc-ripple-color: var(--mdc-theme-primary);\n      --mdc-theme-text-primary-on-background: var(--mdc-theme-primary);\n    }\n    :host([selected]:not([disabled])):before {\n      background-color: var(--mdc-theme-primary);\n      opacity: 0.12;\n      content: "";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n    }\n    :host([selected][focused]:not([disabled])):before {\n      opacity: 0.24;\n    }\n    :host(:hover:not([disabled])) {\n      background-color: transparent;\n    }\n    [part="content"] {\n      width: 100%;\n    }\n    [part="checkmark"] {\n      display: none;\n    }\n  ']))));!function(e,t,n,r){var i=E();if(r)for(var o=0;o<r.length;o++)i=r[o](i);var a=t((function(e){i.initializeInstanceElements(e,l.elements)}),n),l=i.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var i,o=e[r];if("method"===o.kind&&(i=t.find(n)))if(_(o.descriptor)||_(i.descriptor)){if(P(o)||P(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(P(o)){if(P(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}O(o,i)}else t.push(o)}return t}(a.d.map(C)),e);i.initializeClassElements(a.F,l.elements),i.runClassFinishers(a.F,l.finishers)}([(0,f.Mo)("ha-combo-box")],(function(e,t){var n,r,d=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(r,t);var n=g(r);function r(){var t;b(this,r);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=n.call.apply(n,[this].concat(o)),e(x(t)),t}return r}(t);return{F:d,d:[{kind:"field",decorators:[(0,f.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,f.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,f.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,f.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,f.Cb)()],key:"validationMessage",value:void 0},{kind:"field",decorators:[(0,f.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,f.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"invalid",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"icon",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)({attribute:!1})],key:"items",value:void 0},{kind:"field",decorators:[(0,f.Cb)({attribute:!1})],key:"filteredItems",value:void 0},{kind:"field",decorators:[(0,f.Cb)({attribute:"allow-custom-value",type:Boolean})],key:"allowCustomValue",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)({attribute:"item-value-path"})],key:"itemValuePath",value:function(){return"value"}},{kind:"field",decorators:[(0,f.Cb)({attribute:"item-label-path"})],key:"itemLabelPath",value:function(){return"label"}},{kind:"field",decorators:[(0,f.Cb)({attribute:"item-id-path"})],key:"itemIdPath",value:void 0},{kind:"field",decorators:[(0,f.Cb)()],key:"renderer",value:void 0},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"required",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)({type:Boolean,reflect:!0,attribute:"opened"})],key:"opened",value:void 0},{kind:"field",decorators:[(0,f.IO)("vaadin-combo-box-light",!0)],key:"_comboBox",value:void 0},{kind:"field",decorators:[(0,f.IO)("ha-textfield",!0)],key:"_inputElement",value:void 0},{kind:"field",key:"_overlayMutationObserver",value:void 0},{kind:"method",key:"open",value:(r=y(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateComplete;case 2:null===(t=this._comboBox)||void 0===t||t.open();case 3:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{kind:"method",key:"focus",value:(n=y(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateComplete;case 2:return e.next=4,null===(t=this._inputElement)||void 0===t?void 0:t.updateComplete;case 4:null===(n=this._inputElement)||void 0===n||n.focus();case 5:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{kind:"method",key:"disconnectedCallback",value:function(){D(I(d.prototype),"disconnectedCallback",this).call(this),this._overlayMutationObserver&&(this._overlayMutationObserver.disconnect(),this._overlayMutationObserver=void 0)}},{kind:"get",key:"selectedItem",value:function(){return this._comboBox.selectedItem}},{kind:"method",key:"setInputValue",value:function(e){this._comboBox.value=e}},{kind:"method",key:"render",value:function(){var e;return(0,u.dy)(i||(i=S(["\n      <vaadin-combo-box-light\n        .itemValuePath=","\n        .itemIdPath=","\n        .itemLabelPath=","\n        .items=","\n        .value=","\n        .filteredItems=","\n        .allowCustomValue=","\n        .disabled=","\n        .required=","\n        ","\n        @opened-changed=","\n        @filter-changed=","\n        @value-changed=",'\n        attr-for-value="value"\n      >\n        <ha-textfield\n          label=',"\n          placeholder=","\n          ?disabled=","\n          ?required=","\n          validationMessage=","\n          .errorMessage=",'\n          class="input"\n          autocapitalize="none"\n          autocomplete="off"\n          autocorrect="off"\n          spellcheck="false"\n          .suffix=',"\n          .icon=","\n          .invalid=","\n          helper=",'\n          helperPersistent\n        >\n          <slot name="icon" slot="leadingIcon"></slot>\n        </ha-textfield>\n        ','\n        <ha-svg-icon\n          role="button"\n          tabindex="-1"\n          aria-label=',"\n          aria-expanded=",'\n          class="toggle-button"\n          .path=',"\n          @click=","\n        ></ha-svg-icon>\n      </vaadin-combo-box-light>\n    "])),this.itemValuePath,this.itemIdPath,this.itemLabelPath,this.items,this.value||"",this.filteredItems,this.allowCustomValue,this.disabled,this.required,(0,c.t)(this.renderer||this._defaultRowRenderer),this._openedChanged,this._filterChanged,this._valueChanged,(0,p.o)(this.label),(0,p.o)(this.placeholder),this.disabled,this.required,(0,p.o)(this.validationMessage),this.errorMessage,(0,u.dy)(o||(o=S(['<div\n            style="width: 28px;"\n            role="none presentation"\n          ></div>']))),this.icon,this.invalid,(0,p.o)(this.helper),this.value?(0,u.dy)(a||(a=S(['<ha-svg-icon\n              role="button"\n              tabindex="-1"\n              aria-label=','\n              class="clear-button"\n              .path=',"\n              @click=","\n            ></ha-svg-icon>"])),(0,p.o)(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.clear")),"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",this._clearValue):"",(0,p.o)(this.label),this.opened?"true":"false",this.opened?"M7,15L12,10L17,15H7Z":"M7,10L12,15L17,10H7Z",this._toggleOpen)}},{kind:"field",key:"_defaultRowRenderer",value:function(){var e=this;return function(t){return(0,u.dy)(l||(l=S(["<mwc-list-item>\n      ","\n    </mwc-list-item>"])),e.itemLabelPath?t[e.itemLabelPath]:t)}}},{kind:"method",key:"_clearValue",value:function(e){e.stopPropagation(),(0,h.B)(this,"value-changed",{value:void 0})}},{kind:"method",key:"_toggleOpen",value:function(e){var t,n;this.opened?(null===(t=this._comboBox)||void 0===t||t.close(),e.stopPropagation()):null===(n=this._comboBox)||void 0===n||n.inputElement.focus()}},{kind:"method",key:"_openedChanged",value:function(e){var t=this,n=e.detail.value;setTimeout((function(){t.opened=n}),0),(0,h.B)(this,e.type,e.detail),n&&this.removeInertOnOverlay()}},{kind:"method",key:"removeInertOnOverlay",value:function(){var e=this;if("MutationObserver"in window&&!this._overlayMutationObserver){var t=document.querySelector("vaadin-combo-box-overlay");if(!t)return;this._overlayMutationObserver=new MutationObserver((function(n){n.forEach((function(n){var r;"attributes"===n.type&&"inert"===n.attributeName?(null===(r=e._overlayMutationObserver)||void 0===r||r.disconnect(),e._overlayMutationObserver=void 0,t.inert=!1):"childList"===n.type&&n.removedNodes.forEach((function(t){var n;"VAADIN-COMBO-BOX-OVERLAY"===t.nodeName&&(null===(n=e._overlayMutationObserver)||void 0===n||n.disconnect(),e._overlayMutationObserver=void 0)}))}))})),this._overlayMutationObserver.observe(t,{attributes:!0}),this._overlayMutationObserver.observe(document.body,{childList:!0})}}},{kind:"method",key:"updated",value:function(e){D(I(d.prototype),"updated",this).call(this,e),(e.has("filteredItems")||e.has("items")&&this.opened)&&this.removeInertOnOverlay()}},{kind:"method",key:"_filterChanged",value:function(e){(0,h.B)(this,e.type,e.detail,{composed:!1})}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();var t=e.detail.value;t!==this.value&&(0,h.B)(this,"value-changed",{value:t||void 0})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,u.iv)(s||(s=S(["\n      :host {\n        display: block;\n        width: 100%;\n      }\n      vaadin-combo-box-light {\n        position: relative;\n        --vaadin-combo-box-overlay-max-height: calc(45vh);\n      }\n      ha-textfield {\n        width: 100%;\n      }\n      ha-textfield > ha-icon-button {\n        --mdc-icon-button-size: 24px;\n        padding: 2px;\n        color: var(--secondary-text-color);\n      }\n      ha-svg-icon {\n        color: var(--input-dropdown-icon-color);\n        position: absolute;\n        cursor: pointer;\n      }\n      .toggle-button {\n        right: 12px;\n        top: -10px;\n        inset-inline-start: initial;\n        inset-inline-end: 12px;\n        direction: var(--direction);\n      }\n      :host([opened]) .toggle-button {\n        color: var(--primary-color);\n      }\n      .clear-button {\n        --mdc-icon-size: 20px;\n        top: -7px;\n        right: 36px;\n        inset-inline-start: initial;\n        inset-inline-end: 36px;\n        direction: var(--direction);\n      }\n    "])))}}]}}),u.oi)}}]);