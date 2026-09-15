import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const hucUmaruUnrestrainedJoy: Template = {
    name: "hucUmaruUnrestrainedJoy",
    displayName: buildLocales("Umaru unrestrained joy", {
        [Locale.Russian]: "Неудержимая радость Умару",
        [Locale.Ukrainian]: "Нестримна радість Умару",
        [Locale.Dutch]: "Onbeteugelde vreugde van Umaru",
        [Locale.French]: "Joie effrénée d'Umaru",
        [Locale.German]: "Umarus unbändige Freude",
        [Locale.Polish]: "Niepohamowana radość Umaru",
        [Locale.SpanishES]: "Alegría desenfrenada de Umaru",
        [Locale.SpanishLATAM]: "Alegría desenfrenada de Umaru",
        [Locale.PortugueseBR]: "Alegria desenfreada da Umaru",
        [Locale.Turkish]: "Umaru'nun dizginlenemez sevinci",
        [Locale.Italian]: "Gioia irrefrenabile di Umaru",
        [Locale.Indonesian]: "Kegembiraan Umaru yang tak tertahankan",
        [Locale.Czech]: "Nespoutaná radost Umaru",
        [Locale.Japanese]: "抑えきれない喜びのうまる",
        [Locale.Korean]: "주체할 수 없는 기쁨의 우마루",
        [Locale.ChineseCN]: "小埋按捺不住的喜悦",
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/hucUmaruUnrestrainedJoy.png"
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
