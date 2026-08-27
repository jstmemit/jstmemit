import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const myHonestReaction: Template = {
    name: "myHonestReaction",
    displayName: buildLocales("My honest reaction", {
        [Locale.Russian]: "Моя честная реакция",
        [Locale.Ukrainian]: "Моя чесна реакція",
        [Locale.Dutch]: "Mijn eerlijke reactie",
        [Locale.French]: "Ma réaction honnête",
        [Locale.German]: "Meine ehrliche Reaktion",
        [Locale.Polish]: "Moja szczera reakcja",
        [Locale.SpanishES]: "Mi reacción honesta",
        [Locale.SpanishLATAM]: "Mi reacción honesta",
        [Locale.PortugueseBR]: "Minha reação honesta",
        [Locale.Turkish]: "Dürüst tepkim",
        [Locale.Italian]: "La mia reazione onesta",
        [Locale.Indonesian]: "Reaksi jujurku",
        [Locale.Czech]: "Moje upřímná reakce",
        [Locale.Japanese]: "私の正直なリアクション",
        [Locale.Korean]: "나의 솔직한 반응",
        [Locale.ChineseCN]: "我的真实反应",
    }),
    topics: [Topic.Reaction],
    types: [Type.DefaultText, Type.FaceImage],
    width: 900,
    height: 1000,
    texts: [],
    images: [{ id: 0, description: "person face" }],
    element: ({ images }: TemplateProps) => (
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
                src={images[0]}
                width={900}
                height={900}
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    objectFit: "cover",
                }}
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
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 1,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize("MY HONEST REACTION"),
                        fontWeight: 700,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    MY HONEST REACTION
                </div>
            </div>
        </div>
    ),
};
