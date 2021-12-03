import type { NextApiRequest, NextApiResponse } from "next";
const { DISCORD_BOT_TOKEN, DISCORD_GUILD_ID } = process.env;

type User = { id: string; username: string; avatar: string };

type Data = {
  users: User[];
};

const defaultImage: string = "/record-disk.svg";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const url = `https://discordapp.com/api/guilds/${DISCORD_GUILD_ID}/members`;
    const response = await fetch(url, {
      headers: {
        authorization: `Bot ${DISCORD_BOT_TOKEN}`,
      },
    });

    const members = await response.json();

    const users = members.map(({ user }: { user: User }) => {
      const { id, username, avatar } = user;
      return {
        id,
        username,
        avatar: avatar
          ? `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`
          : defaultImage,
      };
    });

    return res.json({ users });
  } catch (error: any) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
