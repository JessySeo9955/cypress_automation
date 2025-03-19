describe('Fixtures Demo', () => {

    let data = {};
    before('Before Hook', () => {
        cy.fixture('example').then(result => {
            //.data = data;
            data = result.testId1;
        })
    });

    it('should understand how to use fixtures for reading data',  () => {
       cy.visit('https://www.letskodeit.com/login');
       cy.get('#email').type(data.username);
       cy.get('#login-password').type(data.password);
    });
});

describe('Fixtures Multiple Data Demo', () => {

    let data = {};
    before('Before Hook', () => {
        cy.fixture('search_course').then(result => {
            //.data = data;
            data = result.testId1;
        })
    });

    it('should run same test with multiple data',  () => {

        data.forEach((course) => {
            cy.visit('https://www.letskodeit.com/courses');
            cy.get('input[placeholder="Search Course"]').type(course.searchCourse)
            cy.get('button[class="find-course search-course" ]').click()
            cy.xpath(`//h4[normalize-space()="${course.clickCourse}"]`).click()
        })




    });
});