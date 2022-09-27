import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

export default function InputWithLabel(props) {
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  InputWithLabel.propTypes = {
    props: PropTypes.object,
  };

  return (
    <>
      <label htmlFor="todoTitle">{props.children}</label>
      <input
        type="text"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        ref={inputRef}
      />
    </>
  );
}
