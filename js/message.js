// 获取留言列表
const messages = JSON.parse(localStorage.getItem('messages')) || [];

// 渲染留言列表
function renderMessages() {
  const messagesContainer = document.getElementById('messages-container');
  messagesContainer.innerHTML = '';

  messages.forEach(message => {
    const messageEl = document.createElement('div');
    messageEl.className = 'message';
    messageEl.innerHTML = `
      <h3>${message.name}</h3>
      <p>${message.content}</p>
      <small>${new Date(message.timestamp).toLocaleString()}</small>
    `;
    messagesContainer.appendChild(messageEl);
  });
}

// 提交留言
function submitMessage() {
  const nameInput = document.getElementById('name-input');
  const contentInput = document.getElementById('content-input');

  const message = {
    name: nameInput.value,
    content: contentInput.value,
    timestamp: Date.now(),
  };
  messages.push(message);
  localStorage.setItem('messages', JSON.stringify(messages));
  renderMessages();
  
  nameInput.value = '';
  contentInput.value = '';
}

// 绑定事件
const form = document.getElementById('message-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  submitMessage();
});

// 初始化
renderMessages();

// ================================

// 删除留言
function deleteMessage(index) {
  messages.splice(index, 1);
  localStorage.setItem('messages', JSON.stringify(messages));
  renderMessages();
}

// 绑定删除按钮事件
function bindDeleteButtons() {
  const deleteButtons = document.querySelectorAll('.delete-button');
  deleteButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      deleteMessage(index);
    });
  });
}

// 渲染留言列表
function renderMessages() {
  const messagesContainer = document.getElementById('messages-container');
  messagesContainer.innerHTML = '';

  messages.forEach((message, index) => {
    const messageEl = document.createElement('div');
    messageEl.className = 'message';
    messageEl.innerHTML = `
      <h3>${message.name}</h3>
      <p>${message.content}</p>
      <small>${new Date(message.timestamp).toLocaleString()}</small>
      <button class="delete-button">删除</button>
    `;
    messagesContainer.appendChild(messageEl);
  });

  bindDeleteButtons();
}