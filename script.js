//your JS code here. If required.
cy.get('#book-list').find('tr').eq(1).find('td').eq(0).should('contain', '1');