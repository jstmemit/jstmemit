import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const snkNekoNekoyamadaCuteSleeves: Template = {
    name: "snkNekoNekoyamadaCuteSleeves",
    displayName: buildLocales("Neko Nekoyamada cute sleeves", {
        [Locale.Russian]: "Милые рукава Нэко Нэкоямады",
        [Locale.Ukrainian]: "Милі рукава Неко Некоямади",
        [Locale.Dutch]: "Neko Nekoyamada schattige mouwen",
        [Locale.French]: "Neko Nekoyamada manches mignonnes",
        [Locale.German]: "Neko Nekoyamada süße Ärmel",
        [Locale.Polish]: "Urocze rękawy Neko Nekoyamady",
        [Locale.SpanishES]: "Mangas lindas de Neko Nekoyamada",
        [Locale.SpanishLATAM]: "Mangas lindas de Neko Nekoyamada",
        [Locale.PortugueseBR]: "Neko Nekoyamada mangas fofas",
        [Locale.Turkish]: "Neko Nekoyamada tatlı kollar",
        [Locale.Italian]: "Neko Nekoyamada maniche carine",
        [Locale.Indonesian]: "Lengan imut Neko Nekoyamada",
        [Locale.Czech]: "Neko Nekoyamada roztomilé rukávy",
        [Locale.Japanese]: "猫柳田 萌え袖",
        [Locale.Korean]: "네코 네코야마다 귀여운 소매",
        [Locale.ChineseCN]: "猫猫山田 可爱袖子",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.ShikanokoNokonokoKoshitantan],
    types: [Type.TextRightWithBackground],
    width: 1472,
    height: 736,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 15 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/snkNekoNekoyamadaCuteSleeves.png"
                width={736}
                height={736}
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
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 90,
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
