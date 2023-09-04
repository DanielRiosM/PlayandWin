var tabs = document.querySelectorAll(".lboard_tabs ul li");
var top = document.querySelector(".top");
var today = document.querySelector(".today");
var items = document.querySelectorAll(".lboard_item");

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

tabs.forEach(function(tab){
	tab.addEventListener("click", function(){
		var currenttab = tab.getAttribute("data-li");
		
		tabs.forEach(function(tab){
			tab.classList.remove("active");
		})

		tab.classList.add("active");

		items.forEach(function(item){
			item.style.display = "none";
		})

		if(currenttab == "top"){
			top.style.display = "block";
		}
		else{
			today.style.display = "block";
		}

	})
})
