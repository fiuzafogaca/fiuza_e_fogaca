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
    oab: "OAB/SP 000.000",
    role: "Sócio Fundador | Advogado",
    bio: "Advogado, pós-graduado em Direito e Processo Tributário pelo IET, em parceria com a PUC/RS. Atua no contencioso tributário administrativo e judicial, no planejamento tributário de empresas e patrimonial de seus sócios, bem como em questões societárias e fiscais relacionadas ao comércio exterior.",
    photo: `${IMAGES}bruno_fiuza.jpg`,
  },
  {
    id: "alexandre-fogaca",
    name: "Alexandre Fogaça",
    oab: "OAB/SP 000.000",
    role: "Sócio Fundador | Advogado",
    bio: "Advogado especialista em Direito Tributário e pós-graduando na PUC/RS. Atua na gestão e reestruturação de passivos fiscais, especialmente na negociação de dívidas por meio da transação tributária, além do contencioso tributário administrativo e judicial. Sua atuação também abrange questões relacionadas ao Direito Empresarial, Imobiliário e Processual Civil.",
    photo: `${IMAGES}alexandre_fogaca.jpg`,
  },
];

export const differentials = [
  {
    id: "atendimento",
    icon: "handshake",
    title: "Atendimento Personalizado",
    text: "Relação direta e transparente com os sócios em cada etapa do processo ou consultoria, garantindo proximidade e atenção minuciosa.",
  },
  {
    id: "estrategia",
    icon: "strategy",
    title: "Estratégia Jurídica",
    text: "Abordagem sob medida desenhada especificamente para mitigar riscos ocultos e maximizar a eficiência temporal e econômica das soluções.",
  },
  {
    id: "resultados",
    icon: "military_tech",
    title: "Compromisso com Resultados",
    text: "Dedicação obstinada na defesa dos direitos legítimos e no alcance pragmático dos objetivos negociais estabelecidos pelos clientes.",
  },
  {
    id: "etica",
    icon: "security",
    title: "Ética e Transparência",
    text: "Conduta inegociável pautada pela honestidade, sigilo irrestrito e clareza total no fornecimento de diagnósticos e prognósticos processuais.",
  },
];

export const contactInfo = [
  {
    id: "endereco",
    icon: "location_on",
    label: "Endereço Corporativo",
    shortLabel: "Endereço",
    value: "Rua Brasil, 1375, Torre A, Sala 802 - Centro, CEP 92310-150",
  },
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
    value: "contato@fiuzaefogaca.adv.br",
  },
  {
    id: "horario",
    icon: "schedule",
    label: "Horário de Atendimento",
    value: "Segunda a Sexta-feira, das 09h às 18h",
  },
];

// Mantido igual ao design do Stitch. Vale ajustar para as áreas reais do escritório.
export const interestAreas = [
  { value: "civil", label: "Direito Civil" },
  { value: "empresarial", label: "Direito Empresarial" },
  { value: "trabalhista", label: "Direito Trabalhista" },
  { value: "previdenciario", label: "Direito Previdenciário" },
  { value: "consumidor", label: "Direito do Consumidor" },
  { value: "consultoria", label: "Consultoria Jurídica Geral" },
];

export const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Escritório", href: "#escritorio" },
  { label: "Áreas de Atuação", href: "#areas-atuacao" },
  { label: "Equipe", href: "#socios" },
  { label: "Contato", href: "#contato" },
  { label: "Política de Privacidade", href: "#contato" },
  { label: "Termos de Uso", href: "#contato" },
];
