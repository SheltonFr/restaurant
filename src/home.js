function creatHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const chefImg = document.createElement('img');
    chefImg.src = "imgs/chef.png";
    chefImg.alt = "Chef";

    home.appendChild(createParagraph('Best Pizza in your country'));
    home.appendChild(createParagraph('Made with passion since 1900'));
    home.appendChild(chefImg);
    home.appendChild(createParagraph('Order online or visit us!'));

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement('p');

    paragraph.textContent = text;
    return paragraph;
}

function loadHome () {
    const main = document.querySelector('#main');
    main.innerHTML = '';
    main.appendChild(creatHome());
}

export default loadHome;