export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen pt-30 pb-16 px-6">
      <div className="mx-auto max-w-2xl">{children}</div>
    </main>
  );
}
