<h1 align="center">Jstmemit 🤖</h1>

<p align="center">
    Discord bot that makes memes about whatever you're chatting about.<br>Talk about your failed boss raid, then get fresh memes about it, how fun is that?
</p>
<p align="center">
    <a href="#about-project">About project</a> / <a href="#table-of-contents">Table of contents</a> / <a href="https://discord.com/oauth2/authorize?client_id=1375836467745783990">Invite to your server</a> / <a href="https://discord.gg/THRnn8fhkZ">Support server</a> / <a href="#license">License</a>
</p>
<p align="center">
    <img width="600" alt="personalized memes banner" src="https://github.com/user-attachments/assets/6af07cf1-a0b8-420f-ba20-6f1dd80e297b" />
</p>

## Table of contents

- <a href="#jstmemit-">Introduction</a>
- <a href="#about-project">About project</a>
- <a href="#how-to-run">How to run?</a>
    - <a href="#using-docker-compose">Using docker compose</a>
- <a href="#contribution">Contribution</a>
    - <a href="#setting-up-your-editor">Setting up your editor</a>
        - <a href="#jetbrainswebstorm">JetBrains/Webstorm</a>
    - <a href="#making-new-meme-templates">Making new meme templates</a>
        - <a href="#name">Name</a>
        - <a href="#display-name">Display Name</a>
        - <a href="#topics">Topics</a>
        - <a href="#types">Types</a>
        - <a href="#texts-and-images">Texts and Images</a>
        - <a href="#render">Render</a>
        - <a href="#fonts-and-font-size">Fonts and font size</a>
        - <a href="#layout">Layout</a>
        - <a href="#test-your-template">Test your template</a>
        - <a href="#done">Done!</a>
- <a href="#alternatives">Alternatives</a>
- <a href="#questions-or-feedback">Questions or feedback?</a>
- <a href="#license">License</a>

## About project

This bot makes it much simpler to get memes about situations that happened in your server. Every **X** amount of messages bot will choose a meme template, fill it with channel specific context and send it.

Each generated meme has Like/Dislike buttons that allow the bot to understand if it was good or bad. By using those ratings Jstmemit will know which meme templates worked and try to generate more of them.

It's possible to set frequency and other options in settings to configure it exactly for your server size and prevent flooding.

**By default this bot is turned off in every channel for your privacy, you need to specify where you want to use it with `/enable`**

[<img width="200" alt="add to your server button" src="https://github.com/user-attachments/assets/5dfd16a9-9267-4fc8-8daa-ecf37ca844fa" />](https://discord.com/oauth2/authorize?client_id=1375836467745783990)

## How to run?

### Using docker compose

Before following this instruction please make sure that you have [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed on your computer.

1. Clone the repository
```bash
git clone https://github.com/jstmemit/jstmemit.git
```

2. Navigate into its directory
```bash
cd jstmemit
```

3. Create `.env` and `.env.docker` files by using the template inside `.env.example`
```env
DB_URL= # http://sqld:8080

DISCORD_TOKEN= # discord bot token
DISCORD_CLIENT_ID= # application id for the development bot
DISCORD_CLIENT_ID_PRODUCTION= # application id for the public bot

POSTHOG_PUBLIC_KEY= # starts with phc, used for analytics

# instance for BullMQ jobs
REDIS_HOST= # redis
REDIS_PORT= # 6379

# instance for context/images cache
REDIS_CACHE_HOST= # redis-cache
REDIS_CACHE_PORT= # 6379

WHISPER_API_KEY= # leave empty
WHISPER_MODEL= # small (1.5 GB RAM) works good, base (700 MB RAM) can be used for less RAM usage
```

4. Launch docker compose
```bash
docker compose up --build
```

## Contribution

Your meme templates and features are very welcome in this project, open a Pull Request with your changes to get them reviewed and merged.

### Setting up your editor

We recommend using [Webstorm](https://www.jetbrains.com/webstorm/) (or any other IDE) from [JetBrains](https://www.jetbrains.com/). This way all configuration scripts are already set to improve your development experience. However, you are free to use any code editor you like if it runs ESLint (with `--fix` on save) and Prettier.

#### JetBrains/Webstorm

Make sure your Code Quality Tools settings are as follows:

**Settings:**
- Languages & Frameworks -> JavaScript -> Code Quality Tools -> ESLint -> Automatic ESLint configuration
- Languages & Frameworks -> JavaScript -> Code Quality Tools -> ESLint -> Run `eslint --fix` on save
- Languages & Frameworks -> JavaScript -> Code Quality Tools -> JSHint -> Disable
- Languages & Frameworks -> JavaScript -> Prettier -> Automatic Prettier configuration
- Languages & Frameworks -> JavaScript -> Prettier -> Run on save
- Languages & Frameworks -> JavaScript -> Prettier -> Run on paste
- Languages & Frameworks -> JavaScript -> Prettier -> Prefer Prettier configuration to IDE code style

There are also some useful extensions if you plan on contributing to more than meme templates:

**Extensions:**
- Astro
- Rainbow Brackets
- Tailwind Fold
- Tailwind CSS Smart Completions
- Docker

---

### Making new meme templates

All templates are located in `packages/shared/src/templates` directory. Each one of them is a `.tsx` file that exports an object with basic information (name, topics, types, width, height), what should be on the meme (texts, images) and the layout in JSX. This makes creating new templates very simple if you are familiar with web development.

### Name

The `name` is a unique identifier for the meme template. Make sure this name is not already taken.

### Display name

The `displayName` property provides localized translations for the template's name. Use the `buildLocales` utility to define them:

```tsx
displayName: buildLocales("Text over background", {
    [Locale.Russian]: "Текст на фоне",
    [Locale.Ukrainian]: "Текст на фоні",
    [Locale.Dutch]: "Tekst over achtergrond",
    [Locale.French]: "Texte sur fond",
    [Locale.German]: "Text über Hintergrund",
    [Locale.Polish]: "Tekst na tle",
    [Locale.SpanishES]: "Texto sobre fondo",
    [Locale.SpanishLATAM]: "Texto sobre fondo",
    [Locale.PortugueseBR]: "Texto sobre fundo",
    [Locale.Turkish]: "Arka plan üzerinde metin",
    [Locale.Italian]: "Testo sullo sfondo",
    [Locale.Indonesian]: "Teks di atas latar belakang",
    [Locale.Czech]: "Text na pozadí",
    [Locale.Japanese]: "背景上のテキスト",
    [Locale.Korean]: "배경 위 텍스트",
    [Locale.ChineseCN]: "背景上的文本",
})
```

#### Topics

Each template must have topics that describe it. For example, if you are making a meme template with SpongeBob characters on it, then you must add the `Topic.SpongeBob` topic to it. The topics field is an array, allowing you to add as many topics as needed:
```tsx
import { Topic } from "#/models/TemplateTopic.ts";  // don`t forget to import `Topic` enum

export const spongebobHappy: Template = {
    // ...
    topics: [Topic.SpongeBob, Topic.Cartoons, Topic.Reaction],
}
```
**Available topics:**

Reaction, SocialPost, BreakingBad, News, YouTube, Misc, Cartoons, Animals, Futurama, Griffins, Simpsons, Movies, Art, PulpFiction, Anime, TeamFortress2, Games, SpongeBob, SpiderMan, StarTrek, AssassinationClassroom, ACertainScientificRailgun, AzumangaDaioh, AttackOnTitan, AkashicRecords, BlendS, BocchiTheRock, CyberpunkEdgerunners, Dandadan, DFrag, DarlingInTheFranxx, WeNeverLearn, DeathNote, DemonSlayer, Evangelion, Frieren, GabrielDropOut, Gintama, Office, IronMan, Incredibles, ToyStory, ScoobyDoo, WinnieThePooh, MrBean, Toradora, HimoutoUmaruChan, JujutsuKaisen, KaguyaSama, Kon, KonoSuba, LogHorizon, LuckyStar, MyHeroicAcademy, Monster, Noragami, RascalDoesNotDreamOfBunnyGirlSenpai, SerialExperimentsLain, SpyFamily, SquidGame, Shirobako, TheBalladOfBusterScruggs, TheQuintessentialQuintuplets, UzakiChanWantsToHangOut, ShikanokoNokonokoKoshitantan, UmaMusume, Quote, Demotivator, EightySix, Barakamon, GJBu, GreatTeacherOnizuka, Destruction, LoveLab, Nichijou, OnePunchMan

---

#### Types

Each template must have types that describe its structure and layout components. The types field is an array, allowing you to combine as many structural tags as needed to fully represent its structure:
```tsx
import { Type } from "#/models/TemplateType.ts";  //don`t forget to import `Type` enum

export const spongebobHappy: Template = {
    // ...
    types: [Type.FaceImage, Type.TextBottom],
}
```

**Available types:**

textTop, textBottom, textLeft, textRight, textCenter, textTopWithBackground, textBottomWithBackground, textLeftWithBackground, textRightWithBackground, textCenterWithBackground, textName, textPost, defaultText, avatarImage, faceImage, objectImage, backgroundImage, twoOption, threeOption, fourOption

---

#### Texts and Images

Each template must say which slots it has on it. For example, let's say you want to put two texts on a random background images. Add these fields to your template object:
```tsx
export const textOverBackground: Template = {
    // ...
    texts: [
        { id: 0, description: "top text", minLength: 1, maxLength: 5 },
        { id: 1, description: "bottom text", minLength: 1, maxLength: 5 },
    ],
    images: [{ id: 0, description: "background" }]
}
```

Minimum and maximum length is set in amount of words.

After that you can use them in your layout:
```tsx
<img
    src={images[0]}
    width={500}
    height={500}
    style={{ position: "absolute", top: 0, left: 0 }}
/>
```

```jsx
<div>{texts[0]}</div>
```

`element()` function will always be called with exact amount of texts and images as specified in the template.

---

#### Render

Your layout will be rendered into an image using [Takumi](https://takumi.kane.tw/), a library that is similar to [Satori](https://github.com/vercel/satori) but has performance, supports almost all CSS properties and can render animations.

#### Fonts and font size

Font is a prop of the element property. It's a string that contains the chosen font and fallback fonts.

Available fonts:
- Default (random)
- Comic Sans MS
- Impact
- Minecraft
- OpenDyslexic

There is a `fontSize` utility for dynamic font sizing depending on the text length (returns the font size in viewport width units, e.g., `vw`).
```tsx
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
            padding: "10px",
            backgroundColor: "white",
        }}
>
    <div
            style={{
                lineClamp: 2,
                wordBreak: "break-word",
                textOverflow: "ellipsis",
                fontFamily: font,
                fontSize: fontSize(texts[0]),
                lineHeight: 1.05,
                paddingBottom: "0.2em",
                color: "#000000",
            }}
    >
        {texts[0]}
    </div>
</div>
```

[//]: # (If there are CJK &#40;Chinese, Japanese and Korean&#41; characters present, then these more fonts are injected:)
[//]: # (- Noto Sans SC)
[//]: # (- Noto Sans TC )
[//]: # (- Noto Sans HK )
[//]: # (- Noto Sans JP )
[//]: # (- Noto Sans KR )
#### Layout

**textOverBackground.tsx**
```tsx
import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const textOverBackground: Template = {
    name: "textOverBackground", // make sure this name is not taken
    displayName: buildLocales("Text over background", {
        [Locale.Russian]: "Текст на фоне",
        [Locale.Ukrainian]: "Текст на фоні",
        [Locale.Dutch]: "Tekst over achtergrond",
        [Locale.French]: "Texte sur fond",
        [Locale.German]: "Text über Hintergrund",
        [Locale.Polish]: "Tekst na tle",
        [Locale.SpanishES]: "Texto sobre fondo",
        [Locale.SpanishLATAM]: "Texto sobre fondo",
        [Locale.PortugueseBR]: "Texto sobre fundo",
        [Locale.Turkish]: "Arka plan üzerinde metin",
        [Locale.Italian]: "Testo sullo sfondo",
        [Locale.Indonesian]: "Teks di atas latar belakang",
        [Locale.Czech]: "Text na pozadí",
        [Locale.Japanese]: "背景上のテキスト",
        [Locale.Korean]: "배경 위 텍스트",
        [Locale.ChineseCN]: "背景上的文本",
    }),
    topics: [Topic.Misc],
    types: [Type.BackgroundImage, Type.TextTopWithBackground, Type.TextBottomWithBackground],
    width: 500,
    height: 500,
    texts: [
        { id: 0, description: "top text", minLength: 1, maxLength: 8 },
        { id: 1, description: "bottom text", minLength: 1, maxLength: 8 },
    ],
    images: [{ id: 0, description: "background" }],
    element: ({ texts, images, font }: TemplateProps) => (
            <div
                    style={{
                        display: "flex",
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        fontFamily: font,
                        backgroundColor: "#000",
                    }}
            >
                <img
                        src={images[0]}
                        width={800}
                        height={600}
                        style={{ position: "absolute", top: 100, left: 0 }}
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
                            padding: "10px",
                            backgroundColor: "white",
                        }}
                >
                    <div
                            style={{
                                lineClamp: 2,
                                wordBreak: "break-word",
                                textOverflow: "ellipsis",
                                fontFamily: font,
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
                            left: 0,
                            bottom: 0,
                            width: "100%",
                            height: "100px",
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
                                lineClamp: 2,
                                wordBreak: "break-word",
                                textOverflow: "ellipsis",
                                fontFamily: font,
                                fontSize: fontSize(texts[0]),
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
```

**TemplateRepository.ts**
```ts
// import your new template
import { textOverBackground } from "#/templates/textOverBackground.tsx";

public getAll(): Template[] {
    return [
        // return it together with others
        textOverBackground,
        // ...
    ]
}
```

#### Test your template

You can now check how your meme template behaves with different kinds of images and texts on the template preview website without starting up the bot.

1. Start the development server
```bash
pnpm run template-preview:dev
```

2. Look at your template
   <img width="450" alt="template preview" src="https://github.com/user-attachments/assets/5de59994-971b-4fd7-955b-9d6bd63d68c1" />

#### Done!

<img width="300" height="300" alt="meme" src="https://github.com/user-attachments/assets/644036eb-d15f-45fe-bb55-b39cf4d9bbfa" />

## Alternatives

Idea for Jstmemit was partly inspired by a bot called [Genai](https://genai.bot/), that sends random texts made from channel messages mixed together using Markov chains. 

However, Jstmemit's focus is on being a "meme generator" and having a giant library of not only static, but also animated (GIF) meme templates. And to support user-installs, to allow users to use the bot on any server or even in DMs. 

If you are not looking for memes, but rather funny and random text messages, feel free to check [Genai](https://genai.bot/) out. It is really great and fun to have on your server instead or alongside Jstmemit.

## Questions or feedback?

If you have any questions or feedback please share them in our <a href="https://discord.gg/THRnn8fhkZ">Support server</a> or send via email to <a href="mailto:contact@jstmemit.com">contact@jstmemit.com</a>.

## License

This project is licensed under the MIT License.
