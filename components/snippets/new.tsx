"use client";

import { useFormState } from "react-dom";
import * as actions from "@/components/snippets/actions";

export default function New() {
  const [formState, createSnippetAction] = useFormState(actions.createSnippet, {
    message: "",
  });

  return (
    <div className="flex items-center justify-center">
      <form
        action={createSnippetAction}
        className="font-bold m-3 mx-auto w-2/3"
      >
        <h1 className="text-white text-6xl text-center mb-8">
          Create a Code Snippet
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label
              className="w-16 bg-blue-200 text-center rounded"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="border rounded p-2 w-full"
              name="title"
              id="title"
            ></input>
          </div>

          <div className="flex gap-4">
            <label
              className="w-16 bg-blue-200 text-center rounded"
              htmlFor="code"
            >
              Code
            </label>
            <textarea
              className="border rounded p-2 w-full h-96"
              name="code"
              id="code"
            ></textarea>
          </div>

          {formState.message ? (
            <div className="bg-red-200 p-2 border rounded border-red-400">
              {formState.message}
            </div>
          ) : null}

          <button type="submit" className="text-black rounded bg-blue-200 p-4">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
