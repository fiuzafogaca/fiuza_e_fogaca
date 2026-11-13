import Button from "../Button/Button.jsx";
import Icon from "../Icon/Icon.jsx";
import InstagramIcon from "../Icon/InstagramIcon.jsx";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import {
  WHATSAPP_NUMBER,
  contactInfo,
  interestAreas,
} from "../../data/site.js";
import "./Contact.css";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const area = interestAreas.find((item) => item.value === data.get("area"));

    const message = [
      "*Novo contato pelo site*",
      "",
      `*Nome:* ${data.get("name")}`,
      `*Área de interesse:* ${area ? area.label : data.get("area")}`,
      "",
      "*Mensagem:*",
      data.get("message"),
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    form.reset();
  };

  return (
    <section className="contact" id="contato">
      <div className="contact__inner container">
        <div className="contact__info">
          <SectionHeader
            tone="light"
            eyebrow="Canal de Atendimento"
            title="Fale com um Especialista"
            lead="Apresente seu caso para uma avaliação inicial conduzida sob estrito sigilo profissional e rigor técnico."
          />

          <ul className="contact__list">
            {contactInfo.map((item) => (
              <li key={item.id} className="contact__item">
                {item.icon === "instagram" ? (
                  <InstagramIcon className="contact__item-icon" />
                ) : (
                  <Icon name={item.icon} className="contact__item-icon" />
                )}
                <div className="contact__item-text">
                  <span className="contact__item-label">{item.label}</span>
                  {item.href ? (
                    <a
                      className="contact__item-value contact__item-value--link"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir o Instagram ${item.value} em uma nova aba`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact__item-value">{item.value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact__panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="contact-name">
                  Nome Completo *
                </label>
                <input
                  className="contact-form__control"
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Ex: João da Silva"
                  required
                />
              </div>
              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="contact-area">
                  Área de Interesse
                </label>
                <select
                  className="contact-form__control"
                  id="contact-area"
                  name="area"
                >
                  {interestAreas.map((area) => (
                    <option key={area.value} value={area.value}>
                      {area.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="contact-message">
                Mensagem Detalhada *
              </label>
              <textarea
                className="contact-form__control contact-form__control--textarea"
                id="contact-message"
                name="message"
                rows="4"
                placeholder="Descreva suscintamente a matéria ou desafio jurídico..."
                required
              />
            </div>

            <p className="contact-form__privacy">
              <Icon
                name="lock"
                size="16"
                className="contact-form__privacy-icon"
              />
              <span>
                Seus dados serão tratados com absoluto sigilo, em consonância
                com a LGPD e o Código de Ética da OAB.
              </span>
            </p>

            <div className="contact-form__submit">
              <Button type="submit" icon="send" variant="brown" wide>
                Enviar Mensagem
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
