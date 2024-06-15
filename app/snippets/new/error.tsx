'use client';

import { Button } from '@nextui-org/react';
import { useEffect } from 'react';

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <h1 className="text-3xl ">
        `Error| This is a New Snippet Error: ${error.message}`
      </h1>
      <Button variant="shadow" onClick={() => reset()}>
        Try Again
      </Button>
    </div>
  );
}
