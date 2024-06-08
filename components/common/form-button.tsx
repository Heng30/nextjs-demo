"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";
import { ButtonVariantProps } from "@nextui-org/theme";

interface Props {
  children: React.ReactNode;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
}

export default function FormButton({ children, variant, color }: Props) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant={variant} color={color} isLoading={pending}>
      {children}
    </Button>
  );
}
