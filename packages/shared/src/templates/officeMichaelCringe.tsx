import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const officeMichaelCringe: Template = {
    name: "officeMichaelCringe",
    displayName: buildLocales("Michael cringing", {
        [Locale.Russian]: "Майкл кринжует",
        [Locale.Ukrainian]: "Майкл крінжує",
        [Locale.Dutch]: "Michael krimpt ineen",
        [Locale.French]: "Michael gêné",
        [Locale.German]: "Michael schämt sich fremd",
        [Locale.Polish]: "Michael czuje żenadę",
        [Locale.SpanishES]: "Michael avergonzado",
        [Locale.SpanishLATAM]: "Michael sintiendo cringe",
        [Locale.PortugueseBR]: "Michael com vergonha alheia",
        [Locale.Turkish]: "Michael utanıyor",
        [Locale.Italian]: "Michael in imbarazzo",
        [Locale.Indonesian]: "Michael merasa ngeri",
        [Locale.Czech]: "Michael se cítí trapně",
        [Locale.Japanese]: "ドン引きするマイケル",
        [Locale.Korean]: "민망해하는 마이클",
        [Locale.ChineseCN]: "迈克尔尴尬",
    }),
    topics: [Topic.Reaction, Topic.Movies, Topic.Office],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 996,
    height: 438,
    animationDuration: 3500,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/officeMichaelCringe.gif"
                width={498}
                height={438}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 65,
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
