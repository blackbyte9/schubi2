
export default async function Book({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  return (
    <div >
      <h1 className="text-4xl font-bold text-center mt-10">
        Detail zu Buchart {id}</h1>
    </div>
  );
}
