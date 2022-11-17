var sidebarToggle = document.getElementById('sidebar-toggle');
var sidebar = document.getElementById('sidebar');
var main = document.getElementById('main');
var opened = false;

sidebarToggle.onclick = function () {
    if (!opened) {

        sidebarToggle.classList.add ('open');
        sidebar.classList.add ('open');
        main.classList.add  ('open');
        opened = true;

    }
    else {
        sidebarToggle.classList.remove  ('open');
        sidebar.classList.remove ('open');
        main.classList.remove  ('open');
        opened = false;

    }
    
}
