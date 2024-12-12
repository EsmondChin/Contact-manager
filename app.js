document.addEventListener("DOMContentLoaded", () => {
    // 获取容器
    const contactContainer = document.querySelector("#contact-container");

    // 如果容器存在，则动态加载内容
    if (contactContainer) {
        const contacts = [
            { name: "John Doe", email: "john@example.com" },
            { name: "Jane Smith", email: "jane@example.com" }
        ];

        const list = document.createElement("ul");
        list.style.listStyleType = "none";
        list.style.padding = "0";

        contacts.forEach(contact => {
            const listItem = document.createElement("li");
            listItem.style.padding = "10px";
            listItem.style.borderBottom = "1px solid #ddd";
            listItem.innerHTML = `<strong>${contact.name}</strong><br>${contact.email}`;
            list.appendChild(listItem);
        });

        contactContainer.appendChild(list);
    } else {
        console.error("Contact container not found.");
    }

    // 检查 LocalStorage 访问是否正常
    try {
        localStorage.setItem("testKey", "testValue");
        console.log("Storage test successful:", localStorage.getItem("testKey"));
    } catch (error) {
        console.error("Storage access error:", error.message);
    }
});
