"use client";

import edjsHTML from "editorjs-html";
const edjsParser = edjsHTML();

export default function PreviewRenderer({ data }: any) {
  const html = edjsParser.parse(data);
  return (
    <div className="prose max-w-full" key={data.time}>
      {html.map((item, index) => {
        if (typeof item === "string") {
          return (
            <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
          );
        }
        return item;
      })}
    </div>
  );
}
