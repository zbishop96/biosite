import Anthropic from '@anthropic-ai/sdk';

import { NextRequest, NextResponse } from 'next/server';

// Define the POST handler for the API route
export const POST = async (req: NextRequest) => {
  const data = await req.json(); // Parse the JSON body from the request
  const result = await processImage(data.image, data.fileType);
  return NextResponse.json({ message: result, data, status: 200 });
};

const processImage = async (image: string, metadata: "image/jpeg" | "image/png" | "image/webp") => {
  const anthropic = new Anthropic({
  apiKey: process.env["ANTHROPIC_API_KEY"],
  });

  const msg = await anthropic.messages.create({
  model: "claude-3-5-sonnet-20240620",
  max_tokens: 1024,
  messages: [
    { role: "user",
      "content": [
        {
          "type": "image",
          "source": {
            "type": "base64",
            "media_type": metadata,
            "data": image,
          },
        },
        {
          "type": "text",
          "text": "Given this image, can you roast the costume with no insult or comment on the people(s) in the picture?"
        }
      ],
    }
  ],
  });
  console.log(msg.content[0])
  return msg.content[0]
}