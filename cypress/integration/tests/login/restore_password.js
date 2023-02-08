describe('Тестирование формы восстановления пароля', function () {
    it('Проверка, что все работает при правильных данных', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('qwer@qwee.ru');
         cy.get('#restoreEmailButton').click();
         cy.get('#message').contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon')
        
     })
 })