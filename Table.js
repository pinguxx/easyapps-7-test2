import HyperHTMLElement from 'hyperhtml-element/esm';
import Column from "./Column";

const {wire, bind} = HyperHTMLElement;
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
    return wire(column, `:col${item.id}`)`
      <td>${obj}</td>
    `;
  }
  _renderHeaderCell(column) {
    if (column.sortable == null || column.sortable === "true") {
      return wire(column)`<th>
        <a 
          data-call="headerClick" 
          onclick="${this}" 
          data-target="${column.attribute}" 
          href="#">${column.label}</a>
        ${this.state.sorted === column.attribute ?
          wire()`<span oct-icon=${this.state.asc ? 'chevron-up' : 'chevron-down'}></span>`
          : ''
        }
      </th>`;
    } else {
      return wire(column)`<th>${column.label}</th>`;
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
          ${this.data.map(item => wire(item)`
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

export {
  HyperTable
};