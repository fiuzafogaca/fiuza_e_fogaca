import './Icon.css';

export default function Icon({ name, size, className = '' }) {
  const classes = ['icon', size ? `icon--${size}` : '', className].filter(Boolean).join(' ');

  return (
    <span className={classes} aria-hidden="true">
      {name}
    </span>
  );
}
