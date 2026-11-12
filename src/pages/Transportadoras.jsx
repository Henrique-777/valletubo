import './Transportadoras.css';

// Ajuste com o número oficial da Valletubo (DDI + DDD + número, só dígitos)
const WHATSAPP_NUMERO = '55XXXXXXXXXXX';
const WHATSAPP_MENSAGEM =
  'Olá! Gostaria de checar a disponibilidade de envio por transportadora e estimar o frete do meu pedido.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`;

const Transportadoras = () => {
  return (
    <div className="transp-page">
      {/* Hero */}
      <section className="transp-hero">
        <div className="transp-overlay">
          <h2>Envio por Transportadoras</h2>
        </div>
      </section>

      {/* Mensagem central + CTA */}
      <section className="transp-conteudo">
        <div className="transp-container">
          <h2>Entregas via Transportadora: Fale Conosco</h2>
          <p>
            Trabalhamos em parceria com diversas transportadoras para atender seu pedido. Entre em
            contato com nossos colaboradores para checar a disponibilidade de envio, estimar o frete
            e tirar todas as suas dúvidas antes de fechar a compra.
          </p>

          <a
            className="transp-whatsapp"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
            Fale com nossos colaboradores
          </a>
        </div>
      </section>
    </div>
  );
};

export default Transportadoras;