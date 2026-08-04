import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const dsFreeHugsVsDeluxeHugs: Template = {
    name: "dsFreeHugsVsDeluxeHugs",
    displayName: "DS Free hugs vs deluxe hugs",
    topics: [Topic.Anime, Topic.DemonSlayer],
    types: [Type.FaceImage, Type.TwoOption],
    width: 438,
    height: 412,
    texts: [],
    images: [
        { id: 0, description: "Tanjiro's face" },
        { id: 1, description: "Inosuke's face" },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dsFreeHugsVsDeluxeHugs.png"
                width={438}
                height={412}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{ position: "absolute", top: 50, left: 80, borderRadius: "100%", objectFit: "cover" }}
            />
            <img
                src={images[1]}
                width={100}
                height={100}
                style={{ position: "absolute", top: 50, right: 110, borderRadius: "100%", objectFit: "cover" }}
            />
        </div>
    ),
};
