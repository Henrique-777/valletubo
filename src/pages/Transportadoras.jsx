import './Transportadoras.css';

// Ajuste o número (DDI + DDD + telefone, só dígitos) e a mensagem inicial.
const WHATSAPP_NUMERO = '5587999999999';
const WHATSAPP_MENSAGEM =
  'Olá! Gostaria de cotar o frete por transportadora para um pedido de tubos e conexões.';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
  WHATSAPP_MENSAGEM
)}`;

const etapas = [
  { icone: 'fa-industry', titulo: 'Nossa fábrica', texto: 'Pedido separado e conferido' },
  { icone: 'fa-truck-fast', titulo: 'Transportadora', texto: 'Coleta, transporte e rastreio' },
  { icone: 'fa-location-dot', titulo: 'Seu endereço', texto: 'Entrega na cidade ou propriedade' },
];

const vantagens = [
  {
    icone: 'fa-shield-halved',
    titulo: 'Segurança',
    texto:
      'Tubos e conexões são embalados e paletizados para chegar íntegros, mesmo em trajetos longos.',
  },
  {
    icone: 'fa-box-open',
    titulo: 'Grandes volumes',
    texto:
      'Ideal para rolos de mangueira, barras de PVC e lotes de conexões, com carga consolidada e frete proporcional.',
  },
  {
    icone: 'fa-route',
    titulo: 'Rastreio',
    texto:
      'Acompanhe o pedido da coleta até a entrega com o código de rastreio enviado pela nossa equipe.',
  },
  {
    icone: 'fa-clock',
    titulo: 'Agilidade',
    texto:
      'Despachamos assim que o pedido é confirmado. O prazo estimado é informado junto com a cotação.',
  },
];

const Transportadoras = () => {
  return (
    <div className="transp-page">
      {/* Hero */}
      <section className="transp-hero">
        <div className="transp-overlay">
          <h2>Entregas por Transportadora</h2>
          <p>
            Levamos tubos e conexões de irrigação até a sua cidade, com transporte seguro e rastreio
            do pedido.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="transp-info">
        <div className="transp-container">
          <div className="transp-conteudo">
            <h2>Como funciona o envio</h2>
            <p>
              Após a confirmação do pedido, separamos, embalamos e entregamos a carga a uma
              transportadora parceira. Ela cuida do transporte até o destino, e você acompanha cada
              etapa pelo código de rastreio.
            </p>
          </div>

          <div className="transp-conteudo">
            <h2>Alcance e capilaridade</h2>
            <p>
              As transportadoras atendem cidades de diferentes regiões, inclusive locais de difícil
              acesso para entregas comuns. Isso permite enviar grandes volumes de tubos, mangueiras
              e conexões com custo e prazo compatíveis com a necessidade da obra ou da lavoura.
            </p>
          </div>

          {/* Visual da rota logística */}
          <ol className="transp-rota" aria-label="Etapas da entrega">
            {etapas.map((etapa, i) => (
              <li className="transp-rota-item" key={etapa.titulo}>
                <div className="transp-etapa">
                  <div className="transp-icon" aria-hidden="true">
                    <i className={`fa-solid ${etapa.icone}`}></i>
                  </div>
                  <h3>{etapa.titulo}</h3>
                  <p>{etapa.texto}</p>
                </div>
                {i < etapas.length - 1 && (
                  <i className="fa-solid fa-chevron-right transp-seta" aria-hidden="true"></i>
                )}
              </li>
            ))}
          </ol>

          {/* Citação destacada */}
          <blockquote className="transp-destaque">
            <i className="fa-solid fa-truck-fast" aria-hidden="true"></i>
            <p>Do nosso galpão até a porteira da sua propriedade, com a carga acompanhada.</p>
          </blockquote>
        </div>
      </section>

      {/* Vantagens */}
      <section className="transp-vantagens-section">
        <div className="transp-container">
          <h2 className="transp-titulo">Por que enviar por transportadora</h2>
          <div className="transp-vantagens">
            {vantagens.map((item) => (
              <div className="transp-card" key={item.titulo}>
                <div className="transp-icon" aria-hidden="true">
                  <i className={`fa-solid ${item.icone}`}></i>
                </div>
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="transp-cta-section">
        <div className="transp-container">
          <div className="transp-cta">
            <h2>Cote o frete do seu pedido</h2>
            <p>
              Informe sua cidade e os itens que precisa. Nossa equipe responde com valor e prazo
              estimado de entrega.
            </p>
            <a
              className="transp-botao"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              Cotar frete no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transportadoras;