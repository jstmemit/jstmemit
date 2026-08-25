import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const hucUmaruTransformation: Template = {
    name: "hucUmaruTransformation",
    displayName: buildLocales("Umaru's transformation", {
        [Locale.Russian]: "Превращение Умару",
        [Locale.Ukrainian]: "Перетворення Умару",
        [Locale.Dutch]: "Umaru's transformatie",
        [Locale.French]: "Transformation d'Umaru",
        [Locale.German]: "Umarus Verwandlung",
        [Locale.Polish]: "Przemiana Umaru",
        [Locale.SpanishES]: "Transformación de Umaru",
        [Locale.SpanishLATAM]: "Transformación de Umaru",
        [Locale.PortugueseBR]: "Transformação da Umaru",
        [Locale.Turkish]: "Umaru'nun dönüşümü",
        [Locale.Italian]: "Trasformazione di Umaru",
        [Locale.Indonesian]: "Transformasi Umaru",
        [Locale.Czech]: "Proměna Umaru",
        [Locale.Japanese]: "うまるの変身",
        [Locale.Korean]: "우마루의 변신",
        [Locale.ChineseCN]: "小埋变身",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 823,
    height: 612,
    animationDuration: 4000,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/hucUmaruTransformation.gif"
                width={823}
                height={462}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "150px",
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
                        fontSize: 50,
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
