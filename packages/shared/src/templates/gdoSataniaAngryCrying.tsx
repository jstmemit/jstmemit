import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gdoSataniaAngryCrying: Template = {
    name: "gdoSataniaAngryCrying",
    displayName: buildLocales("Satania crying angrily", {
        [Locale.Russian]: "Сатания злобно плачет",
        [Locale.Ukrainian]: "Сатанія злісно плаче",
        [Locale.Dutch]: "Satania huilt boos",
        [Locale.French]: "Satania qui pleure de colère",
        [Locale.German]: "Satania weint wütend",
        [Locale.Polish]: "Satania płacze ze złości",
        [Locale.SpanishES]: "Satania llorando de enfado",
        [Locale.SpanishLATAM]: "Satania llorando de enojo",
        [Locale.PortugueseBR]: "Satania chorando de raiva",
        [Locale.Turkish]: "Satania öfkeyle ağlıyor",
        [Locale.Italian]: "Satania che piange arrabbiata",
        [Locale.Indonesian]: "Satania menangis dengan marah",
        [Locale.Czech]: "Satania naštvaně pláče",
        [Locale.Japanese]: "怒り泣きするサターニャ",
        [Locale.Korean]: "화내며 우는 사타냐",
        [Locale.ChineseCN]: "萨塔妮亚气哭",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GabrielDropOut],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 600,
    height: 428,
    animationDuration: 1500,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [],
    element: ({ texts }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Comic Sans MS",
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gdoSataniaAngryCrying.gif"
                width={600}
                height={338}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
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
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
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
