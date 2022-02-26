const Text = ({ children, className, color }) => {
  return (
    <p className={className} style={{ color: `${color}` }}>
      {children}
    </p>
  );
};

export default Text;
