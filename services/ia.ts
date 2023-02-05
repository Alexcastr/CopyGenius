
const API_KEY = process.env.NEXT_PUBLIC_COHERE_API_KEY || ''

interface GetCopyAdsParams {
 companyName: string;
 adsMessage: string;
}

interface GetProductParams {
 productName: string;
}

export const  getCopyAds = async ({adsMessage,companyName}: GetCopyAdsParams) =>{
 const response = await fetch("https://api.cohere.ai/generate", {
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
    input: Give me a copywritting idea for advertising, ${companyName} company  is focusing in the ${adsMessage} sector 
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
}).then((res) => res.json())
 return response
}

export const getProductDescription = async ({productName}: GetProductParams) =>{
 const response = await fetch("https://api.cohere.ai/generate", {
  method: "POST",
  headers: {
    Authorization: `BEARER ${API_KEY}`,
    "Content-Type": "application/json",
    "Cohere-Version": "2022-12-06",
  },
  body: JSON.stringify({
    model: "command-xlarge-20221108",
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
    stop_sequences: ['--'],
    return_likelihoods: "NONE",
  }),
}).then((res) => res.json())
 return response
}
