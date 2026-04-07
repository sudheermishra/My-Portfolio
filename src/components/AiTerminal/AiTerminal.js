import { useState, useRef, useEffect } from "react";
import styles from "./AiTerminal.module.css";

const responses = {
  skills:
    "⚡ Skills: React.js, Redux Toolkit, React Router, JavaScript ES6+, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, Git, Axios, Stripe, Vercel, Netlify.",
  projects:
    "📦 Projects:\n→ AI PDF Summarizer — LLM content analysis\n→ AI Image Gen — Generative AI product media\n→ LearnStackHub — Course platform with Stripe & JWT\n→ LinkAuth Portal — LinkedIn OAuth 2.0 integration",
  contact:
    "📬 Contact:\n→ Email: sudheermishra8587@gmail.com\n→ LinkedIn: linkedin.com/in/sudheer-mishra-b7302a258\n→ GitHub: github.com/sudheermishra",
  available:
    "✅ Yes! Sudheer is actively looking for Frontend / React Developer roles. Open to remote and onsite.",
  experience:
    "🏢 Experience:\n→ Web Development Internship @ Acadewise (Feb–Mar 2025)\n→ 1.5+ years self-taught React development",
  education:
    "🎓 Education:\n→ MCA — Bikaner Technical University (2023–2025)\n→ BCA — Shekhawati University (2019–2022)",
  about:
    "👤 Sudheer Mishra — Frontend Developer from Sikar, India. Skilled in the MERN stack with a strong focus on AI integration, having built deployed platforms using Llama-3.3 LLMs, secure JWT/OAuth, and Stripe payments.",
  help: `💡 Available commands:
  → skills      Tech skills & stack
  → projects    Projects I've built
  → experience  Work experience
  → education   Academic background
  → contact     Get in touch
  → about       About Sudheer
  → available   Hiring status
  → clear       Clear terminal`,
  clear: "__CLEAR__",
  default: "🤔 Command not found. Type 'help' to see available commands.",
};

const getResponse = (input) => {
  const text = input.toLowerCase().trim();
  if (text === "clear") return responses.clear;
  if (text === "help" || text === "?") return responses.help;
  if (text.includes("skill") || text.includes("tech") || text.includes("stack"))
    return responses.skills;
  if (text.includes("project") || text.includes("built"))
    return responses.projects;
  if (
    text.includes("contact") ||
    text.includes("email") ||
    text.includes("reach")
  )
    return responses.contact;
  if (
    text.includes("available") ||
    text.includes("hiring") ||
    text.includes("job")
  )
    return responses.available;
  if (
    text.includes("experience") ||
    text.includes("intern") ||
    text.includes("work")
  )
    return responses.experience;
  if (
    text.includes("education") ||
    text.includes("degree") ||
    text.includes("college")
  )
    return responses.education;
  if (
    text.includes("about") ||
    text.includes("who") ||
    text.includes("sudheer")
  )
    return responses.about;
  return responses.default;
};

const INITIAL_MESSAGES = [
  {
    type: "system",
    text: "Sudheer.exe initialized... Type 'help' to see commands.",
  },
];

function AiTerminal() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;
    setMessages((prev) => [...prev, { type: "user", text: trimmed }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      const reply = getResponse(trimmed);
      if (reply === "__CLEAR__") {
        setMessages(INITIAL_MESSAGES);
      } else {
        setMessages((prev) => [...prev, { type: "bot", text: reply }]);
      }
      setIsTyping(false);
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <section className={styles.terminalSection}>
      <h2>Ask About Me</h2>
      <hr />
      <p className={styles.subtitle}>
        Interact with my portfolio assistant — ask anything about my skills,
        projects, or availability.
      </p>

      {/* Terminal */}
      <div
        className={styles.terminal}
        onClick={() => inputRef.current?.focus()}>
        {/* Header bar */}
        <div className={styles.terminalHeader}>
          <span className={styles.dot} style={{ background: "#ff5f57" }} />
          <span className={styles.dot} style={{ background: "#febc2e" }} />
          <span className={styles.dot} style={{ background: "#28c840" }} />
          <span className={styles.terminalTitle}>sudheer@portfolio:~$</span>
        </div>

        {/* Messages */}
        <div className={styles.terminalBody} ref={terminalBodyRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`${styles.message} ${styles[msg.type]}`}>
              {msg.type === "user" && (
                <span className={styles.prompt}>sudheer@portfolio:~$ </span>
              )}
              {msg.type === "bot" && (
                <span className={styles.botPrompt}>→ </span>
              )}
              {msg.type === "system" && (
                <span className={styles.systemPrompt}>// </span>
              )}
              <span className={styles.messageText}>{msg.text}</span>
            </div>
          ))}
          {isTyping && (
            <div className={`${styles.message} ${styles.bot}`}>
              <span className={styles.botPrompt}>→ </span>
              <span className={styles.typingDots}>
                <span />
                <span />
                <span />
              </span>
            </div>
          )}
        </div>

        {/* Input row */}
        <div className={styles.inputRow}>
          <span className={styles.prompt}>sudheer@portfolio:~$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type a command..."
            className={styles.terminalInput}
            disabled={isTyping}
            autoComplete="off"
            spellCheck="false"
          />
          <button
            onClick={handleSubmit}
            className={styles.sendBtn}
            disabled={isTyping}>
            ↵
          </button>
        </div>
      </div>

      {/* Suggestion pills */}
      <div className={styles.suggestions}>
        {[
          "skills",
          "projects",
          "contact",
          "available?",
          "experience",
          "clear",
        ].map((s) => (
          <button
            key={s}
            className={styles.suggestionPill}
            onClick={() => {
              setInput(s);
              inputRef.current?.focus();
            }}>
            {s}
          </button>
        ))}
      </div>
    </section>
  );
}

export default AiTerminal;
