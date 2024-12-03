// Đợi cho DOM được tải xong
window.addEventListener('DOMContentLoaded', () => {

    // Kích hoạt Bootstrap scrollspy trên phần tử sidebar
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Thu nhỏ navbar khi người dùng nhấp vào các liên kết trên mobile
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');
    
    // Lưu kiểu hiển thị của navbarToggler để tránh gọi `getComputedStyle` trong vòng lặp
    const isNavbarVisible = window.getComputedStyle(navbarToggler).display !== 'none';

    responsiveNavItems.forEach(responsiveNavItem => {
        responsiveNavItem.addEventListener('click', () => {
            // Chỉ click navbarToggler khi nó hiển thị
            if (isNavbarVisible) {
                navbarToggler.click();
            }
        });
    });

});
