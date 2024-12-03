window.addEventListener('DOMContentLoaded', () => {
    // Kích hoạt Bootstrap ScrollSpy trên phần tử sidebar
    const sideNav = document.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Thu nhỏ navbar khi người dùng nhấp vào các liên kết trên mobile
    const navbarToggler = document.querySelector('.navbar-toggler');
    const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');

    if (navbarToggler) {
        // Kiểm tra sự hiển thị của navbarToggler chỉ một lần
        const isNavbarVisible = window.getComputedStyle(navbarToggler).display !== 'none';

        // Nếu navbarToggler đang hiển thị, gắn sự kiện click cho các liên kết
        if (isNavbarVisible) {
            responsiveNavItems.forEach(navItem => {
                navItem.addEventListener('click', () => {
                    navbarToggler.click(); // Thu nhỏ navbar khi nhấp vào liên kết
                });
            });
        }
    }
});
