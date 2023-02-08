describe('testing makr an order with a few ', function () {
    it('Cheking that the order works well', function () {
         cy.visit('https://testqastudio.me/');
         cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
         cy.get('.product_title').contains('БРОММС Двухместная кровать');
         cy.get('input[name]').invoke('attr','value','3').should('have.value', '3');
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.cart-panel-content > .modal-header > .modal-title').contains('Ваша Корзина');
         cy.wait(6000);
         cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
         cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
         cy.get('.post-11337 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
         cy.get('.product_title').contains('КЛЛАРИОН Низкий столик');
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.cart-panel-content > .modal-header > .modal-title').contains('Ваша Корзина');
         cy.wait(6000);
         cy.get('.checkout').click();
         cy.get('#billing_first_name').type('fgsj');
         cy.get('#billing_last_name').type('fhdfd');
         cy.get('#billing_address_1').type('fhdkghjfs');
         cy.get('#billing_city').type('hgkdfgfdsl');
         cy.get('#billing_state').type('ffdsj');
         cy.get('#billing_postcode').type('547354');
         cy.get('#billing_phone').type('123456789');
         cy.get('#billing_email').type('qw@wqfgdghgd.ru');
         cy.get('#place_order').click();
         cy.get('.woocommerce-notice').contains('Ваш заказ принят. Благодарим вас.');
  
     })
 })
 