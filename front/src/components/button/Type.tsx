import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
}
  