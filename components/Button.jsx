const Button = ({ link, text }) => {
  return (
    <a
      className="px-6 py-3 border-2 border-secondary-500 bg-secondary-500 hover:bg-opacity-25 rounded-full font-medium trans transform active:scale-90"
      href={link}
    >
      {text}
    </a>
  );
};

export default Button;
