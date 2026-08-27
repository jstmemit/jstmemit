import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiScaredScream: Template = {
    name: "btrBocchiScaredScream",
    displayName: buildLocales("Bocchi scared scream", {
        [Locale.Russian]: "Бокки испуганно кричит",
        [Locale.Ukrainian]: "Боккі перелякано кричить",
        [Locale.Dutch]: "Bocchi bang gillend",
        [Locale.French]: "Bocchi hurle de peur",
        [Locale.German]: "Bocchi schreit vor Angst",
        [Locale.Polish]: "Bocchi krzyczy ze strachu",
        [Locale.SpanishES]: "Bocchi grita asustada",
        [Locale.SpanishLATAM]: "Bocchi grita asustada",
        [Locale.PortugueseBR]: "Bocchi grita assustada",
        [Locale.Turkish]: "Bocchi korkuyla çığlık atıyor",
        [Locale.Italian]: "Bocchi urla spaventata",
        [Locale.Indonesian]: "Bocchi berteriak ketakutan",
        [Locale.Czech]: "Bocchi vyděšeně křičí",
        [Locale.Japanese]: "怖くて叫ぶぼっち",
        [Locale.Korean]: "겁먹고 비명 지르는 봇치",
        [Locale.ChineseCN]: "波奇惊恐尖叫",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextLeftWithBackground],
    width: 800,
    height: 500,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 15 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiScaredScream.png"
                width={400}
                height={500}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
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
                        lineClamp: 8,
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
