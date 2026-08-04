import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const hucUmaruSunglassesSmug: Template = {
    name: "hucUmaruSunglassesSmug",
    displayName: buildLocales("Umaru sunglasses smug", {
        [Locale.Russian]: "Довольная Умару в очках",
        [Locale.Ukrainian]: "Задоволена Умару в окулярах",
        [Locale.Dutch]: "Umaru zonnebril zelfingenomen",
        [Locale.French]: "Umaru suffisante avec des lunettes de soleil",
        [Locale.German]: "Umaru Sonnenbrille selbstgefällig",
        [Locale.Polish]: "Zadowolona Umaru w okularach",
        [Locale.SpanishES]: "Umaru engreída con gafas de sol",
        [Locale.SpanishLATAM]: "Umaru engreída con lentes de sol",
        [Locale.PortugueseBR]: "Umaru presunçosa de óculos",
        [Locale.Turkish]: "Gözlüklü ukala Umaru",
        [Locale.Italian]: "Umaru compiaciuta con gli occhiali",
        [Locale.Indonesian]: "Umaru sombong pakai kacamata hitam",
        [Locale.Czech]: "Drsňačka Umaru ve slunečních brýlích",
        [Locale.Japanese]: "サングラスでドヤ顔のうまる",
        [Locale.Korean]: "선글라스 끼고 거만한 우마루",
        [Locale.ChineseCN]: "戴墨镜得意的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextTopWithBackground],
    width: 596,
    height: 445,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/hucUmaruSunglassesSmug.png"
                width={596}
                height={335}
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
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
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
