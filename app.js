// Safely manage contact data
document.addEventListener("DOMContentLoaded", () => {
  const contacts = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Doe", email: "jane@example.com" },
  ];

  const contactsContainer = document.getElementById("contacts");

  // Dynamically load contact list
  if (contactsContainer) {
    contacts.forEach((contact) => {
      const contactElement = document.createElement("div");
      contactElement.classList.add("contact");
      contactElement.innerHTML = `<strong>${contact.name}</strong> - ${contact.email}`;
      contactsContainer.appendChild(contactElement);
    });
  }
});
