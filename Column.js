import HyperHTMLElement from 'hyperhtml-element/esm';
//describe the element
class HyperColumn extends HyperHTMLElement {
  static get observedAttributes() { 
    return ['label', 'attribute', 'sortable', 'type', 'name']; 
  }
}

HyperColumn.define('hyper-column');

export {
  HyperColumn
};