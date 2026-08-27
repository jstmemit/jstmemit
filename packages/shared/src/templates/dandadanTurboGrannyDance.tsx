import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const dandadanTurboGrannyDance: Template = {
    name: "dandadanTurboGrannyDance",
    displayName: buildLocales("Turbo Granny dancing", {
        [Locale.Russian]: "Турбо Бабуля танцует",
        [Locale.Ukrainian]: "Турбо Бабуся танцює",
        [Locale.Dutch]: "Turbo Granny danst",
        [Locale.French]: "Turbo Granny qui danse",
        [Locale.German]: "Turbo-Granny tanzt",
        [Locale.Polish]: "Turbo Babcia tańczy",
        [Locale.SpanishES]: "Turbo Granny bailando",
        [Locale.SpanishLATAM]: "Turbo Granny bailando",
        [Locale.PortugueseBR]: "Turbo Granny dançando",
        [Locale.Turkish]: "Turbo Granny dans ediyor",
        [Locale.Italian]: "Turbo Granny che balla",
        [Locale.Indonesian]: "Turbo Granny menari",
        [Locale.Czech]: "Turbo Granny tančí",
        [Locale.Japanese]: "踊るターボババア",
        [Locale.Korean]: "춤추는 터보 할멈",
        [Locale.ChineseCN]: "高速婆婆跳舞",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Dandadan],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 1280,
    height: 920,
    animationDuration: 4000,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/dandadanTurboGrannyDance.gif"
                width={1280}
                height={720}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "200px",
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
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
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
