/* ========================================
   CodeAlpha AI Chatbot — chatbot.js
   Retrieval-Based Chatbot with Pattern
   Matching & Predefined Responses
   ======================================== */

// ---------- KNOWLEDGE BASE ----------
// Add more patterns & answers here anytime!
const knowledgeBase = [

  // --- Greetings ---
  {
    patterns: ["hello", "hi", "hey", "hiya", "howdy", "greetings", "sup", "what's up"],
    response: "👋 Hello! I'm <strong>CodeAlpha AI</strong>, your smart assistant. How can I help you today?"
  },

  // --- Identity ---
  {
    patterns: ["who are you", "what are you", "introduce yourself", "your name", "who made you"],
    response: "🤖 I'm <strong>CodeAlpha AI</strong> — an AI-powered chatbot built by <strong>CodeAlpha</strong> as part of their Cloud Computing internship project. I use pattern-matching to understand your questions and give helpful answers!"
  },

  // --- Capabilities ---
  {
    patterns: ["what can you do", "your features", "capabilities", "help me", "how can you help"],
    response: "💪 Here's what I can do:<br/><br/>• Answer general questions<br/>• Explain cloud computing concepts<br/>• Share fun tech facts<br/>• Help with basic coding questions<br/>• Have a friendly conversation!<br/><br/>Just type your question and I'll do my best! 😊"
  },

  // --- Cloud Computing ---
  {
    patterns: ["what is cloud computing", "cloud computing", "explain cloud", "define cloud"],
    response: "☁️ <strong>Cloud Computing</strong> is the delivery of computing services — like servers, storage, databases, networking, and software — over the internet.<br/><br/>Instead of having your own physical servers, you use resources provided by companies like <strong>AWS, Azure, or Google Cloud</strong>.<br/><br/><strong>Benefits:</strong> Flexible, scalable, cost-effective, and accessible from anywhere!"
  },
  {
    patterns: ["types of cloud", "cloud types", "public private hybrid"],
    response: "☁️ There are <strong>3 main types</strong> of cloud:<br/><br/>1️⃣ <strong>Public Cloud</strong> — shared infrastructure managed by providers (e.g., AWS, Azure).<br/>2️⃣ <strong>Private Cloud</strong> — dedicated infrastructure for a single organization.<br/>3️⃣ <strong>Hybrid Cloud</strong> — a mix of public and private cloud.<br/><br/>Each type has its own advantages based on your needs!"
  },
  {
    patterns: ["what is aws", "amazon web services", "aws"],
    response: "☁️ <strong>AWS (Amazon Web Services)</strong> is the world's largest cloud computing platform, run by Amazon.<br/><br/>It offers 200+ services including:<br/>• <strong>EC2</strong> — Virtual servers<br/>• <strong>S3</strong> — Storage<br/>• <strong>RDS</strong> — Databases<br/>• <strong>Lambda</strong> — Serverless computing<br/><br/>Used by companies like Netflix, Airbnb, and many more!"
  },
  {
    patterns: ["what is azure", "microsoft azure", "azure"],
    response: "☁️ <strong>Microsoft Azure</strong> is Microsoft's cloud computing platform.<br/><br/>Key features:<br/>• 200+ cloud services<br/>• Strong integration with Microsoft products (Office 365, Windows)<br/>• Popular for enterprise businesses<br/>• Supports AI and machine learning services<br/><br/>It's the second-largest cloud provider in the world!"
  },
  {
    patterns: ["what is gcp", "google cloud", "google cloud platform"],
    response: "☁️ <strong>Google Cloud Platform (GCP)</strong> is Google's cloud service.<br/><br/>Highlights:<br/>• Powered by Google's global network<br/>• Strong in AI & Machine Learning (TensorFlow, BigQuery)<br/>• Great for data analytics<br/>• Used by companies like Spotify, Twitter, and YouTube<br/><br/>It's known for being very fast and innovative!"
  },

  // --- AI / Chatbot ---
  {
    patterns: ["what is ai", "artificial intelligence", "explain ai"],
    response: "🤖 <strong>Artificial Intelligence (AI)</strong> is the ability of machines to simulate human thinking and learning.<br/><br/>Types of AI:<br/>• <strong>Narrow AI</strong> — does one specific task (like me! 😄)<br/>• <strong>General AI</strong> — can do anything a human can<br/>• <strong>Super AI</strong> — smarter than humans (still in theory)<br/><br/>AI powers chatbots, voice assistants, self-driving cars, and much more!"
  },
  {
    patterns: ["what is a chatbot", "how do chatbots work", "chatbot explain", "types of chatbot"],
    response: "🗣️ A <strong>Chatbot</strong> is a program that talks to humans automatically!<br/><br/><strong>2 main types:</strong><br/>1️⃣ <strong>Rule-Based</strong> — uses patterns & keywords (like me!)<br/>2️⃣ <strong>AI-Based</strong> — uses machine learning & NLP<br/><br/><strong>How I work:</strong><br/>You type a message → I match keywords → I pick the best answer → I reply! Simple but smart! 🧠"
  },
  {
    patterns: ["what is machine learning", "machine learning", "ml"],
    response: "🧠 <strong>Machine Learning (ML)</strong> is a branch of AI where computers <em>learn from data</em> without being directly programmed.<br/><br/>Example: A spam filter learns which emails are spam by looking at thousands of examples.<br/><br/><strong>Types:</strong><br/>• Supervised Learning<br/>• Unsupervised Learning<br/>• Reinforcement Learning<br/><br/>It's the backbone of modern AI!"
  },
  {
    patterns: ["what is nlp", "natural language processing"],
    response: "📝 <strong>NLP (Natural Language Processing)</strong> helps computers understand human language.<br/><br/>It's used in:<br/>• Chatbots & voice assistants<br/>• Translation tools (like Google Translate)<br/>• Sentiment analysis<br/>• Search engines<br/><br/>NLP bridges the gap between human communication and machine understanding!"
  },

  // --- Programming ---
  {
    patterns: ["what is python", "python language", "explain python"],
    response: "🐍 <strong>Python</strong> is one of the most popular programming languages today!<br/><br/><strong>Why people love it:</strong><br/>• Easy to read & learn<br/>• Used in AI, web development, data science<br/>• Huge community & libraries<br/>• Works on all platforms<br/><br/><strong>Popular libraries:</strong> NumPy, Pandas, TensorFlow, Flask, Django"
  },
  {
    patterns: ["what is javascript", "javascript", "js language"],
    response: "💻 <strong>JavaScript</strong> is the language of the web!<br/><br/>• Makes websites interactive<br/>• Runs in every browser<br/>• Used for front-end AND back-end (Node.js)<br/>• Powers apps like Facebook, Gmail, Netflix<br/><br/><strong>Popular frameworks:</strong> React, Angular, Vue.js, Express.js"
  },

  // --- Security ---
  {
    patterns: ["what is encryption", "encryption", "aes", "what is aes"],
    response: "🔐 <strong>Encryption</strong> is like a secret code that protects your data!<br/><br/><strong>AES-256</strong> is the strongest encryption standard used today:<br/>• Used by banks, governments & tech companies<br/>• 256-bit key = 2²⁵⁶ possible combinations<br/>• Nearly impossible to crack<br/><br/>It keeps your passwords, messages & files safe online! 🛡️"
  },
  {
    patterns: ["what is sql injection", "sql injection", "sql attack"],
    response: "⚠️ <strong>SQL Injection</strong> is a type of cyber attack where hackers insert malicious code into a database.<br/><br/><strong>How to prevent it:</strong><br/>• Use parameterized queries<br/>• Validate all user inputs<br/>• Use an ORM (like SQLAlchemy)<br/>• Encrypt sensitive data<br/><br/>It's one of the most common web vulnerabilities — always stay safe! 🔒"
  },
  {
    patterns: ["what is cybersecurity", "cybersecurity", "cyber security"],
    response: "🛡️ <strong>Cybersecurity</strong> is the practice of protecting computers, networks, and data from digital attacks.<br/><br/><strong>Common threats:</strong><br/>• Hacking & Phishing<br/>• Malware & Viruses<br/>• Ransomware<br/>• SQL Injection<br/><br/><strong>How to stay safe:</strong><br/>• Use strong passwords<br/>• Enable 2FA<br/>• Keep software updated<br/>• Be careful with links!"
  },

  // --- Fun Facts ---
  {
    patterns: ["fun fact", "tell me a fact", "interesting fact", "surprise me", "random fact"],
    response: "🤩 <strong>Fun Fact:</strong><br/><br/>The first computer bug was a <em>real bug</em>! 🐛<br/><br/>In 1947, engineers at Harvard found a moth stuck inside a computer relay. They taped it into their logbook and wrote: <em>'First actual case of bug being found.'</em><br/><br/>That's how the term <strong>'debugging'</strong> was born! 😄"
  },

  // --- Farewell ---
  {
    patterns: ["bye", "goodbye", "see you", "later", "take care", "exit", "quit"],
    response: "👋 Goodbye! Thanks for chatting with me. Have an amazing day! If you need anything, come back anytime. 😊✨"
  },

  // --- Thanks ---
  {
    patterns: ["thank", "thanks", "thank you", "ty", "appreciate"],
    response: "😊 You're welcome! Happy to help anytime. Feel free to ask me anything else!"
  },

  // --- Jokes ---
  {
    patterns: ["tell a joke", "joke", "make me laugh", "funny"],
    response: "😂 Here's one for you:<br/><br/>Why do programmers prefer dark mode?<br/><br/>...<br/><br/><strong>Because light attracts bugs! 🐛💻</strong><br/><br/>Hope that made you smile! 😄"
  },

  // --- CodeAlpha ---
  {
    patterns: ["what is codealpha", "codealpha", "code alpha", "about codealpha"],
    response: "🏢 <strong>CodeAlpha</strong> is a leading software development company focused on building <strong>scalable, secure, and efficient cloud solutions</strong>.<br/><br/>They offer internship programs where students get hands-on experience in:<br/>• Cloud Computing<br/>• Virtualization & Containerization<br/>• Serverless Computing<br/>• Cloud Security<br/><br/>🌐 Website: <a href='http://www.codealpha.tech' target='_blank'>www.codealpha.tech</a>"
  },

  // --- Internship ---
  {
    patterns: ["internship", "codealpha internship", "internship tasks", "cloud internship"],
    response: "🎓 <strong>CodeAlpha Cloud Computing Internship</strong> includes these tasks:<br/><br/>1️⃣ Data Redundancy Removal System<br/>2️⃣ Detecting Data Leaks Using SQL Injection<br/>3️⃣ Cloud-Based Bus Pass System<br/>4️⃣ Making a Chatbot (that's me! 😄)<br/><br/><strong>Perks:</strong> Offer letter, certificates, recommendation letter & job support!"
  },

  // --- Serverless ---
  {
    patterns: ["what is serverless", "serverless computing", "serverless"],
    response: "⚡ <strong>Serverless Computing</strong> lets you run code <em>without</em> managing servers!<br/><br/>How it works:<br/>• You write code → the cloud runs it for you<br/>• You only pay for what you use<br/>• Auto-scales based on demand<br/><br/><strong>Examples:</strong> AWS Lambda, Azure Functions, Google Cloud Functions<br/><br/>It's faster, cheaper & easier to build with! 🚀"
  },

  // --- Docker / Containers ---
  {
    patterns: ["what is docker", "docker", "container", "containerization"],
    response: "📦 <strong>Docker</strong> is a platform for <strong>containerization</strong> — packaging apps so they run the same everywhere!<br/><br/><strong>Why use Docker?</strong><br/>• No more 'it works on my machine' problems<br/>• Lightweight & fast<br/>• Easy to deploy apps<br/>• Works with cloud platforms<br/><br/><strong>Key terms:</strong> Image, Container, Dockerfile, Docker Hub 🐋"
  },

  // --- Fallback (default response) ---
];

// ---------- FALLBACK RESPONSE ----------
const fallbackResponse = "🤔 Hmm, I'm not sure I understand that. Try asking me about:<br/><br/>• ☁️ Cloud computing, AWS, Azure, GCP<br/>• 🤖 AI, Chatbots, Machine Learning<br/>• 💻 Python, JavaScript<br/>• 🔐 Encryption, Cybersecurity<br/>• 😂 A joke or a fun fact<br/><br/>Just type something and I'll do my best! 😊";

// ---------- UTILITY: get current time ----------
function getTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// ---------- ADD MESSAGE TO DOM ----------
function addMessage(text, sender) {
  const welcomeCard = document.getElementById('welcomeCard');
  if (welcomeCard) welcomeCard.style.display = 'none';

  const messagesBox = document.getElementById('messagesBox');

  const msg = document.createElement('div');
  msg.className = `msg ${sender}`;

  const avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.textContent = sender === 'bot' ? '◈' : '👤';

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  bubble.innerHTML = `${text}<span class="msg-time">${getTime()}</span>`;

  msg.appendChild(avatar);
  msg.appendChild(bubble);
  messagesBox.appendChild(msg);

  // Scroll to bottom
  messagesBox.parentElement.scrollTop = messagesBox.parentElement.scrollHeight;

  return bubble;
}

// ---------- SHOW TYPING INDICATOR ----------
function showTyping() {
  const messagesBox = document.getElementById('messagesBox');
  const welcomeCard = document.getElementById('welcomeCard');
  if (welcomeCard) welcomeCard.style.display = 'none';

  const msg = document.createElement('div');
  msg.className = 'msg bot';
  msg.id = 'typingMsg';

  const avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.textContent = '◈';

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  bubble.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';

  msg.appendChild(avatar);
  msg.appendChild(bubble);
  messagesBox.appendChild(msg);
  messagesBox.parentElement.scrollTop = messagesBox.parentElement.scrollHeight;
}

function removeTyping() {
  const typing = document.getElementById('typingMsg');
  if (typing) typing.remove();
}

// ---------- PATTERN MATCHING ENGINE ----------
function getBotResponse(userText) {
  const input = userText.toLowerCase().trim();

  for (const item of knowledgeBase) {
    for (const pattern of item.patterns) {
      if (input.includes(pattern)) {
        return item.response;
      }
    }
  }
  return fallbackResponse;   // nothing matched → fallback
}

// ---------- SEND MESSAGE ----------
function sendMessage() {
  const inputEl = document.getElementById('userInput');
  const text = inputEl.value.trim();
  if (!text) return;

  // Show user message
  addMessage(text, 'user');
  inputEl.value = '';

  // Show typing dots
  showTyping();

  // Simulate thinking delay (800–1400 ms)
  const delay = 800 + Math.random() * 600;

  setTimeout(() => {
    removeTyping();
    const reply = getBotResponse(text);
    addMessage(reply, 'bot');
  }, delay);
}

// ---------- HANDLE ENTER KEY ----------
function handleKey(event) {
  if (event.key === 'Enter') sendMessage();
}

// ---------- QUICK PROMPT BUTTONS ----------
function quickPrompt(btn) {
  const inputEl = document.getElementById('userInput');
  inputEl.value = btn.textContent.replace(/^[^\s]*\s/, ''); // remove emoji
  sendMessage();
}

// ---------- ON PAGE LOAD: Greet after 1s ----------
window.addEventListener('load', () => {
  setTimeout(() => {
    addMessage("👋 Hi there! I'm <strong>CodeAlpha AI</strong>. Ask me anything — or tap one of the buttons above to get started!", 'bot');
  }, 1000);
});
