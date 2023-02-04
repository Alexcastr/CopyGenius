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
        model: "command-xlarge-nightly",
        prompt: `This is a product description; The descriptions should highlight key features and benefits to engage potential customers.. 
        --
        input: Smart Speaker
        Correct output: "This smart speaker offers an intuitive way to control your home, access music and information, and enjoy hands-free calling and messaging. With voice control, you can easily play music, control your smart home devices, and access information without ever having to pick up your phone. Key features include high-quality audio, integration with other smart home products, and a compact design that can fit seamlessly into any room of your home."
        --
        input: Robot Vacuum
        Correct ouput: "This robot vacuum is the ideal cleaning solution for busy individuals who want a spotless home without having to lift a finger. With advanced navigation technology and powerful suction, it can easily clean every nook and cranny of your home, leaving your floors spotless. Key features include voice control, scheduling, and compatibility with smart home systems, making it the perfect addition to your smart home setup."
        --
        input: Electric Scooter:
        Correct output: : "This electric scooter is the perfect mode of transportation for anyone who wants to get around quickly and efficiently. With a powerful motor, long-range battery, and lightweight design, you can easily navigate through city streets and arrive at your destination with ease. Key features include an easy-to-read display, automatic lights, and a folding design for convenient storage and transport."
        --
        input: Smart Watch:
        Correct output: "This watch is the ultimate accessory for the tech-savvy individual, offering a wealth of features designed to make your life easier and more convenient. With a high-resolution touch screen display, heart rate monitoring, and GPS capabilities, you can stay connected and on top of your health goals wherever you go. Key features include customizable watch faces, voice control, and mobile payments, making it the perfect companion for anyone who wants to simplify their life."
        --
        --
        input: Wireless Earbuds:
        Correct output: "These earbuds offer a truly wireless listening experience with no cords or wires to get in the way. They come equipped with Bluetooth connectivity, making it easy to pair with any device, and long battery life, giving you hours of uninterrupted music and hands-free calls. Key features include touch controls, noise cancellation technology, and a compact and lightweight design for comfortable all-day wear."
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
    <Sidebar title="Product Description">
      <section className="mx-4">
        <h2 className="text-gray-100 text-center sm:text-left">
          Product Description
        </h2>
        {!predictionOutput && (
          <div>
            <p className="text-sm pt-4 text-left">
              AI can be useful in product descriptions by automating the process
              of generating product descriptions. This can lead to several
              benefits such as:
            </p>
            <ul className="text-sm py-4">
              <li>
                1- Time-saving:quickly and efficiently, saving time for
                businesses.
              </li>
              <li>
                2- Consistency: professional and cohesive product catalog.
              </li>
              <li>
                3- Personalization: more relevant and appealing to individual
                users.
              </li>
            </ul>
          </div>
        )}

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
