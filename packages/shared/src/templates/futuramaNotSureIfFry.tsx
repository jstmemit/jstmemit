import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const futuramaNotSureIfFry: Template = {
    name: "futuramaNotSureIfFry",
    displayName: buildLocales("Not sure if Fry", {
        [Locale.Russian]: "Не уверен (Фрай)",
        [Locale.Ukrainian]: "Не впевнений (Фрай)",
        [Locale.Dutch]: "Niet zeker of Fry",
        [Locale.French]: "Pas sûr (Fry)",
        [Locale.German]: "Nicht sicher, ob Fry",
        [Locale.Polish]: "Nie jestem pewien (Fry)",
        [Locale.SpanishES]: "No estoy seguro (Fry)",
        [Locale.SpanishLATAM]: "No estoy seguro (Fry)",
        [Locale.PortugueseBR]: "Não tenho certeza (Fry)",
        [Locale.Turkish]: "Emin değilim (Fry)",
        [Locale.Italian]: "Non sono sicuro (Fry)",
        [Locale.Indonesian]: "Tidak yakin (Fry)",
        [Locale.Czech]: "Nejsem si jistý (Fry)",
        [Locale.Japanese]: "フライ 疑いの目",
        [Locale.Korean]: "확신이 안 서는 프라이",
        [Locale.ChineseCN]: "不确定（弗莱）",
    }),
    topics: [Topic.Futurama, Topic.Cartoons, Topic.Reaction],
    types: [Type.TextTopWithBackground],
    width: 603,
    height: 519,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/futuramaNotSureIfFry.jpg"
                width={603}
                height={519}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "13%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
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
