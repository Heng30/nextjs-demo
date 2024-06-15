interface Props {
  children: React.ReactNode;
  help: React.ReactNode;
  about: React.ReactNode;
}

export default function Layout({ children, help, about }: Props) {
  return (
    <div className="text-white text-3xl flex flex-col gap-8 items-center">
      {children}
      {about}
      {help}
    </div>
  );
}
