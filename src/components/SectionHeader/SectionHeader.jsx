import './SectionHeader.css';

export default function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'left',
  size = 'lg',
  className = '',
}) {
  const classes = [
    'section-header',
    `section-header--${align}`,
    size === 'md' ? 'section-header--compact' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={classes}>
      {eyebrow && <span className="section-header__eyebrow">{eyebrow}</span>}
      <h2 className={`section-header__title section-header__title--${size}`}>{title}</h2>
      {lead && <p className="section-header__lead">{lead}</p>}
    </header>
  );
}
