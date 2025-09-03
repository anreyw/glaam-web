export default function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-24 sm:mt-36 mx-6 flex justify-center">{children}</div>
  );
}
