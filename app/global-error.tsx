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
    <html>
      <body>
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-3xl ">
            `Error| This is a Global Error: ${error.message}`
          </h1>
          <Button variant="shadow" onClick={() => reset()}>
            Try Again
          </Button>
        </div>
      </body>
    </html>
  );
}
