import { useState } from "react";
import { CardMessage, Loader, Sidebar } from "@/components";
import { getProductDescription } from "@/services/ia";

const ProductPage = () => {
  const [productName, setProductName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [predictionOutput, setPredictionOutput] = useState<string>("");

  function handleMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    getProductDescription({ productName })
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
              cols={30}
              rows={10}
              className="block p-2.5 w-full text-sm  rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your product name here (Add the value proposal or keyfeatures that you want to highlight, example: Wireless headphones,  keywords: bluetooth, wireless, fast charging) "
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
