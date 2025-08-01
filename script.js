const menu = document.getElementById('profiles');
const sidebarActivity = document.querySelector('.sidebar-activity')
const showMoreLink = document.getElementById('show-more-link')

const profilemenu = () =>{
    menu.classList.toggle("open-menu");
}
// function profilemenu(){
//     menu.classList.toggle("open-menu")
// }

function showMore(){
    sidebarActivity.classList.toggle('open-sidebar-activity')

    if(sidebarActivity.classList.contains('open-sidebar-activity')){
        showMoreLink.innerHTML="Show less.. <b>+</b>"
    }
}

// const  showMore = () =>{
//     sidebarActivity.classList.toggle('open-sidebar-activity')
// }