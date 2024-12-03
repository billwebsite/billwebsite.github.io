window.addEventListener('DOMContentLoaded', () => {
    // Kích hoạt Bootstrap scrollspy trên phần tử sidebar
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Thu nhỏ navbar khi người dùng nhấp vào các liên kết trên mobile
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');

    // Lưu trạng thái của navbarToggler
    const isNavbarVisible = navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none';

    if (isNavbarVisible) {
        // Đảm bảo click navbarToggler chỉ khi nó hiển thị
        responsiveNavItems.forEach(responsiveNavItem => {
            responsiveNavItem.addEventListener('click', () => {
                navbarToggler.click();
            });
        });
    }
});
