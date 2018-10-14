describe('Table loaded', function () {
    it('Loads empty', function () {
        cy.visit('http://localhost:8081/index.html')

        cy.get("hyper-table").then($table => {
            expect($table.find("tbody tr").length).to.equal(0);
            expect($table.find("thead th")[0].textContent.trim()).to.equal("ID");
        });
    })
    it('adds data', function () {
        cy.get("hyper-table").then($table => {
            const table = $table.get(0);
            table.data = [{ a: 1, b: 2 }];
            expect($table.find("tbody tr").length).to.equal(1);
            expect($table.find("tbody td")[0].textContent.trim()).to.equal("-");
            expect($table.find("tfoot th")[0].textContent.trim()).to.equal("Total 1");
            table.data = [{ name: 'John', id: 1, date: 432363600000, last: "Doe" }, { name: 'Mitch', id: 2, date: 462777700000, last: "Mitchues" }, { name: 'Paul', id: 3, date: 477368800000, last: "Cruiser" }]
            expect($table.find("tbody tr").length).to.equal(3);
            expect($table.find("tbody td")[0].textContent.trim()).to.equal("1");
            expect($table.find("tfoot th")[0].textContent.trim()).to.equal("Total 3");
        });
    })
    it('adds columns', function () {
        cy.get("hyper-table").then($table => {
            const table = $table.get(0);
            cy.log("with object")
            table.addColumn({ label: "Last", attribute: "last" }, 2);
            expect($table.find("thead th").length).to.equal(4);
            expect($table.find("thead th")[2].textContent.trim()).to.equal("Last");
            expect($table.find("tbody td")[2].textContent.trim()).to.equal("Doe");
            cy.log("with element")
            cy.window().then((win) => {
                table.addColumn(win.hyper.wire()`<hyper-column name="lasthtml" label="Last HTML" attribute="last" />`);
                expect($table.find("thead th").length).to.equal(5);
                expect($table.find("thead th")[4].textContent.trim()).to.equal("Last HTML");
                expect($table.find("tbody td")[4].textContent.trim()).to.equal("Doe");
            })
        });
    })
    it('removes columns', function () {
        cy.get("hyper-table").then($table => {
            const table = $table.get(0);
            table.removeColumn('lasthtml');
            expect($table.find("thead th").length).to.equal(4);
            expect($table.find("thead th")[2].textContent.trim()).to.equal("Last");
            expect($table.find("tbody td")[2].textContent.trim()).to.equal("Doe");
            table.removeColumn('lasthtml');
            cy.log("bogus remove doesn't affect")
            expect($table.find("thead th").length).to.equal(4);
        });
    })
    it('updates columns', function () {
        cy.get("hyper-table").then($table => {
            const table = $table.get(0);
            table.updateColumn('last', 'label', 'Last Name');
            expect($table.find("thead th").length).to.equal(4);
            expect($table.find("thead th")[2].textContent.trim()).to.equal("Last Name");
            expect($table.find("tbody td")[2].textContent.trim()).to.equal("Doe");
            table.updateColumn('some', 'label', 'Last Name');
            cy.log("bogus update doesn't affect")
            expect($table.find("thead th")[2].textContent.trim()).to.equal("Last Name");
        });
    })
    it('sorts', function () {
        cy.get("hyper-table a").eq(2).click();
        cy.get("hyper-table span svg").should('have.class', 'octicon-chevron-up')
        cy.get("hyper-table tbody td").eq(2).contains('Cruiser');
        cy.get("hyper-table").then($table => {
            const table = $table.get(0);
            expect(table.data[0].last).to.equal("Cruiser")
        })
    })
})