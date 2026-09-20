import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const dandadanTurboGrannyDance1: Template = {
    name: "dandadanTurboGrannyDance1",
    displayName: buildLocales("Turbo Granny dancing 1", {
        [Locale.Russian]: "Турбо Бабуля танцует 1",
        [Locale.Ukrainian]: "Турбо Бабуся танцює 1",
        [Locale.Dutch]: "Turbo Granny danst 1",
        [Locale.French]: "Turbo Granny qui danse 1",
        [Locale.German]: "Turbo-Granny tanzt 1",
        [Locale.Polish]: "Turbo Babcia tańczy 1",
        [Locale.SpanishES]: "Turbo Granny bailando 1",
        [Locale.SpanishLATAM]: "Turbo Granny bailando 1",
        [Locale.PortugueseBR]: "Turbo Granny dançando 1",
        [Locale.Turkish]: "Turbo Granny dans ediyor 1",
        [Locale.Italian]: "Turbo Granny che balla 1",
        [Locale.Indonesian]: "Turbo Granny menari 1",
        [Locale.Czech]: "Turbo Granny tančí 1",
        [Locale.Japanese]: "踊るターボババア 1",
        [Locale.Korean]: "춤추는 터보 할멈 1",
        [Locale.ChineseCN]: "高速婆婆跳舞 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Dandadan],
    types: [Type.TextBottomWithBackground],
    width: 1280,
    height: 950,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dandadanTurboGrannyDance1.png"
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
                    height: "230px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "25px",
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
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
