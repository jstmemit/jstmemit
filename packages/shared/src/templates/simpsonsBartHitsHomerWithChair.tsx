import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const simpsonsBartHitsHomerWithChair: Template = {
    name: "simpsonsBartHitsHomerWithChair",
    displayName: buildLocales("Bart hits Homer with chair", {
        [Locale.Russian]: "Барт бьет Гомера стулом",
        [Locale.Ukrainian]: "Барт б'є Гомера стільцем",
        [Locale.Dutch]: "Bart slaat Homer met stoel",
        [Locale.French]: "Bart frappe Homer avec une chaise",
        [Locale.German]: "Bart schlägt Homer mit Stuhl",
        [Locale.Polish]: "Bart uderza Homera krzesłem",
        [Locale.SpanishES]: "Bart golpea a Homer con una silla",
        [Locale.SpanishLATAM]: "Bart golpea a Homero con una silla",
        [Locale.PortugueseBR]: "Bart bate em Homer com cadeira",
        [Locale.Turkish]: "Bart Homer'a sandalyeyle vuruyor",
        [Locale.Italian]: "Bart colpisce Homer con una sedia",
        [Locale.Indonesian]: "Bart memukul Homer dengan kursi",
        [Locale.Czech]: "Bart praští Homera židlí",
        [Locale.Japanese]: "バートがホーマーを椅子で殴る",
        [Locale.Korean]: "의자로 호머를 때리는 바트",
        [Locale.ChineseCN]: "巴特用椅子打霍默",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons],
    types: [Type.FaceImage, Type.TextBottomWithBackground],
    width: 2180,
    height: 1646,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [
        { id: 0, description: "Homer`s face" },
        { id: 1, description: "Bart`s face" },
    ],
    element: ({ texts, images }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsBartHitsHomerWithChair.png"
                width={2180}
                height={1646}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={500}
                height={500}
                style={{
                    position: "absolute",
                    top: "18%",
                    left: "22%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={400}
                height={400}
                style={{
                    position: "absolute",
                    top: "25%",
                    right: "15%",
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
