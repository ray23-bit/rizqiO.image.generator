 document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const clearChatButton = document.getElementById('clear-chat');

    function addMessage(text, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', isUser ? 'user-message' : 'bot-message');
        
        if (!isUser) {
            const { emoji, message } = addEmojiToResponse(text);
            messageDiv.textContent = message;
            messageDiv.setAttribute('data-emoji', emoji);
        } else {
            messageDiv.textContent = text;
        }
        
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function addEmojiToResponse(text) {
        const lowerText = text.toLowerCase();
        const lastUserMessage = getLastUserMessage();
        let emoji = '💡';
        
        // Prioritize context from user message
        if (lastUserMessage) {
            const lowerUserMessage = lastUserMessage.toLowerCase();
            
            if (/(lucu|haha|wkwk|ngakak|ketawa|tertawa|joke|jokes)/.test(lowerUserMessage)) {
                if (/(lucu|haha|wkwk|ngakak)/.test(lowerText)) {
                    emoji = randomChoice(['🤣', '😂', '😆']);
                }
            }
            
            if (/(sedih|duka|susah|kecewa|menyesal)/.test(lowerUserMessage)) {
                emoji = '😢';
            }
            
            if (/(marah|jengkel|kesal|benci)/.test(lowerUserMessage)) {
                emoji = '😠';
            }
        }

        // Fallback to content-based emoji
        if (emoji === '💡') {
            if (/(hi|hai|halo|hello|selamat)/i.test(lowerText)) {
                emoji = '👋';
            } else if (/(terima kasih|thanks|thank you|makasih)/i.test(lowerText)) {
                emoji = '🙏';
            } else if (/(senang|happy|gembira|baik|asyik|mantap)/i.test(lowerText)) {
                emoji = randomChoice(['😊', '😄', '👍']);
            } else if (/(sedih|duka|susah|maaf|menyesal)/i.test(lowerText)) {
                emoji = '😢';
            } else if (/(tanya|bertanya|bantu|help|bingung)/i.test(lowerText)) {
                emoji = '🤔';
            } else if (/(error|salah|gagal|tidak bekerja)/i.test(lowerText)) {
                emoji = '❌';
            } else if (/(berhasil|sukses|selesai|done)/i.test(lowerText)) {
                emoji = '✅';
            } else if (/(info|informasi|penjelasan|detail)/i.test(lowerText)) {
                emoji = 'ℹ️';
            } else if (/(bye|selamat tinggal|sampai jumpa)/i.test(lowerText)) {
                emoji = '👋';
            } else if (/(lucu|haha|wkwk|ngakak|ketawa|tertawa)/i.test(lowerText)) {
                emoji = randomChoice(['😂', '🤣', '😆']);
            } else if (/(love|suka|sayang|rindu)/i.test(lowerText)) {
                emoji = '❤️';
            } else if (/(keren|bagus|mantap|wow)/i.test(lowerText)) {
                emoji = '👏';
            }
        }

        return { emoji, message: emoji + ' ' + text };
    }

    function getLastUserMessage() {
        const messages = chatContainer.querySelectorAll('.user-message');
        return messages.length > 0 ? messages[messages.length-1].textContent : null;
    }

    function randomChoice(choices) {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    async function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;
        addMessage(message, true);
        userInput.value = '';

        const loadingDiv = document.createElement('div');
        loadingDiv.classList.add('message', 'bot-message');
        loadingDiv.innerHTML = '<div class="chatbot-loading-spinner">⏳</div>';
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
            addMessage('😱 Terjadi kesalahan. Coba lagi.', false);
        }
    }

    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    clearChatButton.addEventListener('click', () => {
        chatContainer.innerHTML = '<div class="message bot-message" data-emoji="👋">👋 Halo! Saya RIZQI O. Ada yang bisa saya bantu hari ini?</div>';
    });
});
