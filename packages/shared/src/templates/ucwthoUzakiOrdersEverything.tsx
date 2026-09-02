import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const ucwthoUzakiOrdersEverything: Template = {
    name: "ucwthoUzakiOrdersEverything",
    displayName: buildLocales("Uzaki orders everything", {
        [Locale.Russian]: "Узаки заказывает всё",
        [Locale.Ukrainian]: "Узакі замовляє все",
        [Locale.Dutch]: "Uzaki bestelt alles",
        [Locale.French]: "Uzaki commande tout",
        [Locale.German]: "Uzaki bestellt alles",
        [Locale.Polish]: "Uzaki zamawia wszystko",
        [Locale.SpanishES]: "Uzaki lo pide todo",
        [Locale.SpanishLATAM]: "Uzaki lo pide todo",
        [Locale.PortugueseBR]: "Uzaki pede tudo",
        [Locale.Turkish]: "Uzaki her şeyi sipariş ediyor",
        [Locale.Italian]: "Uzaki ordina tutto",
        [Locale.Indonesian]: "Uzaki memesan semuanya",
        [Locale.Czech]: "Uzaki objednává všechno",
        [Locale.Japanese]: "全部注文する宇崎",
        [Locale.Korean]: "전부 주문하는 우자키",
        [Locale.ChineseCN]: "宇崎全都要",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.UzakiChanWantsToHangOut],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 853,
    height: 640,
    animationDuration: 200,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/ucwthoUzakiOrdersEverything.gif"
                width={853}
                height={480}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "160px",
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
