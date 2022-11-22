const createMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        createMenuItem(
            "Disgustoso",
            "Tomato sauce, Bacon, Pineapple, Olives, Basil"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Disgustoso",
            "Tomato sauce, Bacon, Pineapple, Olives, Basil"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Disgustoso",
            "Tomato sauce, Bacon, Pineapple, Olives, Basil"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Disgustoso",
            "Tomato sauce, Bacon, Pineapple, Olives, Basil"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Disgustoso",
            "Tomato sauce, Bacon, Pineapple, Olives, Basil"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Disgustoso",
            "Tomato sauce, Bacon, Pineapple, Olives, Basil"
        )
    );

    return menu;
}

const createMenuItem = (name, desciption) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodName = document.createElement('h2');
    foodName.textContent = name;

    const foodDescription = document.createElement('p');
    foodDescription.textContent = desciption;

    const foodImage = document.createElement('img');
    foodImage.src = `imgs/pizzas/${name.toLowerCase()}.png`;
    foodImage.alt - `${name}`;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

const loadMenu = () => {
    const main = document.querySelector('#main');
    main.innerHTML = ''
    main.appendChild(createMenu());
}

export default loadMenu;