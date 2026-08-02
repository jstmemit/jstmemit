import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const purestCookie: Template = {
    name: "purestCookie",
    topics: [Topic.Misc],
    types: [Type.DefaultText, Type.ObjectImage],
    width: 1067,
    height: 591,
    texts: [],
    images: [{ id: 0, description: "Purest cookies" }],
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
                src={images[0]}
                width={500}
                height={500}
                style={{
                    position: "absolute",
                    top: 80,
                    left: 300,
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/purestCookie.png"
                width={1067}
                height={591}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
        </div>
    ),
};
