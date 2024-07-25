import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  // I'll hide this in an env later
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const assistant = await openai.beta.assistants.retrieve(
    "asst_dwKXHQOxnXEORvb9HzVaY3Qc"
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
    content: message,
  });

  let instructions = `What are three bullet points of suggestions that can mitigate costs for ${expense1}, ${expense2}, and ${expense3} considering the users expenses and unique situation.`

  const run = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: assistant.id,
    instructions: instructions,
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