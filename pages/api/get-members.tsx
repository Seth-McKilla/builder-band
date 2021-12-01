import type { NextApiRequest, NextApiResponse } from "next";
import { Client, Intents } from "discord.js";
const { DISCORD_TOKEN, GUILD_ID } = process.env;

type Member = { username: string; avatar: string };

type Data = {
  members: Member[];
};

const defaultImage: string = "/record-disk.svg";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = new Client({
    intents: [Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES],
  });
  await client.login(DISCORD_TOKEN);

  return client.on("ready", async () => {
    let members: Member[] = [];

    const guild = client.guilds.cache.get(GUILD_ID!);
    await guild?.members.fetch();

    guild?.members.cache.each((member) => {
      const { username, id, avatar } = member.user;
      members.push({
        username,
        avatar: avatar
          ? `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`
          : defaultImage,
      });
    });

    res.status(200).json({ members });
  });
}

export const config = {
  api: {
    externalResolver: true,
  },
};
