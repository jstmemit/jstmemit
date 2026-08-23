import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const hucUmaruWhiningCry: Template = {
    name: "hucUmaruWhiningCry",
    displayName: buildLocales("Umaru whining cry", {
        [Locale.Russian]: "Умару ноет и плачет",
        [Locale.Ukrainian]: "Умару ниє і плаче",
        [Locale.Dutch]: "Umaru zeurend huilen",
        [Locale.French]: "Umaru pleurnichant",
        [Locale.German]: "Umaru winselt und weint",
        [Locale.Polish]: "Umaru jęczy i płacze",
        [Locale.SpanishES]: "Umaru lloriqueando",
        [Locale.SpanishLATAM]: "Umaru lloriqueando",
        [Locale.PortugueseBR]: "Umaru choramingando",
        [Locale.Turkish]: "Mızmızlanarak ağlayan Umaru",
        [Locale.Italian]: "Umaru che piagnucola",
        [Locale.Indonesian]: "Umaru merengek menangis",
        [Locale.Czech]: "Umaru kňourá a pláče",
        [Locale.Japanese]: "駄々をこねて泣くうまる",
        [Locale.Korean]: "징징대며 우는 우마루",
        [Locale.ChineseCN]: "撒娇大哭的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextRightWithBackground],
    width: 894,
    height: 447,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/hucUmaruWhiningCry.png"
                width={447}
                height={447}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 60,
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
