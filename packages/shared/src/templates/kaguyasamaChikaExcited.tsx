import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const kaguyasamaChikaExcited: Template = {
    name: "kaguyasamaChikaExcited",
    displayName: buildLocales("Excited Chika", {
        [Locale.Russian]: "Чика в восторге",
        [Locale.Ukrainian]: "Чіка в захваті",
        [Locale.Dutch]: "Enthousiaste Chika",
        [Locale.French]: "Chika enthousiaste",
        [Locale.German]: "Begeisterte Chika",
        [Locale.Polish]: "Podekscytowana Chika",
        [Locale.SpanishES]: "Chika emocionada",
        [Locale.SpanishLATAM]: "Chika emocionada",
        [Locale.PortugueseBR]: "Chika empolgada",
        [Locale.Turkish]: "Heyecanlı Chika",
        [Locale.Italian]: "Chika entusiasta",
        [Locale.Indonesian]: "Chika bersemangat",
        [Locale.Czech]: "Nadšená Chika",
        [Locale.Japanese]: "ワクワクするチカ",
        [Locale.Korean]: "신난 치카",
        [Locale.ChineseCN]: "兴奋的千花",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 538,
    height: 412,
    animationDuration: 2600,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaChikaExcited.gif"
                width={538}
                height={302}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
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
