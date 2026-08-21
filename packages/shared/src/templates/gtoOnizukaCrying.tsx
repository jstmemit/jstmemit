import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gtoOnizukaCrying: Template = {
    name: "gtoOnizukaCrying",
    displayName: buildLocales("Crying Onizuka", {
        [Locale.Russian]: "Плачущий Онидзука",
        [Locale.Ukrainian]: "Заплаканий Онідзука",
        [Locale.Dutch]: "Huilende Onizuka",
        [Locale.French]: "Onizuka qui pleure",
        [Locale.German]: "Weinender Onizuka",
        [Locale.Polish]: "Płaczący Onizuka",
        [Locale.SpanishES]: "Onizuka llorando",
        [Locale.SpanishLATAM]: "Onizuka llorando",
        [Locale.PortugueseBR]: "Onizuka chorando",
        [Locale.Turkish]: "Ağlayan Onizuka",
        [Locale.Italian]: "Onizuka che piange",
        [Locale.Indonesian]: "Onizuka menangis",
        [Locale.Czech]: "Plačící Onizuka",
        [Locale.Japanese]: "泣く鬼塚",
        [Locale.Korean]: "우는 오니즈카",
        [Locale.ChineseCN]: "大哭的鬼冢",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GreatTeacherOnizuka],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 465,
    animationDuration: 540,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gtoOnizukaCrying.gif"
                width={500}
                height={375}
                style={{ position: "absolute", top: 0, left: 0 }}
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
