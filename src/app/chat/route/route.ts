import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  // I'll hide this in an env later
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const assistant = await openai.beta.assistants.retrieve(
    "asst_470vD6n3hgGzu61cCv2aCPvH"
  );

  const thread = await openai.beta.threads.create();

  const body = await request.json();

  const message = body.message;

  await openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: message,
  });

  const run = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: assistant.id,
    instructions: "Please respond to the user message",
  });

  await new Promise((resolve) => setTimeout(resolve, 5000));

  const messages = await openai.beta.threads.messages.list(thread.id);

  let assistantMessage = "";

  for (let i = 0; i < 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const messages = await openai.beta.threads.messages.list(thread.id);

    const assistantResponse = messages.data.find(
      (message) => message.role === "assistant"
    );

    if (assistantResponse && assistantResponse.content.length > 0) {
      console.log(assistantResponse);
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
