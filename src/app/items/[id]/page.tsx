import { handleGetItemDetail } from "@/services/item";
import PreviewRenderer from "@/components/PreviewRenderer";
import { formatMoney } from "@/lib/utils";

export default async function Page({ params }: { params: { id: any } }) {
  const projectDetail: any = await handleGetItemDetail(params.id);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <img
        src={`https://tramdot.up.railway.app/assets/${projectDetail.data.data.thumbnail}.jpg`}
      />
      <br />
      <div>Item Name: {projectDetail.data.data.name}</div>
      <br />
      <div>Item Short description: {projectDetail.data.data.short_desc}</div>
      <br />
      <div>Item Price: {`${formatMoney(projectDetail.data.data.price)}đ`}</div>
      <br />
      <br />
      <div className="mt-4">Project Description</div>
      <PreviewRenderer data={projectDetail.data.data.description} />
      <br />
    </div>
  );
}
