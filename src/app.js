import loadHome from "./home";

const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = 'PizzaHouse';


    header.appendChild(restaurantName);
    header.appendChild(createNav());


    return header;

}

// crua a navbar
const createNav = () => {
    const nav = document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('button-nav');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', () => {
        if (homeButton.classList.contains('active')) return;
        setActiveButton(homeButton);
        loadHome();
    });


    const menuButton = document.createElement('button');
    menuButton.classList.add('button-nav');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', () => {
        if (menuButton.classList.contains('active')) return;
        setActiveButton(menuButton);
    });


    const contactButton = document.createElement('button');
    contactButton.classList.add('button-nav');
    contactButton.textContent = 'Home';
    contactButton.addEventListener('click', () => {
        if (contactButton.classList.contains('active')) return;
        setActiveButton(contactButton);
    });



    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}


// adicionar a classe para o botao activo
const setActiveButton = (button) => {
    const buttons = document.querySelectorAll('.button-nav');

    buttons.forEach(element => {
        if (element !== button) {
            element.classList.remove('active');
        }
    });

    button.classList.add('active');
}



// MAIN

const createMain = () => {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}


const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyright = document.createElement('p');
    copyright.textContent = `Copyright ©️ ${new Date().getFullYear()} Shelton Francisco`;

    const githubLink = document.createElement('a');
    githubLink.href = `https://github.com/sheltonfr/`;
    githubLink.target = '_blank';

    const githubIcon = document.createElement("i");
    githubIcon.setAttribute('class', 'fab fa-github');


    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);
    return footer;
    
}

function initApp() {
    const content = document.querySelector('.content');
    

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

}


export default initApp;