import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const bearArrest: Template = {
    name: "bearArrest",
    displayName: buildLocales("Bear arrest", {
        [Locale.Russian]: "Арест медведя",
        [Locale.Ukrainian]: "Арешт ведмедя",
        [Locale.Dutch]: "Beer gearresteerd",
        [Locale.French]: "Arrestation d'ours",
        [Locale.German]: "Bärenfestnahme",
        [Locale.Polish]: "Aresztowanie niedźwiedzia",
        [Locale.SpanishES]: "Arresto de oso",
        [Locale.SpanishLATAM]: "Arresto de oso",
        [Locale.PortugueseBR]: "Prisão de urso",
        [Locale.Turkish]: "Ayı tutuklandı",
        [Locale.Italian]: "Arresto di un orso",
        [Locale.Indonesian]: "Beruang ditangkap",
        [Locale.Czech]: "Zatčení medvěda",
        [Locale.Japanese]: "クマの逮捕",
        [Locale.Korean]: "곰 체포",
        [Locale.ChineseCN]: "逮捕熊",
    }),
    topics: [Topic.News, Topic.Animals],
    types: [Type.FaceImage, Type.TextBottomWithBackground],
    width: 640,
    height: 434,
    texts: [{ id: 0, description: "breaking news", minLength: 1, maxLength: 10 }],
    images: [{ id: 0, description: "arrested bear" }],
    element: ({ texts, images, font }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: font,
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/bearArrest.jpg"
                width={640}
                height={434}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={180}
                height={180}
                style={{
                    position: "absolute",
                    top: 35,
                    left: 315,
                    transform: "translateX(-50%)",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    padding: "15px",
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "flex-start",
                    textAlign: "start",
                    fontFamily: font,
                    fontSize: 40,
                    lineHeight: 1.05,
                    paddingBottom: "0.2em",
                    color: "#000000",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
