"use client";

import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import * as DiscussActions from "@/components/discuss/actions";
import { useFormState } from "react-dom";

export default function CreateFrom() {
  const [formState, action] = useFormState(DiscussActions.createTopic, {
    errors: {},
  });

  return (
    <Popover placement="left-start">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(", ")}
            ></Input>
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Descript your topic"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(", ")}
            ></Textarea>
            {formState.errors._form ? (
              <div className="bg-red-200 border-red-400 p-2 rounded">
                {formState.errors._form}
              </div>
            ) : null}
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
