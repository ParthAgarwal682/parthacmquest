import "./Card.css";

export const Card = ({ children, ...props }) => {
  return (
    <div className="card" {...props}>
      {children}
    </div>
  );
};

Card.Header = ({ children }) => {
  return <div className="card-header">{children}</div>;
};

Card.Body = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

Card.Footer = ({ children }) => {
  return <div className="card-footer">{children}</div>;
};