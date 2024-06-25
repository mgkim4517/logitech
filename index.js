// a 태그 성격 제거
$('a[href="#"]').on('click', e => e.preventDefault());
// logitech-container 무한 롤링


// about-container about-wrapper
document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.about-menu li');
  const contents = document.querySelectorAll('.about-content');

  menuItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      // Remove active class from all menu items
      menuItems.forEach((menuItem) => {
        menuItem.classList.remove('active');
      });

      // Add active class to the clicked menu item
      item.classList.add('active');

      // Show the corresponding content
      contents.forEach((content) => {
        content.classList.remove('active');
      });

      contents[index].classList.add('active');
    });
  });
});