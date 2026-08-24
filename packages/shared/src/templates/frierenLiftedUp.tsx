import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const frierenLiftedUp: Template = {
    name: "frierenLiftedUp",
    displayName: buildLocales("Frieren lifted up", {
        [Locale.Russian]: "Фрирен подняли",
        [Locale.Ukrainian]: "Фрірен підняли",
        [Locale.Dutch]: "Frieren opgetild",
        [Locale.French]: "Frieren soulevée",
        [Locale.German]: "Frieren hochgehoben",
        [Locale.Polish]: "Podniesiona Frieren",
        [Locale.SpanishES]: "Frieren levantada",
        [Locale.SpanishLATAM]: "Frieren levantada",
        [Locale.PortugueseBR]: "Frieren sendo levantada",
        [Locale.Turkish]: "Havaya kaldırılan Frieren",
        [Locale.Italian]: "Frieren sollevata",
        [Locale.Indonesian]: "Frieren diangkat",
        [Locale.Czech]: "Frieren zvednuta",
        [Locale.Japanese]: "持ち上げられるフリーレン",
        [Locale.Korean]: "들어올려진 프리렌",
        [Locale.ChineseCN]: "被举起的芙莉莲",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.TextTop, Type.FaceImage],
    width: 335,
    height: 597,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
    images: [{ id: 0, description: "Frierens's face" }],
    element: ({ texts, images }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/frierenLiftedUp.png"
                width={335}
                height={597}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    bottom: 230,
                    left: 120,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "30%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 30,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
