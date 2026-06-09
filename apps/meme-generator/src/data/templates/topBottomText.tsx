import type { Template } from "../../models/Template.ts";
import type { TemplateProps } from "../../models/TemplateProps.ts";
import React from "react";

export const topBottomText: Template = {
  id: 1,
  name: "topBottomText",
  width: 800,
  height: 800,
  texts: [
    { id: 0, description: "top text", minLength: 1, maxLength: 5 },
    { id: 1, description: "bottom text", minLength: 1, maxLength: 5 },
  ],
  images: [{ id: 0, description: "background" }],
  element: ({ texts, images }: TemplateProps) => (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
        fontFamily: "Impact",
      }}
    >
      <img
        src={images[0]}
        width={800}
        height={800}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <div
        style={{
          position: "absolute",
          top: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontSize: 60,
          color: "white",
          WebkitTextStrokeWidth: 5,
          WebkitTextStrokeColor: "black",
        }}
      >
        {texts[0]}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontSize: 60,
          color: "white",
          WebkitTextStrokeWidth: 5,
          WebkitTextStrokeColor: "black",
        }}
      >
        {texts[1]}
      </div>
    </div>
  ),
};
