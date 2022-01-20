const show = document.querySelector('.show')
const toglle = document.querySelectorAll('.marging .toglle')

for(const element of toglle){
    element.addEventListener('click', function(){
        show.classList.toggle('show')
    })
}