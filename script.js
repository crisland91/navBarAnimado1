var btnMenu = document.getElementById('btnMenu');
var container = document.getElementById('container');
var menu = document.getElementById('menu');
var btnCerrarMenu = document.getElementById('menu_btnMenu');

// btnCerrarMenu.style.display = 'none';

btnMenu.onclick = function(){
    // alert('Click al menu');
    //container.style.display = 'none';
    // menu.classList.remove('menu_invisible');
    // menu.classList.add('menu_visible');

    // menu.classList.remove('menu_invisible', 'animate__fadeOut');
    // menu.classList.add('menu_visible', 'animate__fadeIn');
    


    /**********************/
    menu.classList.remove('menu_invisible', 'fadeOut');
    menu.classList.add('menu_visible','fadeIn');
}

btnCerrarMenu.onclick = function(){
    //container.style.display = 'grid';
    // menu.classList.remove('menu_visible', 'animate__fadeIn');
    // menu.classList.add('menu_invisible', 'animate__fadeOut');

    // menu.classList.remove('menu_visible');
    // menu.classList.add('menu_invisible');

    menu.classList.remove('menu_visible', 'fadeIn');
    menu.classList.add('menu_invisible','fadeOut');

}


