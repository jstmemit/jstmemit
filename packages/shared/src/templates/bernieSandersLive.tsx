import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";

export const bernieSandersLive: Template = {
    id: 66,
    name: "bernieSandersLive",
    width: 981,
    height: 1038,
    texts: [
        { id: 0, description: "person's speech", minLength: 1, maxLength: 2 },
        { id: 1, description: "Bernie Sanders reaction", minLength: 1, maxLength: 2 },
    ],
    images: [{ id: 0, description: "Person who is debating with Bernie Sanders on his live stream" }],
    element: ({ texts, images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <img
                src={images[0]}
                width={460}
                height={250}
                style={{
                    position: "absolute",
                    top: 290,
                    left: 40,
                    borderColor: "#176c3f",
                    borderWidth: 3,
                }}
            />
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/bernieSandersLive.png"
                width={981}
                height={1038}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 20,
                    bottom: 525,
                    width: "50%",
                    padding: "20px",
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    fontFamily: "Comic Sans MS",
                    fontSize: 40,
                    lineHeight: 1.05,
                    color: "#fff",
                    WebkitTextStrokeWidth: 10,
                    WebkitTextStrokeColor: "black",
                }}
            >
                {texts[0]}!
            </div>
            <div
                style={{
                    position: "absolute",
                    left: "50%",
                    bottom: 525,
                    width: "50%",
                    padding: "20px",
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    fontFamily: "Comic Sans MS",
                    fontSize: 40,
                    lineHeight: 1.05,
                    color: "#fff",
                    WebkitTextStrokeWidth: 10,
                    WebkitTextStrokeColor: "black",
                }}
            >
                *{texts[1]}*
            </div>
        </div>
    ),
};
