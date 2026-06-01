import "./Button.css";

export const Button = ({
  children,
  variant = "primary",
  isDisabled = false,
  isLoading = false,
  onClick,
}) => {
  const classes = [
    "btn",
    `btn-${variant}`,
    isDisabled ? "btn-disabled" : "",
    isLoading ? "btn-loading" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {isLoading && <span data-testid="spinner">Loading...</span>}
      {children}
    </button>
  );
};