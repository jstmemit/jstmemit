import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const pfTwoGangsterWithGuns: Template = {
    name: "pfTwoGangsterWithGuns",
    displayName: buildLocales("Two gangsters with guns", {
        [Locale.Russian]: "Два гангстера с пушками",
        [Locale.Ukrainian]: "Два гангстери з гарматами",
        [Locale.Dutch]: "Twee gangsters met geweren",
        [Locale.French]: "Deux gangsters avec des flingues",
        [Locale.German]: "Zwei Gangster mit Waffen",
        [Locale.Polish]: "Dwaj gangsterzy z bronią",
        [Locale.SpanishES]: "Dos gánsteres con armas",
        [Locale.SpanishLATAM]: "Dos gánsteres con armas",
        [Locale.PortugueseBR]: "Dois gângsteres com armas",
        [Locale.Turkish]: "Silahlı iki gangster",
        [Locale.Italian]: "Due gangster con le pistole",
        [Locale.Indonesian]: "Dua gangster dengan pistol",
        [Locale.Czech]: "Dva gangsteři se zbraněmi",
        [Locale.Japanese]: "銃を持った2人のギャング",
        [Locale.Korean]: "총 든 갱스터 두 명",
        [Locale.ChineseCN]: "两名拿枪的黑帮",
    }),
    topics: [Topic.PulpFiction, Topic.Movies],
    types: [Type.TextBottom, Type.FaceImage],
    width: 1461,
    height: 822,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
    images: [
        { id: 0, description: "Vincent's face (left)" },
        { id: 1, description: "Jules's face (center left)" },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/pfTwoGangsterWithGuns.png"
                width={1461}
                height={822}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: "5%",
                    left: "30%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: "3%",
                    right: "26%",
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
                    height: "40%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 80,
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
