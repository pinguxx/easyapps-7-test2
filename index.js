import "document-register-element";
import './intents.js';
import "./Table.js";
import HyperHTMLElement from 'hyperhtml-element/esm';
const { wire } = HyperHTMLElement;

export {
  wire
}

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