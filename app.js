// 动态生成联系人信息
document.addEventListener("DOMContentLoaded", () => {
  const contacts = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Doe", email: "jane@example.com" },
  ];

  const contactsContainer = document.getElementById("contacts");

  contacts.forEach(contact => {
    const contactCard = document.createElement("div");
    contactCard.className = "contact-card";

    const contactInfo = `
      <strong>${contact.name}</strong> - <a href="mailto:${contact.email}">${contact.email}</a>
    `;

    contactCard.innerHTML = contactInfo;
    contactsContainer.appendChild(contactCard);
  });
});
