import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const hucUmaruRunningCrying: Template = {
    name: "hucUmaruRunningCrying",
    displayName: buildLocales("Umaru running and crying", {
        [Locale.Russian]: "Умару бежит и плачет",
        [Locale.Ukrainian]: "Умару біжить і плаче",
        [Locale.Dutch]: "Rennende en huilende Umaru",
        [Locale.French]: "Umaru qui court en pleurant",
        [Locale.German]: "Rennende und weinende Umaru",
        [Locale.Polish]: "Biegnąca i płacząca Umaru",
        [Locale.SpanishES]: "Umaru corriendo y llorando",
        [Locale.SpanishLATAM]: "Umaru corriendo y llorando",
        [Locale.PortugueseBR]: "Umaru correndo e chorando",
        [Locale.Turkish]: "Ağlayarak koşan Umaru",
        [Locale.Italian]: "Umaru che corre piangendo",
        [Locale.Indonesian]: "Umaru berlari sambil menangis",
        [Locale.Czech]: "Běžící a plačící Umaru",
        [Locale.Japanese]: "泣きながら走るうまる",
        [Locale.Korean]: "울면서 달리는 우마루",
        [Locale.ChineseCN]: "边哭边跑的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 380,
    animationDuration: 4500,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/hucUmaruRunningCrying.gif"
                width={500}
                height={280}
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
