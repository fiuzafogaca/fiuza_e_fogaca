
export const WHATSAPP_NUMBER = "5551984324164";

export const FIRM_NAME = "Fiuza & Fogaça Advogados";

const IMAGES = `${import.meta.env.BASE_URL}images/`;

export const LOGO_URL = `${IMAGES}logo.png`;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Escritório", href: "#escritorio" },
  { label: "Áreas de Atuação", href: "#areas-atuacao" },
  { label: "Sócios", href: "#socios" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  subtitle:
    "Advocacia consultiva e contenciosa orientada à segurança dos negócios, à proteção patrimonial e à construção de soluções jurídicas sólidas.",
};

export const practiceAreas = [
  {
    id: "tributario",
    tag: "01 / TRIBUTÁRIO",
    icon: "gavel",
    title: "Direito Tributário",
    text: "Atuamos no planejamento tributário a partir da realidade operacional de cada empresa, na análise dos impactos da Reforma Tributária e na identificação de oportunidades de otimização da carga fiscal. Também assessoramos empresas na negociação de débitos fiscais por meio da transação tributária, na defesa administrativa e judicial contra autuações e execuções fiscais e na recuperação de créditos tributários.",
  },
  {
    id: "empresarial",
    tag: "02 / SOCIETÁRIO",
    icon: "corporate_fare",
    title: "Direito Empresarial",
    text: "Assessoramos empresas na redação de contratos sociais, acordos de sócios e operações intracompany, além de contratos em geral, estruturação de operações e análise de riscos, privilegiando a prevenção de conflitos. Organizamos a relação entre sócios e damos segurança jurídica às decisões e aos negócios da empresa, evitando que o crescimento traga passivos silenciosos.",
  },
  {
    id: "patrimonial",
    tag: "03 / PATRIMONIAL & SUCESSÓRIO",
    icon: "badge",
    title: "Planejamento Patrimonial e Sucessório",
    text: "Estruturamos a organização e a proteção do patrimônio considerando os aspectos societários, tributários e sucessórios de cada família ou grupo. Atuamos na constituição de holdings, na reorganização de bens e participações e no planejamento da sucessão, preservando o patrimônio e evitando que sua transmissão gere desgaste familiar ou custo excessivo.",
  },
  {
    id: "aduaneiro",
    tag: "04 / ADUANEIRO",
    icon: "health_and_safety",
    title: "Direito Aduaneiro",
    text: "Assessoramos operações de importação e exportação, com análise da tributação incidente, classificação fiscal, regimes aduaneiros especiais e benefícios aplicáveis. Atuamos também na defesa em autuações aduaneiras e nas exigências que afetam custos e regularidade no comércio exterior.",
  },
  {
    id: "imobiliario",
    tag: "05 / IMOBILIÁRIO",
    icon: "loyalty",
    title: "Direito Imobiliário",
    text: "Atuamos na elaboração e análise de contratos de compra e venda, locação e estruturação de negócios imobiliários, bem como na due diligence que antecede a aquisição, com o exame da situação registral do imóvel, de ônus reais e de eventuais passivos. Cuidamos também da regularização documental e registral, incluindo usucapião e retificação de registro.",
  },
  {
    id: "consultoria",
    tag: "06 / CONSULTORIA",
    icon: "insights",
    title: "Consultoria Jurídica",
    text: "Diagnóstico jurídico preventivo, pareceres técnicos, assessoria estratégica contínua e mitigação proativa de riscos legais.",
  },
];

export const partners = [
  {
    id: "bruno-fiuza",
    name: "Bruno Fiuza",
    oab: "OAB/RS 137.391",
    role: "Sócio Fundador | Advogado",
    bio: "Advogado, pós-graduado em Direito e Processo Tributário pelo IET, em parceria com a PUC/RS. Atua no contencioso tributário administrativo e judicial, no planejamento tributário de empresas e patrimonial de seus sócios, bem como em questões societárias e fiscais relacionadas ao comércio exterior.",
    photo: `${IMAGES}bruno_fiuza.jpg`,
    photoPosition: "50% 0%",
    photoZoom: 1.2,
    photoOrigin: "50% 8%",
  },
  {
    id: "alexandre-fogaca",
    name: "Alexandre Fogaça",
    oab: "OAB/RS 140.715",
    role: "Sócio Fundador | Advogado",
    bio: "Advogado especialista em Direito Tributário e pós-graduando na PUC/RS. Atua na gestão e reestruturação de passivos fiscais, especialmente na negociação de dívidas por meio da transação tributária, além do contencioso tributário administrativo e judicial. Sua atuação também abrange questões relacionadas ao Direito Empresarial, Imobiliário e Processual Civil.",
    photo: `${IMAGES}alexandre_fogaca.jpg`,
    photoPosition: "50% 85%",
  },
];

export const differentials = [
  {
    id: "atendimento",
    image: `${IMAGES}diferencial_atendimento.jpg`,
    title: "Atendimento Personalizado",
    text: [
      "Entendemos que decisões empresariais e patrimoniais exigem respostas ágeis e precisão técnica. Por isso, no Fiuza & Fogaça Advogados, a condução do seu caso é realizada diretamente pelos sócios, sem intermediários.",
      "Reconhecemos que cada empresa possui uma dinâmica única. Nosso atendimento é moldado sob medida para se integrar com perfeição à rotina e aos desafios do seu negócio.",
    ],
  },
  {
    id: "nacional",
    image: `${IMAGES}diferencial_nacional.jpg`,
    title: "Atuação Nacional",
    text: [
      "O Fiuza & Fogaça Advogados atua em todo o território nacional, representando empresas em demandas judiciais e administrativas perante tribunais e órgãos públicos de diferentes esferas.",
      "Nossa atuação abrange todas as instâncias do Poder Judiciário, incluindo os Tribunais Superiores, além de processos e procedimentos perante órgãos e entidades da Administração Pública. Essa abrangência permite acompanhar demandas em diferentes regiões e níveis de decisão, com estratégia jurídica consistente e atenção às particularidades de cada caso.",
    ],
  },
  {
    id: "resultados",
    image: `${IMAGES}diferencial_resultados.jpg`,
    title: "Compromisso com Resultados",
    text: [
      "Não medimos eficiência por volume de relatórios, mas pelo retorno financeiro e pela segurança criada para o seu negócio. Nossa atuação é orientada para solucionar litígios de forma ágil, recuperar ativos e gerar economia efetiva.",
      "Para isso, unimos visão estratégica e execução rigorosa na busca pela melhor solução no menor tempo possível. O sucesso das nossas teses é refletido diretamente na tranquilidade e na rentabilidade da sua empresa.",
    ],
  },
  {
    id: "etica",
    image: `${IMAGES}diferencial_etica.jpg`,
    title: "Ética e Transparência",
    text: [
      "Pautamos nossa atuação pela honestidade intelectual: recusamos a lógica de aceitar causas por volume. Só ingressamos em uma demanda após uma avaliação criteriosa que confirme a viabilidade de entregar um resultado efetivo para a sua empresa.",
      "Construímos relações fundamentadas na lealdade e no sigilo irrestrito. Reconhecemos o valor do patrimônio imaterial do seu negócio e garantimos máxima proteção às informações e estratégias corporativas confiadas ao nosso escritório.",
    ],
  },
];

export const contactInfo = [
  {
    id: "telefone",
    icon: "call",
    label: "Telefone / WhatsApp",
    shortLabel: "Telefone",
    value: "+55 (51) 98432-4164",
  },
  {
    id: "email",
    icon: "mail",
    label: "E-mail Institucional",
    shortLabel: "E-mail",
    value: "escritorio@fiuzaefogaca.com",
  },
  {
    id: "instagram",
    icon: "instagram",
    label: "Instagram",
    value: "@fiuzaefogaca",
    href: "https://www.instagram.com/fiuzaefogaca/",
  },
];

export const interestAreas = practiceAreas.map((area) => ({
  value: area.id,
  label: area.title,
}));

export const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Escritório", href: "#escritorio" },
  { label: "Áreas de Atuação", href: "#areas-atuacao" },
  { label: "Equipe", href: "#socios" },
  { label: "Contato", href: "#contato" },
];
