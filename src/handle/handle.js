export const closeMenuMain = (e) => {
    e.preventDefault();
    document.querySelector('.navbarMain').style='display:none;';
    document.querySelector('.navbarSub').style='display:block;';
    document.querySelector('.leftMenu').style='width:4%;';
    document.querySelector('.rightContainer').style='width:96%;';
}
export const openMenuMain = (e) => {
    e.preventDefault();
    document.querySelector('.navbarMain').style='display:block;';
    document.querySelector('.navbarSub').style='display:none;';
    document.querySelector('.leftMenu').style='width:20%;';
    document.querySelector('.rightContainer').style='width:80%;';
} 