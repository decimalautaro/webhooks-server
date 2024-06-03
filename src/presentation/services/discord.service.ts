import { envs } from "../../config";

export class DiscordService {
  private readonly discordWebHookUrl = envs.DISCORD_WEBHOOK_URL;

  constructor() {}

  async notify(message: string) {
    const body = {
      content: message,
      embeds: [
        {
          image: {
            url: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzhvYmNjYnA3M2tkMDRlOTI1YnB6dDFmeDNpZzBudGx6c3JjN3o4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.webp",
          },
        },
      ],
    };

    const response = await fetch(this.discordWebHookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.log("Error sending message to discord.");
      return false;
    }

    return true;
  }
}
