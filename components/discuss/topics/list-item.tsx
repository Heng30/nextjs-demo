"use client";

import { Topic } from "@prisma/client";
import { useFormState } from "react-dom";
import Link from "next/link";
import { Chip } from "@nextui-org/react";
import paths from "@/components/discuss/paths";
import { CloseIcon } from "@/components/icons";
import * as actions from "@/components/discuss/actions";
import IconButton from "@/components/common/icon-button";
import { toast } from "react-hot-toast";

interface Props {
  topic: Topic;
}

export default function ListItem({ topic }: Props) {
  const [formState, action] = useFormState(
    actions.deleteTopic.bind(null, topic.id),
    {}
  );

  return (
    <div className="flex items-center gap-1">
      <Link href={paths.topicShow(topic.slug)}>
        <Chip color="warning" variant="flat">
          {topic.slug}
        </Chip>
      </Link>
      <form action={action}>
        <IconButton
          formState={formState}
          showToast={(msg) => {
            toast.error(msg);
          }}
        >
          {CloseIcon(20, 20)}
        </IconButton>
      </form>
    </div>
  );
}
