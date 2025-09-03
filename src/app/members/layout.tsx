export default function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pt-24 sm:pt-36 flex justify-center">{children}</div>;
}
