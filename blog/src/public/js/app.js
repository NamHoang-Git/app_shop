"use strict";
document.addEventListener("DOMContentLoaded", function() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const navReg = $('.nav__register');
    const navLogin = $('.nav__login');

    const overlay = $('.modal__overlay');
    const driftReg = $('.drift-register');
    const driftLogin = $('.drift-login');

    const closeReg = $('.modal__auth-close-reg');
    const closeLogin = $('.modal__auth-close-log');

    const footerReg = $('.footer__link-reg');
    const footerLog = $('.footer__link-log');

    const shoppingCart = $('.shopping-cart-but')

    // Mở modal đăng ký
    // navReg.onclick = function() {
    //     overlay.classList.add('active');
    //     driftReg.classList.add('active');
    // }

    // // Mở modal đăng nhập
    // navLogin.onclick = function() {
    //     overlay.classList.add('active');
    //     driftLogin.classList.add('active');
    // }

    // // Bấm giỏ hàng mở đăng nhập
    // shoppingCart.onclick = function() {
    //     overlay.classList.add('active');
    //     driftLogin.classList.add('active');
    // }


    // // Đóng modal và overlay khi nhấp vào overlay
    // overlay.onclick = function() {
    //     overlay.classList.remove('active');
    //     driftReg.classList.remove('active');
    //     driftLogin.classList.remove('active');
    // }

    // // Đóng modal đăng ký
    // closeReg.onclick = function() {
    //     overlay.classList.remove('active');
    //     driftReg.classList.remove('active');
    // }

    // // Đóng modal đăng nhập
    // closeLogin.onclick = function() {
    //     overlay.classList.remove('active');
    //     driftLogin.classList.remove('active');
    // }

    // // Chuyển từ modal đăng ký sang modal đăng nhập
    // footerReg.onclick = function() {
    //     driftLogin.classList.remove('active');
    //     driftReg.classList.add('active');
    // }

    // // Chuyển từ modal đăng nhập sang modal đăng ký
    // footerLog.onclick = function() {
    //     driftReg.classList.remove('active');
    //     driftLogin.classList.add('active');
    // }

    document.querySelectorAll('.suggest-day__body-search-similar-text').forEach(button => {
        button.addEventListener('click', event => {
            const productId = event.target.dataset.productId;
            addToCart(productId);
        });
    });
    
    function addToCart(productId) {
        // Logic thêm sản phẩm vào giỏ hàng
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        
        updateCartIcon();
    }    

    function updateCartIcon() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        document.querySelector('.shopping-cart-but').innerText = cart.length;
    }
    
    // Gọi hàm này khi tải lại trang để đảm bảo giỏ hàng được cập nhật
    updateCartIcon();

    // ----------------------

    // Chuyển hướng đến trang đăng ký
    function redirectToRegister() {
        window.location.href = '/register';
    }

    navReg.onclick = function() {
        redirectToRegister();
    }

    // Chuyển hướng đến trang đăng nhập
    function redirectToLogin() {
        window.location.href = '/login';
    }

    navLogin.onclick = function() {
        redirectToLogin();
    }
});
