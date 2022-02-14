import './style.scss';

export const ButtonPrimary = ({ children,...rest }) => {
  return <button {...rest} className='button'>{children}</button>;
};
