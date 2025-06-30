import React, { useState, useEffect, useRef } from "react";

const WhatsappPopup: React.FC = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({
    userName: "",
    phoneNumber: "",
    serviceType: "",
  });

  const popupRef = useRef<HTMLDivElement>(null);
  const whatsappNumber = "5511983723177";

  const togglePopup = () => {
    setPopupVisible((prev) => !prev);
  };

  const formatPhoneNumber = (value: string): string => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length <= 10) {
      return cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
      return cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      userName: userName.trim() ? "" : "Digite seu nome.",
      phoneNumber: phoneNumber.trim() ? "" : "Digite seu número de celular.",
      serviceType: serviceType ? "" : "Selecione o tipo de serviço.",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((msg) => msg !== "");
    if (hasErrors) return;

    const dados = {
      nome: userName,
      celular: phoneNumber,
      servico: serviceType,
      descricao: description,
    };

    try {
      // Envia para o back-end em PHP
      await fetch("http://localhost/projectLegallyDesigners/backend/api/contato.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      }); 
    } catch (error) {
      console.error("Erro ao salvar no banco:", error);
    }

    // WhatsApp
    const message = encodeURIComponent(
      `Olá, me chamo ${userName}\nCelular: ${phoneNumber}\nServiço desejado: ${serviceType}\nDescrição: ${description || "Sem descrição"}`
    );
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");

    // Reset
    setUserName("");
    setPhoneNumber("");
    setServiceType("");
    setDescription("");
    setErrors({ userName: "", phoneNumber: "", serviceType: "" });
    setPopupVisible(false);
  };
 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setPopupVisible(false);
      }
    };

    if (popupVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupVisible]);

  return (
    <>
      <button
        id="btn-whatsapp"
        className="bottom-0 btn btn-green end-0 m-4 rounded-circle position-fixed text-white"
        title="Fale conosco"
        onClick={togglePopup}
      >
        <i className="bi bi-whatsapp fs-3"></i>
      </button>

      {popupVisible && (
        <div ref={popupRef} id="whatsapp-popup" className="box-transparent p-4 rounded-4">
          <form onSubmit={handleSubmit}>
            <h5 className="fw-bolder mb-3">Fale com a gente</h5>

            {/* Nome */}
            <div className="mb-2">
              <label className="mb-1" htmlFor="user-name">Nome</label>
              <input
                type="text"
                id="user-name"
                className="form-control"
                placeholder="Nome"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              {errors.userName && <p className="text-danger mt-1">{errors.userName}</p>}
            </div>

            {/* Celular */}
            <div className="mb-2">
              <label className="mb-1" htmlFor="phone-number">Celular</label>
              <input
                type="tel"
                id="phone-number"
                className="form-control"
                placeholder="(11) 91234-5678"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(formatPhoneNumber(e.target.value))}
              />
              {errors.phoneNumber && <p className="text-danger mt-1">{errors.phoneNumber}</p>}
            </div>

            {/* Tipo de serviço */}
            <div className="mb-2">
              <label className="mb-1" htmlFor="service-type">Tipo de serviço</label>
              <select
                id="service-type"
                className="form-select"
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
              >
                <option value="">Selecione uma opção</option>
                <option value="Todos">Todos</option>
                <option value="Design de Marca">Design de Marca</option>
                <option value="Gestão de Redes Sociais">Gestão de Redes Sociais</option>
                <option value="Sites Estratégicos">Sites Estratégicos</option>
                <option value="Outros">Outros</option>
              </select>
              {errors.serviceType && <p className="text-danger mt-1">{errors.serviceType}</p>}
            </div>

            {/* Descrição */}
            <div className="mb-3">
              <label className="mb-1" htmlFor="description">Descrição (opcional)</label>
              <textarea
                id="description"
                className="form-control"
                rows={2}
                placeholder="Descreva brevemente o que você precisa"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="btn btn-green rounded-5 text-white w-100"
            >
              Iniciar conversa
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default WhatsappPopup;
