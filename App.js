const AccordionBtn = document.querySelectorAll('.accordion')
AccordionBtn.forEach((el) => {
    el.addEventListener('click', (e) => {
        el.querySelector('.icondown').classList.toggle('active')
        el.querySelector('.accordion-text').classList.toggle('isshow')
    })
})