import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const konosubaMeguminApproves: Template = {
    name: "konosubaMeguminApproves",
    displayName: buildLocales("Megumin approving", {
        [Locale.Russian]: "Мегумин одобряет",
        [Locale.Ukrainian]: "Меґумін схвалює",
        [Locale.Dutch]: "Goedkeurende Megumin",
        [Locale.French]: "Megumin qui approuve",
        [Locale.German]: "Zustimmende Megumin",
        [Locale.Polish]: "Megumin aprobuje",
        [Locale.SpanishES]: "Megumin aprobando",
        [Locale.SpanishLATAM]: "Megumin aprobando",
        [Locale.PortugueseBR]: "Megumin aprovando",
        [Locale.Turkish]: "Onaylayan Megumin",
        [Locale.Italian]: "Megumin che approva",
        [Locale.Indonesian]: "Megumin menyetujui",
        [Locale.Czech]: "Schvalující Megumin",
        [Locale.Japanese]: "賛成するめぐみん",
        [Locale.Korean]: "찬성하는 메구민",
        [Locale.ChineseCN]: "赞同的惠惠",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 712,
    height: 498,
    animationDuration: 1170,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 14 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konosubaMeguminApproves.gif"
                width={356}
                height={498}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "20px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 9,
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
