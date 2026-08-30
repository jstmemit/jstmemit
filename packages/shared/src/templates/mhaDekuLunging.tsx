import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const mhaDekuLunging: Template = {
    name: "mhaDekuLunging",
    displayName: buildLocales("Deku lunging", {
        [Locale.Russian]: "Деку делает рывок",
        [Locale.Ukrainian]: "Деку робить ривок",
        [Locale.Dutch]: "Uitvallende Deku",
        [Locale.French]: "Deku se jetant en avant",
        [Locale.German]: "Vorstürmender Deku",
        [Locale.Polish]: "Deku rzucający się do przodu",
        [Locale.SpanishES]: "Deku lanzándose",
        [Locale.SpanishLATAM]: "Deku lanzándose",
        [Locale.PortugueseBR]: "Deku avançando",
        [Locale.Turkish]: "İleri atılan Deku",
        [Locale.Italian]: "Deku che si lancia",
        [Locale.Indonesian]: "Deku menerjang",
        [Locale.Czech]: "Deku se vrhá vpřed",
        [Locale.Japanese]: "突進するデク",
        [Locale.Korean]: "돌진하는 데쿠",
        [Locale.ChineseCN]: "突进的出久",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.MyHeroicAcademy],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 400,
    animationDuration: 1920,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [],
    element: ({ texts, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/mhaDekuLunging.gif"
                width={540}
                height={300}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
