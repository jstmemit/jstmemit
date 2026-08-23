import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const acNowKillHim: Template = {
    name: "acNowKillHim",
    displayName: buildLocales("Now kill him", {
        [Locale.Russian]: "Теперь убей его",
        [Locale.Ukrainian]: "Тепер вбий його",
        [Locale.Dutch]: "Dood hem nu",
        [Locale.French]: "Maintenant, tue-le",
        [Locale.German]: "Jetzt töte ihn",
        [Locale.Polish]: "Teraz go zabij",
        [Locale.SpanishES]: "Ahora mátalo",
        [Locale.SpanishLATAM]: "Ahora mátalo",
        [Locale.PortugueseBR]: "Agora mate-o",
        [Locale.Turkish]: "Şimdi onu öldür",
        [Locale.Italian]: "Ora uccidilo",
        [Locale.Indonesian]: "Sekarang bunuh dia",
        [Locale.Czech]: "Teď ho zabij",
        [Locale.Japanese]: "今すぐ奴を殺せ",
        [Locale.Korean]: "이제 그를 죽여",
        [Locale.ChineseCN]: "现在杀了他",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AssassinationClassroom],
    types: [Type.TextTopWithBackground, Type.FaceImage, Type.DefaultText],
    width: 445,
    height: 382,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "person face" }],
    element: ({ texts, images }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/acNowKillHim.png"
                width={445}
                height={272}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={70}
                height={70}
                style={{
                    position: "absolute",
                    bottom: 100,
                    left: 100,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
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
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 30,
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
