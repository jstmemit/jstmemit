import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const grokTweet: Template = {
    name: "grokTweet",
    displayName: buildLocales("Grok tweet", {
        [Locale.Russian]: "Твит Grok",
        [Locale.Ukrainian]: "Твіт Grok",
        [Locale.Dutch]: "Grok tweet",
        [Locale.French]: "Tweet de Grok",
        [Locale.German]: "Grok Tweet",
        [Locale.Polish]: "Tweet Groka",
        [Locale.SpanishES]: "Tuit de Grok",
        [Locale.SpanishLATAM]: "Tuit de Grok",
        [Locale.PortugueseBR]: "Tweet do Grok",
        [Locale.Turkish]: "Grok tweeti",
        [Locale.Italian]: "Tweet di Grok",
        [Locale.Indonesian]: "Cuitan Grok",
        [Locale.Czech]: "Grok tweet",
        [Locale.Japanese]: "Grokのツイート",
        [Locale.Korean]: "그록 트윗",
        [Locale.ChineseCN]: "Grok 推文",
    }),
    topics: [Topic.SocialPost],
    types: [Type.TextPost, Type.AvatarImage, Type.DefaultText],
    width: 1280,
    height: 1146,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 4 }],
    images: [{ id: 0, description: "avatar" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/grokTweet.jpg"
                width={1280}
                height={1146}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={150}
                height={150}
                style={{
                    position: "absolute",
                    bottom: 100,
                    left: 25,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: "15%",
                    padding: "15px 25px",
                    width: "100%",
                    height: "15%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 90,
                    lineHeight: 1.05,
                    paddingBottom: "0.2em",
                    color: "#ffffff",
                    wordBreak: "break-word",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
