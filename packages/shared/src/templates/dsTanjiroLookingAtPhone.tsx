import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const dsTanjiroLookingAtPhone: Template = {
    name: "dsTanjiroLookingAtPhone",
    displayName: buildLocales("Tanjiro looking at phone", {
        [Locale.Russian]: "Тандзиро смотрит в телефон",
        [Locale.Ukrainian]: "Тандзіро дивиться в телефон",
        [Locale.Dutch]: "Tanjiro kijkt naar telefoon",
        [Locale.French]: "Tanjiro regarde son téléphone",
        [Locale.German]: "Tanjiro schaut aufs Handy",
        [Locale.Polish]: "Tanjiro patrzy w telefon",
        [Locale.SpanishES]: "Tanjiro mirando el teléfono",
        [Locale.SpanishLATAM]: "Tanjiro mirando el teléfono",
        [Locale.PortugueseBR]: "Tanjiro olhando o celular",
        [Locale.Turkish]: "Tanjiro telefona bakıyor",
        [Locale.Italian]: "Tanjiro che guarda il telefono",
        [Locale.Indonesian]: "Tanjiro melihat ponsel",
        [Locale.Czech]: "Tanjiro se dívá na telefon",
        [Locale.Japanese]: "スマホを見る炭治郎",
        [Locale.Korean]: "휴대폰을 보는 탄지로",
        [Locale.ChineseCN]: "炭治郎看手机",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DemonSlayer, Topic.SocialPost],
    types: [Type.TextPost, Type.TextName, Type.AvatarImage, Type.FaceImage],
    width: 400,
    height: 400,
    texts: [
        { id: 0, description: "nickname", minLength: 1, maxLength: 5 },
        { id: 1, description: "tag", minLength: 1, maxLength: 5 },
        { id: 2, description: "post", minLength: 1, maxLength: 12 },
    ],
    images: [{ id: 0, description: "user avatar" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dsTanjiroLookingAtPhone.png"
                width={400}
                height={400}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={50}
                height={50}
                style={{
                    position: "absolute",
                    top: 6,
                    left: 11,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "16%",
                    top: "3%",
                    width: "70%",
                    height: "4%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    backgroundColor: "black",
                }}
            >
                <div
                    style={{
                        lineClamp: 1,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 15,
                        fontWeight: 700,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: "16%",
                    top: "8%",
                    width: "70%",
                    height: "4%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    backgroundColor: "black",
                }}
            >
                <div
                    style={{
                        lineClamp: 1,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 15,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#58585b",
                    }}
                >
                    {`@${texts[1]}`}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: "3%",
                    top: "17%",
                    width: "85%",
                    height: "19%",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    backgroundColor: "black",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 20,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#cbcbcb",
                    }}
                >
                    {texts[2]}
                </div>
            </div>
        </div>
    ),
};
