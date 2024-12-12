document.addEventListener("DOMContentLoaded", function() {
    const contactList = document.getElementById("contact-list");

    // 示例联系人数据
    const contacts = [
        { name: "John Doe", phone: "+1234567890" },
        { name: "Jane Smith", phone: "+9876543210" }
    ];

    // 动态加载联系人
    contacts.forEach(contact => {
        const li = document.createElement("li");
        li.textContent = `${contact.name} - ${contact.phone}`;
        contactList.appendChild(li);
    });
});
