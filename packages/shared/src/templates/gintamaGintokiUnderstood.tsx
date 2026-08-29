import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gintamaGintokiUnderstood: Template = {
    name: "gintamaGintokiUnderstood",
    displayName: buildLocales("Gintoki understood", {
        [Locale.Russian]: "Гинтоки понял",
        [Locale.Ukrainian]: "Гінтокі зрозумів",
        [Locale.Dutch]: "Gintoki begrijpt het",
        [Locale.French]: "Gintoki a compris",
        [Locale.German]: "Gintoki hat verstanden",
        [Locale.Polish]: "Gintoki zrozumiał",
        [Locale.SpanishES]: "Gintoki entendió",
        [Locale.SpanishLATAM]: "Gintoki entendió",
        [Locale.PortugueseBR]: "Gintoki entendeu",
        [Locale.Turkish]: "Gintoki anladı",
        [Locale.Italian]: "Gintoki ha capito",
        [Locale.Indonesian]: "Gintoki mengerti",
        [Locale.Czech]: "Gintoki pochopil",
        [Locale.Japanese]: "理解した銀時",
        [Locale.Korean]: "이해한 긴토키",
        [Locale.ChineseCN]: "银时懂了",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextRightWithBackground],
    width: 1470,
    height: 702,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gintamaGintokiUnderstood.png"
                width={735}
                height={702}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
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
