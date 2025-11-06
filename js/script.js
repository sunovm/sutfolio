const toggleBtn = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.body;

  // 버튼 클릭 시 메뉴 열기/닫기
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleBtn.classList.toggle('active'); // 햄버거→X 전환
    mobileMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
  });

  // 메뉴 항목 클릭 시 닫기
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // 메뉴 외부 클릭 시 닫기
  document.addEventListener('click', (e) => {
    if (
      mobileMenu.classList.contains('active') &&
      !mobileMenu.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      closeMenu();
    }
  });

  function closeMenu() {
    toggleBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
    body.classList.remove('menu-open');
  }