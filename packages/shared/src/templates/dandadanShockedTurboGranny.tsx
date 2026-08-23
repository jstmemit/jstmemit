import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const dandadanShockedTurboGranny: Template = {
    name: "dandadanShockedTurboGranny",
    displayName: buildLocales("Shocked Turbo Granny cat", {
        [Locale.Russian]: "Шокированный кот Турбо Бабуля",
        [Locale.Ukrainian]: "Шокований кіт Турбо Бабуся",
        [Locale.Dutch]: "Geschokte Turbo Granny kat",
        [Locale.French]: "Chat Turbo Granny choqué",
        [Locale.German]: "Schockierte Turbo-Granny-Katze",
        [Locale.Polish]: "Zszokowany kot Turbo Babcia",
        [Locale.SpanishES]: "Gato Turbo Granny en shock",
        [Locale.SpanishLATAM]: "Gato Turbo Granny en shock",
        [Locale.PortugueseBR]: "Gato Turbo Granny chocado",
        [Locale.Turkish]: "Şoke olmuş Turbo Granny kedisi",
        [Locale.Italian]: "Gatto Turbo Granny scioccato",
        [Locale.Indonesian]: "Kucing Turbo Granny terkejut",
        [Locale.Czech]: "Šokovaný kocour Turbo Granny",
        [Locale.Japanese]: "ショックを受けたターボババア猫",
        [Locale.Korean]: "충격받은 터보 할멈 고양이",
        [Locale.ChineseCN]: "震惊的高速婆婆猫",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Dandadan],
    types: [Type.TextTopWithBackground],
    width: 1200,
    height: 1500,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dandadanShockedTurboGranny.png"
                width={1200}
                height={1250}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "250px",
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
                        fontSize: 70,
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
