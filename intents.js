import HyperHTMLElement from 'hyperhtml-element/esm';
const {hyper} = HyperHTMLElement;
import octicons from 'octicons';

hyper.define('oct-icon', (node, icon) => {
  if (octicons[icon]) {
    node.innerHTML = ' ' + octicons[icon].toSVG();
  }
  return icon;
});

hyper.define('date', (date) => {
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