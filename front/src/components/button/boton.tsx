import { ButtonProps } from "./Type";

const Boton: React.FC<ButtonProps> = ({ children, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`border border-silver text-gold bg-white rounded-md px-4 py-2 transition-transform duration-300 transform hover:scale-105 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};
export default Boton;
