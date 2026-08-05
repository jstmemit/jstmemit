import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const simpsonsAtLeastYouTried: Template = {
    name: "simpsonsAtLeastYouTried",
    displayName: buildLocales("At least you tried", {
        [Locale.Russian]: "По крайней мере, ты пытался",
        [Locale.Ukrainian]: "Принаймні, ти намагався",
        [Locale.Dutch]: "Je hebt het tenminste geprobeerd",
        [Locale.French]: "Au moins tu as essayé",
        [Locale.German]: "Wenigstens hast du es versucht",
        [Locale.Polish]: "Przynajmniej spróbowałeś",
        [Locale.SpanishES]: "Al menos lo intentaste",
        [Locale.SpanishLATAM]: "Al menos lo intentaste",
        [Locale.PortugueseBR]: "Pelo menos você tentou",
        [Locale.Turkish]: "En azından denedin",
        [Locale.Italian]: "Almeno ci hai provato",
        [Locale.Indonesian]: "Setidaknya kamu sudah mencoba",
        [Locale.Czech]: "Alespoň jsi to zkusil",
        [Locale.Japanese]: "少なくとも努力はした",
        [Locale.Korean]: "적어도 노력은 했잖아",
        [Locale.ChineseCN]: "至少你尝试过",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons],
    types: [Type.FaceImage, Type.DefaultText],
    width: 736,
    height: 730,
    texts: [],
    images: [{ id: 0, description: "Bart`s face" }],
    element: ({ images }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsAtLeastYouTried.png"
                width={736}
                height={730}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={300}
                style={{
                    position: "absolute",
                    top: "-7%",
                    left: "-2%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    ),
};
