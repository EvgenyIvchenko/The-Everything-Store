interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    onClick
  } = props;

  return (
    <button
      onClick={onClick}
      className="px-10.5 py-4.5 bg-accent text-white font-light rounded-full"
    >
      {children}
    </button>
  )
}

export default Button;
