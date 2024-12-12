// Ensure the script does not crash in restricted environments
document.addEventListener('DOMContentLoaded', () => {
  try {
    // Safely check localStorage support
    if (typeof localStorage === 'undefined' || !window.localStorage) {
      console.warn('LocalStorage is not supported or is blocked.');
      return;
    }

    // Default contact data
    const defaultContacts = [
      { name: 'John Doe', email: 'john@example.com' },
      { name: 'Jane Doe', email: 'jane@example.com' }
    ];

    // Fetch stored contacts or use defaults
    const getContacts = () => {
      try {
        const contacts = localStorage.getItem('contacts');
        return contacts ? JSON.parse(contacts) : defaultContacts;
      } catch (error) {
        console.error('Error reading contacts from localStorage:', error);
        return defaultContacts;
      }
    };

    // Save contacts to localStorage
    const saveContacts = (contacts) => {
      try {
        localStorage.setItem('contacts', JSON.stringify(contacts));
      } catch (error) {
        console.error('Error saving contacts to localStorage:', error);
      }
    };

    // Render contacts in the DOM
    const renderContacts = (contacts) => {
      const container = document.getElementById('contacts');
      container.innerHTML = '';
      contacts.forEach(contact => {
        const contactEl = document.createElement('div');
        contactEl.textContent = `${contact.name} - ${contact.email}`;
        contactEl.style.margin = '0.5em 0';
        container.appendChild(contactEl);
      });
    };

    // Initialize app
    const contacts = getContacts();
    renderContacts(contacts);

    // Example: Add a new contact and save
    const newContact = { name: 'Alice Smith', email: 'alice@example.com' };
    contacts.push(newContact);
    saveContacts(contacts);
  } catch (error) {
    console.error('Error initializing the app:', error);
  }
});
