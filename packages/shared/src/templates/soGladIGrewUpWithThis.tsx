import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const soGladIGrewUpWithThis: Template = {
    name: "soGladIGrewUpWithThis",
    topics: [Topic.Misc],
    types: [Type.DefaultText, Type.ObjectImage],
    width: 1313,
    height: 790,
    texts: [],
    images: [
        { id: 0, description: "Old good thing" },
        { id: 1, description: "New bad thing" },
    ],
    element: ({ images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/soGladIGrewUpWithThis.png"
                width={1313}
                height={790}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={450}
                height={450}
                style={{
                    position: "absolute",
                    top: 180,
                    left: 110,
                    borderRadius: 24,
                }}
            />
            <img
                src={images[1]}
                width={450}
                height={450}
                style={{
                    position: "absolute",
                    top: 180,
                    right: 95,
                    borderRadius: 24,
                }}
            />
        </div>
    ),
};
