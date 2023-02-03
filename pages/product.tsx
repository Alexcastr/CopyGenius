import { useState } from "react";
import { CardMessage, Loader, Sidebar } from "@/components";


const API_KEY = process.env.NEXT_PUBLIC_COHERE_API_KEY || "";

const ProductPage = () => {
  const [productName, setProductName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [predictionOutput, setPredictionOutput] = useState<string>("");

  function handleMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    fetch("https://api.cohere.ai/generate", {
      method: "POST",
      headers: {
        Authorization: `BEARER ${API_KEY}`,
        "Content-Type": "application/json",
        "Cohere-Version": "2022-12-06",
      },
      body: JSON.stringify({
        model: 'command-xlarge-nightly',
        prompt: `This is a product description; The descriptions should highlight key features and benefits to engage potential customers.. 
        --
        input: Portable Charger
        Correct output: Portable Charger: "Stay powered on-the-go with our compact and lightweight portable charger. With 10000mAh capacity and dual USB ports, never run out of juice again."
        --
        input: Wireless Earbuds
        Correct ouput: Wireless Earbuds: "Experience superior sound quality with our wireless earbuds. With comfortable fit, touch controls, and long battery life, they're perfect for all day listening."
        --
        input: Smart Watch
        Correct output: Smart Watch: "Stay connected and on top of your fitness goals with our sleek smartwatch. With customizable watch faces, fitness tracking, and smartphone notifications, it's the ultimate wearable."
        --
        input:Kitchen Scale
        Correct output: Kitchen Scale: "Transform your cooking and baking with our digital kitchen scale. Precise measurements and easy-to-use design make it a must-have for every kitchen."
        --
        --
        input: Smart Home Camera 
        Correct output: Smart Home Camera: "Keep an eye on your home from anywhere with our smart home camera. With HD video, two-way audio, and night vision, you can stay connected to your home 24/7."
        --
        input: ${productName} 
        Correct output:`,
        max_tokens: 300,
        temperature: 0.9,
        k: 0,
        p: 0.75,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop_sequences: ["--"],
        return_likelihoods: "NONE",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setPredictionOutput(data.generations[0].text);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }

  return (
    <Sidebar>
      <section className="mx-4">
        <h2 className="text-gray-100 text-center sm:text-left">
          Product Description
        </h2>
        <p className="text-sm pt-4 text-left">
          AI can be useful in product descriptions by
          automating the process of generating product descriptions. This can
          lead to several benefits such as:
        </p>
        <ul className="text-sm py-4">
          <li>
            1- Time-saving:quickly and efficiently, saving time for businesses.
          </li>
          <li>2- Consistency: professional and cohesive product catalog.</li>
          <li>
            3- Personalization: more relevant and appealing to individual users.
          </li>
        </ul>
        <div className="flex flex-col gap-4 sm:justify-evenly sm:flex-row pb-20">
          <form className="mt-7" onSubmit={handleMessage}>
            <label
              htmlFor="message"
              className="block mb-6 text-xl font-medium text-white"
            >
              Product Name
            </label>
            <textarea
              required
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              id="message"
              cols={50}
              rows={10}
              className="block p-2.5 w-full text-sm  rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your product name here and keyfeatures that you want to highlight, example: wireless headphones,  keywords: bluetooth, wireless, fast charging "
            />
            {isLoading ? (
              <Loader />
            ) : (
              <button
                disabled={isLoading}
                type="submit"
                className="mt-4 text-white w-full sm:max-w-min bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Generate
              </button>
            )}
          </form>

          {predictionOutput && <CardMessage prediction={predictionOutput} />}
        </div>
      </section>
    </Sidebar>
  );
};

export default ProductPage;
