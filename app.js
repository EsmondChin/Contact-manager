// 检测 localStorage 是否可用
function isLocalStorageAvailable() {
    try {
        const testKey = "__test__";
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
}

// 初始化联系人数据
let contactData = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Doe", email: "jane@example.com" }
];

// 如果 localStorage 可用，从中加载数据；否则使用默认数据
if (isLocalStorageAvailable()) {
    const storedData = localStorage.getItem("contacts");
    if (storedData) {
        contactData = JSON.parse(storedData);
    } else {
        localStorage.setItem("contacts", JSON.stringify(contactData));
    }
} else {
    console.warn("LocalStorage 不可用，使用内存数据");
}

// 渲染联系人到页面
const container = document.getElementById("contact-container");
if (container) {
    contactData.forEach(contact => {
        const contactElement = document.createElement("div");
        contactElement.textContent = `${contact.name} - ${contact.email}`;
        container.appendChild(contactElement);
    });
} else {
    console.error("未找到 contact-container 元素");
}

// 动态添加联系人功能（扩展功能）
function addContact(name, email) {
    const newContact = { name, email };
    contactData.push(newContact);

    if (isLocalStorageAvailable()) {
        localStorage.setItem("contacts", JSON.stringify(contactData));
    }

    const contactElement = document.createElement("div");
    contactElement.textContent = `${name} - ${email}`;
    container.appendChild(contactElement);
}
