import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const simpsonsThatsAPaddlin: Template = {
    name: "simpsonsThatsAPaddlin",
    displayName: buildLocales("That's a paddlin", {
        [Locale.Russian]: "За это полагается порка",
        [Locale.Ukrainian]: "За це буде прочуханка",
        [Locale.Dutch]: "Dat betekent straf",
        [Locale.French]: "Ça mérite une fessée",
        [Locale.German]: "Das gibt Schläge",
        [Locale.Polish]: "Za to jest lanie",
        [Locale.SpanishES]: "Eso merece unos azotes",
        [Locale.SpanishLATAM]: "Eso amerita unos azotes",
        [Locale.PortugueseBR]: "Isso dá castigo",
        [Locale.Turkish]: "Bunun cezası var",
        [Locale.Italian]: "Questa è una sculacciata",
        [Locale.Indonesian]: "Itu berarti hukuman",
        [Locale.Czech]: "Za to dostaneš na zadek",
        [Locale.Japanese]: "それはお仕置きだ",
        [Locale.Korean]: "그건 매맞을 짓이야",
        [Locale.ChineseCN]: "这得挨板子",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons],
    types: [Type.FaceImage, Type.TextBottomWithBackground],
    width: 500,
    height: 461,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [{ id: 0, description: "face of Jasper Beardly" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsThatsAPaddlin.jpg"
                width={500}
                height={361}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: 10,
                    left: 140,
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
                        lineClamp: 3,
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
