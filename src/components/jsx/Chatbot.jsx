import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';


export default function Chatbot() {
  const [step, setStep] = useState("start");
  const [message, setMessage] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para el tema
  const [isOpen, setIsOpen] = useState(true); // Estado para controlar si el chatbot está abierto


  useEffect(() => {
    // Cambiar el tema en el body
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]); // Cuando el tema cambia, aplicamos la clase

  const handleOption = (option) => {
    if (option === "idea") {
      setStep("contacto");
    } else if (option === "cv") {
      window.open("/avr/pdf/CV.pdf", "_blank"); // Ajusta la URL del CV
    } else if (option === "colaborar") {
      setStep("colaborar");
    }
  };

  const handleSend = async () => {
    if (!message.trim()) {
      alert('Por favor escribe un mensaje antes de enviar.');
      return;
    }
    try {
      await emailjs.send(
        'service_xgt9a1g',    // reemplaza esto
        'template_z5s6ugr',   // reemplaza esto
        { message: message }, // mensaje que escribe el usuario
        'CZeEsyiC9TJS-jI09'     // reemplaza esto
      );
  
      alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto. 🚀');
      setMessage('');
      setStep('start');
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      alert('Ocurrió un error al enviar el mensaje. Intenta de nuevo.');
    }
  };


  return (
    <div
      className="w-full lg:w-1/2 bg-[var(--backgroundCards)] p-8 rounded-2xl shadow-xl"
      style={styles.chatbotContainer}
    >
      <div style={styles.chatHeader}>
        <div className="px-6 py-6 mr-2 bg-[var(--chat-primary)] rounded-full"></div>
        <div style={styles.labelChat}>Chat</div>
        
      </div>
      <div style={styles.chatBubble}>
        {step === "start" && (
          <div className="grid gap-2">
            <p className="text-start" style={styles.messageChatbot}>
              ¡Hola! Soy el asistente virtual de Antonia. ¿Cómo te puedo ayudar hoy?
            </p>
            <button style={styles.button} onClick={() => handleOption("idea")}>
              Tengo una idea en mente 💡
            </button>
            <button style={styles.button} onClick={() => handleOption("cv")}>
              Quiero descargar tu CV 🧾
            </button>
            <button style={styles.button} onClick={() => handleOption("colaborar")}>
              Quiero colaborar contigo 🫱🏻‍🫲🏽
            </button>
          </div>
        )}

        {step === "contacto" && (
          <>
            <p className="text-start" style={styles.messageChatbot}>¡Cuéntame tu idea! 💬 y no olvides poner tus datos de contacto 📩 .</p>
            <textarea
              style={styles.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe tu mensaje aquí..."
            />
            <div className="grid gap-2">
              <button style={styles.button} onClick={handleSend}>
                Enviar
              </button>
              {/* Botón para regresar al inicio */}
              <button
                style={styles.buttonBack}
                onClick={() => setStep("start")}
              >
                ← Volver
              </button>
            </div>
          </>
        )}

        {step === "colaborar" && (
          <>
            <p style={styles.messageChatbot}>¡Genial! ¿Cómo prefieres contactarme?</p>
            <div className="grid gap-2">
              <a
                href="https://www.linkedin.com/in/antonia-valdivieso-r/"
                target="_blank"
                style={styles.button}
              >
                LinkedIn
              </a>
              <a href="mailto:valdivieso.ant@gmail.com" style={styles.button}>
                Correo
              </a>
              <a
                href="https://calendly.com/valdivieso-ant"
                target="_blank"
                style={styles.button}
              >
                Agendar Reunión
              </a>
              {/* Botón para regresar al inicio */}
              <button
                style={styles.buttonBack}
                onClick={() => setStep("start")}
              >
                ← Volver
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  chatHeader: {
    display: "inline-flex",
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
    marginBottom: "15px",
  },
  labelChat: {
    color: "var(--primary)",
    fontWeight: "bold",
  },
  chatbotContainer: {
    width: "300px",
    padding: "20px",
    borderRadius: "30px",
    boxShadow: "var(--shadowBox);",
    fontFamily: "Inter, sans-serif",
    zIndex: 1000,
    animation: "popIn 4s ease",
    transformOrigin: "bottom right",
  },
  chatBubble: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  messageChatbot: {
    backgroundColor: "var(--chat-primary)",
    color: "var(--chat-message)",
    padding: "15px",
    fontSize: "12px",
    borderRadius: "20px",
    width: "fit-content",
  },
  button: {
    backgroundColor: "var(--secondary)", // Usamos la variable del color primario
    color: "var(--textContrast)", // Usamos el color de texto en contraste
    fontSize: "10px",
    border: "none",
    padding: "12px",
    borderRadius: "calc(infinity * 1px)",
    marginBottom: "2px",
    cursor: "pointer",
    textAlign: "center",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
  },
  buttonBack: {
    backgroundColor: "var(--primary)", // Usamos el color de acento para el botón de "volver"
    color: "var(--textContrast)",
    border: "none",
    fontSize: "10px",
    padding: "10px",
    borderRadius: "calc(infinity * 1px)",
    cursor: "pointer",
    textAlign: "center",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
  },
  textarea: {
    width: "100%",
    height: "40px",
    borderRadius: "10px",
    padding: "10px",
    resize: "none",
    fontSize: "10px",
  },
};
