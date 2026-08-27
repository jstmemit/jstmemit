import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gdoSataniaThumbsUp1: Template = {
    name: "gdoSataniaThumbsUp1",
    displayName: buildLocales("Satania thumbs up 1", {
        [Locale.Russian]: "Сатания показывает большой палец 1",
        [Locale.Ukrainian]: "Сатанія показує великий палець 1",
        [Locale.Dutch]: "Satania duim omhoog 1",
        [Locale.French]: "Satania pouce en l'air 1",
        [Locale.German]: "Satania Daumen hoch 1",
        [Locale.Polish]: "Satania z kciukiem w górę 1",
        [Locale.SpanishES]: "Satania pulgar arriba 1",
        [Locale.SpanishLATAM]: "Satania pulgar arriba 1",
        [Locale.PortugueseBR]: "Satania polegar para cima 1",
        [Locale.Turkish]: "Satania başparmak havaya 1",
        [Locale.Italian]: "Satania pollice in su 1",
        [Locale.Indonesian]: "Satania jempol ke atas 1",
        [Locale.Czech]: "Satania palec nahoru 1",
        [Locale.Japanese]: "サムズアップするサターニャ 1",
        [Locale.Korean]: "사타냐 엄지 척 1",
        [Locale.ChineseCN]: "萨塔妮亚竖大拇指 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GabrielDropOut],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 394,
    animationDuration: 2280,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gdoSataniaThumbsUp1.gif"
                width={540}
                height={304}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
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
                        fontFamily: "Comic Sans MS",
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
