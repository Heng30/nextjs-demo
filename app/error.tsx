'use client';

import { Button } from '@nextui-org/react';
import { useEffect } from 'react';

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="absolute inset-0 flex  flex-col justify-center items-center gap-8">
      <h1 className="text-3xl border rounded border-red-400 bg-red-200 p-4">
        Error | This is a Page Top Level Error: {error.message}. Disgest:
        {error.digest}
      </h1>
      <Button
        variant="shadow"
        color="primary"
        size="lg"
        onClick={() => reset()}
      >
        Try Again
      </Button>
    </div>
  );
}
