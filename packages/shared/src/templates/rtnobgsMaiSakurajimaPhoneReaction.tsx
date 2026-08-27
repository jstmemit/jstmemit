import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const rtnobgsMaiSakurajimaPhoneReaction: Template = {
    name: "rtnobgsMaiSakurajimaPhoneReaction",
    displayName: buildLocales("Mai Sakurajima phone reaction", {
        [Locale.Russian]: "Май Сакурадзима: реакция на телефон",
        [Locale.Ukrainian]: "Май Сакураджіма: реакція на телефон",
        [Locale.Dutch]: "Mai Sakurajima telefoonreactie",
        [Locale.French]: "Mai Sakurajima réaction téléphone",
        [Locale.German]: "Mai Sakurajima Handy-Reaktion",
        [Locale.Polish]: "Mai Sakurajima reakcja na telefon",
        [Locale.SpanishES]: "Mai Sakurajima reacción al teléfono",
        [Locale.SpanishLATAM]: "Mai Sakurajima reacción al teléfono",
        [Locale.PortugueseBR]: "Mai Sakurajima reação ao telefone",
        [Locale.Turkish]: "Mai Sakurajima telefon tepkisi",
        [Locale.Italian]: "Mai Sakurajima reazione al telefono",
        [Locale.Indonesian]: "Mai Sakurajima reaksi melihat ponsel",
        [Locale.Czech]: "Mai Sakurajima reakce na telefon",
        [Locale.Japanese]: "桜島麻衣 スマホへの反応",
        [Locale.Korean]: "사쿠라지마 마이 핸드폰 반응",
        [Locale.ChineseCN]: "樱岛麻衣看手机反应",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.RascalDoesNotDreamOfBunnyGirlSenpai],
    types: [Type.TwoOption, Type.TextRightWithBackground],
    width: 400,
    height: 400,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 8 },
        { id: 1, description: "second option", minLength: 1, maxLength: 8 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/rtnobgsMaiSakurajimaPhoneReaction.png"
                width={200}
                height={400}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderBottom: "2px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
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
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderTop: "2px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[1]),
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
