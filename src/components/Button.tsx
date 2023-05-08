/* eslint-disable react/button-has-type */
import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  variant: 'primary' | 'secondary' | 'accent';
}

export default function Button({
  variant,
  children,
  type = 'button',
  className,
  ...rest
}: ButtonProps) {
  const getButtonClasses = () => {
    switch (variant) {
      case 'primary':
        return 'text-3xl text-text-primary bg-key-primary border-b-key-primaryShadow';
      case 'secondary':
        return 'text-xl uppercase text-white bg-key-secondary border-b-key-secondaryShadow';
      case 'accent':
        return 'text-3xl text-text-secondary bg-key-accent border-b-key-accentShadow';

      default:
        return '';
    }
  };

  return (
    <button
      type={type}
      {...rest}
      className={`${className} flex items-center justify-center font-bold p-2 rounded-md sm:rounded-xl border-b-4 hover:outline-none hover:brightness-125 focus-visible:outline-none focus-visible:brightness-125 ${getButtonClasses()}`}
    >
      {children}
    </button>
  );
}
