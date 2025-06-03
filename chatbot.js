 
document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const clearChatButton = document.getElementById('clear-chat');

    function addMessage(text, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', isUser ? 'user-message' : 'bot-message');
        messageDiv.textContent = text;
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    async function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;
        addMessage(message, true);
        userInput.value = '';

        const loadingDiv = document.createElement('div');
        loadingDiv.classList.add('message', 'bot-message');
        loadingDiv.innerHTML = '<div class="chatbot-loading-spinner"></div>';
        chatContainer.appendChild(loadingDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;

        try {
            const encodedPrompt = encodeURIComponent(message);
            const res = await fetch(`https://text.pollinations.ai/${encodedPrompt}`);
            const response = await res.text();
            chatContainer.removeChild(loadingDiv);
            addMessage(response, false);
        } catch {
            chatContainer.removeChild(loadingDiv);
            addMessage('Terjadi kesalahan. Coba lagi.', false);
        }
    }

    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    clearChatButton.addEventListener('click', () => {
        chatContainer.innerHTML = '<div class="message bot-message">Halo! Saya RIZQI O. Ada yang bisa saya bantu hari ini?</div>';
    });
});
