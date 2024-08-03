import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const assistant = await openai.beta.assistants.retrieve(
    "asst_Ww15rxknjcE28kRQqFwPA5P0"
  );
  
  const thread = await openai.beta.threads.create();

  const body = await request.json();

  let expense1 = body.expense1;
  let expense2 = body.expense2;
  let expense3 = body.expense3;

  // The message will be a string containing the user's expenses and unique situation
  let message = body.message;

  await openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: `What are three bullet points of suggestions that can mitigate costs for ${expense1}, ${expense2}, and ${expense3} considering the user's expenses and unique situation? Here is the user's personal information, containing all the expenses and information about the user, including school, and specific activities: ${message}`,
  });

  const run = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: assistant.id
  });

  await new Promise((resolve) => setTimeout(resolve, 5000));

  let assistantMessage = "";

  for (let i = 0; i < 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const messages = await openai.beta.threads.messages.list(thread.id);

    const assistantResponse = messages.data.find(
      (message) => message.role === "assistant"
    );

    if (assistantResponse && assistantResponse.content.length > 0) {
      assistantResponse.content.forEach((content) => {
        if (content.type === "text") {
          assistantMessage += content.text.value;
        }
      });
      break;
    }
  }

  if (!assistantMessage) {
    throw new Error("Assistant did not respond after 5 attempts");
  }

  return NextResponse.json({ message: assistantMessage });
}
