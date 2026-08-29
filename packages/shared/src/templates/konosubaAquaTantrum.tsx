import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const konosubaAquaTantrum: Template = {
    name: "konosubaAquaTantrum",
    displayName: buildLocales("Aqua throwing a tantrum", {
        [Locale.Russian]: "Аква бьется в истерике",
        [Locale.Ukrainian]: "Аква б'ється в істериці",
        [Locale.Dutch]: "Aqua heeft een driftbui",
        [Locale.French]: "Aqua fait une crise",
        [Locale.German]: "Aqua hat einen Wutanfall",
        [Locale.Polish]: "Aqua ma napad złości",
        [Locale.SpanishES]: "Aqua haciendo un berrinche",
        [Locale.SpanishLATAM]: "Aqua haciendo un berrinche",
        [Locale.PortugueseBR]: "Aqua fazendo birra",
        [Locale.Turkish]: "Öfke nöbeti geçiren Aqua",
        [Locale.Italian]: "Aqua che fa i capricci",
        [Locale.Indonesian]: "Aqua mengamuk",
        [Locale.Czech]: "Aqua má záchvat vzteku",
        [Locale.Japanese]: "駄々をこねるアクア",
        [Locale.Korean]: "떼쓰는 아쿠아",
        [Locale.ChineseCN]: "撒泼的阿库娅",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 370,
    animationDuration: 3870,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konosubaAquaTantrum.gif"
                width={498}
                height={280}
                style={{ position: "absolute", top: 0, right: 0 }}
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
