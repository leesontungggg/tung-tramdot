import {
  handleGetProjectDetail,
  handleGetProjectItems,
} from "@/services/project";
import PreviewRenderer from "@/components/PreviewRenderer";

export default async function Page({ params }: { params: { id: any } }) {
  const projectDetail: any = await handleGetProjectDetail(params.id);
  const projectItems: any = await handleGetProjectItems(params.id);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <div>Project Name: {projectDetail.data.data.name}</div>
      <br />
      <div>
        Project Short description: {projectDetail.data.data.short_description}
      </div>
      <br />
      <div>Project Goal: {projectDetail.data.data.donate_goal}</div>
      <br />
      <div>
        Project Current Donation: {projectDetail.data.data.current_donate}
      </div>
      <br />
      <div>Project End Date: {projectDetail.data.data.end_date}</div>
      <br />
      <div>Project Description</div>
      <PreviewRenderer data={projectDetail.data.data.description} />
      <br />
      <div>Các items thuộc project</div>
      {!!projectItems.data.data.length && (
        <div className="grid grid-cols-2 gap-4">
          {projectItems.data.data.map((item) => (
            <div className="p-4 flex-col flex items-center rounded-lg border-1 border-gray-900 bg-slate-400">
              {item.name}
              <br />
              {item.short_desc}
              <br />
              <img
                className="w-40 h-auto"
                src={`https://tramdot.up.railway.app/assets/${item.thumbnail}.jpg`}
              />
              <br />
              {`${item.price} đ`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
