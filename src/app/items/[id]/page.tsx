
export default async function Item({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  return (
    <div >
      <h1 className="text-4xl font-bold text-center mt-10">
        Detail zu Buch {id}</h1>
    </div>
  );
}
