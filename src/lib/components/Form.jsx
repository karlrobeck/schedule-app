import React from "react";

const Form = ({ children, className = "", ...props }) => {
  return (
    <form {...props} className={`form-group ${className}`}>
      {children}
    </form>
  );
};

const Control = ({ children, className = "", ...props }) => {
  return (
    <div {...props} className={`form-control ${className}`}>
      {children}
    </div>
  );
};

Form.Control = Control;

export default Form;
