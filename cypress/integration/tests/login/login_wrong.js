describe('Тестирование формы логина, неверный логин', function () {
    it('Проверка, что все работает при вводе неверного логина', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germ@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon')
         
     })
 })