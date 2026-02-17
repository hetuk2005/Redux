import React from "react";

export const PinItems = React.forwardRef(
  ({ style, max, handleChange }, ref) => {
    const handleKeyUp = (e) => {
      // console.log("E: ",e);
      handleChange(e.target.value);
    };

    return (
      <>
        <input style={style} ref={ref} maxLength={max} onKeyUp={handleKeyUp} />
      </>
    );
  },
);
