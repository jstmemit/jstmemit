import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const noragamiYatoNoragamiMoneyFloor: Template = {
    name: "noragamiYatoNoragamiMoneyFloor",
    topics: [Topic.Anime, Topic.Noragami],
    types: [Type.DefaultText, Type.FaceImage],
    width: 447,
    height: 447,
    texts: [],
    images: [{ id: 0, description: "Yato`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/noragamiYatoNoragamiMoneyFloor.png"
                width={447}
                height={447}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={60}
                height={60}
                style={{
                    position: "absolute",
                    bottom: 50,
                    right: 195,
                    objectFit: "cover",
                    borderRadius: "100%",
                    transform: "rotate(-160deg)",
                }}
            />
        </div>
    ),
};
