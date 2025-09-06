import { useState, useEffect } from "react";
import Button from "./button";
import CopyButton from "./copy";

interface Quote {
  quote: string;
  author: string;
}

const Card = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const fetchQuote = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/random-quote");
      const data: Quote = await response.json();
      setQuote(data); 
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []); 

  const fullQuoteString = quote
    ? `"${quote.quote.trim()}" - ${quote.author}`
    : "Loading quote...";

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 dark:bg-[#F2E1E1] px-4 py-6">
      <div className="w-full max-w-md p-6 sm:p-8 space-y-6 bg-white rounded-xl shadow-lg dark:bg-white">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-[#834C4C] font-mono">
            Quote Generator
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-[#A56C6C] font-mono">
            Find inspiration from the world's greatest minds.
          </p>
        </div>

        <div className="relative p-4 sm:p-6 bg-slate-50 rounded-lg dark:bg-white border-[#DE9999] border-1">
          <CopyButton textToCopy={fullQuoteString} />
          {quote ? (
            <>
              <p className="pr-8 text-base sm:text-lg italic text-slate-700 dark:text-[#573030] font-serif">
                "{quote.quote}"
              </p>
              <p className="mt-4 font-semibold text-right font-mono text-black">
                - {quote.author}
              </p>
            </>
          ) : (
            <p className="pr-8 text-base sm:text-lg italic text-slate-700 dark:text-[#573030] font-serif">
              Loading...
            </p>
          )}
        </div>

        <hr className="border-slate-200 dark:border-[#834C4C]" />

        <Button onClick={fetchQuote} />
      </div>
    </div>
  );
};

export default Card;