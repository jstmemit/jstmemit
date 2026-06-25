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
- <a href="#alternatives">Alternatives</a>
- <a href="#questions-or-feedback">Questions or feedback?</a>

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

POSTHOG_WRITE_KEY= # starts with phc, used for analytics

REDIS_HOST= # redis
REDIS_PORT= # 6379
```

4. Launch docker compose
```bash
docker compose up
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

## License

This project is licensed under the MIT License.
