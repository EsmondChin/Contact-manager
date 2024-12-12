document.addEventListener("DOMContentLoaded", () => {
    const contactContainer = document.querySelector("#contact-container");

    if (contactContainer) {
        const contacts = [
            { name: "John Doe", email: "john@example.com" },
            { name: "Jane Smith", email: "jane@example.com" }
        ];

        const list = document.createElement("ul");

        contacts.forEach(contact => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${contact.name}</strong><br>${contact.email}`;
            list.appendChild(listItem);
        });

        contactContainer.appendChild(list);
    } else {
        console.warn("Contact container not found.");
    }

    // Safe storage testing
    try {
        localStorage.setItem("testKey", "testValue");
        console.log("Storage test successful:", localStorage.getItem("testKey"));
    } catch (error) {
        console.error("Storage access error:", error.message);
    }
});
