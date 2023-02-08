describe('Тестирование формы логина, валидация логина', function () {
    it('Проверка, что все работает при вводе логина без @', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germdolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Нужно исправить проблему валидации');
         cy.get('#exitMessageButton > .exitIcon')
         
     })
 })