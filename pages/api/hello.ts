// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cohere from "cohere-ai";

type Data = { name: string } | { text: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  cohere.init(process.env.COHERE_API_KEY || ''); // This is your trial API key

  try {
    const response = await cohere.generate({
      model: "command-xlarge-20221108",
      prompt: 'give me a copy for a "facebook post about pets store"',
      max_tokens: 300,
      temperature: 0.9,
      k: 0,
      p: 0.75,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop_sequences: [],
      return_likelihoods: "NONE",
    });
    const prediction = response.body.generations[0].text;

    res.status(200).json({ text: prediction });
  } catch (error) {
    res.status(500).json({ text: "Something went wrong" });
  }
}
