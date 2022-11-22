const createContact = () => {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📞 +258 86 269 0429';

    const address = document.createElement('p')
    address.textContent = '🏠 Maputo, Matola, MZ';

    const restaurantLocation = document.createElement('img');
    restaurantLocation.src = 'imgs/localizacao.png';
    restaurantLocation.alt = 'PizzaHouse Restaurant location';

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(restaurantLocation);

    return contact
}

const loadContact = () => {
    const main = document.querySelector('#main');
    main.innerHTML = '';
    main.appendChild(createContact());
}

export default loadContact;