import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const selLainFunnyILaugh: Template = {
    name: "selLainFunnyILaugh",
    displayName: buildLocales("Lain funny I laugh", {
        [Locale.Russian]: "Лэйн: смешно, я смеюсь",
        [Locale.Ukrainian]: "Лейн: смішно, я сміюся",
        [Locale.Dutch]: "Lain grappig ik lach",
        [Locale.French]: "Lain drôle je ris",
        [Locale.German]: "Lain lustig ich lache",
        [Locale.Polish]: "Lain zabawne śmieję się",
        [Locale.SpanishES]: "Lain gracioso me río",
        [Locale.SpanishLATAM]: "Lain gracioso me río",
        [Locale.PortugueseBR]: "Lain engraçado eu rio",
        [Locale.Turkish]: "Lain komik gülüyorum",
        [Locale.Italian]: "Lain divertente rido",
        [Locale.Indonesian]: "Lain lucu aku tertawa",
        [Locale.Czech]: "Lain vtipné směju se",
        [Locale.Japanese]: "玲音 面白い 笑う",
        [Locale.Korean]: "레인 재밌네 웃긴다",
        [Locale.ChineseCN]: "玲音 搞笑我笑了",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SerialExperimentsLain],
    types: [Type.DefaultText, Type.TextRightWithBackground],
    width: 1000,
    height: 480,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/selLainFunnyILaugh.png"
                width={500}
                height={480}
                style={{ position: "absolute", bottom: 0, left: 0 }}
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
                    padding: "20px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
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
