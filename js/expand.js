document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        button.classList.toggle('expand-btn--active');

        if(button.classList.contains('expand-btn--active')){
            content.style.maxHeight = content.scrollHeight + 100 +'px'
        }else{
            content.style.maxHeight = 0;
        }
    });
});