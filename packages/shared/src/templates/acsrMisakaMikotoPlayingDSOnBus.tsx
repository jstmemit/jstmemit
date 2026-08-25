import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const acsrMisakaMikotoPlayingDSOnBus: Template = {
    name: "acsrMisakaMikotoPlayingDSOnBus",
    displayName: buildLocales("Misaka Mikoto playing DS on bus", {
        [Locale.Russian]: "Мисака Микото играет в DS в автобусе",
        [Locale.Ukrainian]: "Місака Мікото грає в DS в автобусі",
        [Locale.Dutch]: "Misaka Mikoto speelt DS in de bus",
        [Locale.French]: "Misaka Mikoto jouant à la DS dans le bus",
        [Locale.German]: "Misaka Mikoto spielt DS im Bus",
        [Locale.Polish]: "Misaka Mikoto grająca na DS w autobusie",
        [Locale.SpanishES]: "Misaka Mikoto jugando a la DS en el autobús",
        [Locale.SpanishLATAM]: "Misaka Mikoto jugando a la DS en el autobús",
        [Locale.PortugueseBR]: "Misaka Mikoto jogando DS no ônibus",
        [Locale.Turkish]: "Misaka Mikoto otobüste DS oynuyor",
        [Locale.Italian]: "Misaka Mikoto gioca al DS sull'autobus",
        [Locale.Indonesian]: "Misaka Mikoto bermain DS di bus",
        [Locale.Czech]: "Misaka Mikoto hraje na DS v autobuse",
        [Locale.Japanese]: "バスでDSをする御坂美琴",
        [Locale.Korean]: "버스에서 DS를 하는 미사카 미코토",
        [Locale.ChineseCN]: "御坂美琴在公交车上玩DS",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.ACertainScientificRailgun],
    types: [Type.TextRightWithBackground, Type.TwoOption],
    width: 736,
    height: 923,
    texts: [
        { id: 0, description: "first reaction", minLength: 1, maxLength: 12 },
        { id: 1, description: "second reaction", minLength: 1, maxLength: 12 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/acsrMisakaMikotoPlayingDSOnBus.png"
                width={368}
                height={923}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "48%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderBottom: "1px solid black",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 45,
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
                    height: "52%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderTop: "1px solid black",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 45,
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
