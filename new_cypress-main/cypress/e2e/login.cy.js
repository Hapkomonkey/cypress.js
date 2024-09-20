describe('Проверка авторизации ', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // зашел на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверяю цвет кнопки востановить пароль


         cy.get('#mail').type('german@dolnikov.ru'); // ввел верный логин 
         cy.get('#pass').type('iLoveqastudio1'); // ввел верный пароль 
         cy.get('#loginButton').click(); // нажал войти 


         cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверяю,что после авторизации вижу текст 
         cy.get('#messageHeader').should('be.visible');//текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден для пользователя

     })
     
    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверяю цвет кнопки востановить пароль

        cy.get('#forgotEmailButton').click();//нажал восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru');//ввел имейл
        cy.get('#restoreEmailButton').click();//нажал на отправить код




        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//проверяю на совпадение текст  
        cy.get('#messageHeader').should('be.visible');//текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден для пользователя

    })

        it('Верный логин и не верный пароль', function () {
             cy.visit('https://login.qa.studio/'); // зашел на сайт
             cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверяю цвет кнопки востановить пароль
    
    
             cy.get('#mail').type('german@dolnikov.ru'); // ввел верный логин 
             cy.get('#pass').type('iLoveqastudio7'); // ввел не верный пароль 
             cy.get('#loginButton').click(); // нажал войти 
    
    
             cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяю,что после авторизации вижу текст 
             cy.get('#messageHeader').should('be.visible');//текст виден пользователю
             cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден для пользователя
    
         })


         
        it('Не верный логин и верный пароль', function () {
            cy.visit('https://login.qa.studio/'); // зашел на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверяю цвет кнопки востановить пароль
   
   
            cy.get('#mail').type('grman@dolnikov.ru'); // ввел не верный логин 
            cy.get('#pass').type('iLoveqastudio1'); // ввел верный пароль 
            cy.get('#loginButton').click(); // нажал войти 
   
   
            cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяю,что после авторизации вижу текст 
            cy.get('#messageHeader').should('be.visible');//текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден для пользователя
   
        })
        

        it('Проверка на валидацию', function () {
            cy.visit('https://login.qa.studio/'); // зашел на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверяю цвет кнопки востановить пароль
   
   
            cy.get('#mail').type('grmandolnikov.ru'); // ввел логин без сабачки
            cy.get('#pass').type('iLoveqastudio1'); // ввел верный пароль 
            cy.get('#loginButton').click(); // нажал войти 
   
   
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//проверяю,что после авторизации вижу текст 
            cy.get('#messageHeader').should('be.visible');//текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден для пользователя
   
        })

        
        it('Проверка на строчные буквы в логине', function () {
            cy.visit('https://login.qa.studio/'); // зашел на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверяю цвет кнопки востановить пароль
   
   
            cy.get('#mail').type(' GerMan@Dolnikov.ru'); // ввел логин без сабачки
            cy.get('#pass').type('iLoveqastudio1'); // ввел верный пароль 
            cy.get('#loginButton').click(); // нажал войти 
   
   
            cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверяю,что после авторизации вижу текст 
            cy.get('#messageHeader').should('be.visible');//текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден для пользователя
   
        })
   

            
 })
 


 //план 
 //найти поле логин  и Ввести правильный логин
 //найти поле пароль ввести правильный пароль
 //найти кнопку нажать войти
 //проверить что авторизация прошла успешно
