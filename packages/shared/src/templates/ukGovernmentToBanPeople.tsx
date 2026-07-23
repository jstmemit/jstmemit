import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const ukGovernmentToBanPeople: Template = {
    name: "ukGovernmentToBanPeople",
    topics: [Topic.SocialPost],
    types: [Type.objectImage, Type.defaultText],
    width: 1468,
    height: 1038,
    texts: [],
    images: [{ id: 0, description: "People who were banned by the UK government" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/ukGovernmentToBanPeople.png"
                width={1468}
                height={1038}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={670}
                height={740}
                style={{
                    position: "absolute",
                    top: 205,
                    right: 5,
                    borderBottomRightRadius: 36,
                    borderTopRightRadius: 36,
                }}
            />
        </div>
    ),
};
