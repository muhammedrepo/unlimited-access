import className from 'classnames';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  btnHero,
  btnDark,
  btnCopy,
  rounded,
  outline,

  ...rest
}) {
  const classes = className(
    rest.className,
    'relative inline-flex cursor-pointer items-center justify-center outline-none m-1.5 py-2 px-6 text-sm font-bold capitalize rounded shadow-button hover:opacity-90 -hover:translateY hover:shadow-button-hover',

    {
      'bg-skin-button-green text-skin-base text-skin-base': primary,
      'bg-skin-button-yellow text-skin-black': secondary,
      'bg-skin-button-hero text-skin-base': btnHero,
      'bg-skin-green-dark text-skin-base': btnDark,
      'bg-skin-button-brown text-skin-base': btnCopy,
      'border-green-500 bg-green-500 text-skin-base': success,
      'border-yellow-500 bg-yellow-500 text-skin-base': warning,
      'border-red-500 bg-red-500 text-skin-base': danger,
      'rounded-full': rounded,
      'text-skin-base border': outline,
      'border-white': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-500': outline && warning,
      'text-red-500': outline && danger,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
export default Button;
