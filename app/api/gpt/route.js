import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({});

export async function POST(request) {
	const {prompt} = await request.json();
	console.log(prompt);
	const guide = "You will be provided with a text, and your task is to answer the query in detail, with examples. You should also provide sample code snippets wherever necessary."
	const constructed_prompt = guide + prompt
	const completion = await openai.chat.completions.create({
		messages: [{ role: "system", content: constructed_prompt}],
		model: "gpt-3.5-turbo",
	});

	console.log(completion.choices[0]);
	return NextResponse.json({ content: completion.choices[0].message.content }, { status: 200 });
}