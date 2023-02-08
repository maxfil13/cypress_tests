describe('Тестирование формы логина, неверный пароль', function () {
    it('Проверка, что все работает при вводе неверного пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('fgfdlgs');
         cy.get('#loginButton').click();
         cy.contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon')
         
     })
 })