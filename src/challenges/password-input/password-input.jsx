import React, { memo, useRef, useState } from 'react';
import classes from './password-input.module.css';
function PasswordInput({ length = 4, type = 'number', size = 40 }) {
  const [inputValues, setInputValues] = useState(Array(length).fill(''));
  const inputRef = useRef(Array(length).fill(null));

  const onChangeHandler = (e) => {
    const { value } = e.target;
    const indexValue = +e.currentTarget.getAttribute('data-value');
    console.log({ indexValue }, value);

    if (value) {
      setInputValues((prev) => {
        prev[indexValue] = value.split('').pop();
        return [...prev];
      });
      inputRef.current[indexValue < length - 1 ? indexValue + 1 : length - 1].focus();
    }
  };

  const keyDownHandler = (e) => {
    const indexValue = +e.currentTarget.getAttribute('data-value');

    if (e.code === 'Backspace' || e.keyCode === 8) {
      setInputValues((prev) => {
        prev[indexValue] = '';
        return [...prev];
      });
      inputRef.current[indexValue > 0 ? indexValue - 1 : 0].focus();
    }
  };
  const onFocusHandler = (e) => {
    const { value } = e.target;
    const indexValue = +e.currentTarget.getAttribute('data-value');
    console.log({ indexValue }, value);
    setTimeout(() => {
      inputRef.current[indexValue].selectionStart = 1;
      inputRef.current[indexValue].selectionEnd = 1;
    }, 0);
  };

  console.log(inputRef, inputValues);
  return (
    <div className={classes.inputContainer}>
      {Array(length)
        .fill(0)
        .map((_, i) => {
          return (
            <input
              key={i}
              ref={(el) => {
                inputRef.current[i] = el;
                return el;
              }}
              className={classes.passwordInput}
              value={inputValues[i]}
              data-value={i}
              type={type}
              style={{ height: size, width: size }}
              onChange={onChangeHandler}
              onKeyDown={keyDownHandler}
              onFocus={onFocusHandler}
              //   maxLength={1}
            />
          );
        })}
    </div>
  );
}
export default memo(PasswordInput);
