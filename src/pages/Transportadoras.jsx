import './Transportadoras.css';

// Troque pelo link real de contato (rota interna ou WhatsApp).
// Ex.: 'https://wa.me/55DDDNUMERO?text=Olá! Quero cotar um envio por transportadora.'
const CONTATO_URL = '/contato';

const PASSOS = [
  {
    titulo: 'Fale com a gente',
    texto: 'Informe os produtos, as quantidades e a cidade de destino do pedido.',
  },
  {
    titulo: 'Verificamos a viabilidade',
    texto:
      'Analisamos peso, dimensões e tipo de produto para confirmar se o envio por transportadora é possível.',
  },
  {
    titulo: 'Você cota o frete',
    texto:
      'O valor e o prazo são definidos pela transportadora. O custo é pago por você, cliente.',
  },
  {
    titulo: 'Despachamos o pedido',
    texto:
      'Com tudo confirmado, preparamos o pedido e entregamos à transportadora para seguir até o seu endereço.',
  },
];

const INFORMACOES = [
  {
    icone: 'fa-hand-holding-dollar',
    titulo: 'Frete por sua conta',
    texto:
      'A Valletubo não arca com os custos de envio. O valor do frete é de responsabilidade do cliente.',
  },
  {
    icone: 'fa-ruler-combined',
    titulo: 'Restrições de carga',
    texto:
      'Peças longas ou volumosas, como tubos de PVC de grande comprimento, podem não ser aceitas por transportadoras convencionais.',
  },
  {
    icone: 'fa-clock',
    titulo: 'Prazos da transportadora',
    texto:
      'Prazo de entrega e valor variam conforme o destino e a transportadora escolhida.',
  },
];

const Transportadoras = () => {
  return (
    <div className="transp-page">
      {/* Hero */}
      <section className="transp-hero">
        <div className="transp-overlay">
          <h2>Envio por transportadoras</h2>
          <p>
            Entenda como funciona o envio dos nossos produtos por transportadora
            e o que você precisa saber antes de pedir.
          </p>
        </div>
      </section>

      {/* Aviso principal */}
      <section className="transp-section">
        <div className="transp-container">
          <div className="transp-aviso" role="note">
            <div className="transp-aviso-icone" aria-hidden="true">
              <i className="fa-solid fa-circle-info"></i>
            </div>
            <div>
              <h2>O frete é pago pelo cliente</h2>
              <p>
                Nos envios por transportadora, todo o custo do frete fica por
                conta de quem compra. A fábrica não cobre despesas de envio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="transp-section transp-section-claro">
        <div className="transp-container">
          <h2 className="transp-titulo">Como funciona</h2>
          <ol className="transp-passos">
            {PASSOS.map((passo, index) => (
              <li className="transp-passo" key={passo.titulo}>
                <span className="transp-passo-numero" aria-hidden="true">
                  {index + 1}
                </span>
                <h3>{passo.titulo}</h3>
                <p>{passo.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Quais produtos */}
      <section className="transp-section">
        <div className="transp-container">
          <div className="transp-texto">
            <h2>Quais produtos podem ser enviados?</h2>
            <p>
              Itens menores e mais compactos, como conexões, microtubos e
              microaspersores, costumam ser os mais indicados para esse tipo de
              envio. Já produtos longos, pesados ou volumosos exigem análise
              prévia e nem sempre são aceitos pelas transportadoras.
            </p>
            <p>
              Por isso, antes de fechar o pedido, consulte a viabilidade do
              envio com a nossa equipe.
            </p>
          </div>
        </div>
      </section>

      {/* Pontos de atenção */}
      <section className="transp-section transp-section-claro">
        <div className="transp-container">
          <h2 className="transp-titulo">Pontos de atenção</h2>
          <div className="transp-cards">
            {INFORMACOES.map((info) => (
              <div className="transp-card" key={info.titulo}>
                <div className="transp-card-icone" aria-hidden="true">
                  <i className={`fa-solid ${info.icone}`}></i>
                </div>
                <h3>{info.titulo}</h3>
                <p>{info.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="transp-section">
        <div className="transp-container">
          <div className="transp-cta">
            <h2>Ficou com alguma dúvida?</h2>
            <p>
              Fale com a nossa equipe para fazer uma cotação e confirmar se o
              seu pedido pode ser enviado por transportadora.
            </p>
            <a className="transp-botao" href={CONTATO_URL}>
              Tire suas dúvidas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transportadoras;