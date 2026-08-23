import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const simpsonsRalphImInDanger: Template = {
    name: "simpsonsRalphImInDanger",
    displayName: buildLocales("Ralph I'm in danger", {
        [Locale.Russian]: "Ральф: «я в опасности»",
        [Locale.Ukrainian]: "Ральф: «я в небезпеці»",
        [Locale.Dutch]: "Ralph ik ben in gevaar",
        [Locale.French]: "Ralph je suis en danger",
        [Locale.German]: "Ralph Ich bin in Gefahr",
        [Locale.Polish]: "Ralph jestem w niebezpieczeństwie",
        [Locale.SpanishES]: "Ralph estoy en peligro",
        [Locale.SpanishLATAM]: "Ralph estoy en peligro",
        [Locale.PortugueseBR]: "Ralph estou em perigo",
        [Locale.Turkish]: "Ralph tehlikedeyim",
        [Locale.Italian]: "Ralph sono in pericolo",
        [Locale.Indonesian]: "Ralph aku dalam bahaya",
        [Locale.Czech]: "Ralph jsem v nebezpečí",
        [Locale.Japanese]: "ラルフ 危険な状態",
        [Locale.Korean]: "랄프 난 위험해",
        [Locale.ChineseCN]: "拉尔夫 我有危险了",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons],
    types: [Type.FaceImage, Type.TextBottom],
    width: 1024,
    height: 581,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [{ id: 0, description: "Ralph`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsRalphImInDanger.jpg"
                width={1024}
                height={581}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={150}
                height={150}
                style={{
                    position: "absolute",
                    top: "25%",
                    left: "40%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 50,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
