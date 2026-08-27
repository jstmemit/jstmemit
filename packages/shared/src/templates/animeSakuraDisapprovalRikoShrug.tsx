import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const animeSakuraDisapprovalRikoShrug: Template = {
    name: "animeSakuraDisapprovalRikoShrug",
    displayName: buildLocales("Sakura disapproval Riko shrug", {
        [Locale.Russian]: "Сакура не одобряет, Рико пожимает плечами",
        [Locale.Ukrainian]: "Сакура не схвалює, Ріко знизує плечима",
        [Locale.Dutch]: "Sakura afkeuring Riko haalt schouders op",
        [Locale.French]: "Désapprobation de Sakura, Riko hausse les épaules",
        [Locale.German]: "Sakura Missbilligung, Riko zuckt mit den Schultern",
        [Locale.Polish]: "Dezaprobata Sakury, Riko wzrusza ramionami",
        [Locale.SpanishES]: "Desaprobación de Sakura, Riko se encoge de hombros",
        [Locale.SpanishLATAM]: "Desaprobación de Sakura, Riko se encoge de hombros",
        [Locale.PortugueseBR]: "Desaprovação de Sakura, Riko dá de ombros",
        [Locale.Turkish]: "Sakura onaylamıyor, Riko omuz silkiyor",
        [Locale.Italian]: "Disapprovazione di Sakura, Riko fa spallucce",
        [Locale.Indonesian]: "Sakura tidak setuju, Riko mengangkat bahu",
        [Locale.Czech]: "Sakura neschvaluje, Riko krčí rameny",
        [Locale.Japanese]: "桜の不満と莉子の肩すくめ",
        [Locale.Korean]: "사쿠라의 불만, 리코의 으쓱",
        [Locale.ChineseCN]: "樱不赞成，梨子耸肩",
    }),
    topics: [Topic.Reaction, Topic.Anime],
    types: [Type.TextRightWithBackground, Type.TwoOption],
    width: 1008,
    height: 993,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/animeSakuraDisapprovalRikoShrug.png"
                width={504}
                height={993}
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
                    borderBottom: "1px solid black",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
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
                    borderTop: "8px solid black",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
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
