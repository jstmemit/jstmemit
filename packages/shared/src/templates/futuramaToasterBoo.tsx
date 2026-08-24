import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const futuramaToasterBoo: Template = {
    name: "futuramaToasterBoo",
    displayName: buildLocales("Toaster boo", {
        [Locale.Russian]: "Тостер бу",
        [Locale.Ukrainian]: "Тостер бу",
        [Locale.Dutch]: "Broodrooster boe",
        [Locale.French]: "Grille-pain bouh",
        [Locale.German]: "Toaster Buh",
        [Locale.Polish]: "Toster bu",
        [Locale.SpanishES]: "Tostadora bu",
        [Locale.SpanishLATAM]: "Tostadora bu",
        [Locale.PortugueseBR]: "Torradeira boo",
        [Locale.Turkish]: "Tost makinesi böö",
        [Locale.Italian]: "Tostapane bu",
        [Locale.Indonesian]: "Pemanggang roti boo",
        [Locale.Czech]: "Toustovač baf",
        [Locale.Japanese]: "トースター いないいないばあ",
        [Locale.Korean]: "토스터 까꿍",
        [Locale.ChineseCN]: "烤面包机 boo",
    }),
    topics: [Topic.Futurama, Topic.Cartoons, Topic.Reaction],
    types: [Type.FaceImage, Type.TextCenterWithBackground, Type.FourOption],
    width: 539,
    height: 1214,
    texts: [
        { id: 0, description: "text on first bread", minLength: 1, maxLength: 5 },
        { id: 1, description: "text on second bread", minLength: 1, maxLength: 4 },
    ],
    images: [{ id: 0, description: "Fry`s face" }],
    element: ({ texts, images, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/futuramaToasterBoo.png"
                width={539}
                height={1214}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: "4%",
                    right: "26%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: "79%",
                    right: "24%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "39%",
                    top: "30%",
                    width: "29%",
                    height: "16%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    transform: "rotate(-5deg)",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
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
            <div
                style={{
                    position: "absolute",
                    left: "20%",
                    top: "55%",
                    width: "29%",
                    height: "16%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    transform: "rotate(-5deg)",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
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
            <div
                style={{
                    position: "absolute",
                    right: "20%",
                    top: "54%",
                    width: "27%",
                    height: "13%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    transform: "rotate(-3deg)",
                }}
            >
                <div
                    style={{
                        lineClamp: 4,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 30,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
