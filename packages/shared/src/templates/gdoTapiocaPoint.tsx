import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gdoTapiocaPoint: Template = {
    name: "gdoTapiocaPoint",
    displayName: buildLocales("Tapioca pointing", {
        [Locale.Russian]: "Тапиока указывает",
        [Locale.Ukrainian]: "Тапіока вказує",
        [Locale.Dutch]: "Tapioca wijst",
        [Locale.French]: "Tapioca qui pointe",
        [Locale.German]: "Tapioca zeigt",
        [Locale.Polish]: "Tapioca wskazuje",
        [Locale.SpanishES]: "Tapioca señalando",
        [Locale.SpanishLATAM]: "Tapioca señalando",
        [Locale.PortugueseBR]: "Tapioca apontando",
        [Locale.Turkish]: "Tapioca işaret ediyor",
        [Locale.Italian]: "Tapioca che indica",
        [Locale.Indonesian]: "Tapioca menunjuk",
        [Locale.Czech]: "Tapioca ukazuje",
        [Locale.Japanese]: "指差すタピオカ",
        [Locale.Korean]: "가리키는 타피오카",
        [Locale.ChineseCN]: "指路的塔皮奥卡",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GabrielDropOut],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 374,
    animationDuration: 2320,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gdoTapiocaPoint.gif"
                width={500}
                height={274}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
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
