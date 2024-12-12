document.addEventListener("DOMContentLoaded", () => {
  try {
    const contacts = [
      { name: "张三", email: "zhangsan@example.com" },
      { name: "李四", email: "lisi@example.com" },
    ];

    const contactsContainer = document.getElementById("contacts");

    if (contactsContainer) {
      contacts.forEach(contact => {
        const contactElement = document.createElement("div");
        contactElement.classList.add("contact");
        contactElement.innerHTML = `<strong>${contact.name}</strong> - ${contact.email}`;
        contactsContainer.appendChild(contactElement);
      });
    }

    // 测试存储访问（如果需要用到存储）
    if (window.localStorage) {
      localStorage.setItem('test', 'testValue');
      console.log('存储测试成功:', localStorage.getItem('test'));
      localStorage.removeItem('test');
    } else {
      console.warn('浏览器不支持localStorage或被限制。');
    }
  } catch (error) {
    console.error('加载联系人时发生错误:', error);
  }
});
