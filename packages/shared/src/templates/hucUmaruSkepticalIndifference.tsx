import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const hucUmaruSkepticalIndifference: Template = {
    name: "hucUmaruSkepticalIndifference",
    displayName: buildLocales("Umaru skeptical indifference", {
        [Locale.Russian]: "Скептическое безразличие Умару",
        [Locale.Ukrainian]: "Скептична байдужість Умару",
        [Locale.Dutch]: "Sceptische onverschilligheid van Umaru",
        [Locale.French]: "Indifférence sceptique d'Umaru",
        [Locale.German]: "Umarus skeptische Gleichgültigkeit",
        [Locale.Polish]: "Sceptyczna obojętność Umaru",
        [Locale.SpanishES]: "Indiferencia escéptica de Umaru",
        [Locale.SpanishLATAM]: "Indiferencia escéptica de Umaru",
        [Locale.PortugueseBR]: "Indiferença cética da Umaru",
        [Locale.Turkish]: "Umaru'nun şüpheci kayıtsızlığı",
        [Locale.Italian]: "Indifferenza scettica di Umaru",
        [Locale.Indonesian]: "Ketidakpedulian skeptis Umaru",
        [Locale.Czech]: "Skeptická lhostejnost Umaru",
        [Locale.Japanese]: "懐疑的で無関心なうまる",
        [Locale.Korean]: "회의적이고 무관심한 우마루",
        [Locale.ChineseCN]: "怀疑且无所谓的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextTopWithBackground],
    width: 500,
    height: 387,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/hucUmaruSkepticalIndifference.png"
                width={500}
                height={287}
                style={{ position: "absolute", bottom: 0, left: 0 }}
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
