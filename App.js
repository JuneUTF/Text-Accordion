const AccordionBtn = document.querySelectorAll('.accordion')
AccordionBtn.forEach((el) => {
    el.addEventListener('click', (e) => {
        el.querySelector('.icondown').classList.toggle('active')
        const ani = el.querySelector('.accordion-text');
        ani.classList.toggle('isshow')
        if (!ani.classList.contains('isshow')) { ani.style.height = 0; } else {
            ani.style.height = `${ani.scrollHeight}px`
        }
    })
})