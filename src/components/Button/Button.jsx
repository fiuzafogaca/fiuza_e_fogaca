import Icon from '../Icon/Icon.jsx';
import './Button.css';

export default function Button({
  href,
  type = 'button',
  variant = 'primary',
  wide = false,
  icon,
  children,
  ...rest
}) {
  const classes = ['button', `button--${variant}`, wide ? 'button--wide' : '']
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <span>{children}</span>
      {icon && <Icon name={icon} size="18" />}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...rest}>
      {content}
    </button>
  );
}
