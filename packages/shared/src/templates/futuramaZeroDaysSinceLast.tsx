import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const futuramaZeroDaysSinceLast: Template = {
    name: "futuramaZeroDaysSinceLast",
    displayName: buildLocales("Zero days since last", {
        [Locale.Russian]: "Ноль дней с последнего",
        [Locale.Ukrainian]: "Нуль днів з останнього",
        [Locale.Dutch]: "Nul dagen sinds de laatste",
        [Locale.French]: "Zéro jour depuis le dernier",
        [Locale.German]: "Null Tage seit dem letzten",
        [Locale.Polish]: "Zero dni od ostatniego",
        [Locale.SpanishES]: "Cero días desde el último",
        [Locale.SpanishLATAM]: "Cero días desde el último",
        [Locale.PortugueseBR]: "Zero dias desde o último",
        [Locale.Turkish]: "Son seferden bu yana sıfır gün",
        [Locale.Italian]: "Zero giorni dall'ultimo",
        [Locale.Indonesian]: "Nol hari sejak terakhir",
        [Locale.Czech]: "Nula dní od posledního",
        [Locale.Japanese]: "最後から0日",
        [Locale.Korean]: "마지막 이후 0일째",
        [Locale.ChineseCN]: "距上次已过0天",
    }),
    topics: [Topic.Futurama, Topic.Cartoons],
    types: [Type.TextCenterWithBackground],
    width: 640,
    height: 469,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 3 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/futuramaZeroDaysSinceLast.jpg"
                width={640}
                height={469}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "22%",
                    bottom: "33%",
                    width: "45%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    transform: "rotate(3deg)",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 40,
                        fontWeight: 700,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#A72227",
                        textTransform: "uppercase",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
