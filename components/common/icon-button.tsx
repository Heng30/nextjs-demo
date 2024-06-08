"use client";

import { useEffect } from "react";

interface Props {
  formState?: IconButtonFormState;
  showToast?: (msg: string) => void;
  children: React.ReactNode;
}

export interface IconButtonFormState {
  errors?: string[];
}

export default function IconButton({ formState, children, showToast }: Props) {
  useEffect(() => {
    if (formState?.errors && showToast) {
      showToast(formState.errors.join(", "));
    }
  }, [formState, showToast]);

  return (
    <button type="submit" className="border-none">
      {children}
    </button>
  );
}
