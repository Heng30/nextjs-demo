import EditSnippet from "@/components/snippets/edit";

interface Props {
  params: {
    id: string;
  };
}

export default function Edit(props: Props) {
  const id = parseInt(props.params.id);

  return <EditSnippet id={id}></EditSnippet>;
}
