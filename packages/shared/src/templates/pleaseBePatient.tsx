import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";

export const pleaseBePatient: Template = {
    name: "pleaseBePatient",
    width: 1051,
    height: 1032,
    texts: [
        {
            id: 0,
            description: "Phrase that a person with 'please be patient' blue cap says",
            minLength: 1,
            maxLength: 6,
        },
    ],
    images: [{ id: 0, description: "Person with 'please be patient' blue cap" }],
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
                width={410}
                height={410}
                style={{
                    position: "absolute",
                    top: 510,
                    left: 10,
                    borderRadius: 256,
                    borderColor: "black",
                    borderWidth: 8,
                }}
            />
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/pleaseBePatient.png"
                width={1051}
                height={1032}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    top: 460,
                    right: 150,
                    width: "30%",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: 50,
                    paddingLeft: 15,
                    paddingRight: 15,
                    color: "black",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                }}
            >
                "{texts[0]}"
            </div>
        </div>
    ),
};
