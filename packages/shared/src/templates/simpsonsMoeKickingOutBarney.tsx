import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const simpsonsMoeKickingOutBarney: Template = {
    name: "simpsonsMoeKickingOutBarney",
    topics: [Topic.Simpsons, Topic.Cartoons],
    types: [Type.faceImage, Type.threeOption],
    width: 1470,
    height: 2506,
    texts: [],
    images: [
        { id: 0, description: "Moe`s face" },
        { id: 1, description: "Barney`s face" },
    ],
    element: ({ images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Comic Sans MS",
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/simpsonsMoeKickingOutBarney.jpg"
                width={1470}
                height={2506}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={370}
                height={370}
                style={{
                    position: "absolute",
                    top: 100,
                    left: 350,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={370}
                height={370}
                style={{
                    position: "absolute",
                    top: 350,
                    right: 170,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={370}
                height={370}
                style={{
                    position: "absolute",
                    top: 950,
                    left: 600,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={370}
                height={370}
                style={{
                    position: "absolute",
                    bottom: 360,
                    left: 600,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={250}
                height={250}
                style={{
                    position: "absolute",
                    bottom: 300,
                    left: 100,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    ),
};
