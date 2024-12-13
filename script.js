const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

// 渲染联系人列表
function renderContacts() {
  const contactsList = document.getElementById("contactsList");
  contactsList.innerHTML = contacts.map((contact, index) => `
    <div class="contact">
      <p>${contact.name} - ${contact.phone}</p>
      <a href="https://wa.me/${contact.phone}" target="_blank">WhatsApp</a>
      <button onclick="deleteContact(${index})">删除</button>
    </div>
  `).join("");
}

// 添加联系人
document.getElementById("addContact").addEventListener("click", () => {
  const name = prompt("输入联系人姓名：");
  const phone = prompt("输入联系人电话：");
  if (name && phone) {
    contacts.push({ name, phone });
    localStorage.setItem("contacts", JSON.stringify(contacts));
    renderContacts();
  }
});

// 删除联系人
function deleteContact(index) {
  contacts.splice(index, 1);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  renderContacts();
}

// 设置提醒功能（可选）
function setReminder(contact, days) {
  const reminderDate = new Date();
  reminderDate.setDate(reminderDate.getDate() + days);
  alert(`已为 ${contact.name} 设置提醒！将在 ${reminderDate.toLocaleDateString()} 提醒您。`);
}

renderContacts();
