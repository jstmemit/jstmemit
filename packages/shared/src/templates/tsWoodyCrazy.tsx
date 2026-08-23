import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const tsWoodyCrazy: Template = {
    name: "tsWoodyCrazy",
    displayName: buildLocales("Crazy Woody", {
        [Locale.Russian]: "Безумный Вуди",
        [Locale.Ukrainian]: "Божевільний Вуді",
        [Locale.Dutch]: "Gekke Woody",
        [Locale.French]: "Woody fou",
        [Locale.German]: "Verrückter Woody",
        [Locale.Polish]: "Szalony Chudy",
        [Locale.SpanishES]: "Woody loco",
        [Locale.SpanishLATAM]: "Woody loco",
        [Locale.PortugueseBR]: "Woody louco",
        [Locale.Turkish]: "Çılgın Woody",
        [Locale.Italian]: "Woody pazzo",
        [Locale.Indonesian]: "Woody gila",
        [Locale.Czech]: "Šílený Woody",
        [Locale.Japanese]: "クレイジーなウッディ",
        [Locale.Korean]: "미친 우디",
        [Locale.ChineseCN]: "疯狂的胡迪",
    }),
    topics: [Topic.Reaction, Topic.Cartoons, Topic.ToyStory],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 584,
    animationDuration: 1000,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tsWoodyCrazy.gif"
                width={498}
                height={494}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
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
