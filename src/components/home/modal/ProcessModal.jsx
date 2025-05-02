import { useState } from "react";



const steps = [
  {
    title: "Conversar",
    video: "/video/modal/conversar.png",
    description: "Hablo con el cliente para entender sus necesidades y metas.",
  },
  {
    title: "Dibujar",
    video: "",
    description: "Proceso paralelo a reunirnos, realizo bocetos e ideas visuales para comenzar el diseño.",
  },
  {
    title: "Maquetar",
    video: "",
    description: "Creo un MVP en base al diseño elegido.",
  },
  {
    title: "Testear",
    video: "",
    description: "Validamos el diseño con pruebas y retroalimentación.",
  },
  {
    title: "Iteración",
    video: "",
    description: "Comenzamos el ciclo denuevo hasta lograr la visión al 100%.",
  },
];

export default function ProcessModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Cierra el modal al terminar
      setIsOpen(false);
      setCurrentStep(0); // reinicia para la próxima vez
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentStep(0);
  };


  return (
    
    <div className="flex justify-start">
      <button
      className="shadow-[var(--shadowBox)] w-72 bg-[var(--primary)] text-[var(--textContrast)] font-cal-sans tracking-widest p-[20px] text-xs rounded-[30px] cursor-pointer"
        
        onClick={() => setIsOpen(true)}
      >
        mi proceso creativo
      </button>

      {isOpen && (



        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#eaefef] p-6 rounded-2xl max-w-md w-full h-fit shadow-[var(--shadowBox)] relative">
          <button
              onClick={handleClose}
              className="absolute top-1 left-90 text-lg p-2 text-gray-500 hover:text-black"
              aria-label="Cerrar"
            >
              &times;
            </button>
            <div id="carousel-content" className="text-center h-[300px] text-[#060909] ">
              <h2 className=" text-2xl font-cal-sans tracking-wider">{steps[currentStep].title}</h2>
           
              <img src={steps[currentStep].video} className="object-cover w-full h-48"  alt="" />
             
              <p className="text-sm tracking-wider leading-6 mb-4">{steps[currentStep].description}</p>
              <div className="text-sm text-gray-500">Paso {currentStep + 1} de {steps.length}</div>
            </div>

              <div className="flex justify-between mt-6">
              <button
                className=" w-28 bg-[#F7F9F9] text-[var(--accent)] font-cal-sans lowercase tracking-widest px-6 py-3 text-xs rounded-[30px] cursor-pointer"
                onClick={handlePrev}
                disabled={currentStep === 0}
                style={styles.button}
              >
                Atrás
              </button>
              <button
                className=" w-28 bg-[var(--accent)] text-[var(--text)] font-cal-sans lowercase tracking-widest px-6 py-3 text-xs rounded-[30px] cursor-pointer"
                onClick={handleNext}
                style={styles.button}
              >
                {currentStep === steps.length - 1 ? "Cerrar" : "Continúa"}
              </button>
              </div>
          </div>

        </div>
        
      )}
    </div>
    
  );
}

const styles = {
  button :{
    boxShadow: "0 4px 10px rgba(6, 9, 9, 0.2)"
  }
}