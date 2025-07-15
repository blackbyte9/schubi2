
export default async function Lease({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  return (
    <div >
      <h1 className="text-4xl font-bold text-center mt-10">
        Buch an Schüler:in {id} ausleihen</h1>
    </div>
  );
}
