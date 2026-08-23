import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const blendsMaikaShockedPanic: Template = {
    name: "blendsMaikaShockedPanic",
    displayName: buildLocales("Maika shocked panic", {
        [Locale.Russian]: "Майка в шоковой панике",
        [Locale.Ukrainian]: "Майка в шоковій паніці",
        [Locale.Dutch]: "Maika geschokt in paniek",
        [Locale.French]: "Maika choquée et paniquée",
        [Locale.German]: "Maika geschockt in Panik",
        [Locale.Polish]: "Maika w szokowej panice",
        [Locale.SpanishES]: "Maika en pánico impactada",
        [Locale.SpanishLATAM]: "Maika en pánico impactada",
        [Locale.PortugueseBR]: "Maika em pânico chocada",
        [Locale.Turkish]: "Maika şok içinde panikte",
        [Locale.Italian]: "Maika sotto shock in preda al panico",
        [Locale.Indonesian]: "Maika panik terkejut",
        [Locale.Czech]: "Maika v šokové panice",
        [Locale.Japanese]: "マイカのショックパニック",
        [Locale.Korean]: "마이카 충격 패닉",
        [Locale.ChineseCN]: "麻衣花震惊恐慌",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextLeftWithBackground],
    width: 898,
    height: 412,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
    images: [],
    element: ({ texts, font }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: font,
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/blendsMaikaShockedPanic.png"
                width={449}
                height={412}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 50,
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
