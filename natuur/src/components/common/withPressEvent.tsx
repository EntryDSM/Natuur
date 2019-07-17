import React, { FC } from "react";

const withPressEvent = <T extends {}>(props: T) => (
  Component: FC<T & { onKeyPress: () => void }>
) => {
  const handleKeyPress = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    handleEvent: () => void
  ) => {
    if (key === "Enter") {
      handleEvent();
    }
  };
  return <Component {...props} onKeyPress={() => handleKeyPress} />;
};

export default withPressEvent;
