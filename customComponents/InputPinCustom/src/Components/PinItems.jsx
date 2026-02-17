import React from "react";

export const PinItems = React.forwardRef(
  ({ style, max, handleChange, handleBackSpace }, ref) => {
    const handleKeyUp = (e) => {
      console.log("E: ", e);
      switch (e.keyCode) {
        case 8:
          handleBackSpace();
          break;

        default:
          handleChange(e.target.value);
      }
    };

    return (
      <>
        <input style={style} ref={ref} maxLength={max} onKeyUp={handleKeyUp} />
      </>
    );
  },
);
