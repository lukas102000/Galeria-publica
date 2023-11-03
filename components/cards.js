const Cards = (contentId, image, titler) => {
    const section = document.createElement('section')
    const content = document.getElementById(contentId)
    section.setAttribute('class', 'card')

    section.innerHTML = 
    `
    <img src='${image}' class="cover" onclick='OpenModal();GetView(this)'></img>
    <div class="box">
        <h1>${titler}</h1>
        <a href="${image}" download >Free download</a>
    </div>
    
    `
    content.appendChild(section)
}
/*  */
function OpenModal(){
    document.querySelector('.modal-view').classList.toggle('active')
}
function GetView(img){
    document.querySelector('.modal-image').src = `${img.src}`
}