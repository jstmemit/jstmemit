import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const userDemotivator: Template = {
    name: "userDemotivator",
    displayName: buildLocales("Demotivator", {
        [Locale.Russian]: "Демотиватор",
        [Locale.Ukrainian]: "Демотиватор",
        [Locale.Dutch]: "Demotivator",
        [Locale.French]: "Démotivateur",
        [Locale.German]: "Demotivator",
        [Locale.Polish]: "Demotywator",
        [Locale.SpanishES]: "Desmotivador",
        [Locale.SpanishLATAM]: "Desmotivador",
        [Locale.PortugueseBR]: "Desmotivador",
        [Locale.Turkish]: "Demotivatör",
        [Locale.Italian]: "Demotivatore",
        [Locale.Indonesian]: "Demotivator",
        [Locale.Czech]: "Demotivátor",
        [Locale.Japanese]: "デモチベーター",
        [Locale.Korean]: "디모티베이터",
        [Locale.ChineseCN]: "反励志图",
    }),
    topics: [Topic.Demotivator],
    types: [Type.ObjectImage, Type.TextBottomWithBackground],
    width: 500,
    height: 570,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "image" }],
    element: ({ texts, images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Comic Sans MS",
                backgroundColor: "black",
            }}
        >
            <img
                src={images[0]}
                width={460}
                height={460}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                    margin: "20px 20px 0 20px",
                    border: "5px double white",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        textOverflow: "ellipsis",
                        wordBreak: "break-word",
                        fontFamily: "Comic Sans MS",
                        fontSize: 30,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "white",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
