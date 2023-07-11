let select = function () {
  let selectHeader = document.querySelectorAll('.custom-select__top');
  let selectItem = document.querySelectorAll('.custom-select__item');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
  });
  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText,
      select = this.closest('.custom-select'),
      currentText = select.querySelector('.custom-select__current');
    currentText.innerText = text;
    select.classList.remove('is-active');
  }
};

select(); //обеспечивает плавное открытие custom-select фильтра