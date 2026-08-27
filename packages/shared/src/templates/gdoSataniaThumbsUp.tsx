import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gdoSataniaThumbsUp: Template = {
    name: "gdoSataniaThumbsUp",
    displayName: buildLocales("Satania thumbs up", {
        [Locale.Russian]: "Сатания показывает большой палец",
        [Locale.Ukrainian]: "Сатанія показує великий палець",
        [Locale.Dutch]: "Satania duim omhoog",
        [Locale.French]: "Satania pouce en l'air",
        [Locale.German]: "Satania Daumen hoch",
        [Locale.Polish]: "Satania z kciukiem w górę",
        [Locale.SpanishES]: "Satania pulgar arriba",
        [Locale.SpanishLATAM]: "Satania pulgar arriba",
        [Locale.PortugueseBR]: "Satania polegar para cima",
        [Locale.Turkish]: "Satania başparmak havaya",
        [Locale.Italian]: "Satania pollice in su",
        [Locale.Indonesian]: "Satania jempol ke atas",
        [Locale.Czech]: "Satania palec nahoru",
        [Locale.Japanese]: "サムズアップするサターニャ",
        [Locale.Korean]: "사타냐 엄지 척",
        [Locale.ChineseCN]: "萨塔妮亚竖大拇指",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GabrielDropOut],
    types: [Type.TextTopWithBackground],
    width: 1200,
    height: 875,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gdoSataniaThumbsUp.png"
                width={1200}
                height={675}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
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
