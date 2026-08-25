import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const evangelionShinjiIkariChairDepression: Template = {
    name: "evangelionShinjiIkariChairDepression",
    displayName: buildLocales("Shinji Ikari chair depression", {
        [Locale.Russian]: "Синдзи Икари грустит на стуле",
        [Locale.Ukrainian]: "Шінджі Ікарі сумує на стільці",
        [Locale.Dutch]: "Shinji Ikari depressief op stoel",
        [Locale.French]: "Shinji Ikari déprimé sur sa chaise",
        [Locale.German]: "Shinji Ikari deprimiert auf dem Stuhl",
        [Locale.Polish]: "Shinji Ikari w depresji na krześle",
        [Locale.SpanishES]: "Shinji Ikari deprimido en la silla",
        [Locale.SpanishLATAM]: "Shinji Ikari deprimido en la silla",
        [Locale.PortugueseBR]: "Shinji Ikari deprimido na cadeira",
        [Locale.Turkish]: "Shinji Ikari sandalyede depresyonda",
        [Locale.Italian]: "Shinji Ikari depresso sulla sedia",
        [Locale.Indonesian]: "Shinji Ikari depresi di kursi",
        [Locale.Czech]: "Shinji Ikari sklíčený na židli",
        [Locale.Japanese]: "椅子で落ち込むシンジ・イカリ",
        [Locale.Korean]: "의자에서 우울한 신지 이카리",
        [Locale.ChineseCN]: "碇真嗣坐椅子上沮丧",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Evangelion],
    types: [Type.TextTopWithBackground],
    width: 604,
    height: 563,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/evangelionShinjiIkariChairDepression.png"
                width={604}
                height={453}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "black",
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
                        color: "#ffffff",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
