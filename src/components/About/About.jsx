import './About.css';

export default function About() {
  return (
    <section className="about" id="escritorio">
      <div className="about__inner container">
        <div className="about__content">
          <h2 className="about__title">SOBRE NÓS</h2>
          <div className="about__text">
            <p>
              O escritório <strong className="about__strong">Fiuza &amp; Fogaça Advogados</strong>{' '}
              atua com foco em soluções jurídicas estratégicas e personalizadas para empresas e seus
              sócios. Fundado pela união de dois profissionais com anos de experiência na advocacia
              empresarial, o escritório nasceu da vontade de construir uma atuação próxima e
              conectada às transformações do mundo dos negócios.
            </p>
            <p>
              Com sede em Canoas, no Rio Grande do Sul, atendemos empresas, sócios e famílias em todo
              o Brasil, com atuação em direito tributário, empresarial e societário, planejamento
              patrimonial e sucessório, direito aduaneiro e direito imobiliário.
            </p>
            <p>
              Nossa prática jurídica combina conhecimento técnico, visão estratégica e compreensão
              da realidade de cada cliente. Mais do que solucionar demandas jurídicas, buscamos
              identificar oportunidades, antecipar riscos e dar segurança às decisões que impactam o
              dia a dia das empresas e o patrimônio de quem as administra.
            </p>
            <p>Nosso objetivo é estabelecer relações de confiança e gerar valor para nossos clientes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
