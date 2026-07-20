import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const britishCuisine: Template = {
    name: "britishCuisine",
    topics: [Topic.SocialPost],
    types: [Type.textName, Type.avatarImage, Type.objectImage, Type.defaultText],
    width: 883,
    height: 1025,
    texts: [
        { id: 0, description: "Tag of the guy who said about British cuisine", minLength: 1, maxLength: 5 },
        {
            id: 1,
            description: "Tag of the guy who posted about the worst takeaway order of all times",
            minLength: 1,
            maxLength: 5,
        },
    ],
    images: [
        { id: 0, description: "Worst takeaway order of all times" },
        { id: 1, description: "Profile picture of the guy who said about British cuisine" },
        { id: 2, description: "Profile picture of the guy who posted about the worst takeaway order of all times" },
    ],
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
                width={785}
                height={790}
                style={{
                    position: "absolute",
                    top: 240,
                    left: 100,
                }}
            />
            <img
                src={images[1]}
                width={70}
                height={70}
                style={{
                    position: "absolute",
                    top: 10,
                    left: 5,
                    borderRadius: 24,
                }}
            />
            <img
                src={images[2]}
                width={40}
                height={40}
                style={{
                    position: "absolute",
                    top: 118,
                    left: 102,
                    borderRadius: 24,
                }}
            />
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/britishCuisine.png"
                width={933}
                height={1051}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 75,
                    top: 0,
                    width: "100%",
                    maxWidth: "60%",
                    padding: "10px",
                    textAlign: "left",
                    justifyContent: "flex-start",
                    display: "flex",
                    fontFamily: "Comic Sans MS",
                    fontSize: 30,
                    lineHeight: 1.05,
                    paddingBottom: "0.15em",
                    color: "#808080",
                    wordBreak: "break-word",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}
            >
                @{texts[0]}
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 145,
                    top: 115,
                    width: "100%",
                    maxWidth: "60%",
                    padding: "10px",
                    textAlign: "left",
                    justifyContent: "flex-start",
                    display: "flex",
                    fontFamily: "Comic Sans MS",
                    fontSize: 25,
                    lineHeight: 1.05,
                    paddingBottom: "0.15em",
                    color: "#808080",
                    wordBreak: "break-word",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}
            >
                @{texts[1]}
            </div>
        </div>
    ),
};
