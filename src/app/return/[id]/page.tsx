
export default async function Return({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  return (
    <div >
      <h1 className="text-4xl font-bold text-center mt-10">
        Buch von Schüler:in {id} zurückgeben</h1>
    </div>
  );
}
