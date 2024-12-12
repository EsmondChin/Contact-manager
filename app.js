// Sample contacts data
const contacts = [
  { name: "John Doe", email: "john@example.com" },
  { name: "Jane Doe", email: "jane@example.com" },
];

// Function to render contacts safely
function renderContacts() {
  const contactList = document.getElementById("contact-list");
  if (!contactList) {
    console.error("Contact list element not found.");
    return;
  }

  contactList.innerHTML = ""; // Clear existing content

  contacts.forEach((contact) => {
    const contactItem = document.createElement("div");
    contactItem.className = "contact-item";
    contactItem.innerHTML = `<strong>${contact.name}</strong> - ${contact.email}`;
    contactList.appendChild(contactItem);
  });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  renderContacts();
});
