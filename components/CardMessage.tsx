import { FC } from "react";


interface Props{
  prediction: string
}

export const CardMessage:FC<Props> = ({prediction}) => {
  return (
    <div className="sm:max-w-xs lg:max-w-lg p-4 rounded-lg shadow bg-gray-800 border-gray-700">
      <p className="mb-2 text-sm font-normal text-gray-400">
        {prediction}.
      </p>
    </div>
  );
}
