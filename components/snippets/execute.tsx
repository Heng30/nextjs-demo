"use client";

import React, { useState } from "react";

interface Props {
  title: string;
  code: string;
}

export default function Execute(props: Props) {
  function runCode(code: string) {
    let executeCode = new Function(code);
    return executeCode();
  }

  const [output, setOutput] = useState(runCode(props.code));

  return (
    <div className="flex justify-center">
      <div className="font-bold m-3 mx-48 w-2/3">
        <h1 className="text-white text-6xl text-center mb-8">
          Execute a Code Snippet
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label
              className="w-16 text-center bg-blue-200 rounded"
              htmlFor="title"
            >
              Title
            </label>
            <div className="border rounded p-2 w-full bg-white">
              {props.title}
            </div>
          </div>

          <div className="flex gap-4">
            <label
              className="w-16 text-center bg-blue-200 rounded"
              htmlFor="code"
            >
              Code
            </label>
            <div className="border rounded p-2 w-full min-h-64 bg-white">
              {props.code}
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full">
            <div className="flex gap-4">
              <label
                className="w-16 text-center bg-blue-200 rounded"
                htmlFor="code"
              >
                Output
              </label>
              <div className="border rounded p-2 w-full min-h-32 bg-gray-300">
                {output}
              </div>
            </div>

            <button
              className="text-black rounded bg-blue-200 p-4 w-full"
              onClick={() => setOutput(runCode(props.code))}
            >
              Execute
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
