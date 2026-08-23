import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const robotVacuumArtist: Template = {
    name: "robotVacuumArtist",
    displayName: buildLocales("Robot vacuum artist", {
        [Locale.Russian]: "Художник робот-пылесос",
        [Locale.Ukrainian]: "Художник робот-пилосос",
        [Locale.Dutch]: "Robotstofzuiger kunstenaar",
        [Locale.French]: "Robot aspirateur artiste",
        [Locale.German]: "Saugroboter-Künstler",
        [Locale.Polish]: "Artysta robot odkurzacz",
        [Locale.SpanishES]: "Robot aspirador artista",
        [Locale.SpanishLATAM]: "Robot aspiradora artista",
        [Locale.PortugueseBR]: "Robô aspirador artista",
        [Locale.Turkish]: "Robot süpürge sanatçısı",
        [Locale.Italian]: "Robot aspirapolvere artista",
        [Locale.Indonesian]: "Seniman robot vakum",
        [Locale.Czech]: "Umělec robotický vysavač",
        [Locale.Japanese]: "ロボット掃除機アーティスト",
        [Locale.Korean]: "로봇 청소기 아티스트",
        [Locale.ChineseCN]: "扫地机器人艺术家",
    }),
    topics: [Topic.Misc],
    types: [Type.TextBottom, Type.FaceImage, Type.Animated],
    width: 457,
    height: 457,
    animationDuration: 4000,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "face" }],
    element: ({ texts, images, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/RoombaArtist.gif"
                width={457}
                height={457}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: 170,
                    left: 100,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 30,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
