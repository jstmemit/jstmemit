import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const tbobsJamesFrancoFirstTime: Template = {
    name: "tbobsJamesFrancoFirstTime",
    displayName: "TBOBS James Franco first time",
    topics: [Topic.Reaction, Topic.Movies, Topic.TheBalladOfBusterScruggs],
    types: [Type.DefaultText, Type.FaceImage],
    width: 1200,
    height: 1296,
    texts: [],
    images: [
        { id: 0, description: "James Franco`s face" },
        { id: 1, description: "Old man face" },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/tbobsJamesFrancoFirstTime.png"
                width={1200}
                height={1296}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={350}
                height={350}
                style={{
                    position: "absolute",
                    top: 10,
                    left: 330,
                    objectFit: "cover",
                    borderRadius: "100%",
                    transform: "rotate(-10deg)",
                }}
            />
            <img
                src={images[1]}
                width={350}
                height={350}
                style={{
                    position: "absolute",
                    bottom: 250,
                    left: 370,
                    objectFit: "cover",
                    borderRadius: "100%",
                    transform: "rotate(10deg)",
                }}
            />
        </div>
    ),
};
