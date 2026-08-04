import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const worldsMostDangerousTrap: Template = {
    name: "worldsMostDangerousTrap",
    displayName: buildLocales("Worlds most dangerous trap", {
        [Locale.Russian]: "Самая опасная ловушка в мире",
        [Locale.Ukrainian]: "Найнебезпечніша пастка у світі",
        [Locale.Dutch]: "Gevaarlijkste valstrik ter wereld",
        [Locale.French]: "Le piège le plus dangereux du monde",
        [Locale.German]: "Die gefährlichste Falle der Welt",
        [Locale.Polish]: "Najniebezpieczniejsza pułapka świata",
        [Locale.SpanishES]: "La trampa más peligrosa del mundo",
        [Locale.SpanishLATAM]: "La trampa más peligrosa del mundo",
        [Locale.PortugueseBR]: "A armadilha mais perigosa do mundo",
        [Locale.Turkish]: "Dünyanın en tehlikeli tuzağı",
        [Locale.Italian]: "La trappola più pericolosa del mondo",
        [Locale.Indonesian]: "Jebakan paling berbahaya di dunia",
        [Locale.Czech]: "Nejnebezpečnější past na světě",
        [Locale.Japanese]: "世界で最も危険な罠",
        [Locale.Korean]: "세상에서 가장 위험한 함정",
        [Locale.ChineseCN]: "世界上最危险的陷阱",
    }),
    topics: [Topic.YouTube],
    types: [Type.DefaultText, Type.BackgroundImage],
    width: 621,
    height: 426,
    texts: [],
    images: [{ id: 0, description: "the thumbnail background" }],
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
                src={images[0]}
                width={621}
                height={300}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ytthumbnail3.png"
                width={621}
                height={426}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
        </div>
    ),
};
