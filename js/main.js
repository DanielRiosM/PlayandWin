console.log('hola');

function mostrarMensajeInicial(){


    if(confirm('Este sitio esta en desarrollo, disculpe las molestias')){

        alert('Gracias por visitarnos');

    }else{
        alert('....');
    }  
}

document.addEventListener("DOMContentLoaded",() => {
    const scrollToBottomButtom = document.getElementById('btn-ir-arriba');
    window.addEventListener("scroll",() => {
        if(window.scrollY > 100){
            scrollToBottomButtom.style.display = 'block';
        }else{
            scrollToBottomButtom.style.display = 'none';
        }
    })
    scrollToBottomButtom.addEventListener('click',() =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
})
