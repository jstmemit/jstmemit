import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";

export const missingPiece: Template = {
    id: 21,
    name: "missingPiece",
    width: 783,
    height: 581,
    texts: [{ id: 0, description: "text on the puzzle", minLength: 1, maxLength: 6 }],
    images: [{ id: 0, description: "person who is missing puzzle" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/missingpiece.png"
                width={783}
                height={581}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={300}
                style={{
                    position: "absolute",
                    top: 115,
                    left: 135,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: "40%",
                    width: "40%",
                    height: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 40,
                    lineHeight: 1.05,
                    color: "#000000",
                    WebkitTextStrokeWidth: 4,
                    WebkitTextStrokeColor: "#ffffff",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
