let contacts = [];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add-contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        addContact(name, phone);
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
    });

    document.getElementById('search-bar').addEventListener('input', function(event) {
        const query = event.target.value.toLowerCase();
        renderContacts(contacts.filter(contact => contact.name.toLowerCase().includes(query)));
    });
});

function addContact(name, phone) {
    contacts.push({ name, phone });
    renderContacts(contacts);
}

function renderContacts(filteredContacts) {
    const list = document.getElementById('contact-list');
    list.innerHTML = '';
    filteredContacts.forEach(contact => {
        const li = document.createElement('li');
        li.textContent = `${contact.name} - ${contact.phone}`;
        list.appendChild(li);
    });
}
