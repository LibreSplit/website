import React from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
}

export default function CodeBlock({ children }: CodeBlockProps) {
  // Convert children to an array of strings, split by <br /> tags or newlines
  const lines = React.Children.toArray(children)
    .flatMap((child) => 
      typeof child === 'string' 
        ? child.split(/<br\s*\/?>|\n/)
        : []
    )
    .filter((line) => line.trim() !== '');

  return (
    <code className="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-[#353535] text-white rounded-lg p-4 pl-6">
      <span className="flex flex-col gap-1">
        {lines.map((line, index) => (
          <span key={index} className="flex items-center">
            <span className="text-gray-600 select-none">$</span>
            <span className="flex-1 pl-2">{line}</span>
          </span>
        ))}
      </span>
    </code>
  );
}