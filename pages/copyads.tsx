
import { useState } from 'react';
import { CardMessage, Loader, Sidebar } from '@/components';
import { getCopyAds } from '@/services/ia';

const CopyAdsPage = () => {

  const [adsMessage, setAdsMessage] = useState<string>('')
  const [companyName, setCompanyName] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [predictionOutput, setPredictionOutput] = useState<string>('')

  function handleMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    getCopyAds({adsMessage, companyName})
      .then((data) => {
        setIsLoading(false)
        setPredictionOutput(data.generations[0].text)
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error);
      });  
  }

  return (
    <Sidebar title="Copy Ads">
      <section className="mx-4">
        <h2 className="text-gray-100 text-center sm:text-left">
          Copywritting for Ads
        </h2>
        <p className="text-sm pt-4 text-gray-500">
          Copy ads are short, impactful advertisements that utilize the power of
          language to convince consumers to take a particular
          action. Whether it's buying a product or signing up for a service, the
          objective of copy ads is to drive the consumer towards a desired
          outcome.
        </p>
        <div className="flex flex-col gap-4 sm:justify-evenly sm:flex-row pb-20">
          <form className="mt-10" onSubmit={handleMessage}>
            <div className="mb-6">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium text-white"
              >
                Company name
              </label>
              <input
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                type="text"
                id="large-input"
                className="block w-full p-4 rounded-lg sm:text-md bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Short Description
            </label>
            <textarea
              required
              value={adsMessage}
              onChange={(e) => setAdsMessage(e.target.value)}
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm  rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write the sector you focus on or give it a short description about the goal you want to achieve! (Example 01: Digital Marketing and SEO)  (Example 02: Selling clothes for a summer season)"
            />
            {isLoading ? (
              <Loader />
            ) : (
              <button
                disabled={isLoading}
                type="submit"
                className="mt-4 text-white w-full sm:max-w-min bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
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
}

export default CopyAdsPage