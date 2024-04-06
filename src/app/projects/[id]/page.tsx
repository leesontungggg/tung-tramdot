export default function Page({ params }: { params: { id: any } }) {
  return <div>My Project: {params.id}</div>;
}
