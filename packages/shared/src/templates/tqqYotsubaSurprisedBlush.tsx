import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tqqYotsubaSurprisedBlush: Template = {
    name: "tqqYotsubaSurprisedBlush",
    displayName: buildLocales("Yotsuba surprised blush", {
        [Locale.Russian]: "Удивленная и смущенная Йоцуба",
        [Locale.Ukrainian]: "Здивована та збентежена Йоцуба",
        [Locale.Dutch]: "Verraste en blozende Yotsuba",
        [Locale.French]: "Yotsuba surprise et rougissante",
        [Locale.German]: "Überraschte und errötende Yotsuba",
        [Locale.Polish]: "Zaskoczona i zarumieniona Yotsuba",
        [Locale.SpanishES]: "Yotsuba sorprendida y sonrojada",
        [Locale.SpanishLATAM]: "Yotsuba sorprendida y sonrojada",
        [Locale.PortugueseBR]: "Yotsuba surpresa e corada",
        [Locale.Turkish]: "Şaşırmış ve kızaran Yotsuba",
        [Locale.Italian]: "Yotsuba sorpresa e arrossita",
        [Locale.Indonesian]: "Yotsuba terkejut dan tersipu",
        [Locale.Czech]: "Překvapená a červenající se Yotsuba",
        [Locale.Japanese]: "驚いて赤面する四葉",
        [Locale.Korean]: "놀라서 얼굴을 붉히는 요츠바",
        [Locale.ChineseCN]: "惊讶脸红的四叶",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.TheQuintessentialQuintuplets],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 600,
    height: 400,
    animationDuration: 3730,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tqqYotsubaSurprisedBlush.gif"
                width={300}
                height={400}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 9,
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
