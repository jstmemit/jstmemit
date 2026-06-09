import { Template } from "../../models/Template";
import { TemplateProps } from "../../models/TemplateProps";

export const test: Template = {
  id: 1,
  name: "test",
  width: 800,
  height: 800,
  texts: [
    { id: 0, description: "test 1", minLength: 1, maxLength: 5 },
    { id: 1, description: "test 2", minLength: 1, maxLength: 5 },
  ],
  images: [{ id: 0, description: "background" }],
  element: ({ texts, images }: TemplateProps) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        fontFamily: "Impact",
      }}
    >
      <img src={images[0]} width={800} height={400} />
      <div style={{ display: "flex", fontSize: 40 }}>{texts[0]}</div>
      <div style={{ display: "flex", fontSize: 40 }}>{texts[1]}</div>
    </div>
  ),
};
