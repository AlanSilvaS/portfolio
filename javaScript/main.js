const voltar = document.querySelector('.voltar')

function voltarTopo(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
}

voltar.addEventListener('click', function(event){
    voltarTopo(event);
})

function onClickMenu(){
    document.getElementById('menuH').classList.toggle('change');
    document.getElementById('nav').classList.toggle('change');
    document.getElementById('menu-bg').classList.toggle('change-bg');
    
}

function onClickBody(){
   
}