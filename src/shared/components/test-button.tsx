"use client";
import { Button } from "@mantine/core";
import React, { useState } from "react";

type Props = {};

export const TestButton = (props: Props) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((c) => c + 1);
  };
  return (
    <>
      {counter}
      <Button onClick={handleClick}>TestButton</Button>;
    </>
  );
};

