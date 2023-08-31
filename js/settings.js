const sidebarItems = document.querySelectorAll('.account-sidebar li');
const tabContents = document.querySelectorAll('.tab-content');

sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
    const tab = item.getAttribute('data-tab');
    sidebarItems.forEach(item => item.classList.remove('active'));
    tabContents.forEach(tabContent => tabContent.classList.remove('active'));
    item.classList.add('active');
    document.getElementById(tab).classList.add('active');
  });
});
