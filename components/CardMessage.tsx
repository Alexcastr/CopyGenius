import { FC } from "react";


interface Props{
  prediction: string
}

export const CardMessage:FC<Props> = ({prediction}) => {
  return (
    <div className="sm:max-w-[22rem] sm:h-72 my-auto p-4 text-justify rounded-lg shadow bg-gray-800 border-gray-700">
      <p className="mb-2 text-sm font-normal text-gray-400">
        {prediction}.
      </p>
    </div>
  );
}
