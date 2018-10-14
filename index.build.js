(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.hyper = {})));
}(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	/*!
	ISC License

	Copyright (c) 2014-2018, Andrea Giammarchi, @WebReflection

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted, provided that the above
	copyright notice and this permission notice appear in all copies.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
	OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.

	*/
	// global window Object
	// optional polyfill info
	//    'auto' used by default, everything is feature detected
	//    'force' use the polyfill even if not fully needed
	function installCustomElements(window, polyfill) {
	  // DO NOT USE THIS FILE DIRECTLY, IT WON'T WORK
	  // THIS IS A PROJECT BASED ON A BUILD SYSTEM
	  // THIS FILE IS JUST WRAPPED UP RESULTING IN
	  // build/document-register-element.node.js

	  var
	    document = window.document,
	    Object = window.Object
	  ;

	  var htmlClass = (function (info) {
	    // (C) Andrea Giammarchi - @WebReflection - MIT Style
	    var
	      catchClass = /^[A-Z]+[a-z]/,
	      filterBy = function (re) {
	        var arr = [], tag;
	        for (tag in register) {
	          if (re.test(tag)) arr.push(tag);
	        }
	        return arr;
	      },
	      add = function (Class, tag) {
	        tag = tag.toLowerCase();
	        if (!(tag in register)) {
	          register[Class] = (register[Class] || []).concat(tag);
	          register[tag] = (register[tag.toUpperCase()] = Class);
	        }
	      },
	      register = (Object.create || Object)(null),
	      htmlClass = {},
	      i, section, tags, Class
	    ;
	    for (section in info) {
	      for (Class in info[section]) {
	        tags = info[section][Class];
	        register[Class] = tags;
	        for (i = 0; i < tags.length; i++) {
	          register[tags[i].toLowerCase()] =
	          register[tags[i].toUpperCase()] = Class;
	        }
	      }
	    }
	    htmlClass.get = function get(tagOrClass) {
	      return typeof tagOrClass === 'string' ?
	        (register[tagOrClass] || (catchClass.test(tagOrClass) ? [] : '')) :
	        filterBy(tagOrClass);
	    };
	    htmlClass.set = function set(tag, Class) {
	      return (catchClass.test(tag) ?
	        add(tag, Class) :
	        add(Class, tag)
	      ), htmlClass;
	    };
	    return htmlClass;
	  }({
	    "collections": {
	      "HTMLAllCollection": [
	        "all"
	      ],
	      "HTMLCollection": [
	        "forms"
	      ],
	      "HTMLFormControlsCollection": [
	        "elements"
	      ],
	      "HTMLOptionsCollection": [
	        "options"
	      ]
	    },
	    "elements": {
	      "Element": [
	        "element"
	      ],
	      "HTMLAnchorElement": [
	        "a"
	      ],
	      "HTMLAppletElement": [
	        "applet"
	      ],
	      "HTMLAreaElement": [
	        "area"
	      ],
	      "HTMLAttachmentElement": [
	        "attachment"
	      ],
	      "HTMLAudioElement": [
	        "audio"
	      ],
	      "HTMLBRElement": [
	        "br"
	      ],
	      "HTMLBaseElement": [
	        "base"
	      ],
	      "HTMLBodyElement": [
	        "body"
	      ],
	      "HTMLButtonElement": [
	        "button"
	      ],
	      "HTMLCanvasElement": [
	        "canvas"
	      ],
	      "HTMLContentElement": [
	        "content"
	      ],
	      "HTMLDListElement": [
	        "dl"
	      ],
	      "HTMLDataElement": [
	        "data"
	      ],
	      "HTMLDataListElement": [
	        "datalist"
	      ],
	      "HTMLDetailsElement": [
	        "details"
	      ],
	      "HTMLDialogElement": [
	        "dialog"
	      ],
	      "HTMLDirectoryElement": [
	        "dir"
	      ],
	      "HTMLDivElement": [
	        "div"
	      ],
	      "HTMLDocument": [
	        "document"
	      ],
	      "HTMLElement": [
	        "element",
	        "abbr",
	        "address",
	        "article",
	        "aside",
	        "b",
	        "bdi",
	        "bdo",
	        "cite",
	        "code",
	        "command",
	        "dd",
	        "dfn",
	        "dt",
	        "em",
	        "figcaption",
	        "figure",
	        "footer",
	        "header",
	        "i",
	        "kbd",
	        "mark",
	        "nav",
	        "noscript",
	        "rp",
	        "rt",
	        "ruby",
	        "s",
	        "samp",
	        "section",
	        "small",
	        "strong",
	        "sub",
	        "summary",
	        "sup",
	        "u",
	        "var",
	        "wbr"
	      ],
	      "HTMLEmbedElement": [
	        "embed"
	      ],
	      "HTMLFieldSetElement": [
	        "fieldset"
	      ],
	      "HTMLFontElement": [
	        "font"
	      ],
	      "HTMLFormElement": [
	        "form"
	      ],
	      "HTMLFrameElement": [
	        "frame"
	      ],
	      "HTMLFrameSetElement": [
	        "frameset"
	      ],
	      "HTMLHRElement": [
	        "hr"
	      ],
	      "HTMLHeadElement": [
	        "head"
	      ],
	      "HTMLHeadingElement": [
	        "h1",
	        "h2",
	        "h3",
	        "h4",
	        "h5",
	        "h6"
	      ],
	      "HTMLHtmlElement": [
	        "html"
	      ],
	      "HTMLIFrameElement": [
	        "iframe"
	      ],
	      "HTMLImageElement": [
	        "img"
	      ],
	      "HTMLInputElement": [
	        "input"
	      ],
	      "HTMLKeygenElement": [
	        "keygen"
	      ],
	      "HTMLLIElement": [
	        "li"
	      ],
	      "HTMLLabelElement": [
	        "label"
	      ],
	      "HTMLLegendElement": [
	        "legend"
	      ],
	      "HTMLLinkElement": [
	        "link"
	      ],
	      "HTMLMapElement": [
	        "map"
	      ],
	      "HTMLMarqueeElement": [
	        "marquee"
	      ],
	      "HTMLMediaElement": [
	        "media"
	      ],
	      "HTMLMenuElement": [
	        "menu"
	      ],
	      "HTMLMenuItemElement": [
	        "menuitem"
	      ],
	      "HTMLMetaElement": [
	        "meta"
	      ],
	      "HTMLMeterElement": [
	        "meter"
	      ],
	      "HTMLModElement": [
	        "del",
	        "ins"
	      ],
	      "HTMLOListElement": [
	        "ol"
	      ],
	      "HTMLObjectElement": [
	        "object"
	      ],
	      "HTMLOptGroupElement": [
	        "optgroup"
	      ],
	      "HTMLOptionElement": [
	        "option"
	      ],
	      "HTMLOutputElement": [
	        "output"
	      ],
	      "HTMLParagraphElement": [
	        "p"
	      ],
	      "HTMLParamElement": [
	        "param"
	      ],
	      "HTMLPictureElement": [
	        "picture"
	      ],
	      "HTMLPreElement": [
	        "pre"
	      ],
	      "HTMLProgressElement": [
	        "progress"
	      ],
	      "HTMLQuoteElement": [
	        "blockquote",
	        "q",
	        "quote"
	      ],
	      "HTMLScriptElement": [
	        "script"
	      ],
	      "HTMLSelectElement": [
	        "select"
	      ],
	      "HTMLShadowElement": [
	        "shadow"
	      ],
	      "HTMLSlotElement": [
	        "slot"
	      ],
	      "HTMLSourceElement": [
	        "source"
	      ],
	      "HTMLSpanElement": [
	        "span"
	      ],
	      "HTMLStyleElement": [
	        "style"
	      ],
	      "HTMLTableCaptionElement": [
	        "caption"
	      ],
	      "HTMLTableCellElement": [
	        "td",
	        "th"
	      ],
	      "HTMLTableColElement": [
	        "col",
	        "colgroup"
	      ],
	      "HTMLTableElement": [
	        "table"
	      ],
	      "HTMLTableRowElement": [
	        "tr"
	      ],
	      "HTMLTableSectionElement": [
	        "thead",
	        "tbody",
	        "tfoot"
	      ],
	      "HTMLTemplateElement": [
	        "template"
	      ],
	      "HTMLTextAreaElement": [
	        "textarea"
	      ],
	      "HTMLTimeElement": [
	        "time"
	      ],
	      "HTMLTitleElement": [
	        "title"
	      ],
	      "HTMLTrackElement": [
	        "track"
	      ],
	      "HTMLUListElement": [
	        "ul"
	      ],
	      "HTMLUnknownElement": [
	        "unknown",
	        "vhgroupv",
	        "vkeygen"
	      ],
	      "HTMLVideoElement": [
	        "video"
	      ]
	    },
	    "nodes": {
	      "Attr": [
	        "node"
	      ],
	      "Audio": [
	        "audio"
	      ],
	      "CDATASection": [
	        "node"
	      ],
	      "CharacterData": [
	        "node"
	      ],
	      "Comment": [
	        "#comment"
	      ],
	      "Document": [
	        "#document"
	      ],
	      "DocumentFragment": [
	        "#document-fragment"
	      ],
	      "DocumentType": [
	        "node"
	      ],
	      "HTMLDocument": [
	        "#document"
	      ],
	      "Image": [
	        "img"
	      ],
	      "Option": [
	        "option"
	      ],
	      "ProcessingInstruction": [
	        "node"
	      ],
	      "ShadowRoot": [
	        "#shadow-root"
	      ],
	      "Text": [
	        "#text"
	      ],
	      "XMLDocument": [
	        "xml"
	      ]
	    }
	  }));
	  
	  
	    
	  // passed at runtime, configurable via nodejs module
	  if (typeof polyfill !== 'object') polyfill = {type: polyfill || 'auto'};
	  
	  var 
	    // V0 polyfill entry
	    REGISTER_ELEMENT = 'registerElement',
	  
	    // IE < 11 only + old WebKit for attributes + feature detection
	    EXPANDO_UID = '__' + REGISTER_ELEMENT + (window.Math.random() * 10e4 >> 0),
	  
	    // shortcuts and costants
	    ADD_EVENT_LISTENER = 'addEventListener',
	    ATTACHED = 'attached',
	    CALLBACK = 'Callback',
	    DETACHED = 'detached',
	    EXTENDS = 'extends',
	  
	    ATTRIBUTE_CHANGED_CALLBACK = 'attributeChanged' + CALLBACK,
	    ATTACHED_CALLBACK = ATTACHED + CALLBACK,
	    CONNECTED_CALLBACK = 'connected' + CALLBACK,
	    DISCONNECTED_CALLBACK = 'disconnected' + CALLBACK,
	    CREATED_CALLBACK = 'created' + CALLBACK,
	    DETACHED_CALLBACK = DETACHED + CALLBACK,
	  
	    ADDITION = 'ADDITION',
	    MODIFICATION = 'MODIFICATION',
	    REMOVAL = 'REMOVAL',
	  
	    DOM_ATTR_MODIFIED = 'DOMAttrModified',
	    DOM_CONTENT_LOADED = 'DOMContentLoaded',
	    DOM_SUBTREE_MODIFIED = 'DOMSubtreeModified',
	  
	    PREFIX_TAG = '<',
	    PREFIX_IS = '=',
	  
	    // valid and invalid node names
	    validName = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
	    invalidNames = [
	      'ANNOTATION-XML',
	      'COLOR-PROFILE',
	      'FONT-FACE',
	      'FONT-FACE-SRC',
	      'FONT-FACE-URI',
	      'FONT-FACE-FORMAT',
	      'FONT-FACE-NAME',
	      'MISSING-GLYPH'
	    ],
	  
	    // registered types and their prototypes
	    types = [],
	    protos = [],
	  
	    // to query subnodes
	    query = '',
	  
	    // html shortcut used to feature detect
	    documentElement = document.documentElement,
	  
	    // ES5 inline helpers || basic patches
	    indexOf = types.indexOf || function (v) {
	      for(var i = this.length; i-- && this[i] !== v;){}
	      return i;
	    },
	  
	    // other helpers / shortcuts
	    OP = Object.prototype,
	    hOP = OP.hasOwnProperty,
	    iPO = OP.isPrototypeOf,
	  
	    defineProperty = Object.defineProperty,
	    empty = [],
	    gOPD = Object.getOwnPropertyDescriptor,
	    gOPN = Object.getOwnPropertyNames,
	    gPO = Object.getPrototypeOf,
	    sPO = Object.setPrototypeOf,
	  
	    // jshint proto: true
	    hasProto = !!Object.__proto__,
	  
	    DRECEV1 = '__dreCEv1',
	    customElements = window.customElements,
	    usableCustomElements = !/^force/.test(polyfill.type) && !!(
	      customElements &&
	      customElements.define &&
	      customElements.get &&
	      customElements.whenDefined
	    ),
	    Dict = Object.create || Object,
	    Map = window.Map || function Map() {
	      var K = [], V = [], i;
	      return {
	        get: function (k) {
	          return V[indexOf.call(K, k)];
	        },
	        set: function (k, v) {
	          i = indexOf.call(K, k);
	          if (i < 0) V[K.push(k) - 1] = v;
	          else V[i] = v;
	        }
	      };
	    },
	    Promise = window.Promise || function (fn) {
	      var
	        notify = [],
	        done = false,
	        p = {
	          'catch': function () {
	            return p;
	          },
	          'then': function (cb) {
	            notify.push(cb);
	            if (done) setTimeout(resolve, 1);
	            return p;
	          }
	        }
	      ;
	      function resolve(value) {
	        done = true;
	        while (notify.length) notify.shift()(value);
	      }
	      fn(resolve);
	      return p;
	    },
	    justCreated = false,
	    constructors = Dict(null),
	    waitingList = Dict(null),
	    nodeNames = new Map(),
	    secondArgument = function (is) {
	      return is.toLowerCase();
	    },
	  
	    // used to create unique instances
	    create = Object.create || function Bridge(proto) {
	      // silly broken polyfill probably ever used but short enough to work
	      return proto ? ((Bridge.prototype = proto), new Bridge()) : this;
	    },
	  
	    // will set the prototype if possible
	    // or copy over all properties
	    setPrototype = sPO || (
	      hasProto ?
	        function (o, p) {
	          o.__proto__ = p;
	          return o;
	        } : (
	      (gOPN && gOPD) ?
	        (function(){
	          function setProperties(o, p) {
	            for (var
	              key,
	              names = gOPN(p),
	              i = 0, length = names.length;
	              i < length; i++
	            ) {
	              key = names[i];
	              if (!hOP.call(o, key)) {
	                defineProperty(o, key, gOPD(p, key));
	              }
	            }
	          }
	          return function (o, p) {
	            do {
	              setProperties(o, p);
	            } while ((p = gPO(p)) && !iPO.call(p, o));
	            return o;
	          };
	        }()) :
	        function (o, p) {
	          for (var key in p) {
	            o[key] = p[key];
	          }
	          return o;
	        }
	    )),
	  
	    // DOM shortcuts and helpers, if any
	  
	    MutationObserver = window.MutationObserver ||
	                       window.WebKitMutationObserver,
	  
	    HTMLAnchorElement = window.HTMLAnchorElement,
	  
	    HTMLElementPrototype = (
	      window.HTMLElement ||
	      window.Element ||
	      window.Node
	    ).prototype,
	  
	    IE8 = !iPO.call(HTMLElementPrototype, documentElement),
	  
	    safeProperty = IE8 ? function (o, k, d) {
	      o[k] = d.value;
	      return o;
	    } : defineProperty,
	  
	    isValidNode = IE8 ?
	      function (node) {
	        return node.nodeType === 1;
	      } :
	      function (node) {
	        return iPO.call(HTMLElementPrototype, node);
	      },
	  
	    targets = IE8 && [],
	  
	    attachShadow = HTMLElementPrototype.attachShadow,
	    cloneNode = HTMLElementPrototype.cloneNode,
	    dispatchEvent = HTMLElementPrototype.dispatchEvent,
	    getAttribute = HTMLElementPrototype.getAttribute,
	    hasAttribute = HTMLElementPrototype.hasAttribute,
	    removeAttribute = HTMLElementPrototype.removeAttribute,
	    setAttribute = HTMLElementPrototype.setAttribute,
	  
	    // replaced later on
	    createElement = document.createElement,
	    importNode = document.importNode,
	    patchedCreateElement = createElement,
	  
	    // shared observer for all attributes
	    attributesObserver = MutationObserver && {
	      attributes: true,
	      characterData: true,
	      attributeOldValue: true
	    },
	  
	    // useful to detect only if there's no MutationObserver
	    DOMAttrModified = MutationObserver || function(e) {
	      doesNotSupportDOMAttrModified = false;
	      documentElement.removeEventListener(
	        DOM_ATTR_MODIFIED,
	        DOMAttrModified
	      );
	    },
	  
	    // will both be used to make DOMNodeInserted asynchronous
	    asapQueue,
	    asapTimer = 0,
	  
	    // internal flags
	    V0 = REGISTER_ELEMENT in document &&
	         !/^force-all/.test(polyfill.type),
	    setListener = true,
	    justSetup = false,
	    doesNotSupportDOMAttrModified = true,
	    dropDomContentLoaded = true,
	  
	    // needed for the innerHTML helper
	    notFromInnerHTMLHelper = true,
	  
	    // optionally defined later on
	    onSubtreeModified,
	    callDOMAttrModified,
	    getAttributesMirror,
	    observer,
	    observe,
	  
	    // based on setting prototype capability
	    // will check proto or the expando attribute
	    // in order to setup the node once
	    patchIfNotAlready,
	    patch,
	  
	    // used for tests
	    tmp
	  ;
	  
	  // IE11 disconnectedCallback issue #
	  // to be tested before any createElement patch
	  if (MutationObserver) {
	    // original fix:
	    // https://github.com/javan/mutation-observer-inner-html-shim
	    tmp = document.createElement('div');
	    tmp.innerHTML = '<div><div></div></div>';
	    new MutationObserver(function (mutations, observer) {
	      if (
	        mutations[0] &&
	        mutations[0].type == 'childList' &&
	        !mutations[0].removedNodes[0].childNodes.length
	      ) {
	        tmp = gOPD(HTMLElementPrototype, 'innerHTML');
	        var set = tmp && tmp.set;
	        if (set)
	          defineProperty(HTMLElementPrototype, 'innerHTML', {
	            set: function (value) {
	              while (this.lastChild)
	                this.removeChild(this.lastChild);
	              set.call(this, value);
	            }
	          });
	      }
	      observer.disconnect();
	      tmp = null;
	    }).observe(tmp, {childList: true, subtree: true});
	    tmp.innerHTML = "";
	  }
	  
	  // only if needed
	  if (!V0) {
	  
	    if (sPO || hasProto) {
	        patchIfNotAlready = function (node, proto) {
	          if (!iPO.call(proto, node)) {
	            setupNode(node, proto);
	          }
	        };
	        patch = setupNode;
	    } else {
	        patchIfNotAlready = function (node, proto) {
	          if (!node[EXPANDO_UID]) {
	            node[EXPANDO_UID] = Object(true);
	            setupNode(node, proto);
	          }
	        };
	        patch = patchIfNotAlready;
	    }
	  
	    if (IE8) {
	      doesNotSupportDOMAttrModified = false;
	      (function (){
	        var
	          descriptor = gOPD(HTMLElementPrototype, ADD_EVENT_LISTENER),
	          addEventListener = descriptor.value,
	          patchedRemoveAttribute = function (name) {
	            var e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
	            e.attrName = name;
	            e.prevValue = getAttribute.call(this, name);
	            e.newValue = null;
	            e[REMOVAL] = e.attrChange = 2;
	            removeAttribute.call(this, name);
	            dispatchEvent.call(this, e);
	          },
	          patchedSetAttribute = function (name, value) {
	            var
	              had = hasAttribute.call(this, name),
	              old = had && getAttribute.call(this, name),
	              e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true})
	            ;
	            setAttribute.call(this, name, value);
	            e.attrName = name;
	            e.prevValue = had ? old : null;
	            e.newValue = value;
	            if (had) {
	              e[MODIFICATION] = e.attrChange = 1;
	            } else {
	              e[ADDITION] = e.attrChange = 0;
	            }
	            dispatchEvent.call(this, e);
	          },
	          onPropertyChange = function (e) {
	            // jshint eqnull:true
	            var
	              node = e.currentTarget,
	              superSecret = node[EXPANDO_UID],
	              propertyName = e.propertyName,
	              event
	            ;
	            if (superSecret.hasOwnProperty(propertyName)) {
	              superSecret = superSecret[propertyName];
	              event = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
	              event.attrName = superSecret.name;
	              event.prevValue = superSecret.value || null;
	              event.newValue = (superSecret.value = node[propertyName] || null);
	              if (event.prevValue == null) {
	                event[ADDITION] = event.attrChange = 0;
	              } else {
	                event[MODIFICATION] = event.attrChange = 1;
	              }
	              dispatchEvent.call(node, event);
	            }
	          }
	        ;
	        descriptor.value = function (type, handler, capture) {
	          if (
	            type === DOM_ATTR_MODIFIED &&
	            this[ATTRIBUTE_CHANGED_CALLBACK] &&
	            this.setAttribute !== patchedSetAttribute
	          ) {
	            this[EXPANDO_UID] = {
	              className: {
	                name: 'class',
	                value: this.className
	              }
	            };
	            this.setAttribute = patchedSetAttribute;
	            this.removeAttribute = patchedRemoveAttribute;
	            addEventListener.call(this, 'propertychange', onPropertyChange);
	          }
	          addEventListener.call(this, type, handler, capture);
	        };
	        defineProperty(HTMLElementPrototype, ADD_EVENT_LISTENER, descriptor);
	      }());
	    } else if (!MutationObserver) {
	      documentElement[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, DOMAttrModified);
	      documentElement.setAttribute(EXPANDO_UID, 1);
	      documentElement.removeAttribute(EXPANDO_UID);
	      if (doesNotSupportDOMAttrModified) {
	        onSubtreeModified = function (e) {
	          var
	            node = this,
	            oldAttributes,
	            newAttributes,
	            key
	          ;
	          if (node === e.target) {
	            oldAttributes = node[EXPANDO_UID];
	            node[EXPANDO_UID] = (newAttributes = getAttributesMirror(node));
	            for (key in newAttributes) {
	              if (!(key in oldAttributes)) {
	                // attribute was added
	                return callDOMAttrModified(
	                  0,
	                  node,
	                  key,
	                  oldAttributes[key],
	                  newAttributes[key],
	                  ADDITION
	                );
	              } else if (newAttributes[key] !== oldAttributes[key]) {
	                // attribute was changed
	                return callDOMAttrModified(
	                  1,
	                  node,
	                  key,
	                  oldAttributes[key],
	                  newAttributes[key],
	                  MODIFICATION
	                );
	              }
	            }
	            // checking if it has been removed
	            for (key in oldAttributes) {
	              if (!(key in newAttributes)) {
	                // attribute removed
	                return callDOMAttrModified(
	                  2,
	                  node,
	                  key,
	                  oldAttributes[key],
	                  newAttributes[key],
	                  REMOVAL
	                );
	              }
	            }
	          }
	        };
	        callDOMAttrModified = function (
	          attrChange,
	          currentTarget,
	          attrName,
	          prevValue,
	          newValue,
	          action
	        ) {
	          var e = {
	            attrChange: attrChange,
	            currentTarget: currentTarget,
	            attrName: attrName,
	            prevValue: prevValue,
	            newValue: newValue
	          };
	          e[action] = attrChange;
	          onDOMAttrModified(e);
	        };
	        getAttributesMirror = function (node) {
	          for (var
	            attr, name,
	            result = {},
	            attributes = node.attributes,
	            i = 0, length = attributes.length;
	            i < length; i++
	          ) {
	            attr = attributes[i];
	            name = attr.name;
	            if (name !== 'setAttribute') {
	              result[name] = attr.value;
	            }
	          }
	          return result;
	        };
	      }
	    }
	  
	    // set as enumerable, writable and configurable
	    document[REGISTER_ELEMENT] = function registerElement(type, options) {
	      upperType = type.toUpperCase();
	      if (setListener) {
	        // only first time document.registerElement is used
	        // we need to set this listener
	        // setting it by default might slow down for no reason
	        setListener = false;
	        if (MutationObserver) {
	          observer = (function(attached, detached){
	            function checkEmAll(list, callback) {
	              for (var i = 0, length = list.length; i < length; callback(list[i++])){}
	            }
	            return new MutationObserver(function (records) {
	              for (var
	                current, node, newValue,
	                i = 0, length = records.length; i < length; i++
	              ) {
	                current = records[i];
	                if (current.type === 'childList') {
	                  checkEmAll(current.addedNodes, attached);
	                  checkEmAll(current.removedNodes, detached);
	                } else {
	                  node = current.target;
	                  if (notFromInnerHTMLHelper &&
	                      node[ATTRIBUTE_CHANGED_CALLBACK] &&
	                      current.attributeName !== 'style') {
	                    newValue = getAttribute.call(node, current.attributeName);
	                    if (newValue !== current.oldValue) {
	                      node[ATTRIBUTE_CHANGED_CALLBACK](
	                        current.attributeName,
	                        current.oldValue,
	                        newValue
	                      );
	                    }
	                  }
	                }
	              }
	            });
	          }(executeAction(ATTACHED), executeAction(DETACHED)));
	          observe = function (node) {
	            observer.observe(
	              node,
	              {
	                childList: true,
	                subtree: true
	              }
	            );
	            return node;
	          };
	          observe(document);
	          if (attachShadow) {
	            HTMLElementPrototype.attachShadow = function () {
	              return observe(attachShadow.apply(this, arguments));
	            };
	          }
	        } else {
	          asapQueue = [];
	          document[ADD_EVENT_LISTENER]('DOMNodeInserted', onDOMNode(ATTACHED));
	          document[ADD_EVENT_LISTENER]('DOMNodeRemoved', onDOMNode(DETACHED));
	        }
	  
	        document[ADD_EVENT_LISTENER](DOM_CONTENT_LOADED, onReadyStateChange);
	        document[ADD_EVENT_LISTENER]('readystatechange', onReadyStateChange);
	  
	        document.importNode = function (node, deep) {
	          switch (node.nodeType) {
	            case 1:
	              return setupAll(document, importNode, [node, !!deep]);
	            case 11:
	              for (var
	                fragment = document.createDocumentFragment(),
	                childNodes = node.childNodes,
	                length = childNodes.length,
	                i = 0; i < length; i++
	              )
	                fragment.appendChild(document.importNode(childNodes[i], !!deep));
	              return fragment;
	            default:
	              return cloneNode.call(node, !!deep);
	          }
	        };
	  
	        HTMLElementPrototype.cloneNode = function (deep) {
	          return setupAll(this, cloneNode, [!!deep]);
	        };
	      }
	  
	      if (justSetup) return (justSetup = false);
	  
	      if (-2 < (
	        indexOf.call(types, PREFIX_IS + upperType) +
	        indexOf.call(types, PREFIX_TAG + upperType)
	      )) {
	        throwTypeError(type);
	      }
	  
	      if (!validName.test(upperType) || -1 < indexOf.call(invalidNames, upperType)) {
	        throw new Error('The type ' + type + ' is invalid');
	      }
	  
	      var
	        constructor = function () {
	          return extending ?
	            document.createElement(nodeName, upperType) :
	            document.createElement(nodeName);
	        },
	        opt = options || OP,
	        extending = hOP.call(opt, EXTENDS),
	        nodeName = extending ? options[EXTENDS].toUpperCase() : upperType,
	        upperType,
	        i
	      ;
	  
	      if (extending && -1 < (
	        indexOf.call(types, PREFIX_TAG + nodeName)
	      )) {
	        throwTypeError(nodeName);
	      }
	  
	      i = types.push((extending ? PREFIX_IS : PREFIX_TAG) + upperType) - 1;
	  
	      query = query.concat(
	        query.length ? ',' : '',
	        extending ? nodeName + '[is="' + type.toLowerCase() + '"]' : nodeName
	      );
	  
	      constructor.prototype = (
	        protos[i] = hOP.call(opt, 'prototype') ?
	          opt.prototype :
	          create(HTMLElementPrototype)
	      );
	  
	      if (query.length) loopAndVerify(
	        document.querySelectorAll(query),
	        ATTACHED
	      );
	  
	      return constructor;
	    };
	  
	    document.createElement = (patchedCreateElement = function (localName, typeExtension) {
	      var
	        is = getIs(typeExtension),
	        node = is ?
	          createElement.call(document, localName, secondArgument(is)) :
	          createElement.call(document, localName),
	        name = '' + localName,
	        i = indexOf.call(
	          types,
	          (is ? PREFIX_IS : PREFIX_TAG) +
	          (is || name).toUpperCase()
	        ),
	        setup = -1 < i
	      ;
	      if (is) {
	        node.setAttribute('is', is = is.toLowerCase());
	        if (setup) {
	          setup = isInQSA(name.toUpperCase(), is);
	        }
	      }
	      notFromInnerHTMLHelper = !document.createElement.innerHTMLHelper;
	      if (setup) patch(node, protos[i]);
	      return node;
	    });
	  
	  }
	  
	  function ASAP() {
	    var queue = asapQueue.splice(0, asapQueue.length);
	    asapTimer = 0;
	    while (queue.length) {
	      queue.shift().call(
	        null, queue.shift()
	      );
	    }
	  }
	  
	  function loopAndVerify(list, action) {
	    for (var i = 0, length = list.length; i < length; i++) {
	      verifyAndSetupAndAction(list[i], action);
	    }
	  }
	  
	  function loopAndSetup(list) {
	    for (var i = 0, length = list.length, node; i < length; i++) {
	      node = list[i];
	      patch(node, protos[getTypeIndex(node)]);
	    }
	  }
	  
	  function executeAction(action) {
	    return function (node) {
	      if (isValidNode(node)) {
	        verifyAndSetupAndAction(node, action);
	        if (query.length) loopAndVerify(
	          node.querySelectorAll(query),
	          action
	        );
	      }
	    };
	  }
	  
	  function getTypeIndex(target) {
	    var
	      is = getAttribute.call(target, 'is'),
	      nodeName = target.nodeName.toUpperCase(),
	      i = indexOf.call(
	        types,
	        is ?
	            PREFIX_IS + is.toUpperCase() :
	            PREFIX_TAG + nodeName
	      )
	    ;
	    return is && -1 < i && !isInQSA(nodeName, is) ? -1 : i;
	  }
	  
	  function isInQSA(name, type) {
	    return -1 < query.indexOf(name + '[is="' + type + '"]');
	  }
	  
	  function onDOMAttrModified(e) {
	    var
	      node = e.currentTarget,
	      attrChange = e.attrChange,
	      attrName = e.attrName,
	      target = e.target,
	      addition = e[ADDITION] || 2,
	      removal = e[REMOVAL] || 3
	    ;
	    if (notFromInnerHTMLHelper &&
	        (!target || target === node) &&
	        node[ATTRIBUTE_CHANGED_CALLBACK] &&
	        attrName !== 'style' && (
	          e.prevValue !== e.newValue ||
	          // IE9, IE10, and Opera 12 gotcha
	          e.newValue === '' && (
	            attrChange === addition ||
	            attrChange === removal
	          )
	    )) {
	      node[ATTRIBUTE_CHANGED_CALLBACK](
	        attrName,
	        attrChange === addition ? null : e.prevValue,
	        attrChange === removal ? null : e.newValue
	      );
	    }
	  }
	  
	  function onDOMNode(action) {
	    var executor = executeAction(action);
	    return function (e) {
	      asapQueue.push(executor, e.target);
	      if (asapTimer) clearTimeout(asapTimer);
	      asapTimer = setTimeout(ASAP, 1);
	    };
	  }
	  
	  function onReadyStateChange(e) {
	    if (dropDomContentLoaded) {
	      dropDomContentLoaded = false;
	      e.currentTarget.removeEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
	    }
	    if (query.length) loopAndVerify(
	      (e.target || document).querySelectorAll(query),
	      e.detail === DETACHED ? DETACHED : ATTACHED
	    );
	    if (IE8) purge();
	  }
	  
	  function patchedSetAttribute(name, value) {
	    // jshint validthis:true
	    var self = this;
	    setAttribute.call(self, name, value);
	    onSubtreeModified.call(self, {target: self});
	  }
	  
	  function setupAll(context, callback, args) {
	    var
	      node = callback.apply(context, args),
	      i = getTypeIndex(node)
	    ;
	    if (-1 < i) patch(node, protos[i]);
	    if (args.pop() && query.length)
	      loopAndSetup(node.querySelectorAll(query));
	    return node;
	  }
	  
	  function setupNode(node, proto) {
	    setPrototype(node, proto);
	    if (observer) {
	      observer.observe(node, attributesObserver);
	    } else {
	      if (doesNotSupportDOMAttrModified) {
	        node.setAttribute = patchedSetAttribute;
	        node[EXPANDO_UID] = getAttributesMirror(node);
	        node[ADD_EVENT_LISTENER](DOM_SUBTREE_MODIFIED, onSubtreeModified);
	      }
	      node[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, onDOMAttrModified);
	    }
	    if (node[CREATED_CALLBACK] && notFromInnerHTMLHelper) {
	      node.created = true;
	      node[CREATED_CALLBACK]();
	      node.created = false;
	    }
	  }
	  
	  function purge() {
	    for (var
	      node,
	      i = 0,
	      length = targets.length;
	      i < length; i++
	    ) {
	      node = targets[i];
	      if (!documentElement.contains(node)) {
	        length--;
	        targets.splice(i--, 1);
	        verifyAndSetupAndAction(node, DETACHED);
	      }
	    }
	  }
	  
	  function throwTypeError(type) {
	    throw new Error('A ' + type + ' type is already registered');
	  }
	  
	  function verifyAndSetupAndAction(node, action) {
	    var
	      fn,
	      i = getTypeIndex(node),
	      counterAction
	    ;
	    if (-1 < i) {
	      patchIfNotAlready(node, protos[i]);
	      i = 0;
	      if (action === ATTACHED && !node[ATTACHED]) {
	        node[DETACHED] = false;
	        node[ATTACHED] = true;
	        counterAction = 'connected';
	        i = 1;
	        if (IE8 && indexOf.call(targets, node) < 0) {
	          targets.push(node);
	        }
	      } else if (action === DETACHED && !node[DETACHED]) {
	        node[ATTACHED] = false;
	        node[DETACHED] = true;
	        counterAction = 'disconnected';
	        i = 1;
	      }
	      if (i && (fn = (
	        node[action + CALLBACK] ||
	        node[counterAction + CALLBACK]
	      ))) fn.call(node);
	    }
	  }
	  
	  
	  
	  // V1 in da House!
	  function CustomElementRegistry() {}
	  
	  CustomElementRegistry.prototype = {
	    constructor: CustomElementRegistry,
	    // a workaround for the stubborn WebKit
	    define: usableCustomElements ?
	      function (name, Class, options) {
	        if (options) {
	          CERDefine(name, Class, options);
	        } else {
	          var NAME = name.toUpperCase();
	          constructors[NAME] = {
	            constructor: Class,
	            create: [NAME]
	          };
	          nodeNames.set(Class, NAME);
	          customElements.define(name, Class);
	        }
	      } :
	      CERDefine,
	    get: usableCustomElements ?
	      function (name) {
	        return customElements.get(name) || get(name);
	      } :
	      get,
	    whenDefined: usableCustomElements ?
	      function (name) {
	        return Promise.race([
	          customElements.whenDefined(name),
	          whenDefined(name)
	        ]);
	      } :
	      whenDefined
	  };
	  
	  function CERDefine(name, Class, options) {
	    var
	      is = options && options[EXTENDS] || '',
	      CProto = Class.prototype,
	      proto = create(CProto),
	      attributes = Class.observedAttributes || empty,
	      definition = {prototype: proto}
	    ;
	    // TODO: is this needed at all since it's inherited?
	    // defineProperty(proto, 'constructor', {value: Class});
	    safeProperty(proto, CREATED_CALLBACK, {
	        value: function () {
	          if (justCreated) justCreated = false;
	          else if (!this[DRECEV1]) {
	            this[DRECEV1] = true;
	            new Class(this);
	            if (CProto[CREATED_CALLBACK])
	              CProto[CREATED_CALLBACK].call(this);
	            var info = constructors[nodeNames.get(Class)];
	            if (!usableCustomElements || info.create.length > 1) {
	              notifyAttributes(this);
	            }
	          }
	      }
	    });
	    safeProperty(proto, ATTRIBUTE_CHANGED_CALLBACK, {
	      value: function (name) {
	        if (-1 < indexOf.call(attributes, name)) {
	          if (CProto[ATTRIBUTE_CHANGED_CALLBACK])
	            CProto[ATTRIBUTE_CHANGED_CALLBACK].apply(this, arguments);
	        }
	      }
	    });
	    if (CProto[CONNECTED_CALLBACK]) {
	      safeProperty(proto, ATTACHED_CALLBACK, {
	        value: CProto[CONNECTED_CALLBACK]
	      });
	    }
	    if (CProto[DISCONNECTED_CALLBACK]) {
	      safeProperty(proto, DETACHED_CALLBACK, {
	        value: CProto[DISCONNECTED_CALLBACK]
	      });
	    }
	    if (is) definition[EXTENDS] = is;
	    name = name.toUpperCase();
	    constructors[name] = {
	      constructor: Class,
	      create: is ? [is, secondArgument(name)] : [name]
	    };
	    nodeNames.set(Class, name);
	    document[REGISTER_ELEMENT](name.toLowerCase(), definition);
	    whenDefined(name);
	    waitingList[name].r();
	  }
	  
	  function get(name) {
	    var info = constructors[name.toUpperCase()];
	    return info && info.constructor;
	  }
	  
	  function getIs(options) {
	    return typeof options === 'string' ?
	        options : (options && options.is || '');
	  }
	  
	  function notifyAttributes(self) {
	    var
	      callback = self[ATTRIBUTE_CHANGED_CALLBACK],
	      attributes = callback ? self.attributes : empty,
	      i = attributes.length,
	      attribute
	    ;
	    while (i--) {
	      attribute =  attributes[i]; // || attributes.item(i);
	      callback.call(
	        self,
	        attribute.name || attribute.nodeName,
	        null,
	        attribute.value || attribute.nodeValue
	      );
	    }
	  }
	  
	  function whenDefined(name) {
	    name = name.toUpperCase();
	    if (!(name in waitingList)) {
	      waitingList[name] = {};
	      waitingList[name].p = new Promise(function (resolve) {
	        waitingList[name].r = resolve;
	      });
	    }
	    return waitingList[name].p;
	  }
	  
	  function polyfillV1() {
	    if (customElements) delete window.customElements;
	    defineProperty(window, 'customElements', {
	      configurable: true,
	      value: new CustomElementRegistry()
	    });
	    defineProperty(window, 'CustomElementRegistry', {
	      configurable: true,
	      value: CustomElementRegistry
	    });
	    for (var
	      patchClass = function (name) {
	        var Class = window[name];
	        if (Class) {
	          window[name] = function CustomElementsV1(self) {
	            var info, isNative;
	            if (!self) self = this;
	            if (!self[DRECEV1]) {
	              justCreated = true;
	              info = constructors[nodeNames.get(self.constructor)];
	              isNative = usableCustomElements && info.create.length === 1;
	              self = isNative ?
	                Reflect.construct(Class, empty, info.constructor) :
	                document.createElement.apply(document, info.create);
	              self[DRECEV1] = true;
	              justCreated = false;
	              if (!isNative) notifyAttributes(self);
	            }
	            return self;
	          };
	          window[name].prototype = Class.prototype;
	          try {
	            Class.prototype.constructor = window[name];
	          } catch(WebKit) {
	            defineProperty(Class, DRECEV1, {value: window[name]});
	          }
	        }
	      },
	      Classes = htmlClass.get(/^HTML[A-Z]*[a-z]/),
	      i = Classes.length;
	      i--;
	      patchClass(Classes[i])
	    ) {}
	    (document.createElement = function (name, options) {
	      var is = getIs(options);
	      return is ?
	        patchedCreateElement.call(this, name, secondArgument(is)) :
	        patchedCreateElement.call(this, name);
	    });
	    if (!V0) {
	      justSetup = true;
	      document[REGISTER_ELEMENT]('');
	    }
	  }
	  
	  // if customElements is not there at all
	  if (!customElements || /^force/.test(polyfill.type)) polyfillV1();
	  else if(!polyfill.noBuiltIn) {
	    // if available test extends work as expected
	    try {
	      (function (DRE, options, name) {
	        var re = new RegExp('^<a\\s+is=(\'|")' + name + '\\1></a>$');
	        options[EXTENDS] = 'a';
	        DRE.prototype = create(HTMLAnchorElement.prototype);
	        DRE.prototype.constructor = DRE;
	        window.customElements.define(name, DRE, options);
	        if (
	          !re.test(document.createElement('a', {is: name}).outerHTML) ||
	          !re.test((new DRE()).outerHTML)
	        ) {
	          throw options;
	        }
	      }(
	        function DRE() {
	          return Reflect.construct(HTMLAnchorElement, [], DRE);
	        },
	        {},
	        'document-register-element-a'
	      ));
	    } catch(o_O) {
	      // or force the polyfill if not
	      // and keep internal original reference
	      polyfillV1();
	    }
	  }
	  
	  // FireFox only issue
	  if(!polyfill.noBuiltIn) {
	    try {
	      createElement.call(document, 'a', 'a');
	    } catch(FireFox) {
	      secondArgument = function (is) {
	        return {is: is.toLowerCase()};
	      };
	    }
	  }
	  
	}
	installCustomElements(commonjsGlobal);

	/*! (c) Andrea Giammarchi (ISC) */var hyperHTML=function(e){function t(){return this}function n(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1];}function r(){}function i(){var e=function(e,n){for(var r=new w(n),i=e.length,o=0;o<i;o++){var a=e[o];a.nodeType===s&&t(a,r);}},t=function r(e,t){Le.has(e)&&e.dispatchEvent(t);for(var n=e.children||te(e),i=n.length,o=0;o<i;o++)r(n[o],t);};try{new MutationObserver(function(t){for(var n=t.length,r=0;r<n;r++){var i=t[r];e(i.removedNodes,p),e(i.addedNodes,h);}}).observe(document,{subtree:!0,childList:!0});}catch(n){document.addEventListener("DOMNodeRemoved",function(t){e([t.target],p);},!1),document.addEventListener("DOMNodeInserted",function(t){e([t.target],h);},!1);}}function o(e){var t=Ie.get(this);return t&&t.template===ie(e)?u.apply(t.updates,arguments):a.apply(this,arguments),this}function a(e){e=ie(e);var t=We.get(e)||c.call(this,e),n=ne(this.ownerDocument,t.fragment),r=Ve.create(n,t.paths);Ie.set(this,{template:e,updates:r}),u.apply(r,arguments),this.textContent="",this.appendChild(n);}function u(){for(var e=arguments.length,t=1;t<e;t++)this[t-1](arguments[t]);}function c(e){var t=[],n=e.join(b).replace(qe,Je),r=Y(this,n);Ve.find(r,t,e.slice());var i={fragment:r,paths:t};return We.set(e,i),i}function f(e){return arguments.length<2?null==e?Ue("html"):"string"==typeof e?f.wire(null,e):"raw"in e?Ue("html")(e):"nodeType"in e?f.bind(e):Xe(e,"html"):("raw"in e?Ue("html"):f.wire).apply(null,arguments)}var l=document.defaultView,s=1,d=/^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i,v="http://www.w3.org/2000/svg",h="connected",p="dis"+h,g=/^style|textarea$/i,m="_hyper: "+(Math.random()*new Date|0)+";",b="\x3c!--"+m+"--\x3e",w=l.Event;try{new w("Event");}catch(nt){w=function(e){var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t};}var y=l.Map||function(){var e=[],t=[];return {get:function(n){return t[e.indexOf(n)]},set:function(n,r){t[e.push(n)-1]=r;}}},N=0,x=l.WeakMap||function(){var e=m+N++;return {get:function(t){return t[e]},set:function(t,n){Object.defineProperty(t,e,{configurable:!0,value:n});}}},E=l.WeakSet||function(){var e=new x;return {add:function(t){e.set(t,!0);},has:function(t){return !0===e.get(t)}}},C=Array.isArray||function(e){return function(t){return "[object Array]"===e.call(t)}}({}.toString),k=m.trim||function(){return this.replace(/^\s+|\s+$/g,"")},A=function(e,t){var n="_"+e+"$";return {get:function(){return this[n]||j(this,n,t.call(this,e))},set:function(e){j(this,n,e);}}},j=function(e,t,n){return Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t]},O={},S={},T=[],L=S.hasOwnProperty,M=0,$={attributes:O,define:function(e,t){e.indexOf("-")<0?(e in S||(M=T.push(e)),S[e]=t):O[e]=t;},invoke:function(e,t){for(var n=0;n<M;n++){var r=T[n];if(L.call(e,r))return S[r](e[r],t)}}},D=function(e,t){return P(e).createElement(t)},P=function(e){return e.ownerDocument||e},R=function(e){return P(e).createDocumentFragment()},_=function(e,t){return P(e).createTextNode(t)},H=" \\f\\n\\r\\t",z="[ "+H+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",F="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",B="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",Z=new RegExp(F+z+B+"+)([ "+H+"]*/?>)","g"),V=new RegExp(F+z+B+"*)([ "+H+"]*/>)","g"),G=R(document),I="append"in G,W="content"in D(document,"template");G.appendChild(_(G,"g")),G.appendChild(_(G,""));var q=1===G.cloneNode(!0).childNodes.length,J="importNode"in document,K=I?function(e,t){e.append.apply(e,t);}:function(e,t){for(var n=t.length,r=0;r<n;r++)e.appendChild(t[r]);},Q=new RegExp("("+z+"=)(['\"]?)"+b+"\\2","gi"),U=function(e,t,n,r){return "<"+t+n.replace(Q,X)+r},X=function(e,t,n){return t+(n||'"')+m+(n||'"')},Y=function(e,t){return ("ownerSVGElement"in e?ue:ae)(e,t.replace(Z,U))},ee=q?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=n.length,i=0;i<r;i++)t.appendChild(ee(n[i]));return t}:function(e){return e.cloneNode(!0)},te=function(e){for(var t=[],n=e.childNodes,r=n.length,i=0;i<r;i++)n[i].nodeType===s&&t.push(n[i]);return t},ne=J?function(e,t){return e.importNode(t,!0)}:function(e,t){return ee(t)},re=[].slice,ie=function(e){return oe(e)},oe=function(e){if(e.propertyIsEnumerable("raw")||!Object.isFrozen(e.raw)||/Firefox\/(\d+)/.test((l.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var t={};oe=function(e){var n="^"+e.join("^");return t[n]||(t[n]=e)};}else oe=function(e){return e};return oe(e)},ae=W?function(e,t){var n=D(e,"template");return n.innerHTML=t,n.content}:function(e,t){var n=D(e,"template"),r=R(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var i=RegExp.$1;n.innerHTML="<table>"+t+"</table>",K(r,re.call(n.querySelectorAll(i)));}else n.innerHTML=t,K(r,re.call(n.childNodes));return r},ue=W?function(e,t){var n=R(e),r=P(e).createElementNS(v,"svg");return r.innerHTML=t,K(n,re.call(r.childNodes)),n}:function(e,t){var n=R(e),r=D(e,"div");return r.innerHTML='<svg xmlns="'+v+'">'+t+"</svg>",K(n,re.call(r.firstChild.childNodes)),n};n.prototype.insert=function(){var e=R(this.first);return K(e,this.childNodes),e},n.prototype.remove=function(){var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=P(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents();}return e};var ce=function(e){var t=[],n=void 0;switch(e.nodeType){case s:case 11:n=e;break;case 8:n=e.parentNode,fe(t,n,e);break;default:n=e.ownerElement;}for(e=n;n=n.parentNode;e=n)fe(t,n,e);return t},fe=function(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n));},le={create:function(e,t,n){return {type:e,name:n,node:t,path:ce(t)}},find:function(e,t){for(var n=t.length,r=0;r<n;r++)e=e.childNodes[t[r]];return e}},se=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,de=function(e,t,n){if(n){var r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),ve(r,n)}return ve(e.style,n)},ve=function(e,t){var n=void 0,r=void 0;return function(i){switch(typeof i){case"object":if(i){if("object"===n){if(!t&&r!==i)for(var o in r)o in i||(e[o]="");}else t?e.value="":e.cssText="";var a=t?{}:e;for(var u in i){var c=i[u],f="number"!=typeof c||se.test(u)?c:c+"px";/^--/.test(u)?a.setProperty(u,f):a[u]=f;}n="object",t?e.value=ge(r=a):r=i;break}default:r!=i&&(n="string",r=i,t?e.value=i||"":e.cssText=i||"");}}},he=/([^A-Z])([A-Z]+)/g,pe=function(e,t,n){return t+"-"+n.toLowerCase()},ge=function(e){var t=[];for(var n in e)t.push(n.replace(he,pe),":",e[n],";");return t.join("")},me=function(e,t,n,r,i,o){if(i-r<2)t.insertBefore(e(n[r],1),o);else{for(var a=t.ownerDocument.createDocumentFragment();r<i;)a.appendChild(e(n[r++],1));t.insertBefore(a,o);}},be=function(e,t){return e==t},we=function(e){return e},ye=function(e,t,n,r,i,o,a){var u=o-i;if(u<1)return -1;for(;n-t>=u;){for(var c=t,f=i;c<n&&f<o&&a(e[c],r[f]);)c++,f++;if(f===o)return t;t=c+1;}return -1},Ne=function(e,t,n,r,i,o){for(;r<i&&o(n[r],e[t-1]);)r++,t--;return 0===t},xe=function(e,t,n,r,i){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:i},Ee=function(e,t,n,r,i){if(i-r<2)t.removeChild(e(n[r],-1));else{var o=t.ownerDocument.createRange();o.setStartBefore(e(n[r],-1)),o.setEndAfter(e(n[i-1],-1)),o.deleteContents();}},Ce="undefined"==typeof Map?function(){var e=[],t=[];return {has:function(t){return -1<e.indexOf(t)},get:function(n){return t[e.indexOf(n)]},set:function(n){var r=e.indexOf(n);t[r<0?e.push(n)-1:r]=n;}}}:Map,ke=function(e,t,n,r,i,o,a,u){var c=0,f=r<u?r:u,l=Array(f++),s=Array(f);s[0]=-1;for(var d=1;d<f;d++)s[d]=a;for(var v=new Ce,h=o;h<a;h++)v.set(i[h],h);for(var p=t;p<n;p++){var g=v.get(e[p]);null!=g&&-1<(c=Oe(s,f,g))&&(s[c]=g,l[c]={newi:p,oldi:g,prev:l[c-1]});}for(c=--f,--a;s[c]>a;)--c;f=u+r-c;var m=Array(f),b=l[c];for(--n;b;){for(var w=b,y=w.newi,N=w.oldi;n>y;)m[--f]=1,--n;for(;a>N;)m[--f]=-1,--a;m[--f]=0,--n,--a,b=b.prev;}for(;n>=t;)m[--f]=1,--n;for(;a>=o;)m[--f]=-1,--a;return m},Ae=function(e,t,n,r,i,o,a){var u=n+o,c=[],f=void 0,l=void 0,s=void 0,d=void 0,v=void 0,h=void 0,p=void 0;e:for(f=0;f<=u;f++){if(f>50)return null;for(p=f-1,v=f?c[f-1]:[0,0],h=c[f]=[],l=-f;l<=f;l+=2){for(d=l===-f||l!==f&&v[p+l-1]<v[p+l+1]?v[p+l+1]:v[p+l-1]+1,s=d-l;d<o&&s<n&&a(r[i+d],e[t+s]);)d++,s++;if(d===o&&s===n)break e;h[f+l]=d;}}var g=Array(f/2+u/2),m=g.length-1;for(f=c.length-1;f>=0;f--){for(;d>0&&s>0&&a(r[i+d-1],e[t+s-1]);)g[m--]=0,d--,s--;if(!f)break;p=f-1,v=f?c[f-1]:[0,0],l=d-s,l===-f||l!==f&&v[p+l-1]<v[p+l+1]?(s--,g[m--]=1):(d--,g[m--]=-1);}return g},je=function(e,t,n,r,i,o,a,u,c){for(var f=new Ce,l=e.length,s=a,d=0;d<l;)switch(e[d++]){case 0:i++,s++;break;case 1:f.set(r[i],1),me(t,n,r,i++,i,s<u?t(o[s],1):c);break;case-1:s++;}for(d=0;d<l;)switch(e[d++]){case 0:a++;break;case-1:f.has(o[a])?a++:Ee(t,n,o,a++,a);}},Oe=function(e,t,n){for(var r=1,i=t;r<i;){var o=(r+i)/2>>>0;n<e[o]?i=o:r=o+1;}return r},Se=function(e,t,n,r,i,o,a,u,c,f,l,s,d){je(Ae(n,r,o,a,u,f,s)||ke(n,r,i,o,a,u,c,f),e,t,n,r,a,u,l,d);},Te=function(e,t,n,r){r||(r={});for(var i=r.compare||be,o=r.node||we,a=null==r.before?null:o(r.before,0),u=t.length,c=u,f=0,l=n.length,s=0;f<c&&s<l&&i(t[f],n[s]);)f++,s++;for(;f<c&&s<l&&i(t[c-1],n[l-1]);)c--,l--;var d=f===c,v=s===l;if(d&&v)return n;if(d&&s<l)return me(o,e,n,s,l,xe(o,t,f,u,a)),n;if(v&&f<c)return Ee(o,e,t,f,c),n;var h=c-f,p=l-s,g=-1;if(h<p){if(-1<(g=ye(n,s,l,t,f,c,i)))return me(o,e,n,s,g,o(t[f],0)),me(o,e,n,g+h,l,xe(o,t,c,u,a)),n}else if(p<h&&-1<(g=ye(t,f,c,n,s,l,i)))return Ee(o,e,t,f,g),Ee(o,e,t,g+p,c),n;return h<2||p<2?(me(o,e,n,s,l,o(t[f],0)),Ee(o,e,t,f,c),n):h===p&&Ne(n,l,t,f,c,i)?(me(o,e,n,s,l,xe(o,t,c,u,a)),n):(Se(o,e,n,s,l,p,t,f,c,h,u,i,a),n)},Le=new E;r.prototype=Object.create(null);var Me=function(e){return {html:e}},$e=function rt(e,t){return "ELEMENT_NODE"in e?e:e.constructor===n?1/t<0?t?e.remove():e.last:t?e.insert():e.first:rt(e.render(),t)},De=function(e){return "ELEMENT_NODE"in e||e instanceof n||e instanceof t},Pe=function(e,t){for(var n=[],r=t.length,i=0;i<r;i++){var o=t[i],a=le.find(e,o.path);switch(o.type){case"any":n.push(Fe(a,[]));break;case"attr":n.push(Be(a,o.name,o.node));break;case"text":n.push(Ze(a)),a.textContent="";}}return n},Re=function it(e,t,n){for(var r=e.childNodes,i=r.length,o=0;o<i;o++){var a=r[o];switch(a.nodeType){case s:_e(a,t,n),it(a,t,n);break;case 8:a.textContent===m&&(n.shift(),t.push(g.test(e.nodeName)?le.create("text",e):le.create("any",a)));break;case 3:g.test(e.nodeName)&&k.call(a.textContent)===b&&(n.shift(),t.push(le.create("text",e)));}}},_e=function(e,t,n){for(var i=new r,o=e.attributes,a=re.call(o),u=[],c=a.length,f=0;f<c;f++){var l=a[f];if(l.value===m){var s=l.name;if(!(s in i)){var d=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");i[s]=o[d]||o[d.toLowerCase()],t.push(le.create("attr",i[s],d));}u.push(l);}}for(var v=u.length,h=0;h<v;h++){var p=u[h];/^id$/i.test(p.name)?e.removeAttribute(p.name):e.removeAttributeNode(u[h]);}var g=e.nodeName;if(/^script$/i.test(g)){for(var b=document.createElement(g),w=0;w<o.length;w++)b.setAttributeNode(o[w].cloneNode(!0));b.textContent=e.textContent,e.parentNode.replaceChild(b,e);}},He=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(Me).then(t):Promise.resolve($.invoke(e,t)).then(t);},ze=function(e){return null!=e&&"then"in e},Fe=function(e,t){var n={node:$e,before:e},r=!1,i=void 0;return function o(a){switch(typeof a){case"string":case"number":case"boolean":r?i!==a&&(i=a,t[0].textContent=a):(r=!0,i=a,t=Te(e.parentNode,t,[_(e,a)],n));break;case"object":case"undefined":if(null==a){r=!1,t=Te(e.parentNode,t,[],n);break}default:if(r=!1,i=a,C(a))if(0===a.length)t.length&&(t=Te(e.parentNode,t,[],n));else switch(typeof a[0]){case"string":case"number":case"boolean":o({html:a});break;case"object":if(C(a[0])&&(a=a.concat.apply([],a)),ze(a[0])){Promise.all(a).then(o);break}default:t=Te(e.parentNode,t,a,n);}else De(a)?t=Te(e.parentNode,t,11===a.nodeType?re.call(a.childNodes):[a],n):ze(a)?a.then(o):"placeholder"in a?He(a,o):"text"in a?o(String(a.text)):"any"in a?o(a.any):"html"in a?t=Te(e.parentNode,t,re.call(Y(e,[].concat(a.html).join("")).childNodes),n):o("length"in a?re.call(a):$.invoke(a,o));}}},Be=function(e,t,n){var r="ownerSVGElement"in e,o=void 0;if("style"===t)return de(e,n,r);if(/^on/.test(t)){var a=t.slice(2);return a===h||a===p?(Ge&&(Ge=!1,i()),Le.add(e)):t.toLowerCase()in e&&(a=a.toLowerCase()),function(t){o!==t&&(o&&e.removeEventListener(a,o,!1),o=t,t&&e.addEventListener(a,t,!1));}}if("data"===t||!r&&t in e)return function(n){o!==n&&(o=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)));};if(t in $.attributes)return function(n){o=$.attributes[t](e,n),e.setAttribute(t,null==o?"":o);};var u=!1,c=n.cloneNode(!0);return function(t){o!==t&&(o=t,c.value!==t&&(null==t?(u&&(u=!1,e.removeAttributeNode(c)),c.value=t):(c.value=t,u||(u=!0,e.setAttributeNode(c)))));}},Ze=function(e){var t=void 0;return function n(r){t!==r&&(t=r,"object"==typeof r&&r?ze(r)?r.then(n):"placeholder"in r?He(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?re.call(r).join(""):$.invoke(r,n)):e.textContent=null==r?"":r);}},Ve={create:Pe,find:Re},Ge=!0,Ie=new x,We=function(){try{var e=new x,t=Object.freeze([]);if(e.set(t,!0),!e.get(t))throw t;return e}catch(t){return new y}}(),qe=V,Je=function(e,t,n){return d.test(t)?e:"<"+t+n+"></"+t+">"},Ke=new x,Qe=function(e,t){return null==e?Ue(t||"html"):Xe(e,t||"html")},Ue=function(e){var t=void 0,n=void 0,r=void 0,i=void 0,a=void 0;return function(u){u=ie(u);var c=i!==u;return c&&(i=u,r=R(document),n="svg"===e?document.createElementNS(v,"svg"):r,a=o.bind(n)),a.apply(null,arguments),c&&("svg"===e&&K(r,re.call(n.childNodes)),t=Ye(r)),t}},Xe=function(e,t){var n=t.indexOf(":"),r=Ke.get(e),i=t;return -1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||Ke.set(e,r={}),r[i]||(r[i]=Ue(t))},Ye=function(e){for(var t=e.childNodes,r=t.length,i=[],o=0;o<r;o++){var a=t[o];a.nodeType!==s&&0===k.call(a.textContent).length||i.push(a);}return 1===i.length?i[0]:new n(i)},et=function(e){return o.bind(e)},tt=$.define;return f.Component=t,f.bind=et,f.define=tt,f.diff=Te,f.hyper=f,f.wire=Qe,function(e){var n=new x,r=Object.create,i=function(e,t,n){return e.set(t,n),n},o=function(e,t,n,o){var u=t.get(e)||a(e,t);switch(typeof o){case"object":case"function":var c=u.w||(u.w=new x);return c.get(o)||i(c,o,new e(n));default:var f=u.p||(u.p=r(null));return f[o]||(f[o]=new e(n))}},a=function(e,t){var n={w:null,p:null};return t.set(e,n),n},u=function(e){var t=new y;return n.set(e,t),t};Object.defineProperties(t,{"for":{configurable:!0,value:function(e,t){return o(this,n.get(e)||u(e),e,null==t?"default":t)}}}),Object.defineProperties(t.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e);}},html:A("html",e),svg:A("svg",e),state:A("state",function(){return this.defaultState}),defaultState:{get:function(){return {}}},dispatch:{value:function(e,t){var n=this._wire$;if(n){var r=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});return r.component=this,(n.dispatchEvent?n:n.childNodes[0]).dispatchEvent(r)}return !1}},setState:{value:function(e,t){var n=this.state,r="function"==typeof e?e.call(this,n):e;for(var i in r)n[i]=r[i];return !1!==t&&this.render(),this}}});}(Ue),f}(window);
	const {Component, bind, define, diff, hyper, wire} = hyperHTML;

	/*! (C) 2017-2018 Andrea Giammarchi - ISC Style License */

	// utils to deal with custom elements builtin extends
	const ATTRIBUTE_CHANGED_CALLBACK = 'attributeChangedCallback';
	const O = Object;
	const classes = [];
	const defineProperty = O.defineProperty;
	const getOwnPropertyDescriptor = O.getOwnPropertyDescriptor;
	const getOwnPropertyNames = O.getOwnPropertyNames;
	const getOwnPropertySymbols = O.getOwnPropertySymbols || (() => []);
	const getPrototypeOf = O.getPrototypeOf || (o => o.__proto__);
	const ownKeys = typeof Reflect === 'object' && Reflect.ownKeys ||
	                (o => getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
	const setPrototypeOf = O.setPrototypeOf ||
	                      ((o, p) => (o.__proto__ = p, o));
	const camel = name => name.replace(/-([a-z])/g, ($0, $1) => $1.toUpperCase());

	class HyperHTMLElement extends HTMLElement {

	  // define a custom-element in the CustomElementsRegistry
	  // class MyEl extends HyperHTMLElement {}
	  // MyEl.define('my-el');
	  static define(name, options) {
	    const Class = this;
	    const proto = Class.prototype;

	    const onChanged = proto[ATTRIBUTE_CHANGED_CALLBACK];
	    const hasChange = !!onChanged;

	    // Class.booleanAttributes
	    // -----------------------------------------------
	    // attributes defined as boolean will have
	    // an either available or not available attribute
	    // regardless of the value.
	    // All falsy values, or "false", mean attribute removed
	    // while truthy values will be set as is.
	    // Boolean attributes are also automatically observed.
	    const booleanAttributes = Class.booleanAttributes || [];
	    booleanAttributes.forEach(name => {
	      if (!(name in proto)) defineProperty(
	        proto,
	        camel(name),
	        {
	          configurable: true,
	          get() {
	            return this.hasAttribute(name);
	          },
	          set(value) {
	            if (!value || value === 'false')
	              this.removeAttribute(name);
	            else
	              this.setAttribute(name, value);
	          }
	        }
	      );
	    });

	    // Class.observedAttributes
	    // -------------------------------------------------------
	    // HyperHTMLElement will directly reflect get/setAttribute
	    // operation once these attributes are used, example:
	    // el.observed = 123;
	    // will automatically do
	    // el.setAttribute('observed', 123);
	    // triggering also the attributeChangedCallback
	    const observedAttributes = Class.observedAttributes || [];
	    observedAttributes.forEach(name => {
	      // it is possible to redefine the behavior at any time
	      // simply overwriting get prop() and set prop(value)
	      if (!(name in proto)) defineProperty(
	        proto,
	        camel(name),
	        {
	          configurable: true,
	          get() {
	            return this.getAttribute(name);
	          },
	          set(value) {
	            if (value == null)
	              this.removeAttribute(name);
	            else
	              this.setAttribute(name, value);
	          }
	        }
	      );
	    });

	    // if these are defined, overwrite the observedAttributes getter
	    // to include also booleanAttributes
	    const attributes = booleanAttributes.concat(observedAttributes);
	    if (attributes.length)
	      defineProperty(Class, 'observedAttributes', {
	        get() { return attributes; }
	      });

	    // created() {}
	    // ---------------------------------
	    // an initializer method that grants
	    // the node is fully known to the browser.
	    // It is ensured to run either after DOMContentLoaded,
	    // or once there is a next sibling (stream-friendly) so that
	    // you have full access to element attributes and/or childNodes.
	    const created = proto.created || function () {
	      this.render();
	    };

	    // used to ensure create() is called once and once only
	    defineProperty(
	      proto,
	      '_init$',
	      {
	        configurable: true,
	        writable: true,
	        value: true
	      }
	    );

	    defineProperty(
	      proto,
	      ATTRIBUTE_CHANGED_CALLBACK,
	      {
	        configurable: true,
	        value: function aCC(name, prev, curr) {
	          if (this._init$) {
	            checkReady.call(this, created);
	            if (this._init$)
	              return this._init$$.push(aCC.bind(this, name, prev, curr));
	          }
	          // ensure setting same value twice
	          // won't trigger twice attributeChangedCallback
	          if (hasChange && prev !== curr) {
	            onChanged.apply(this, arguments);
	          }
	        }
	      }
	    );

	    const onConnected = proto.connectedCallback;
	    const hasConnect = !!onConnected;
	    defineProperty(
	      proto,
	      'connectedCallback',
	      {
	        configurable: true,
	        value: function cC() {
	          if (this._init$) {
	            checkReady.call(this, created);
	            if (this._init$)
	              return this._init$$.push(cC.bind(this));
	          }
	          if (hasConnect) {
	            onConnected.apply(this, arguments);
	          }
	        }
	      }
	    );

	    // define lazily all handlers
	    // class { handleClick() { ... }
	    // render() { `<a onclick=${this.handleClick}>` } }
	    getOwnPropertyNames(proto).forEach(key => {
	      if (/^handle[A-Z]/.test(key)) {
	        const _key$ = '_' + key + '$';
	        const method = proto[key];
	        defineProperty(proto, key, {
	          configurable: true,
	          get() {
	            return  this[_key$] ||
	                    (this[_key$] = method.bind(this));
	          }
	        });
	      }
	    });

	    // whenever you want to directly use the component itself
	    // as EventListener, you can pass it directly.
	    // https://medium.com/@WebReflection/dom-handleevent-a-cross-platform-standard-since-year-2000-5bf17287fd38
	    //  class Reactive extends HyperHTMLElement {
	    //    oninput(e) { console.log(this, 'changed', e.target.value); }
	    //    render() { this.html`<input oninput="${this}">`; }
	    //  }
	    if (!('handleEvent' in proto)) {
	      defineProperty(
	        proto,
	        'handleEvent',
	        {
	          configurable: true,
	          value(event) {
	            this[
	              (event.currentTarget.dataset || {}).call ||
	              ('on' + event.type)
	            ](event);
	          }
	        }
	      );
	    }

	    if (options && options.extends) {
	      const Native = document.createElement(options.extends).constructor;
	      const Intermediate = class extends Native {};
	      const Super = getPrototypeOf(Class);
	      ownKeys(Super)
	        .filter(key => [
	          'length', 'name', 'arguments', 'caller', 'prototype'
	        ].indexOf(key) < 0)
	        .forEach(key => defineProperty(
	          Intermediate,
	          key,
	          getOwnPropertyDescriptor(Super, key)
	        )
	      );
	      ownKeys(Super.prototype)
	        .forEach(key => defineProperty(
	          Intermediate.prototype,
	          key,
	          getOwnPropertyDescriptor(Super.prototype, key)
	        )
	      );
	      setPrototypeOf(Class, Intermediate);
	      setPrototypeOf(proto, Intermediate.prototype);
	      customElements.define(name, Class, options);
	    } else {
	      customElements.define(name, Class);
	    }
	    classes.push(Class);
	    return Class;
	  }

	  // lazily bind once hyperHTML logic
	  // to either the shadowRoot, if present and open,
	  // the _shadowRoot property, if set due closed shadow root,
	  // or the custom-element itself if no Shadow DOM is used.
	  get html() {
	    return this._html$ || (this.html = bind(
	      // in case of Shadow DOM {mode: "open"}, use it
	      this.shadowRoot ||
	      // in case of Shadow DOM {mode: "close"}, use it
	      // this needs the following reference created upfront
	      // this._shadowRoot = this.attachShadow({mode: "close"});
	      this._shadowRoot ||
	      // if no Shadow DOM is used, simply use the component
	      // as container for its own content (it just works too)
	      this
	    ));
	  }

	  // it can be set too if necessary, it won't invoke render()
	  set html(value) {
	    defineProperty(this, '_html$', {configurable: true, value: value});
	  }

	  // overwrite this method with your own render
	  render() {}

	  // ---------------------//
	  // Basic State Handling //
	  // ---------------------//

	  // define the default state object
	  // you could use observed properties too
	  get defaultState() { return {}; }

	  // the state with a default
	  get state() {
	    return this._state$ || (this.state = this.defaultState);
	  }

	  // it can be set too if necessary, it won't invoke render()
	  set state(value) {
	    defineProperty(this, '_state$', {configurable: true, value: value});
	  }

	  // currently a state is a shallow copy, like in Preact or other libraries.
	  // after the state is updated, the render() method will be invoked.
	  // ⚠️ do not ever call this.setState() inside this.render()
	  setState(state, render) {
	    const target = this.state;
	    const source = typeof state === 'function' ? state.call(this, target) : state;
	    for (const key in source) target[key] = source[key];
	    if (render !== false) this.render();
	    return this;
	  }

	}
	// exposing hyperHTML utilities
	HyperHTMLElement.Component = Component;
	HyperHTMLElement.bind = bind;
	HyperHTMLElement.intent = define;
	HyperHTMLElement.wire = wire;
	HyperHTMLElement.hyper = hyper;

	try {
	  if (Symbol.hasInstance) classes.push(
	    defineProperty(HyperHTMLElement, Symbol.hasInstance, {
	      enumerable: false,
	      configurable: true,
	      value(instance) {
	        return classes.some(isPrototypeOf, getPrototypeOf(instance));
	      }
	    }));
	} catch(meh) {}

	// ------------------------------//
	// DOMContentLoaded VS created() //
	// ------------------------------//
	const dom = {
	  type: 'DOMContentLoaded',
	  handleEvent() {
	    if (dom.ready()) {
	      document.removeEventListener(dom.type, dom, false);
	      dom.list.splice(0).forEach(invoke);
	    }
	    else
	      setTimeout(dom.handleEvent);
	  },
	  ready() {
	    return document.readyState === 'complete';
	  },
	  list: []
	};

	if (!dom.ready()) {
	  document.addEventListener(dom.type, dom, false);
	}

	function checkReady(created) {
	  if (dom.ready() || isReady.call(this, created)) {
	    if (this._init$) {
	      const list = this._init$$;
	      if (list) delete this._init$$;
	      created.call(defineProperty(this, '_init$', {value: false}));
	      if (list) list.forEach(invoke);
	    }
	  } else {
	    if (!this.hasOwnProperty('_init$$'))
	      defineProperty(this, '_init$$', {configurable: true, value: []});
	    dom.list.push(checkReady.bind(this, created));
	  }
	}

	function invoke(fn) {
	  fn();
	}

	function isPrototypeOf(Class) {
	  return this === Class.prototype;
	}

	function isReady(created) {
	  let el = this;
	  do { if (el.nextSibling) return true; }
	  while (el = el.parentNode);
	  setTimeout(checkReady.bind(this, created));
	  return false;
	}

	var alert = {
		name: "alert",
		figma: {
			id: "0:5",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"warning",
			"triangle",
			"exclamation",
			"point"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z\"/>"
	};
	var beaker = {
		name: "beaker",
		figma: {
			id: "0:26",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"experiment",
			"labs",
			"experimental",
			"feature",
			"test",
			"science",
			"education",
			"study",
			"development",
			"testing"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M14.38 14.59L11 7V3h1V2H3v1h1v4L.63 14.59A1 1 0 0 0 1.54 16h11.94c.72 0 1.2-.75.91-1.41h-.01zM3.75 10L5 7V3h5v4l1.25 3h-7.5zM8 8h1v1H8V8zM7 7H6V6h1v1zm0-3h1v1H7V4zm0-3H6V0h1v1z\"/>"
	};
	var bell = {
		name: "bell",
		figma: {
			id: "0:34",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"notification"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M13.99 11.991v1H0v-1l.73-.58c.769-.769.809-2.547 1.189-4.416.77-3.767 4.077-4.996 4.077-4.996 0-.55.45-1 .999-1 .55 0 1 .45 1 1 0 0 3.387 1.229 4.156 4.996.38 1.879.42 3.657 1.19 4.417l.659.58h-.01zM6.995 15.99c1.11 0 1.999-.89 1.999-1.999H4.996c0 1.11.89 1.999 1.999 1.999z\"/>"
	};
	var bold = {
		name: "bold",
		figma: {
			id: "0:38",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"markdown",
			"bold",
			"text"
		],
		width: 10,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M1 2h3.83c2.48 0 4.3.75 4.3 2.95 0 1.14-.63 2.23-1.67 2.61v.06c1.33.3 2.3 1.23 2.3 2.86 0 2.39-1.97 3.52-4.61 3.52H1V2zm3.66 4.95c1.67 0 2.38-.66 2.38-1.69 0-1.17-.78-1.61-2.34-1.61H3.13v3.3h1.53zm.27 5.39c1.77 0 2.75-.64 2.75-1.98 0-1.27-.95-1.81-2.75-1.81h-1.8v3.8h1.8v-.01z\"/>"
	};
	var book = {
		name: "book",
		figma: {
			id: "0:43",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"book",
			"journal",
			"wiki",
			"readme"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z\"/>"
	};
	var bookmark = {
		name: "bookmark",
		figma: {
			id: "0:54",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"tab",
			"star"
		],
		width: 10,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z\"/>"
	};
	var briefcase = {
		name: "briefcase",
		figma: {
			id: "0:58",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"suitcase",
			"business"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M9 4V3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H9zM6 3h2v1H6V3zm7 6H8v1H6V9H1V5h1v3h10V5h1v4z\"/>"
	};
	var broadcast = {
		name: "broadcast",
		figma: {
			id: "0:63",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"rss",
			"radio",
			"signal"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M9 9H8c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1H6c-.55 0-1 .45-1 1v2h1v3c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-3h1v-2c0-.55-.45-1-1-1zM7 7h1v1H7V7zm2 4H8v4H7v-4H6v-1h3v1zm2.09-3.5c0-1.98-1.61-3.59-3.59-3.59A3.593 3.593 0 0 0 4 8.31v1.98c-.61-.77-1-1.73-1-2.8 0-2.48 2.02-4.5 4.5-4.5S12 5.01 12 7.49c0 1.06-.39 2.03-1 2.8V8.31c.06-.27.09-.53.09-.81zm3.91 0c0 2.88-1.63 5.38-4 6.63v-1.05a6.553 6.553 0 0 0 3.09-5.58A6.59 6.59 0 0 0 7.5.91 6.59 6.59 0 0 0 .91 7.5c0 2.36 1.23 4.42 3.09 5.58v1.05A7.497 7.497 0 0 1 7.5 0C11.64 0 15 3.36 15 7.5z\"/>"
	};
	var browser = {
		name: "browser",
		figma: {
			id: "0:70",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"window",
			"web"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M5 3h1v1H5V3zM3 3h1v1H3V3zM1 3h1v1H1V3zm12 10H1V5h12v8zm0-9H7V3h6v1zm1-1c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3z\"/>"
	};
	var bug = {
		name: "bug",
		figma: {
			id: "0:78",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"insect",
			"issue"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M11 10h3V9h-3V8l3.17-1.03-.34-.94L11 7V6c0-.55-.45-1-1-1V4c0-.48-.36-.88-.83-.97L10.2 2H12V1H9.8l-2 2h-.59L5.2 1H3v1h1.8l1.03 1.03C5.36 3.12 5 3.51 5 4v1c-.55 0-1 .45-1 1v1l-2.83-.97-.34.94L4 8v1H1v1h3v1L.83 12.03l.34.94L4 12v1c0 .55.45 1 1 1h1l1-1V6h1v7l1 1h1c.55 0 1-.45 1-1v-1l2.83.97.34-.94L11 11v-1zM9 5H6V4h3v1z\"/>"
	};
	var calendar = {
		name: "calendar",
		figma: {
			id: "0:82",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"time",
			"day",
			"month",
			"year",
			"date",
			"appointment"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z\"/>"
	};
	var check = {
		name: "check",
		figma: {
			id: "0:104",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"mark",
			"yes",
			"confirm",
			"accept",
			"ok",
			"success"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z\"/>"
	};
	var checklist = {
		name: "checklist",
		figma: {
			id: "0:108",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"todo",
			"tasks"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M16 8.5l-6 6-3-3L8.5 10l1.5 1.5L14.5 7 16 8.5zM5.7 12.2l.8.8H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h7c.55 0 1 .45 1 1v6.5l-.8-.8c-.39-.39-1.03-.39-1.42 0L5.7 10.8a.996.996 0 0 0 0 1.41v-.01zM4 4h5V3H4v1zm0 2h5V5H4v1zm0 2h3V7H4v1zM3 9H2v1h1V9zm0-2H2v1h1V7zm0-2H2v1h1V5zm0-2H2v1h1V3z\"/>"
	};
	var clippy = {
		name: "clippy",
		figma: {
			id: "0:138",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"copy",
			"paste",
			"save",
			"capture",
			"clipboard"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z\"/>"
	};
	var clock = {
		name: "clock",
		figma: {
			id: "0:147",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"time",
			"hour",
			"minute",
			"second",
			"watch"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M8 8h3v2H7c-.55 0-1-.45-1-1V4h2v4zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z\"/>"
	};
	var code = {
		name: "code",
		figma: {
			id: "0:160",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"brackets"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z\"/>"
	};
	var comment = {
		name: "comment",
		figma: {
			id: "0:169",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"speak",
			"bubble"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z\"/>"
	};
	var dash = {
		name: "dash",
		figma: {
			id: "0:178",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"hyphen",
			"range"
		],
		width: 8,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M0 7v2h8V7H0z\"/>"
	};
	var dashboard = {
		name: "dashboard",
		figma: {
			id: "0:182",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"speed",
			"dial"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M9 5H8V4h1v1zm4 3h-1v1h1V8zM6 5H5v1h1V5zM5 8H4v1h1V8zm11-5.5l-.5-.5L9 7c-.06-.02-1 0-1 0-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-.92l6-5.58zm-1.59 4.09c.19.61.3 1.25.3 1.91 0 3.42-2.78 6.2-6.2 6.2-3.42 0-6.21-2.78-6.21-6.2 0-3.42 2.78-6.2 6.2-6.2 1.2 0 2.31.34 3.27.94l.94-.94A7.459 7.459 0 0 0 8.51 1C4.36 1 1 4.36 1 8.5 1 12.64 4.36 16 8.5 16c4.14 0 7.5-3.36 7.5-7.5 0-1.03-.2-2.02-.59-2.91l-1 1z\"/>"
	};
	var database = {
		name: "database",
		figma: {
			id: "0:190",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"disks",
			"data"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M6 15c-3.31 0-6-.9-6-2v-2c0-.17.09-.34.21-.5.67.86 3 1.5 5.79 1.5s5.12-.64 5.79-1.5c.13.16.21.33.21.5v2c0 1.1-2.69 2-6 2zm0-4c-3.31 0-6-.9-6-2V7c0-.11.04-.21.09-.31.03-.06.07-.13.12-.19C.88 7.36 3.21 8 6 8s5.12-.64 5.79-1.5c.05.06.09.13.12.19.05.1.09.21.09.31v2c0 1.1-2.69 2-6 2zm0-4c-3.31 0-6-.9-6-2V3c0-1.1 2.69-2 6-2s6 .9 6 2v2c0 1.1-2.69 2-6 2zm0-5c-2.21 0-4 .45-4 1s1.79 1 4 1 4-.45 4-1-1.79-1-4-1z\"/>"
	};
	var diff$1 = {
		name: "diff",
		figma: {
			id: "0:242",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"difference",
			"changes",
			"compare"
		],
		width: 13,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M6 7h2v1H6v2H5V8H3V7h2V5h1v2zm-3 6h5v-1H3v1zM7.5 2L11 5.5V15c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h6.5zM10 6L7 3H1v12h9V6zM8.5 0H3v1h5l4 4v8h1V4.5L8.5 0z\"/>"
	};
	var ellipsis = {
		name: "ellipsis",
		figma: {
			id: "0:249",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"dot",
			"read",
			"more",
			"hidden",
			"expand"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M11 5H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM4 9H2V7h2v2zm3 0H5V7h2v2zm3 0H8V7h2v2z\"/>"
	};
	var eye = {
		name: "eye",
		figma: {
			id: "0:255",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"look",
			"watch",
			"see"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\"/>"
	};
	var file = {
		name: "file",
		figma: {
			id: "0:308",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"file",
			"text",
			"words"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z\"/>"
	};
	var flame = {
		name: "flame",
		figma: {
			id: "0:325",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"fire",
			"hot",
			"burn",
			"trending"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z\"/>"
	};
	var fold = {
		name: "fold",
		figma: {
			id: "0:329",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"unfold",
			"hide",
			"collapse"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M7 9l3 3H8v3H6v-3H4l3-3zm3-6H8V0H6v3H4l3 3 3-3zm4 2c0-.55-.45-1-1-1h-2.5l-1 1h3l-2 2h-7l-2-2h3l-1-1H1c-.55 0-1 .45-1 1l2.5 2.5L0 10c0 .55.45 1 1 1h2.5l1-1h-3l2-2h7l2 2h-3l1 1H13c.55 0 1-.45 1-1l-2.5-2.5L14 5z\"/>"
	};
	var gear = {
		name: "gear",
		figma: {
			id: "0:334",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"settings"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z\"/>"
	};
	var gift = {
		name: "gift",
		figma: {
			id: "0:338",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"package",
			"present",
			"skill",
			"craft",
			"freebie"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M13 4h-1.38c.19-.33.33-.67.36-.91.06-.67-.11-1.22-.52-1.61C11.1 1.1 10.65 1 10.1 1h-.11c-.53.02-1.11.25-1.53.58-.42.33-.73.72-.97 1.2-.23-.48-.55-.88-.97-1.2-.42-.32-1-.58-1.53-.58h-.03c-.56 0-1.06.09-1.44.48-.41.39-.58.94-.52 1.61.03.23.17.58.36.91H1.98c-.55 0-1 .45-1 1v3h1v5c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V8h1V5c0-.55-.45-1-1-1H13zm-4.78-.88c.17-.36.42-.67.75-.92.3-.23.72-.39 1.05-.41h.09c.45 0 .66.11.8.25s.33.39.3.95c-.05.19-.25.61-.5 1h-2.9l.41-.88v.01zM4.09 2.04c.13-.13.31-.25.91-.25.31 0 .72.17 1.03.41.33.25.58.55.75.92L7.2 4H4.3c-.25-.39-.45-.81-.5-1-.03-.56.16-.81.3-.95l-.01-.01zM7 12.99H3V8h4v5-.01zm0-6H2V5h5v2-.01zm5 6H8V8h4v5-.01zm1-6H8V5h5v2-.01z\"/>"
	};
	var gist = {
		name: "gist",
		figma: {
			id: "0:354",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"gist",
			"github"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z\"/>"
	};
	var globe = {
		name: "globe",
		figma: {
			id: "0:389",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"world",
			"earth",
			"planet"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7c.48 0 .94-.05 1.38-.14-.17-.08-.2-.73-.02-1.09.19-.41.81-1.45.2-1.8-.61-.35-.44-.5-.81-.91-.37-.41-.22-.47-.25-.58-.08-.34.36-.89.39-.94.02-.06.02-.27 0-.33 0-.08-.27-.22-.34-.23-.06 0-.11.11-.2.13-.09.02-.5-.25-.59-.33-.09-.08-.14-.23-.27-.34-.13-.13-.14-.03-.33-.11s-.8-.31-1.28-.48c-.48-.19-.52-.47-.52-.66-.02-.2-.3-.47-.42-.67-.14-.2-.16-.47-.2-.41-.04.06.25.78.2.81-.05.02-.16-.2-.3-.38-.14-.19.14-.09-.3-.95s.14-1.3.17-1.75c.03-.45.38.17.19-.13-.19-.3 0-.89-.14-1.11-.13-.22-.88.25-.88.25.02-.22.69-.58 1.16-.92.47-.34.78-.06 1.16.05.39.13.41.09.28-.05-.13-.13.06-.17.36-.13.28.05.38.41.83.36.47-.03.05.09.11.22s-.06.11-.38.3c-.3.2.02.22.55.61s.38-.25.31-.55c-.07-.3.39-.06.39-.06.33.22.27.02.5.08.23.06.91.64.91.64-.83.44-.31.48-.17.59.14.11-.28.3-.28.3-.17-.17-.19.02-.3.08-.11.06-.02.22-.02.22-.56.09-.44.69-.42.83 0 .14-.38.36-.47.58-.09.2.25.64.06.66-.19.03-.34-.66-1.31-.41-.3.08-.94.41-.59 1.08.36.69.92-.19 1.11-.09.19.1-.06.53-.02.55.04.02.53.02.56.61.03.59.77.53.92.55.17 0 .7-.44.77-.45.06-.03.38-.28 1.03.09.66.36.98.31 1.2.47.22.16.08.47.28.58.2.11 1.06-.03 1.28.31.22.34-.88 2.09-1.22 2.28-.34.19-.48.64-.84.92s-.81.64-1.27.91c-.41.23-.47.66-.66.8 3.14-.7 5.48-3.5 5.48-6.84 0-3.86-3.14-7-7-7L7 1zm1.64 6.56c-.09.03-.28.22-.78-.08-.48-.3-.81-.23-.86-.28 0 0-.05-.11.17-.14.44-.05.98.41 1.11.41.13 0 .19-.13.41-.05.22.08.05.13-.05.14zM6.34 1.7c-.05-.03.03-.08.09-.14.03-.03.02-.11.05-.14.11-.11.61-.25.52.03-.11.27-.58.3-.66.25zm1.23.89c-.19-.02-.58-.05-.52-.14.3-.28-.09-.38-.34-.38-.25-.02-.34-.16-.22-.19.12-.03.61.02.7.08.08.06.52.25.55.38.02.13 0 .25-.17.25zm1.47-.05c-.14.09-.83-.41-.95-.52-.56-.48-.89-.31-1-.41-.11-.1-.08-.19.11-.34.19-.15.69.06 1 .09.3.03.66.27.66.55.02.25.33.5.19.63h-.01z\"/>"
	};
	var graph = {
		name: "graph",
		figma: {
			id: "0:396",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"trend",
			"stats",
			"statistics"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z\"/>"
	};
	var heart = {
		name: "heart",
		figma: {
			id: "0:400",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"love",
			"beat"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M9 2c-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-1.632.086-2.954 1.333-3 3 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.047-1.69-1.342-2.913-3-3z\"/>"
	};
	var history = {
		name: "history",
		figma: {
			id: "0:404",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"time",
			"past",
			"revert",
			"back"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M8 13H6V6h5v2H8v5zM7 1C4.81 1 2.87 2.02 1.59 3.59L0 2v4h4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7z\"/>"
	};
	var home = {
		name: "home",
		figma: {
			id: "0:408",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"welcome",
			"index",
			"house",
			"building"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M16 9l-3-3V2h-2v2L8 1 0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69 8 2.5l5.19 5.19L12 14z\"/>"
	};
	var hubot = {
		name: "hubot",
		figma: {
			id: "0:419",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"robot",
			"bot"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M3 6c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H3zm8 1.75L9.75 9h-1.5L7 7.75 5.75 9h-1.5L3 7.75V7h.75L5 8.25 6.25 7h1.5L9 8.25 10.25 7H11v.75zM5 11h4v1H5v-1zm2-9C3.14 2 0 4.91 0 8.5V13c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V8.5C14 4.91 10.86 2 7 2zm6 11H1V8.5c0-3.09 2.64-5.59 6-5.59s6 2.5 6 5.59V13z\"/>"
	};
	var inbox = {
		name: "inbox",
		figma: {
			id: "0:426",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"mail",
			"todo",
			"new",
			"messages"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M14 9l-1.13-7.14c-.08-.48-.5-.86-1-.86H2.13c-.5 0-.92.38-1 .86L0 9v5c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V9zm-3.28.55l-.44.89c-.17.34-.52.56-.91.56H4.61c-.38 0-.72-.22-.89-.55l-.44-.91c-.17-.33-.52-.55-.89-.55H1l1-7h10l1 7h-1.38c-.39 0-.73.22-.91.55l.01.01z\"/>"
	};
	var info = {
		name: "info",
		figma: {
			id: "0:430",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"help"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z\"/>"
	};
	var italic = {
		name: "italic",
		figma: {
			id: "0:454",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"font",
			"italic",
			"style"
		],
		width: 6,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M2.81 5h1.98L3 14H1l1.81-9zm.36-2.7c0-.7.58-1.3 1.33-1.3.56 0 1.13.38 1.13 1.03 0 .75-.59 1.3-1.33 1.3-.58 0-1.13-.38-1.13-1.03z\"/>"
	};
	var jersey = {
		name: "jersey",
		figma: {
			id: "0:458",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"team",
			"game",
			"basketball"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M4.5 6l-.5.5v5l.5.5h2l.5-.5v-5L6.5 6h-2zM6 11H5V7h1v4zm6.27-7.25C12.05 2.37 11.96 1.12 12 0H9.02c0 .27-.13.48-.39.69-.25.2-.63.3-1.13.3-.5 0-.88-.09-1.13-.3-.23-.2-.36-.42-.36-.69H3c.05 1.13-.03 2.38-.25 3.75C2.55 5.13 1.95 5.88 1 6v9c.02.27.11.48.31.69.2.21.42.3.69.31h11c.27-.02.48-.11.69-.31.21-.2.3-.42.31-.69V6c-.95-.13-1.53-.88-1.75-2.25h.02zM13 15H2V7c.89-.5 1.48-1.25 1.72-2.25S4.03 2.5 4 1h1c-.02.78.16 1.47.52 2.06.36.58 1.02.89 2 .94.98-.02 1.64-.33 2-.94.36-.59.5-1.28.48-2.06h1c.02 1.42.13 2.55.33 3.38.2.81.69 2 1.67 2.63v8V15zM8.5 6l-.5.5v5l.5.5h2l.5-.5v-5l-.5-.5h-2zm1.5 5H9V7h1v4z\"/>"
	};
	var keyboard = {
		name: "keyboard",
		figma: {
			id: "0:466",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"type",
			"keys",
			"write",
			"shortcuts"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M10 5H9V4h1v1zM3 6H2v1h1V6zm5-2H7v1h1V4zM4 4H2v1h2V4zm8 7h2v-1h-2v1zM8 7h1V6H8v1zm-4 3H2v1h2v-1zm8-6h-1v1h1V4zm2 0h-1v1h1V4zm-2 5h2V6h-2v3zm4-6v9c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1zm-1 0H1v9h14V3zM6 7h1V6H6v1zm0-3H5v1h1V4zM4 7h1V6H4v1zm1 4h6v-1H5v1zm5-4h1V6h-1v1zM3 8H2v1h1V8zm5 0v1h1V8H8zM6 8v1h1V8H6zM5 8H4v1h1V8zm5 1h1V8h-1v1z\"/>"
	};
	var law = {
		name: "law",
		figma: {
			id: "0:490",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"legal",
			"bill"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z\"/>"
	};
	var link = {
		name: "link",
		figma: {
			id: "0:496",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"connect",
			"hyperlink"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"/>"
	};
	var location = {
		name: "location",
		figma: {
			id: "0:516",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"here",
			"marker"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\"/>"
	};
	var lock = {
		name: "lock",
		figma: {
			id: "0:521",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"secure",
			"safe",
			"protected"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M4 13H3v-1h1v1zm8-6v7c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h1c.55 0 1 .45 1 1zM3.8 6h4.41V4c0-1.22-.98-2.2-2.2-2.2-1.22 0-2.2.98-2.2 2.2v2H3.8zM11 7H2v7h9V7zM4 8H3v1h1V8zm0 2H3v1h1v-1z\"/>"
	};
	var reply = {
		name: "reply",
		figma: {
			id: "0:554",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"reply all",
			"back"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M6 3.5c3.92.44 8 3.125 8 10-2.312-5.062-4.75-6-8-6V11L.5 5.5 6 0v3.5z\"/>"
	};
	var mail = {
		name: "mail",
		figma: {
			id: "0:558",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"email",
			"unread"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z\"/>"
	};
	var markdown = {
		name: "markdown",
		figma: {
			id: "0:567",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"markup",
			"style"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z\"/>"
	};
	var megaphone = {
		name: "megaphone",
		figma: {
			id: "0:572",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"bullhorn",
			"loud",
			"shout",
			"broadcast"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M10 1c-.17 0-.36.05-.52.14C8.04 2.02 4.5 4.58 3 5c-1.38 0-3 .67-3 2.5S1.63 10 3 10c.3.08.64.23 1 .41V15h2v-3.45c1.34.86 2.69 1.83 3.48 2.31.16.09.34.14.52.14.52 0 1-.42 1-1V2c0-.58-.48-1-1-1zm0 12c-.38-.23-.89-.58-1.5-1-.16-.11-.33-.22-.5-.34V3.31c.16-.11.31-.2.47-.31.61-.41 1.16-.77 1.53-1v11zm2-6h4v1h-4V7zm0 2l4 2v1l-4-2V9zm4-6v1l-4 2V5l4-2z\"/>"
	};
	var mention = {
		name: "mention",
		figma: {
			id: "0:579",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"at",
			"ping"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M6.58 15c1.25 0 2.52-.31 3.56-.94l-.42-.94c-.84.52-1.89.83-3.03.83-3.23 0-5.64-2.08-5.64-5.72 0-4.37 3.23-7.18 6.58-7.18 3.45 0 5.22 2.19 5.22 5.2 0 2.39-1.34 3.86-2.5 3.86-1.05 0-1.36-.73-1.05-2.19l.73-3.75H8.98l-.11.72c-.41-.63-.94-.83-1.56-.83-2.19 0-3.66 2.39-3.66 4.38 0 1.67.94 2.61 2.3 2.61.84 0 1.67-.53 2.3-1.25.11.94.94 1.45 1.98 1.45 1.67 0 3.77-1.67 3.77-5C14 2.61 11.59 0 7.83 0 3.66 0 0 3.33 0 8.33 0 12.71 2.92 15 6.58 15zm-.31-5c-.73 0-1.36-.52-1.36-1.67 0-1.45.94-3.22 2.41-3.22.52 0 .84.2 1.25.83l-.52 3.02c-.63.73-1.25 1.05-1.78 1.05V10z\"/>"
	};
	var milestone = {
		name: "milestone",
		figma: {
			id: "0:583",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"marker"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M8 2H6V0h2v2zm4 5H2c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h10l2 2-2 2zM8 4H6v2h2V4zM6 16h2V8H6v8z\"/>"
	};
	var mirror = {
		name: "mirror",
		figma: {
			id: "0:589",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"reflect"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M15.5 4.7L8.5 0l-7 4.7c-.3.19-.5.45-.5.8V16l7.5-4 7.5 4V5.5c0-.34-.2-.61-.5-.8zm-.5 9.8l-6-3.25V10H8v1.25L2 14.5v-9l6-4V6h1V1.5l6 4v9zM6 7h5V5l3 3-3 3V9H6v2L3 8l3-3v2z\"/>"
	};
	var mute = {
		name: "mute",
		figma: {
			id: "0:599",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"quiet",
			"sound",
			"audio",
			"turn",
			"off"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z\"/>"
	};
	var octoface = {
		name: "octoface",
		figma: {
			id: "0:609",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"octocat",
			"brand"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z\"/>"
	};
	var organization = {
		name: "organization",
		figma: {
			id: "0:613",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"people",
			"group",
			"team"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z\"/>"
	};
	var paintcan = {
		name: "paintcan",
		figma: {
			id: "0:624",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"style",
			"theme",
			"art",
			"color"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M6 0C2.69 0 0 2.69 0 6v1c0 .55.45 1 1 1v5c0 1.1 2.24 2 5 2s5-.9 5-2V8c.55 0 1-.45 1-1V6c0-3.31-2.69-6-6-6zm3 10v.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V10c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.5c0 .55-.45 1-1 1s-1-.45-1-1v-1c-.55 0-1-.45-1-1V7.2c.91.49 2.36.8 4 .8 1.64 0 3.09-.31 4-.8V9c0 .55-.45 1-1 1zM6 7c-1.68 0-3.12-.41-3.71-1C2.88 5.41 4.32 5 6 5c1.68 0 3.12.41 3.71 1-.59.59-2.03 1-3.71 1zm0-3c-2.76 0-5 .89-5 2 0-2.76 2.24-5 5-5s5 2.24 5 5c0-1.1-2.24-2-5-2z\"/>"
	};
	var pencil = {
		name: "pencil",
		figma: {
			id: "0:630",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"edit",
			"change",
			"update",
			"write"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z\"/>"
	};
	var person = {
		name: "person",
		figma: {
			id: "0:633",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"people",
			"man",
			"woman",
			"human"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z\"/>"
	};
	var pin = {
		name: "pin",
		figma: {
			id: "0:635",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"save",
			"star",
			"bookmark"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M10 1.2V2l.5 1L6 6H2.2c-.44 0-.67.53-.34.86L5 10l-4 5 5-4 3.14 3.14a.5.5 0 0 0 .86-.34V10l3-4.5 1 .5h.8c.44 0 .67-.53.34-.86L10.86.86a.5.5 0 0 0-.86.34z\"/>"
	};
	var plug = {
		name: "plug",
		figma: {
			id: "0:637",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"hook",
			"webhook"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M14 6V5h-4V3H8v1H6c-1.03 0-1.77.81-2 2L3 7c-1.66 0-3 1.34-3 3v2h1v-2c0-1.11.89-2 2-2l1 1c.25 1.16.98 2 2 2h2v1h2v-2h4V9h-4V6h4z\"/>"
	};
	var plus = {
		name: "plus",
		figma: {
			id: "0:639",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"add",
			"new",
			"more"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M12 9H7v5H5V9H0V7h5V2h2v5h5v2z\"/>"
	};
	var pulse = {
		name: "pulse",
		figma: {
			id: "0:645",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"graph",
			"trend",
			"line",
			"activity"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8h-2.5z\"/>"
	};
	var question = {
		name: "question",
		figma: {
			id: "0:649",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"help",
			"explain"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z\"/>"
	};
	var quote = {
		name: "quote",
		figma: {
			id: "0:655",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"quotation"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M6.16 3.5C3.73 5.06 2.55 6.67 2.55 9.36c.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.9 0-2.99-1.52-2.99-4.25 0-3.8 1.75-6.53 5.02-8.42L6.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.89 0-2.98-1.52-2.98-4.25 0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z\"/>"
	};
	var repo = {
		name: "repo",
		figma: {
			id: "0:706",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"book",
			"journal",
			"repository"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z\"/>"
	};
	var rocket = {
		name: "rocket",
		figma: {
			id: "0:715",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"staff",
			"stafftools",
			"blast",
			"off",
			"space",
			"launch",
			"ship"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M12.17 3.83c-.27-.27-.47-.55-.63-.88-.16-.31-.27-.66-.34-1.02-.58.33-1.16.7-1.73 1.13-.58.44-1.14.94-1.69 1.48-.7.7-1.33 1.81-1.78 2.45H3L0 10h3l2-2c-.34.77-1.02 2.98-1 3l1 1c.02.02 2.23-.64 3-1l-2 2v3l3-3v-3c.64-.45 1.75-1.09 2.45-1.78.55-.55 1.05-1.13 1.47-1.7.44-.58.81-1.16 1.14-1.72-.36-.08-.7-.19-1.03-.34a3.39 3.39 0 0 1-.86-.63zM16 0s-.09.38-.3 1.06c-.2.7-.55 1.58-1.06 2.66-.7-.08-1.27-.33-1.66-.72-.39-.39-.63-.94-.7-1.64C13.36.84 14.23.48 14.92.28 15.62.08 16 0 16 0z\"/>"
	};
	var rss = {
		name: "rss",
		figma: {
			id: "0:719",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"broadcast",
			"feed",
			"atom"
		],
		width: 10,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M2 13H0v-2c1.11 0 2 .89 2 2zM0 3v1a9 9 0 0 1 9 9h1C10 7.48 5.52 3 0 3zm0 4v1c2.75 0 5 2.25 5 5h1c0-3.31-2.69-6-6-6z\"/>"
	};
	var ruby = {
		name: "ruby",
		figma: {
			id: "0:724",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"code",
			"language"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M13 6l-5 5V4h3l2 2zm3 0l-8 8-8-8 4-4h8l4 4zm-8 6.5L14.5 6l-3-3h-7l-3 3L8 12.5z\"/>"
	};
	var search = {
		name: "search",
		figma: {
			id: "0:729",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"magnifying",
			"glass"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z\"/>"
	};
	var server = {
		name: "server",
		figma: {
			id: "0:733",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"computers",
			"racks",
			"ops"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M11 6H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zM2 9H1V7h1v2zm2 0H3V7h1v2zm2 0H5V7h1v2zm2 0H7V7h1v2zm3-8H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM2 4H1V2h1v2zm2 0H3V2h1v2zm2 0H5V2h1v2zm2 0H7V2h1v2zm3-1h-1V2h1v1zm0 8H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm-9 3H1v-2h1v2zm2 0H3v-2h1v2zm2 0H5v-2h1v2zm2 0H7v-2h1v2z\"/>"
	};
	var settings = {
		name: "settings",
		figma: {
			id: "0:751",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"sliders",
			"filters",
			"controls",
			"levels"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M4 7H3V2h1v5zm-1 7h1v-3H3v3zm5 0h1V8H8v6zm5 0h1v-2h-1v2zm1-12h-1v6h1V2zM9 2H8v2h1V2zM5 8H2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm5-3H7c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm5 4h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1z\"/>"
	};
	var shield = {
		name: "shield",
		figma: {
			id: "0:762",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"protect",
			"shield",
			"lock"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M7 0L0 2v6.02C0 12.69 5.31 16 7 16c1.69 0 7-3.31 7-7.98V2L7 0zM5 11l1.14-2.8a.568.568 0 0 0-.25-.59C5.33 7.25 5 6.66 5 6c0-1.09.89-2 1.98-2C8.06 4 9 4.91 9 6c0 .66-.33 1.25-.89 1.61-.19.13-.3.36-.25.59L9 11H5z\"/>"
	};
	var smiley = {
		name: "smiley",
		figma: {
			id: "0:772",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"emoji",
			"smile",
			"mood",
			"emotion"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z\"/>"
	};
	var squirrel = {
		name: "squirrel",
		figma: {
			id: "0:779",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"ship",
			"shipit",
			"launch"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M12 1C9.79 1 8 2.31 8 3.92c0 1.94.5 3.03 0 6.08 0-4.5-2.77-6.34-4-6.34.05-.5-.48-.66-.48-.66s-.22.11-.3.34c-.27-.31-.56-.27-.56-.27l-.13.58S.7 4.29.68 6.87c.2.33 1.53.6 2.47.43.89.05.67.79.47.99C2.78 9.13 2 8 1 8S0 9 1 9s1 1 3 1c-3.09 1.2 0 4 0 4H3c-1 0-1 1-1 1h6c3 0 5-1 5-3.47 0-.85-.43-1.79-1-2.53-1.11-1.46.23-2.68 1-2 .77.68 3 1 3-2 0-2.21-1.79-4-4-4zM2.5 6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5z\"/>"
	};
	var star = {
		name: "star",
		figma: {
			id: "0:781",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"save",
			"remember",
			"like"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z\"/>"
	};
	var stop = {
		name: "stop",
		figma: {
			id: "0:785",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"block",
			"spam",
			"report"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M10 1H4L0 5v6l4 4h6l4-4V5l-4-4zm3 9.5L9.5 14h-5L1 10.5v-5L4.5 2h5L13 5.5v5zM6 4h2v5H6V4zm0 6h2v2H6v-2z\"/>"
	};
	var sync = {
		name: "sync",
		figma: {
			id: "0:791",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"cycle",
			"refresh",
			"loop"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M10.24 7.4a4.15 4.15 0 0 1-1.2 3.6 4.346 4.346 0 0 1-5.41.54L4.8 10.4.5 9.8l.6 4.2 1.31-1.26c2.36 1.74 5.7 1.57 7.84-.54a5.876 5.876 0 0 0 1.74-4.46l-1.75-.34zM2.96 5a4.346 4.346 0 0 1 5.41-.54L7.2 5.6l4.3.6-.6-4.2-1.31 1.26c-2.36-1.74-5.7-1.57-7.85.54C.5 5.03-.06 6.65.01 8.26l1.75.35A4.17 4.17 0 0 1 2.96 5z\"/>"
	};
	var tag = {
		name: "tag",
		figma: {
			id: "0:795",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"release"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M7.685 1.72a2.49 2.49 0 0 0-1.76-.726H3.48A2.5 2.5 0 0 0 .994 3.48v2.456c0 .656.269 1.292.726 1.76l6.024 6.024a.99.99 0 0 0 1.402 0l4.563-4.563a.99.99 0 0 0 0-1.402L7.685 1.72zM2.366 7.048a1.54 1.54 0 0 1-.467-1.123V3.48c0-.874.716-1.58 1.58-1.58h2.456c.418 0 .825.159 1.123.467l6.104 6.094-4.702 4.702-6.094-6.114zm.626-4.066h1.989v1.989H2.982V2.982h.01z\"/>"
	};
	var tasklist = {
		name: "tasklist",
		figma: {
			id: "0:800",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"todo"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M15.41 9H7.59C7 9 7 8.59 7 8c0-.59 0-1 .59-1h7.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM9.59 4C9 4 9 3.59 9 3c0-.59 0-1 .59-1h5.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1H9.59zM0 3.91l1.41-1.3L3 4.2 7.09 0 8.5 1.41 3 6.91l-3-3zM7.59 12h7.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1H7.59C7 14 7 13.59 7 13c0-.59 0-1 .59-1z\"/>"
	};
	var telescope = {
		name: "telescope",
		figma: {
			id: "0:806",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"science",
			"space",
			"look",
			"view",
			"explore"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M8 9l3 6h-1l-2-4v5H7v-6l-2 5H4l2-5 2-1zM7 0H6v1h1V0zM5 3H4v1h1V3zM2 1H1v1h1V1zM.63 9a.52.52 0 0 0-.16.67l.55.92c.13.23.41.31.64.2l1.39-.66-1.16-2-1.27.86.01.01zm7.89-5.39l-5.8 3.95L3.95 9.7l6.33-3.03-1.77-3.06h.01zm4.22 1.28l-1.47-2.52a.51.51 0 0 0-.72-.17l-1.2.83 1.84 3.2 1.33-.64c.27-.13.36-.44.22-.7z\"/>"
	};
	var terminal = {
		name: "terminal",
		figma: {
			id: "0:815",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"code",
			"ops",
			"shell"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M7 10h4v1H7v-1zm-3 1l3-3-3-3-.75.75L5.5 8l-2.25 2.25L4 11zm10-8v10c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1zm-1 0H1v10h12V3z\"/>"
	};
	var thumbsdown = {
		name: "thumbsdown",
		figma: {
			id: "0:831",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"thumb",
			"thumbsdown",
			"rejected",
			"dislike"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M15.97 7.825L15 1.88C14.83.499 13.123 0 11.993 0H5.686c-.2 0-.38.05-.53.14L3.719 1h-1.72C.94 1 0 1.938 0 2.997v3.998c0 1.059.94 2.018 1.999 1.998h1.998c.91 0 1.39.45 2.389 1.55.91.999.88 1.798.63 3.267-.08.5.06 1 .42 1.42.39.47.979.769 1.558.769 1.83 0 2.998-3.718 2.998-5.017l-.02-.98h2.04c1.159 0 1.948-.799 1.978-1.968 0-.06.02-.13-.02-.2v-.01zm-1.969 1.19h-1.989c-.7 0-1.029.28-1.029.969l.03 1.03c0 1.268-1.17 3.997-1.999 3.997-.5 0-1.079-.5-.999-1 .25-1.579.34-2.778-.89-4.137-1.019-1.13-1.768-1.879-3.127-1.879V1.999l1.668-1h6.326c.73 0 1.95.31 2 1l.02.02.999 5.996c-.03.64-.38 1-1 1h-.01z\"/>"
	};
	var thumbsup = {
		name: "thumbsup",
		figma: {
			id: "0:835",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"thumb",
			"thumbsup",
			"prop",
			"ship",
			"like"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M13.991 13.991c-.05.69-1.269 1-1.998 1H5.665l-1.669-1V7.995c1.36 0 2.11-.75 3.129-1.879 1.229-1.359 1.139-2.558.879-4.127-.08-.5.5-1 1-1 .829 0 1.998 2.729 1.998 3.998l-.02 1.03c0 .689.33.969 1.02.969H14c.63 0 .98.36 1 .999l-1 5.996-.01.01zm0-7.995h-2.018l.02-.98C11.992 3.719 10.822 0 8.993 0c-.58 0-1.169.3-1.559.77-.36.41-.5.909-.42 1.409.25 1.479.28 2.278-.629 3.278-1 1.089-1.48 1.549-2.389 1.549H2c-1.061-.01-2 .929-2 1.988v3.998c0 1.06.94 1.999 1.999 1.999h1.719l1.439.86c.16.089.33.139.52.139h6.325c1.13 0 2.839-.5 2.999-1.879l.979-5.946c.02-.08.02-.14.02-.2-.03-1.17-.84-1.969-1.999-1.969h-.01z\"/>"
	};
	var tools = {
		name: "tools",
		figma: {
			id: "0:839",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"screwdriver",
			"wrench",
			"settings"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z\"/>"
	};
	var trashcan = {
		name: "trashcan",
		figma: {
			id: "0:844",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"garbage",
			"rubbish",
			"recycle",
			"delete"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z\"/>"
	};
	var unfold = {
		name: "unfold",
		figma: {
			id: "0:857",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"expand",
			"open",
			"reveal"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z\"/>"
	};
	var unmute = {
		name: "unmute",
		figma: {
			id: "0:862",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"loud",
			"volume",
			"audio",
			"sound",
			"play"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M12 8.02c0 1.09-.45 2.09-1.17 2.83l-.67-.67c.55-.56.89-1.31.89-2.16 0-.85-.34-1.61-.89-2.16l.67-.67A3.99 3.99 0 0 1 12 8.02zM7.72 2.28L4 6H2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2l3.72 3.72c.47.47 1.28.14 1.28-.53V2.81c0-.67-.81-1-1.28-.53zm5.94.08l-.67.67a6.996 6.996 0 0 1 2.06 4.98c0 1.94-.78 3.7-2.06 4.98l.67.67A7.973 7.973 0 0 0 16 8c0-2.22-.89-4.22-2.34-5.66v.02zm-1.41 1.41l-.69.67a5.05 5.05 0 0 1 1.48 3.58c0 1.39-.56 2.66-1.48 3.56l.69.67A5.971 5.971 0 0 0 14 8.02c0-1.65-.67-3.16-1.75-4.25z\"/>"
	};
	var project = {
		name: "project",
		figma: {
			id: "0:868",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"board",
			"kanban",
			"columns",
			"scrum"
		],
		width: 15,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z\"/>"
	};
	var report = {
		name: "report",
		figma: {
			id: "0:885",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"report",
			"abuse",
			"flag"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7l-4 4v-4H1a1 1 0 0 1-1-1V2zm1 0h14v9H6.5L4 13.5V11H1V2zm6 6h2v2H7V8zm0-5h2v4H7V3z\"/>"
	};
	var note = {
		name: "note",
		figma: {
			id: "0:891",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"card",
			"paper",
			"ticket"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M3 10h4V9H3v1zm0-2h6V7H3v1zm0-2h8V5H3v1zm10 6H1V3h12v9zM1 2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H1z\"/>"
	};
	var unverified = {
		name: "unverified",
		figma: {
			id: "0:914",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"insecure",
			"untrusted",
			"signed"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M15.67 7.066l-1.08-1.34a1.5 1.5 0 0 1-.309-.77l-.19-1.698a1.51 1.51 0 0 0-1.329-1.33l-1.699-.19c-.3-.03-.56-.159-.78-.329L8.945.33a1.504 1.504 0 0 0-1.878 0l-1.34 1.08a1.5 1.5 0 0 1-.77.31l-1.698.19c-.7.08-1.25.63-1.33 1.329l-.19 1.699c-.03.3-.159.56-.329.78L.33 7.055a1.504 1.504 0 0 0 0 1.878l1.08 1.34c.17.22.28.48.31.77l.19 1.698c.08.7.63 1.25 1.329 1.33l1.699.19c.3.03.56.159.78.329l1.339 1.08c.55.439 1.329.439 1.878 0l1.34-1.08c.22-.17.48-.28.77-.31l1.698-.19c.7-.08 1.25-.63 1.33-1.329l.19-1.699c.03-.3.159-.56.329-.78l1.08-1.339a1.504 1.504 0 0 0 0-1.878zm-6.666 4.437c0 .28-.22.5-.5.5h-.999c-.27 0-.5-.22-.5-.5v-1c0-.28.23-.5.5-.5h1c.28 0 .5.22.5.5v1zm1.56-4.887c-.06.17-.17.33-.3.47-.13.16-.14.19-.33.38-.16.17-.31.3-.52.449-.11.09-.2.19-.28.27-.08.08-.14.17-.19.27-.05.1-.08.19-.11.3-.03.11-.03.13-.03.25H7.136c0-.22 0-.31.03-.48.03-.19.08-.36.14-.52.06-.14.14-.28.25-.42.11-.13.23-.25.409-.38.27-.19.36-.3.48-.52.12-.219.2-.379.2-.589 0-.27-.06-.45-.2-.58-.13-.13-.31-.19-.58-.19-.09 0-.19.02-.3.05-.11.03-.17.09-.25.16-.08.07-.14.11-.2.2a.41.41 0 0 0-.09.28H5.028c0-.38.13-.56.27-.83.16-.27.36-.499.61-.669.25-.17.549-.3.879-.38.33-.08.7-.13 1.09-.13.439 0 .829.05 1.168.13.34.09.63.22.88.39.23.17.41.38.55.63.13.25.19.55.19.88 0 .22 0 .419-.08.589l-.02-.01z\"/>"
	};
	var verified = {
		name: "verified",
		figma: {
			id: "0:919",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"trusted",
			"secure",
			"trustworthy",
			"signed"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M15.67 7.066l-1.08-1.34a1.5 1.5 0 0 1-.309-.77l-.19-1.698a1.51 1.51 0 0 0-1.329-1.33l-1.699-.19c-.3-.03-.56-.159-.78-.329L8.945.33a1.504 1.504 0 0 0-1.878 0l-1.34 1.08a1.5 1.5 0 0 1-.77.31l-1.698.19c-.7.08-1.25.63-1.33 1.329l-.19 1.699c-.03.3-.159.56-.329.78L.33 7.055a1.504 1.504 0 0 0 0 1.878l1.08 1.34c.17.22.28.48.31.77l.19 1.698c.08.7.63 1.25 1.329 1.33l1.699.19c.3.03.56.159.78.329l1.339 1.08c.55.439 1.329.439 1.878 0l1.34-1.08c.22-.17.48-.28.77-.31l1.698-.19c.7-.08 1.25-.63 1.33-1.329l.19-1.699c.03-.3.159-.56.329-.78l1.08-1.339a1.504 1.504 0 0 0 0-1.878zm-9.164 4.936L3.008 8.505l1.5-1.5 1.998 2 4.997-4.998 1.499 1.55-6.496 6.445z\"/>"
	};
	var versions = {
		name: "versions",
		figma: {
			id: "0:923",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"history",
			"commits"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z\"/>"
	};
	var watch = {
		name: "watch",
		figma: {
			id: "0:929",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"wait",
			"hourglass",
			"time",
			"date"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M6 8h2v1H5V5h1v3zm6 0c0 2.22-1.2 4.16-3 5.19V15c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-1.81C1.2 12.16 0 10.22 0 8s1.2-4.16 3-5.19V1c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1.81c1.8 1.03 3 2.97 3 5.19zm-1 0c0-2.77-2.23-5-5-5S1 5.23 1 8s2.23 5 5 5 5-2.23 5-5z\"/>"
	};
	var x = {
		name: "x",
		figma: {
			id: "0:932",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"remove",
			"close",
			"delete"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z\"/>"
	};
	var zap = {
		name: "zap",
		figma: {
			id: "0:934",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"electricity",
			"lightning",
			"props",
			"like",
			"star",
			"save"
		],
		width: 10,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M10 7H6l3-7-9 9h4l-3 7 9-9z\"/>"
	};
	var key = {
		name: "key",
		figma: {
			id: "0:938",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"key",
			"lock",
			"secure",
			"safe"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M12.83 2.17C12.08 1.42 11.14 1.03 10 1c-1.13.03-2.08.42-2.83 1.17S6.04 3.86 6.01 5c0 .3.03.59.09.89L0 12v1l1 1h2l1-1v-1h1v-1h1v-1h2l1.09-1.11c.3.08.59.11.91.11 1.14-.03 2.08-.42 2.83-1.17S13.97 6.14 14 5c-.03-1.14-.42-2.08-1.17-2.83zM11 5.38c-.77 0-1.38-.61-1.38-1.38 0-.77.61-1.38 1.38-1.38.77 0 1.38.61 1.38 1.38 0 .77-.61 1.38-1.38 1.38z\"/>"
	};
	var grabber = {
		name: "grabber",
		figma: {
			id: "0:942",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"mover",
			"drap",
			"drop",
			"sort"
		],
		width: 8,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z\"/>"
	};
	var archive = {
		name: "archive",
		figma: {
			id: "2228:2",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"box",
			"catalog"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M13 2H1v2h12V2zM0 4a1 1 0 0 0 1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v2zm2 1h10v9H2V5zm2 3h6V7H4v1z\"/>"
	};
	var data = {
		alert: alert,
		"arrow-down": {
		name: "arrow-down",
		figma: {
			id: "0:8",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"point",
			"direction"
		],
		width: 10,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M7 7V3H3v4H0l5 6 5-6H7z\"/>"
	},
		"arrow-left": {
		name: "arrow-left",
		figma: {
			id: "0:10",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"point",
			"direction"
		],
		width: 10,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M6 3L0 8l6 5v-3h4V6H6V3z\"/>"
	},
		"arrow-right": {
		name: "arrow-right",
		figma: {
			id: "0:12",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"point",
			"direction"
		],
		width: 10,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M10 8L4 3v3H0v4h4v3l6-5z\"/>"
	},
		"arrow-up": {
		name: "arrow-up",
		figma: {
			id: "0:14",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"point",
			"direction"
		],
		width: 10,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M5 3L0 9h3v4h4V9h3L5 3z\"/>"
	},
		"arrow-both": {
		name: "arrow-both",
		figma: {
			id: "7345:13",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"point",
			"direction",
			"left",
			"right"
		],
		width: 20,
		height: 16,
		path: "<path d=\"M0 8l6-5v3h8V3l6 5-6 5v-3H6v3L0 8z\"/>"
	},
		"arrow-small-down": {
		name: "arrow-small-down",
		figma: {
			id: "0:16",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"point",
			"direction",
			"little",
			"tiny"
		],
		width: 6,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M4 7V5H2v2H0l3 4 3-4H4z\"/>"
	},
		"arrow-small-left": {
		name: "arrow-small-left",
		figma: {
			id: "0:18",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"point",
			"direction",
			"little",
			"tiny"
		],
		width: 6,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M4 7V5L0 8l4 3V9h2V7H4z\"/>"
	},
		"arrow-small-right": {
		name: "arrow-small-right",
		figma: {
			id: "0:20",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"point",
			"direction",
			"little",
			"tiny"
		],
		width: 6,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M6 8L2 5v2H0v2h2v2l4-3z\"/>"
	},
		"arrow-small-up": {
		name: "arrow-small-up",
		figma: {
			id: "0:22",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"point",
			"direction",
			"little",
			"tiny"
		],
		width: 6,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M3 5L0 9h2v2h2V9h2L3 5z\"/>"
	},
		beaker: beaker,
		bell: bell,
		bold: bold,
		book: book,
		bookmark: bookmark,
		briefcase: briefcase,
		broadcast: broadcast,
		browser: browser,
		bug: bug,
		calendar: calendar,
		check: check,
		checklist: checklist,
		"chevron-down": {
		name: "chevron-down",
		figma: {
			id: "0:117",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"triangle",
			"arrow"
		],
		width: 10,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6l-5 5z\"/>"
	},
		"chevron-left": {
		name: "chevron-left",
		figma: {
			id: "0:119",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"triangle",
			"arrow"
		],
		width: 8,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M5.5 3L7 4.5 3.25 8 7 11.5 5.5 13l-5-5 5-5z\"/>"
	},
		"chevron-right": {
		name: "chevron-right",
		figma: {
			id: "0:121",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"triangle",
			"arrow"
		],
		width: 8,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3l5 5z\"/>"
	},
		"chevron-up": {
		name: "chevron-up",
		figma: {
			id: "0:123",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"triangle",
			"arrow"
		],
		width: 10,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M10 10l-1.5 1.5L5 7.75 1.5 11.5 0 10l5-5 5 5z\"/>"
	},
		"circle-slash": {
		name: "circle-slash",
		figma: {
			id: "0:127",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"no",
			"deny",
			"fail",
			"failure",
			"error",
			"bad"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 1.3c1.3 0 2.5.44 3.47 1.17l-8 8A5.755 5.755 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zm0 11.41c-1.3 0-2.5-.44-3.47-1.17l8-8c.73.97 1.17 2.17 1.17 3.47 0 3.14-2.56 5.7-5.7 5.7z\"/>"
	},
		"circuit-board": {
		name: "circuit-board",
		figma: {
			id: "0:132",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"developer",
			"hardware",
			"electricity"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M3 5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm8 0c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm0 6c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm2-10H5v2.17c.36.19.64.47.83.83h2.34c.42-.78 1.33-1.28 2.34-1.05.75.19 1.36.8 1.53 1.55.31 1.38-.72 2.59-2.05 2.59-.8 0-1.48-.44-1.83-1.09H5.83c-.42.8-1.33 1.28-2.34 1.03-.73-.17-1.34-.78-1.52-1.52C1.72 4.49 2.2 3.59 3 3.17V1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1l5-5h2.17c.42-.78 1.33-1.28 2.34-1.05.75.19 1.36.8 1.53 1.55.31 1.38-.72 2.59-2.05 2.59-.8 0-1.48-.44-1.83-1.09H6.99L4 15h9c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z\"/>"
	},
		clippy: clippy,
		clock: clock,
		"cloud-download": {
		name: "cloud-download",
		figma: {
			id: "0:152",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"save",
			"install",
			"get"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z\"/>"
	},
		"cloud-upload": {
		name: "cloud-upload",
		figma: {
			id: "0:156",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"put",
			"export"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M7 9H5l3-3 3 3H9v5H7V9zm5-4c0-.44-.91-3-4.5-3C5.08 2 3 3.92 3 6 1.02 6 0 7.52 0 9c0 1.53 1 3 3 3h3v-1.3H3c-1.62 0-1.7-1.42-1.7-1.7 0-.17.05-1.7 1.7-1.7h1.3V6c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V12h2c2.08 0 4-1.16 4-3.5C16 6.06 14.08 5 12 5z\"/>"
	},
		code: code,
		"comment-discussion": {
		name: "comment-discussion",
		figma: {
			id: "0:164",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"converse",
			"talk"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M15 1H6c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1v3l3-3h4c.55 0 1-.45 1-1V9h1l3 3V9h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM9 11H4.5L3 12.5V11H1V5h4v3c0 .55.45 1 1 1h3v2zm6-3h-2v1.5L11.5 8H6V2h9v6z\"/>"
	},
		comment: comment,
		"credit-card": {
		name: "credit-card",
		figma: {
			id: "0:173",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"money",
			"billing",
			"payments",
			"transactions"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M12 9H2V8h10v1zm4-6v9c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1zm-1 3H1v6h14V6zm0-3H1v1h14V3zm-9 7H2v1h4v-1z\"/>"
	},
		dash: dash,
		dashboard: dashboard,
		database: database,
		"desktop-download": {
		name: "desktop-download",
		figma: {
			id: "0:196",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"clone",
			"download"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M4 6h3V0h2v6h3l-4 4-4-4zm11-4h-4v1h4v8H1V3h4V2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z\"/>"
	},
		"device-camera-video": {
		name: "device-camera-video",
		figma: {
			id: "0:198",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"watch",
			"view",
			"media",
			"stream"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M15.2 2.09L10 5.72V3c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V9.28l5.2 3.63c.33.23.8 0 .8-.41v-10c0-.41-.47-.64-.8-.41z\"/>"
	},
		"device-camera": {
		name: "device-camera",
		figma: {
			id: "0:202",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"photo",
			"picture",
			"image",
			"snapshot"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M15 3H7c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM6 5H2V4h4v1zm4.5 7C8.56 12 7 10.44 7 8.5S8.56 5 10.5 5 14 6.56 14 8.5 12.44 12 10.5 12zM13 8.5c0 1.38-1.13 2.5-2.5 2.5S8 9.87 8 8.5 9.13 6 10.5 6 13 7.13 13 8.5z\"/>"
	},
		"device-desktop": {
		name: "device-desktop",
		figma: {
			id: "0:208",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"computer",
			"monitor"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z\"/>"
	},
		"device-mobile": {
		name: "device-mobile",
		figma: {
			id: "0:212",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"phone",
			"iphone",
			"cellphone"
		],
		width: 10,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M9 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 15.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zM9 12H1V2h8v10z\"/>"
	},
		"diff-added": {
		name: "diff-added",
		figma: {
			id: "0:217",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"new",
			"addition",
			"plus"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zM6 9H3V7h3V4h2v3h3v2H8v3H6V9z\"/>"
	},
		"diff-ignored": {
		name: "diff-ignored",
		figma: {
			id: "0:222",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"slash"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zm-8.5-2H3v-1.5L9.5 4H11v1.5L4.5 12z\"/>"
	},
		"diff-modified": {
		name: "diff-modified",
		figma: {
			id: "0:227",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"dot",
			"changed",
			"updated"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zM4 8c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z\"/>"
	},
		"diff-removed": {
		name: "diff-removed",
		figma: {
			id: "0:232",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"deleted",
			"subtracted",
			"dash"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zm-2-5H3V7h8v2z\"/>"
	},
		"diff-renamed": {
		name: "diff-renamed",
		figma: {
			id: "0:237",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"moved",
			"arrow"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M6 9H3V7h3V4l5 4-5 4V9zm8-7v12c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h12c.55 0 1 .45 1 1zm-1 0H1v12h12V2z\"/>"
	},
		diff: diff$1,
		ellipsis: ellipsis,
		eye: eye,
		"file-binary": {
		name: "file-binary",
		figma: {
			id: "0:260",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"image",
			"video",
			"word",
			"powerpoint",
			"excel"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M4 12h1v1H2v-1h1v-2H2V9h2v3zm8-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5zM8 4H6v1h1v2H6v1h3V7H8V4zM2 4h3v4H2V4zm1 3h1V5H3v2zm3 2h3v4H6V9zm1 3h1v-2H7v2z\"/>"
	},
		"file-code": {
		name: "file-code",
		figma: {
			id: "0:270",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"text",
			"javascript",
			"html",
			"css",
			"php",
			"ruby",
			"coffeescript",
			"sass",
			"scss"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM5 6.98L3.5 8.5 5 10l-.5 1L2 8.5 4.5 6l.5.98zM7.5 6L10 8.5 7.5 11l-.5-.98L8.5 8.5 7 7l.5-1z\"/>"
	},
		"file-directory": {
		name: "file-directory",
		figma: {
			id: "0:276",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"folder"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z\"/>"
	},
		"file-media": {
		name: "file-media",
		figma: {
			id: "0:280",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"image",
			"video",
			"audio"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M6 5h2v2H6V5zm6-.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v11l3-5 2 4 2-2 3 3V5z\"/>"
	},
		"file-pdf": {
		name: "file-pdf",
		figma: {
			id: "0:285",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"adobe"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M8.5 1H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4.5L8.5 1zM1 2h4a.68.68 0 0 0-.31.2 1.08 1.08 0 0 0-.23.47 4.22 4.22 0 0 0-.09 1.47c.06.609.173 1.211.34 1.8A21.78 21.78 0 0 1 3.6 8.6c-.5 1-.8 1.66-.91 1.84a7.156 7.156 0 0 0-.69.3c-.362.165-.699.38-1 .64V2zm4.42 4.8a5.65 5.65 0 0 0 1.17 2.09c.275.237.595.417.94.53-.64.09-1.23.2-1.81.33-.618.15-1.223.347-1.81.59s.22-.44.61-1.25c.365-.74.67-1.51.91-2.3l-.01.01zM11 14H1.5a.743.743 0 0 1-.17 0 2.12 2.12 0 0 0 .73-.44 10.14 10.14 0 0 0 1.78-2.38c.31-.13.58-.23.81-.31l.42-.14c.45-.13.94-.23 1.44-.33s1-.16 1.48-.2c.447.216.912.394 1.39.53.403.11.814.188 1.23.23h.38V14H11zm0-4.86a3.743 3.743 0 0 0-.64-.28 4.221 4.221 0 0 0-.75-.11c-.411.003-.822.03-1.23.08a3 3 0 0 1-1-.64 6.07 6.07 0 0 1-1.29-2.33c.111-.661.178-1.33.2-2 .02-.25.02-.5 0-.75a1.05 1.05 0 0 0-.2-.88.82.82 0 0 0-.61-.23H8l3 3v4.14z\"/>"
	},
		"file-submodule": {
		name: "file-submodule",
		figma: {
			id: "0:292",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"folder"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M10 7H4v7h9c.55 0 1-.45 1-1V8h-4V7zM9 9H5V8h4v1zm4-5H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h2V7c0-.55.45-1 1-1h6c.55 0 1 .45 1 1h3V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z\"/>"
	},
		"file-symlink-directory": {
		name: "file-symlink-directory",
		figma: {
			id: "0:298",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"folder",
			"subfolder",
			"link",
			"alias"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM1 3h5v1H1V3zm6 9v-2c-.98-.02-1.84.22-2.55.7-.71.48-1.19 1.25-1.45 2.3.02-1.64.39-2.88 1.13-3.73C4.86 8.43 5.82 8 7.01 8V6l4 3-4 3H7z\"/>"
	},
		"file-symlink-file": {
		name: "file-symlink-file",
		figma: {
			id: "0:303",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"link",
			"alias"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM6 4.5l4 3-4 3v-2c-.98-.02-1.84.22-2.55.7-.71.48-1.19 1.25-1.45 2.3.02-1.64.39-2.88 1.13-3.73.73-.84 1.69-1.27 2.88-1.27v-2H6z\"/>"
	},
		file: file,
		"file-zip": {
		name: "file-zip",
		figma: {
			id: "0:316",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"compress",
			"archive"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M8.5 1H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4.5L8.5 1zM11 14H1V2h3v1h1V2h3l3 3v9zM5 4V3h1v1H5zM4 4h1v1H4V4zm1 2V5h1v1H5zM4 6h1v1H4V6zm1 2V7h1v1H5zM4 9.28A2 2 0 0 0 3 11v1h4v-1a2 2 0 0 0-2-2V8H4v1.28zM6 10v1H4v-1h2z\"/>"
	},
		flame: flame,
		fold: fold,
		gear: gear,
		gift: gift,
		"gist-secret": {
		name: "gist-secret",
		figma: {
			id: "0:347",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"gist",
			"secret",
			"private"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M8 10.5L9 14H5l1-3.5L5.25 9h3.5L8 10.5zM10 6H4L2 7h10l-2-1zM9 2L7 3 5 2 4 5h6L9 2zm4.03 7.75L10 9l1 2-2 3h3.22c.45 0 .86-.31.97-.75l.56-2.28c.14-.53-.19-1.08-.72-1.22zM4 9l-3.03.75c-.53.14-.86.69-.72 1.22l.56 2.28c.11.44.52.75.97.75H5l-2-3 1-2z\"/>"
	},
		gist: gist,
		"git-branch": {
		name: "git-branch",
		figma: {
			id: "0:360",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"fork",
			"branch",
			"git",
			"duplicate"
		],
		width: 10,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z\"/>"
	},
		"git-commit": {
		name: "git-commit",
		figma: {
			id: "0:366",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"save"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z\"/>"
	},
		"git-compare": {
		name: "git-compare",
		figma: {
			id: "0:370",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"difference",
			"changes"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M5 12H4c-.27-.02-.48-.11-.69-.31-.21-.2-.3-.42-.31-.69V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V11c.03.78.34 1.47.94 2.06.6.59 1.28.91 2.06.94h1v2l3-3-3-3v2zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm11 9.48V5c-.03-.78-.34-1.47-.94-2.06-.6-.59-1.28-.91-2.06-.94H9V0L6 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 12 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z\"/>"
	},
		"git-merge": {
		name: "git-merge",
		figma: {
			id: "0:376",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"join"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M10 7c-.73 0-1.38.41-1.73 1.02V8C7.22 7.98 6 7.64 5.14 6.98c-.75-.58-1.5-1.61-1.89-2.44A1.993 1.993 0 0 0 2 .99C.89.99 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2a1.993 1.993 0 0 0 1-3.72V7.67c.67.7 1.44 1.27 2.3 1.69.86.42 2.03.63 2.97.64v-.02c.36.61 1 1.02 1.73 1.02 1.11 0 2-.89 2-2 0-1.11-.89-2-2-2zm-6.8 6c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm8 6c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z\"/>"
	},
		"git-pull-request": {
		name: "git-pull-request",
		figma: {
			id: "0:382",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"review"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z\"/>"
	},
		globe: globe,
		graph: graph,
		heart: heart,
		history: history,
		home: home,
		"horizontal-rule": {
		name: "horizontal-rule",
		figma: {
			id: "0:412",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"hr"
		],
		width: 10,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M1 7h2v2h1V3H3v3H1V3H0v6h1V7zm9 2V7H9v2h1zm0-3V4H9v2h1zM7 6V4h2V3H6v6h1V7h2V6H7zm-7 7h10v-2H0v2z\"/>"
	},
		hubot: hubot,
		inbox: inbox,
		info: info,
		"issue-closed": {
		name: "issue-closed",
		figma: {
			id: "0:436",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"done",
			"complete"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5-1-1L12 7l-1.5-1.5zM8 13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7 1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z\"/>"
	},
		"issue-opened": {
		name: "issue-opened",
		figma: {
			id: "0:442",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"new"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z\"/>"
	},
		"issue-reopened": {
		name: "issue-reopened",
		figma: {
			id: "0:448",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"regression"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M8 9H6V4h2v5zm-2 3h2v-2H6v2zm6.33-2H10l1.5 1.5c-1.05 1.33-2.67 2.2-4.5 2.2A5.71 5.71 0 0 1 1.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7 2.19 0 4.13-1.02 5.41-2.59L14 14v-4h-1.67zM1.67 6H4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7 0 .34-.03.67-.09 1h1.31c.05-.33.08-.66.08-1 0-3.86-3.14-7-7-7-2.19 0-4.13 1.02-5.41 2.59L0 2v4h1.67z\"/>"
	},
		italic: italic,
		jersey: jersey,
		keyboard: keyboard,
		law: law,
		link: link,
		"list-ordered": {
		name: "list-ordered",
		figma: {
			id: "0:500",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"numbers",
			"tasks",
			"todo",
			"items"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M12 12.99c0 .589 0 .998-.59.998H4.597c-.59 0-.59-.41-.59-.999 0-.59 0-.999.59-.999H11.4c.59 0 .59.41.59 1H12zM4.596 3.996H11.4c.59 0 .59-.41.59-1 0-.589 0-.999-.59-.999H4.596c-.59 0-.59.41-.59 1 0 .589 0 .999.59.999zM11.4 6.994H4.596c-.59 0-.59.41-.59 1 0 .589 0 .999.59.999H11.4c.59 0 .59-.41.59-1 0-.59 0-.999-.59-.999zM2.008 1h-.72C.99 1.19.71 1.25.26 1.34V2h.75v2.138H.17v.859h2.837v-.86h-.999V1zm.25 8.123c-.17 0-.45.03-.66.06.53-.56 1.14-1.249 1.14-1.888-.02-.78-.56-1.299-1.36-1.299-.589 0-.968.2-1.378.64l.58.579c.19-.19.38-.38.639-.38.28 0 .48.16.48.52 0 .53-.77 1.199-1.699 2.058v.58h2.998l-.09-.88h-.66l.01.01zm-.08 3.777v-.03c.44-.19.64-.47.64-.859 0-.7-.56-1.11-1.44-1.11-.479 0-.888.19-1.278.52l.55.64c.25-.2.44-.31.689-.31.27 0 .42.13.42.36 0 .27-.2.44-.86.44v.749c.83 0 .98.17.98.47 0 .25-.23.38-.58.38-.28 0-.56-.14-.81-.38l-.479.659c.3.36.77.56 1.409.56.83 0 1.529-.41 1.529-1.16 0-.5-.31-.809-.77-.939v.01z\"/>"
	},
		"list-unordered": {
		name: "list-unordered",
		figma: {
			id: "0:508",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"bullet",
			"point",
			"tasks",
			"todo",
			"items"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M2 13c0 .59 0 1-.59 1H.59C0 14 0 13.59 0 13c0-.59 0-1 .59-1h.81c.59 0 .59.41.59 1H2zm2.59-9h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1H4.59C4 2 4 2.41 4 3c0 .59 0 1 .59 1zM1.41 7H.59C0 7 0 7.41 0 8c0 .59 0 1 .59 1h.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm0-5H.59C0 2 0 2.41 0 3c0 .59 0 1 .59 1h.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm10 5H4.59C4 7 4 7.41 4 8c0 .59 0 1 .59 1h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm0 5H4.59C4 12 4 12.41 4 13c0 .59 0 1 .59 1h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01z\"/>"
	},
		location: location,
		lock: lock,
		"logo-gist": {
		name: "logo-gist",
		figma: {
			id: "0:529",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"brand",
			"github",
			"logo"
		],
		width: 25,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M4.7 8.73h2.45v4.02c-.55.27-1.64.34-2.53.34-2.56 0-3.47-2.2-3.47-5.05 0-2.85.91-5.06 3.48-5.06 1.28 0 2.06.23 3.28.73V2.66C7.27 2.33 6.25 2 4.63 2 1.13 2 0 4.69 0 8.03c0 3.34 1.11 6.03 4.63 6.03 1.64 0 2.81-.27 3.59-.64V7.73H4.7v1zm6.39 3.72V6.06h-1.05v6.28c0 1.25.58 1.72 1.72 1.72v-.89c-.48 0-.67-.16-.67-.7v-.02zm.25-8.72c0-.44-.33-.78-.78-.78s-.77.34-.77.78.33.78.77.78.78-.34.78-.78zm4.34 5.69c-1.5-.13-1.78-.48-1.78-1.17 0-.77.33-1.34 1.88-1.34 1.05 0 1.66.16 2.27.36v-.94c-.69-.3-1.52-.39-2.25-.39-2.2 0-2.92 1.2-2.92 2.31 0 1.08.47 1.88 2.73 2.08 1.55.13 1.77.63 1.77 1.34 0 .73-.44 1.42-2.06 1.42-1.11 0-1.86-.19-2.33-.36v.94c.5.2 1.58.39 2.33.39 2.38 0 3.14-1.2 3.14-2.41 0-1.28-.53-2.03-2.75-2.23h-.03zm8.58-2.47v-.86h-2.42v-2.5l-1.08.31v2.11l-1.56.44v.48h1.56v5c0 1.53 1.19 2.13 2.5 2.13.19 0 .52-.02.69-.05v-.89c-.19.03-.41.03-.61.03-.97 0-1.5-.39-1.5-1.34V6.94h2.42v.02-.01z\"/>"
	},
		"logo-github": {
		name: "logo-github",
		figma: {
			id: "0:536",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"brand",
			"github",
			"logo"
		],
		width: 45,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M18.53 12.03h-.02c.009 0 .015.01.024.011h.006l-.01-.01zm.004.011c-.093.001-.327.05-.574.05-.78 0-1.05-.36-1.05-.83V8.13h1.59c.09 0 .16-.08.16-.19v-1.7c0-.09-.08-.17-.16-.17h-1.59V3.96c0-.08-.05-.13-.14-.13h-2.16c-.09 0-.14.05-.14.13v2.17s-1.09.27-1.16.28c-.08.02-.13.09-.13.17v1.36c0 .11.08.19.17.19h1.11v3.28c0 2.44 1.7 2.69 2.86 2.69.53 0 1.17-.17 1.27-.22.06-.02.09-.09.09-.16v-1.5a.177.177 0 0 0-.146-.18zm23.696-2.2c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25zm2.43-.16c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88zm-8.72-3.61h-2.1c-.11 0-.17.08-.17.19v5.44s-.55.39-1.3.39-.97-.34-.97-1.09V6.25c0-.09-.08-.17-.17-.17h-2.14c-.09 0-.17.08-.17.17v5.11c0 2.2 1.23 2.75 2.92 2.75 1.39 0 2.52-.77 2.52-.77s.05.39.08.45c.02.05.09.09.16.09h1.34c.11 0 .17-.08.17-.17l.02-7.47c0-.09-.08-.17-.19-.17zm-23.7-.01h-2.13c-.09 0-.17.09-.17.2v7.34c0 .2.13.27.3.27h1.92c.2 0 .25-.09.25-.27V6.23c0-.09-.08-.17-.17-.17zm-1.05-3.38c-.77 0-1.38.61-1.38 1.38 0 .77.61 1.38 1.38 1.38.75 0 1.36-.61 1.36-1.38 0-.77-.61-1.38-1.36-1.38zm16.49-.25h-2.11c-.09 0-.17.08-.17.17v4.09h-3.31V2.6c0-.09-.08-.17-.17-.17h-2.13c-.09 0-.17.08-.17.17v11.11c0 .09.09.17.17.17h2.13c.09 0 .17-.08.17-.17V8.96h3.31l-.02 4.75c0 .09.08.17.17.17h2.13c.09 0 .17-.08.17-.17V2.6c0-.09-.08-.17-.17-.17zM8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17z\"/>"
	},
		"mail-read": {
		name: "mail-read",
		figma: {
			id: "0:547",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"email",
			"open"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M6 5H4V4h2v1zm3 1H4v1h5V6zm5-.48V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V5.52c0-.33.16-.63.42-.81L2 3.58V3c0-.55.45-1 1-1h1.2L7 0l2.8 2H11c.55 0 1 .45 1 1v.58l1.58 1.13c.27.19.42.48.42.81zM3 7.5L7 10l4-2.5V3H3v4.5zm-2 6l4.5-3-4.5-3v6zm11 .5l-5-3-5 3h10zm1-6.5l-4.5 3 4.5 3v-6z\"/>"
	},
		reply: reply,
		mail: mail,
		"mark-github": {
		name: "mark-github",
		figma: {
			id: "0:563",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"octocat",
			"brand",
			"github",
			"logo"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z\"/>"
	},
		markdown: markdown,
		megaphone: megaphone,
		mention: mention,
		milestone: milestone,
		mirror: mirror,
		"mortar-board": {
		name: "mortar-board",
		figma: {
			id: "0:594",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"education",
			"learn",
			"teach"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M7.83 9.19L4 8c-4-8 0 1.5 0 2.5S5.8 12 8 12s4-.5 4-1.5V8L8.17 9.19a.73.73 0 0 1-.36 0h.02zm.28-6.39a.34.34 0 0 0-.2 0L.27 5.18a.35.35 0 0 0 0 .67L2 6.4v1.77c-.3.17-.5.5-.5.86 0 .19.05.36.14.5-.08.14-.14.31-.14.5v2.58c0 .55 2 .55 2 0v-2.58c0-.19-.05-.36-.14-.5.08-.14.14-.31.14-.5 0-.38-.2-.69-.5-.86V6.72l4.89 1.53c.06.02.14.02.2 0l7.64-2.38a.35.35 0 0 0 0-.67L8.1 2.81l.01-.01zM8.02 6c-.55 0-1-.22-1-.5s.45-.5 1-.5 1 .22 1 .5-.45.5-1 .5z\"/>"
	},
		mute: mute,
		"no-newline": {
		name: "no-newline",
		figma: {
			id: "0:603",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"return"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M16 5v3c0 .55-.45 1-1 1h-3v2L9 8l3-3v2h2V5h2zM8 8c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4zM1.5 9.66L5.66 5.5C5.18 5.19 4.61 5 4 5 2.34 5 1 6.34 1 8c0 .61.19 1.17.5 1.66zM7 8c0-.61-.19-1.17-.5-1.66L2.34 10.5c.48.31 1.05.5 1.66.5 1.66 0 3-1.34 3-3z\"/>"
	},
		octoface: octoface,
		organization: organization,
		"package": {
		name: "package",
		figma: {
			id: "0:617",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"box",
			"ship"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M1 4.27v7.47c0 .45.3.84.75.97l6.5 1.73c.16.05.34.05.5 0l6.5-1.73c.45-.13.75-.52.75-.97V4.27c0-.45-.3-.84-.75-.97l-6.5-1.74a1.4 1.4 0 0 0-.5 0L1.75 3.3c-.45.13-.75.52-.75.97zm7 9.09l-6-1.59V5l6 1.61v6.75zM2 4l2.5-.67L11 5.06l-2.5.67L2 4zm13 7.77l-6 1.59V6.61l2-.55V8.5l2-.53V5.53L15 5v6.77zm-2-7.24L6.5 2.8l2-.53L15 4l-2 .53z\"/>"
	},
		paintcan: paintcan,
		pencil: pencil,
		person: person,
		pin: pin,
		plug: plug,
		plus: plus,
		"primitive-dot": {
		name: "primitive-dot",
		figma: {
			id: "0:641",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"circle"
		],
		width: 8,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z\"/>"
	},
		"primitive-square": {
		name: "primitive-square",
		figma: {
			id: "0:643",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"box"
		],
		width: 8,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M8 12H0V4h8v8z\"/>"
	},
		pulse: pulse,
		question: question,
		quote: quote,
		"radio-tower": {
		name: "radio-tower",
		figma: {
			id: "0:659",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"broadcast"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M4.79 6.11c.25-.25.25-.67 0-.92-.32-.33-.48-.76-.48-1.19 0-.43.16-.86.48-1.19.25-.26.25-.67 0-.92a.613.613 0 0 0-.45-.19c-.16 0-.33.06-.45.19-.57.58-.85 1.35-.85 2.11 0 .76.29 1.53.85 2.11.25.25.66.25.9 0zM2.33.52a.651.651 0 0 0-.92 0C.48 1.48.01 2.74.01 3.99c0 1.26.47 2.52 1.4 3.48.25.26.66.26.91 0s.25-.68 0-.94c-.68-.7-1.02-1.62-1.02-2.54 0-.92.34-1.84 1.02-2.54a.66.66 0 0 0 .01-.93zm5.69 5.1A1.62 1.62 0 1 0 6.4 4c-.01.89.72 1.62 1.62 1.62zM14.59.53a.628.628 0 0 0-.91 0c-.25.26-.25.68 0 .94.68.7 1.02 1.62 1.02 2.54 0 .92-.34 1.83-1.02 2.54-.25.26-.25.68 0 .94a.651.651 0 0 0 .92 0c.93-.96 1.4-2.22 1.4-3.48A5.048 5.048 0 0 0 14.59.53zM8.02 6.92c-.41 0-.83-.1-1.2-.3l-3.15 8.37h1.49l.86-1h4l.84 1h1.49L9.21 6.62c-.38.2-.78.3-1.19.3zm-.01.48L9.02 11h-2l.99-3.6zm-1.99 5.59l1-1h2l1 1h-4zm5.19-11.1c-.25.25-.25.67 0 .92.32.33.48.76.48 1.19 0 .43-.16.86-.48 1.19-.25.26-.25.67 0 .92a.63.63 0 0 0 .9 0c.57-.58.85-1.35.85-2.11 0-.76-.28-1.53-.85-2.11a.634.634 0 0 0-.9 0z\"/>"
	},
		"repo-clone": {
		name: "repo-clone",
		figma: {
			id: "0:669",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"book",
			"journal",
			"repository"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M15 0H9v7c0 .55.45 1 1 1h1v1h1V8h3c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-4 7h-1V6h1v1zm4 0h-3V6h3v1zm0-2h-4V1h4v4zM4 5H3V4h1v1zm0-2H3V2h1v1zM2 1h6V0H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h2v2l1.5-1.5L6 16v-2h5c.55 0 1-.45 1-1v-3H2V1zm9 10v2H6v-1H3v1H1v-2h10zM3 8h1v1H3V8zm1-1H3V6h1v1z\"/>"
	},
		"repo-force-push": {
		name: "repo-force-push",
		figma: {
			id: "0:681",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"book",
			"journal",
			"put"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M10 9H8v7H6V9H4l2.25-3H4l3-4 3 4H7.75L10 9zm1-9H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h4v-1H1v-2h4v-1H2V1h9v9H9v1h2v2H9v1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z\"/>"
	},
		"repo-forked": {
		name: "repo-forked",
		figma: {
			id: "0:685",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"book",
			"journal",
			"copy"
		],
		width: 10,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z\"/>"
	},
		"repo-pull": {
		name: "repo-pull",
		figma: {
			id: "0:691",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"book",
			"journal",
			"get"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M13 8V6H7V4h6V2l3 3-3 3zM4 2H3v1h1V2zm7 5h1v6c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v2h-1V1H2v9h9V7zm0 4H1v2h2v-1h3v1h5v-2zM4 6H3v1h1V6zm0-2H3v1h1V4zM3 9h1V8H3v1z\"/>"
	},
		"repo-push": {
		name: "repo-push",
		figma: {
			id: "0:700",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"book",
			"journal",
			"repository",
			"put"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M4 3H3V2h1v1zM3 5h1V4H3v1zm4 0L4 9h2v7h2V9h2L7 5zm4-5H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h4v-1H1v-2h4v-1H2V1h9.02L11 10H9v1h2v2H9v1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z\"/>"
	},
		repo: repo,
		rocket: rocket,
		rss: rss,
		ruby: ruby,
		search: search,
		server: server,
		settings: settings,
		shield: shield,
		"sign-in": {
		name: "sign-in",
		figma: {
			id: "0:764",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"door",
			"arrow",
			"direction",
			"enter",
			"log in"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M7 6.75V12h4V8h1v4c0 .55-.45 1-1 1H7v3l-5.45-2.72c-.33-.17-.55-.52-.55-.91V1c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v3h-1V1H3l4 2v2.25L10 3v2h4v2h-4v2L7 6.75z\"/>"
	},
		"sign-out": {
		name: "sign-out",
		figma: {
			id: "0:768",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"door",
			"arrow",
			"direction",
			"leave",
			"log out"
		],
		width: 16,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M11.992 8.994V6.996H7.995v-2h3.997V2.999l3.998 2.998-3.998 2.998zm-1.998 2.998H5.996V2.998L2 1h7.995v2.998h1V1c0-.55-.45-.999-1-.999H.999A1.001 1.001 0 0 0 0 1v11.372c0 .39.22.73.55.91L5.996 16v-3.008h3.998c.55 0 1-.45 1-1V7.995h-1v3.997z\"/>"
	},
		smiley: smiley,
		squirrel: squirrel,
		star: star,
		stop: stop,
		sync: sync,
		tag: tag,
		tasklist: tasklist,
		telescope: telescope,
		terminal: terminal,
		"text-size": {
		name: "text-size",
		figma: {
			id: "0:821",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"font",
			"size",
			"text"
		],
		width: 18,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M13.62 9.08L12.1 3.66h-.06l-1.5 5.42h3.08zM5.7 10.13S4.68 6.52 4.53 6.02h-.08l-1.13 4.11H5.7zM17.31 14h-2.25l-.95-3.25h-4.07L9.09 14H6.84l-.69-2.33H2.87L2.17 14H0l3.3-9.59h2.5l2.17 6.34L10.86 2h2.52l3.94 12h-.01z\"/>"
	},
		"three-bars": {
		name: "three-bars",
		figma: {
			id: "0:826",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"hamburger",
			"menu",
			"dropdown"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z\"/>"
	},
		thumbsdown: thumbsdown,
		thumbsup: thumbsup,
		tools: tools,
		trashcan: trashcan,
		"triangle-down": {
		name: "triangle-down",
		figma: {
			id: "0:847",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"arrow",
			"point",
			"direction"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M0 5l6 6 6-6H0z\"/>"
	},
		"triangle-left": {
		name: "triangle-left",
		figma: {
			id: "0:849",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"arrow",
			"point",
			"direction"
		],
		width: 6,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M6 2L0 8l6 6V2z\"/>"
	},
		"triangle-right": {
		name: "triangle-right",
		figma: {
			id: "0:851",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"arrow",
			"point",
			"direction"
		],
		width: 6,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M0 14l6-6-6-6v12z\"/>"
	},
		"triangle-up": {
		name: "triangle-up",
		figma: {
			id: "0:853",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"arrow",
			"point",
			"direction"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M12 11L6 5l-6 6h12z\"/>"
	},
		unfold: unfold,
		unmute: unmute,
		project: project,
		"kebab-horizontal": {
		name: "kebab-horizontal",
		figma: {
			id: "0:875",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"kebab",
			"dot",
			"menu",
			"more"
		],
		width: 13,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z\"/>"
	},
		"kebab-vertical": {
		name: "kebab-vertical",
		figma: {
			id: "0:880",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"kebab",
			"dot",
			"menu",
			"more"
		],
		width: 3,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M0 2.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm0 5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zM1.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z\"/>"
	},
		report: report,
		note: note,
		"screen-full": {
		name: "screen-full",
		figma: {
			id: "0:898",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"fullscreen",
			"expand"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M13 10h1v3c0 .547-.453 1-1 1h-3v-1h3v-3zM1 10H0v3c0 .547.453 1 1 1h3v-1H1v-3zm0-7h3V2H1c-.547 0-1 .453-1 1v3h1V3zm1 1h10v8H2V4zm2 6h6V6H4v4zm6-8v1h3v3h1V3c0-.547-.453-1-1-1h-3z\"/>"
	},
		"screen-normal": {
		name: "screen-normal",
		figma: {
			id: "0:906",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"fullscreen",
			"expand",
			"exit"
		],
		width: 14,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M2 4H0V3h2V1h1v2c0 .547-.453 1-1 1zm0 8H0v1h2v2h1v-2c0-.547-.453-1-1-1zm9-2c0 .547-.453 1-1 1H4c-.547 0-1-.453-1-1V6c0-.547.453-1 1-1h6c.547 0 1 .453 1 1v4zM9 7H5v2h4V7zm2 6v2h1v-2h2v-1h-2c-.547 0-1 .453-1 1zm1-10V1h-1v2c0 .547.453 1 1 1h2V3h-2z\"/>"
	},
		unverified: unverified,
		verified: verified,
		versions: versions,
		watch: watch,
		x: x,
		zap: zap,
		key: key,
		grabber: grabber,
		"plus-small": {
		name: "plus-small",
		figma: {
			id: "0:947",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"add",
			"new",
			"more",
			"small"
		],
		width: 7,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M4 4H3v3H0v1h3v3h1V8h3V7H4V4z\"/>"
	},
		"light-bulb": {
		name: "light-bulb",
		figma: {
			id: "0:951",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"idea"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z\"/>"
	},
		"link-external": {
		name: "link-external",
		figma: {
			id: "0:956",
			file: "FP7lqd1V00LUaT5zvdklkkZr"
		},
		keywords: [
			"out",
			"see",
			"more",
			"go",
			"to"
		],
		width: 12,
		height: 16,
		path: "<path fill-rule=\"evenodd\" d=\"M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z\"/>"
	},
		archive: archive
	};

	var data$1 = /*#__PURE__*/Object.freeze({
		alert: alert,
		beaker: beaker,
		bell: bell,
		bold: bold,
		book: book,
		bookmark: bookmark,
		briefcase: briefcase,
		broadcast: broadcast,
		browser: browser,
		bug: bug,
		calendar: calendar,
		check: check,
		checklist: checklist,
		clippy: clippy,
		clock: clock,
		code: code,
		comment: comment,
		dash: dash,
		dashboard: dashboard,
		database: database,
		diff: diff$1,
		ellipsis: ellipsis,
		eye: eye,
		file: file,
		flame: flame,
		fold: fold,
		gear: gear,
		gift: gift,
		gist: gist,
		globe: globe,
		graph: graph,
		heart: heart,
		history: history,
		home: home,
		hubot: hubot,
		inbox: inbox,
		info: info,
		italic: italic,
		jersey: jersey,
		keyboard: keyboard,
		law: law,
		link: link,
		location: location,
		lock: lock,
		reply: reply,
		mail: mail,
		markdown: markdown,
		megaphone: megaphone,
		mention: mention,
		milestone: milestone,
		mirror: mirror,
		mute: mute,
		octoface: octoface,
		organization: organization,
		paintcan: paintcan,
		pencil: pencil,
		person: person,
		pin: pin,
		plug: plug,
		plus: plus,
		pulse: pulse,
		question: question,
		quote: quote,
		repo: repo,
		rocket: rocket,
		rss: rss,
		ruby: ruby,
		search: search,
		server: server,
		settings: settings,
		shield: shield,
		smiley: smiley,
		squirrel: squirrel,
		star: star,
		stop: stop,
		sync: sync,
		tag: tag,
		tasklist: tasklist,
		telescope: telescope,
		terminal: terminal,
		thumbsdown: thumbsdown,
		thumbsup: thumbsup,
		tools: tools,
		trashcan: trashcan,
		unfold: unfold,
		unmute: unmute,
		project: project,
		report: report,
		note: note,
		unverified: unverified,
		verified: verified,
		versions: versions,
		watch: watch,
		x: x,
		zap: zap,
		key: key,
		grabber: grabber,
		archive: archive,
		default: data
	});

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols$1) {
				symbols = getOwnPropertySymbols$1(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	var data$2 = ( data$1 && data ) || data$1;

	Object.keys(data$2).forEach(function(key) {

	  // Returns a string representation of html attributes
	  var htmlAttributes = function(icon, options) {
	    var attributes = [];
	    var attrObj = objectAssign({}, data$2[key].options, options);

	    // If the user passed in options
	    if (options) {

	      // If any of the width or height is passed in
	      if(options["width"] || options["height"]) {
	        attrObj["width"] = options["width"] ? options["width"] : (parseInt(options["height"]) * data$2[key].options["width"] / data$2[key].options["height"]);
	        attrObj["height"] = options["height"] ? options["height"] : (parseInt(options["width"]) * data$2[key].options["height"] / data$2[key].options["width"]);
	      }

	      // If the user passed in class
	      if (options["class"]) {
	        attrObj["class"] = "octicon octicon-" + key + " " + options["class"];
	        attrObj["class"].trim();
	      }

	      // If the user passed in aria-label
	      if (options["aria-label"]) {
	        attrObj["aria-label"] = options["aria-label"];
	        attrObj["role"] = "img";

	        // Un-hide the icon
	        delete attrObj["aria-hidden"];
	      }
	    }

	    Object.keys(attrObj).forEach(function(option) {
	      attributes.push(option + "=\"" + attrObj[option] + "\"");
	    });

	    return attributes.join(" ").trim()
	  };

	  // Set the symbol for easy access
	  data$2[key].symbol = key;

	  // Set all the default options
	  data$2[key].options = {
	    "version": "1.1",
	    "width": data$2[key].width,
	    "height": data$2[key].height,
	    "viewBox": "0 0 " + data$2[key].width + " " + data$2[key].height,
	    "class": "octicon octicon-" + key,
	    "aria-hidden": "true"
	  };

	  // Function to return an SVG object
	  data$2[key].toSVG = function(options) {
	    return "<svg " + htmlAttributes(data$2[key], options) + ">" + data$2[key].path + "</svg>"
	  };
	});

	// Import data into exports
	var octicons = data$2;

	const {hyper: hyper$1} = HyperHTMLElement;

	hyper$1.define('oct-icon', (node, icon) => {
	  if (octicons[icon]) {
	    node.innerHTML = ' ' + octicons[icon].toSVG();
	  }
	  return icon;
	});

	hyper$1.define('date', (date) => {
	  let formatted = '-',
	    newdate = date;
	  if (date) {
	    if (typeof newdate.getMonth !== 'function') {
	      newdate = new Date(date);
	    }
	    if (!isNaN(newdate.getTime()) && typeof newdate.getMonth === 'function') {
	      formatted = `
        ${newdate.getMonth() + 1}/${newdate.getDate()}/${newdate.getFullYear()}
      `;
	    }
	  }
	  return {
	    text: formatted
	  }
	});

	//describe the element
	class HyperColumn extends HyperHTMLElement {
	  static get observedAttributes() { 
	    return ['label', 'attribute', 'sortable', 'type', 'name']; 
	  }
	}

	HyperColumn.define('hyper-column');

	const {wire: wire$1, bind: bind$1} = HyperHTMLElement;
	//describe the element
	class HyperTable extends HyperHTMLElement {
	  static get observedAttributes() {
	    return [];
	  }
	  created() {
	    this._data = [];
	    this.columns = [].slice
	      .call(this.querySelectorAll("hyper-column"))
	      .map(el => {
	        const obj = {};
	        [].slice
	        .call(el.attributes)
	        .map(attr => {
	          obj[attr.name] = attr.value;
	        });
	        return obj;
	      });
	    this.render();
	  }
	  get data() {
	    return this._data;
	  }
	  set data(data) {
	    this._data = data;
	    this.render();
	  }
	  get defaultState() {
	    return {
	      sorted: "",
	      asc: false
	    }
	  }
	  addColumn(ElOrObj, ix) {
	    const obj = {label: "", attribute: "", sortable: undefined, type: undefined, name: ""};
	    if (ElOrObj.nodeName === "HYPER-COLUMN") {
	      [].slice.call(ElOrObj.attributes)
	        .map(attr => {
	          obj[attr.name] = attr.value;
	        });
	    } else {
	      Object.keys(obj).map(key => obj[key] = ElOrObj[key] || undefined);
	    }
	    if (!obj.name) {
	      obj.name = obj.attribute;
	    }
	    if (ix) {
	      this.columns.splice(ix, 0, obj);
	    } else {
	      this.columns.push(obj);
	    }
	    this.render();
	  }
	  removeColumn(name) {
	    this.columns = this.columns.filter(col => col.name !== name);
	    this.render();
	  }
	  updateColumn(name, attribute, value) {
	    const obj = this.columns.find(column => column.name === name);
	    if (obj) {
	      obj[attribute] = value;
	      this.render();
	    }
	  }
	  headerClick(e) {
	    e.preventDefault();
	    const tag = e.target;
	    const attr = tag.dataset.target;
	    let asc = this.state.asc;
	    if (this.state.sorted === attr) {
	      asc = !asc;
	    }
	    if (this.state.sorted !== attr) {
	      asc = true;
	    }
	    //simple sort, reverse the sort if asc is true
	    this.data.sort((a, b) => (''+a[attr]).localeCompare(''+b[attr]) * (asc ? 1 : -1));
	    //update the sorted attr
	    this.setState({
	       sorted: attr,
	       asc: asc
	    });
	  }
	  _renderCell(item, column) {
	    const obj = {};
	    obj[column.type || "html"] = item[column.attribute] != null ? item[column.attribute] : "-";
	    return wire$1(column, `:col${item.id}`)`
      <td>${obj}</td>
    `;
	  }
	  _renderHeaderCell(column) {
	    if (column.sortable == null || column.sortable === "true") {
	      return wire$1(column)`<th>
        <a 
          data-call="headerClick" 
          onclick="${this}" 
          data-target="${column.attribute}" 
          href="#">${column.label}</a>
        ${this.state.sorted === column.attribute ?
          wire$1()`<span oct-icon=${this.state.asc ? 'chevron-up' : 'chevron-down'}></span>`
          : ''
        }
      </th>`;
	    } else {
	      return wire$1(column)`<th>${column.label}</th>`;
	    }
	  }
	  render() {
	    this.html`
      <table class="table table-striped table-bordered table-sm">
        <thead>
          <tr>
            ${this.columns.map(col => this._renderHeaderCell(col))}
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th class="text-right" colspan="${this.columns.length}">Total ${this.data.length}</th>
          </tr>
        </tfoot>
        <tbody>
          ${this.data.map(item => wire$1(item)`
            <tr>
              ${this.columns.map(column => this._renderCell(item, column))}
            </tr>
          `)}
        </tbody>
      </table>
    `;
	  }
	}

	HyperTable.define('hyper-table');

	const { wire: wire$2 } = HyperHTMLElement;

	// const table = document.querySelector("hyper-table");

	// tressa.async(done => {
	//   tressa.title("# table");
	//   tressa.log("## is loading");
	//   //table should be empty
	//   tressa(!table.querySelector("tbody tr"), "no body rows");
	//   tressa(table.querySelector("thead th").textContent.trim() === "ID", "first th is ID");
	//   done();
	// }).then(() => {
	//   return tressa.async(done => {
	//     tressa.log("## adding data");
	//     table.data = [{ a: 1, b: 2 }];
	//     tressa(table.querySelectorAll("tbody tr").length === 1, "one row");
	//     tressa(table.querySelector("tbody td").textContent.trim() === "-", "cell with -");
	//     tressa(table.querySelector("tfoot th").textContent.trim() === "Total 1", "footer total 1");
	//     table.data = [{ name: 'John', id: 1, date: 432363600000, last: "Doe" }, { name: 'Mitch', id: 2, date: 462777700000, last: "Mitchues" }, { name: 'Paul', id: 3, date: 477368800000, last: "Cruiser" }]
	//     tressa(table.querySelectorAll("tbody tr").length === 3, "3 rows");
	//     tressa(table.querySelector("tbody td").textContent.trim() === "1", "cell with 1");
	//     tressa(table.querySelector("tfoot th").textContent.trim() === "Total 3", "footer total 3");
	//     done();
	//   });
	// }).then(() => {
	//   return tressa.async(done => {
	//     tressa.log("## add columns");
	//     tressa.log("## with object");
	//     table.addColumn({ label: "Last", attribute: "last" }, 2);
	//     tressa(table.querySelectorAll("thead th").length === 4, "column added with an object");
	//     tressa(table.querySelectorAll("thead th")[2].textContent.trim() === "Last", "3rd column with Last is the new one");
	//     tressa(table.querySelectorAll("tbody td")[2].textContent.trim() === "Doe", "first row for the new coumn has Doe");
	//     tressa.log("## with element");
	//     table.addColumn(wire()`<hyper-column name="lasthtml" label="Last HTML" attribute="last" />`);
	//     tressa(table.querySelectorAll("thead th").length === 5, "column added with an object");
	//     tressa(table.querySelectorAll("thead th")[4].textContent.trim() === "Last HTML", "last column is the new one");
	//     tressa(table.querySelectorAll("tbody td")[4].textContent.trim() === "Doe", "first row for the new coumn has Doe");
	//     done();
	//   });
	// }).then(() => {
	//   return tressa.async(done => {
	//     tressa.log("## remove column");
	//     table.removeColumn('lasthtml');
	//     tressa(table.querySelectorAll("thead th").length === 4, "column added with an object");
	//     tressa(table.querySelectorAll("thead th")[2].textContent.trim() === "Last", "3rd column with Last is the new one");
	//     tressa(table.querySelectorAll("tbody td")[2].textContent.trim() === "Doe", "first row for the new coumn has Doe");
	//     table.removeColumn('lasthtml');
	//     tressa(table.querySelectorAll("thead th").length === 4, "bogus remove doesn't affect anything :)");
	//     done();
	//   });
	// }).then(() => {
	//   return tressa.async(done => {
	//     tressa.log("## update column");
	//     table.updateColumn('last', 'label', 'Last Name');
	//     tressa(table.querySelectorAll("thead th").length === 4, "column added with an object");
	//     tressa(table.querySelectorAll("thead th")[2].textContent.trim() === "Last Name", "3rd column with Last is the new one");
	//     tressa(table.querySelectorAll("tbody td")[2].textContent.trim() === "Doe", "first row for the new coumn has Doe");
	//     table.updateColumn('some', 'label', 'Last Name');
	//     tressa(table.querySelectorAll("thead th")[2].textContent.trim() === "Last Name", "bogus update doesn't affect");
	//     done();
	//   });
	// }).then(() => {
	//   return tressa.async(done => {
	//     tressa.log("## sorting");
	//     table.querySelectorAll("a")[2].click();
	//     tressa.assert(table.querySelector("span svg.octicon-chevron-up"), "chevron up");
	//     tressa(table.querySelectorAll("tbody td")[2].textContent.trim() === "Cruiser", "Cruiser is now on top");
	//     tressa(table.data[0].last === "Cruiser", "Cruiser is now 0 in the data array");
	//     tressa.log("Table *done*");
	//     tressa.end();
	//     done();
	//   });
	// }).catch(console.log);

	exports.wire = wire$2;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
