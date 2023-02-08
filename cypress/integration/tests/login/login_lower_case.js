describe('Тестирование формы логина, ввод заглавных букв', function () {
    it('Проверка, что все работает при вводе логина с заглавными буквами', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon')
         
     })
 })