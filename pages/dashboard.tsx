
import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { CardMessage } from '@/components';

const API_KEY = process.env.NEXT_PUBLIC_COHERE_API_KEY || ''

const DashboardPage = () => {

  const [message, setMessage] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [predictionOutput, setPredictionOutput] = useState<string>('')

  function handleMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    fetch("https://api.cohere.ai/generate", {
      method: "POST",
      headers: {
        Authorization: `BEARER ${API_KEY}`,
        "Content-Type": "application/json",
        "Cohere-Version": "2022-12-06",
      },
      body: JSON.stringify({
        model: "command-xlarge-20221108",
        prompt: `This is a copywritting idea generator for social media advertising. 
        --
        input: Give me a copywritting idea for advertising,  XfarmV company  is focusing in the Agriculture sector
        Correct output: "Bring your farm to the next level with our innovative AgroSustain. More yield, less hassle!"
        --
        input: Give me a copywritting idea for advertising,  TechCo company is focusing in the Technology sector 
        Correct ouput: "Say goodbye to slow, outdated systems. Upgrade to FutureNet and experience lightning-fast performance."
        --
        input:Give me a copywritting idea for advertising,  ColSanitas company  is focusing in the Healthcare sector 
        Correct output: "Say goodbye to long wait times and high costs. Our CareLink offers affordable, accessible healthcare for everyone."
        --
        input:Give me a copywritting idea for advertising,  Waltmart company  is focusing in the Retail sector 
        Correct output: "Discover the joy of stress-free shopping with QuickCart. It's the smart way to shop."
        --
        --
        input:Give me a copywritting idea for advertising,  Waltmart company  is focusing in the Retail sector 
        Correct output: "Upgrade your shopping experience with ShopEase. Find what you need, fast."
        --
        input: Give me a copywritting idea for advertising, ${name} company  is focusing in the ${message} sector 
        Correct output:`,
        max_tokens: 300,
        temperature: 0.9,
        k: 0,
        p: 0.75,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop_sequences: ['--'],
        return_likelihoods: "NONE",
      }),
    })
      .then((response) => response.json())
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
    <Sidebar>
      <section className="mx-4">
        <h2 className="text-gray-100 text-center sm:text-left">Dashboard</h2>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm  rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write the sector you focus on or give it a short description about the goal you want to achieve, Example 01: Digital Marketing and SEO   ||  Example 02: Selling clothes for a summer season" 
            />
            <button
              disabled={isLoading}
              type="submit"
              className="mt-4 text-white w-full sm:max-w-min bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              { isLoading ? 'Loading...' : 'Generate'}
            </button>
          </form>

          {
            predictionOutput && (<CardMessage prediction={predictionOutput}/>)
          }
        </div>
      </section>
    </Sidebar>
  );
}

export default DashboardPage