import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const simpsonsTheWorstDayOfYourLifeSoFar: Template = {
    name: "simpsonsTheWorstDayOfYourLifeSoFar",
    displayName: buildLocales("The worst day of your life so far", {
        [Locale.Russian]: "Худший день в твоей жизни... пока что",
        [Locale.Ukrainian]: "Найгірший день у твоєму житті... поки що",
        [Locale.Dutch]: "De slechtste dag van je leven tot nu toe",
        [Locale.French]: "Le pire jour de ta vie jusqu'à présent",
        [Locale.German]: "Der bisher schlimmste Tag deines Lebens",
        [Locale.Polish]: "Najgorszy dzień twojego życia, jak dotąd",
        [Locale.SpanishES]: "El peor día de tu vida hasta ahora",
        [Locale.SpanishLATAM]: "El peor día de tu vida hasta ahora",
        [Locale.PortugueseBR]: "O pior dia da sua vida até agora",
        [Locale.Turkish]: "Şu ana kadarki en kötü günün",
        [Locale.Italian]: "Il peggior giorno della tua vita finora",
        [Locale.Indonesian]: "Hari terburuk dalam hidupmu sejauh ini",
        [Locale.Czech]: "Zatím nejhorší den tvého života",
        [Locale.Japanese]: "これまでの人生で最悪の日",
        [Locale.Korean]: "네 인생 최악의 날... 지금까지는",
        [Locale.ChineseCN]: "到目前为止你生命中最糟糕的一天",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons],
    types: [Type.FaceImage, Type.TextBottomWithBackground, Type.TextTopWithBackground, Type.TwoOption],
    width: 831,
    height: 910,
    texts: [
        { id: 0, description: "first caption", minLength: 1, maxLength: 10 },
        { id: 1, description: "second caption", minLength: 1, maxLength: 10 },
    ],
    images: [
        { id: 0, description: "Bart`s face" },
        { id: 1, description: "Homer`s face" },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsTheWorstDayOfYourLifeSoFar.jpg"
                width={831}
                height={710}
                style={{ position: "absolute", top: 100, left: 0 }}
            />
            <img
                src={images[0]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: 150,
                    left: 320,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={180}
                height={180}
                style={{
                    position: "absolute",
                    bottom: 270,
                    left: 310,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={150}
                height={150}
                style={{
                    position: "absolute",
                    bottom: 220,
                    right: 200,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100px",
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
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100px",
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
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
