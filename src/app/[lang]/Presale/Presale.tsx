"use client"
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import Image from "next/image";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Presale = ({ dict }: { dict: any }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [selectedCurrency, setSelectedCurrency] = useState("SOL");
  const [payAmount, setPayAmount] = useState(0);
  const [receiveAmount, setReceiveAmount] = useState(0);
  const [prices, setPrices] = useState({ SOL: 0, USDC: 1, USDT: 1 });
  const { publicKey, connected, signTransaction } = useWallet();
  const { connection } = useConnection();

  useEffect(() => {
    const targetDate = new Date("2025-04-30T00:00:00Z").getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(countdown);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(countdown); // Clean up interval on component unmount
  }, []);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=solana,usd-coin,tether&vs_currencies=usd"
        );
        const data = await response.json();
        setPrices({
          SOL: data.solana.usd,
          USDC: data["usd-coin"].usd,
          USDT: data.tether.usd,
        });
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    fetchPrices();
  }, []);

  const handleBuyNow = async () => {
    if (!connected) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey!,
          toPubkey: new PublicKey("YourRecipientAddress"), // Update with your recipient address
          lamports: LAMPORTS_PER_SOL * payAmount, // Amount in SOL
        })
      );

      const { blockhash } = await connection.getRecentBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = publicKey!;

      if (!signTransaction) {
        throw new Error("signTransaction is undefined");
      }
      const signedTransaction = await signTransaction(transaction);
      const signature = await connection.sendRawTransaction(signedTransaction.serialize());
      await connection.confirmTransaction(signature, "confirmed");

      alert(`Transaction sent! TX Signature: ${signature}`);
    } catch (error) {
      console.error("Transaction error:", error);
      alert("Transaction failed. Please try again.");
    }
  };

  const handlePayAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(e.target.value);
    setPayAmount(amount);

    let usdAmount = 0;
    if (selectedCurrency === "SOL") {
      usdAmount = amount * prices.SOL;
    } else if (selectedCurrency === "USDC") {
      usdAmount = amount * prices.USDC;
    } else if (selectedCurrency === "USDT") {
      usdAmount = amount * prices.USDT;
    }

    setReceiveAmount(usdAmount / 0.001); // Assuming 1 $WFT = 0.001 USD
  };

  return (
    <div className="pt-5 bg-gray-100">
      <div className="min-h-screen flex justify-center items-center bg-gray-100 pb-10">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
          {/* Title */}
          <h1 className="text-center text-2xl font-bold text-orange-600">
            {dict.presale?.title || "Buy Before the Price Rises!"}
          </h1>

          {/* Timer Section */}
          <div className="flex justify-between items-center mt-6 text-lg font-semibold text-gray-700">
            <div className="flex flex-col items-center">
              <div>{timeLeft.days}</div>
              <span className="text-sm text-gray-500">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <div>{timeLeft.hours}</div>
              <span className="text-sm text-gray-500">Hrs</span>
            </div>
            <div className="flex flex-col items-center">
              <div>{timeLeft.minutes}</div>
              <span className="text-sm text-gray-500">Min</span>
            </div>
            <div className="flex flex-col items-center">
              <div>{timeLeft.seconds}</div>
              <span className="text-sm text-gray-500">Sec</span>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">
            {dict.presale?.countdownText || "UNTIL NEXT PRICE INCREASE"}
          </p>

          {/* Pricing Section */}
          <div className="mt-6 text-sm text-gray-700">
            <p className="flex justify-between">
              <span>{dict.presale?.wftPriceLabel || "1 $WFT:"}</span>{" "}
              <span className="font-bold">$0.00012500 USD</span>
            </p>
            <p className="flex justify-between">
              <span>{dict.presale?.currentPriceLabel || "Current Price:"}</span>{" "}
              <span className="font-bold">$0.00012500 USD</span>
            </p>
            <p className="flex justify-between">
              <span>{dict.presale?.afterPriceLabel || "After Price:"}</span>{" "}
              <span className="font-bold">$0.00015000 USD</span>
            </p>
            <div className="relative w-full bg-gray-200 rounded-full h-2 mt-3">
              <div
                className="absolute top-0 left-0 h-2 rounded-full bg-orange-600"
                style={{ width: "80%" }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {dict.presale?.raisedLabel || "Over $473177/$600000 USD raised!"}
            </p>
          </div>

          {/* Buy Section */}
          <div className="mt-6">
            <h3 className="text-center font-medium text-gray-800">
              {dict.presale?.buyNow || "Buy $WFT Now"}
            </h3>

            {/* Payment Icons */}
            <div className="flex justify-center gap-20 mt-4">
              <Image
                src="/Sol.avif"
                alt="SOL"
                width={50}
                height={50}
                className={`w-8 h-8 cursor-pointer ${
                  selectedCurrency === "SOL" ? "ring-2 ring-orange-600" : ""
                }`}
                onClick={() => setSelectedCurrency("SOL")}
              />
              <Image
                src="/USDC.svg"
                alt="USDC"
                width={32}
                height={32}
                className={`w-8 h-8 cursor-pointer ${
                  selectedCurrency === "USDC" ? "ring-2 ring-orange-600" : ""
                }`}
                onClick={() => setSelectedCurrency("USDC")}
              />
              <Image
                src="/USDT.svg"
                alt="USDT"
                width={32}
                height={32}
                className={`w-8 h-8 cursor-pointer ${
                  selectedCurrency === "USDT" ? "ring-2 ring-orange-600" : ""
                }`}
                onClick={() => setSelectedCurrency("USDT")}
              />
            </div>

            {/* Input Fields */}
            <div className="mt-4 space-y-3">
              <input
                type="number"
                placeholder={`${dict.presale?.payWith || "Pay with"} ${selectedCurrency}`}
                className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
                value={payAmount}
                onChange={handlePayAmountChange}
              />
              <input
                type="number"
                placeholder={dict.presale?.receive || "Receive $Well Fit"}
                className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
                value={receiveAmount}
                readOnly
              />
            </div>

            {/* Connect Wallet and Buy Button */}
            <div className="flex justify-between items-center mt-4 gap-1">
              <WalletMultiButton className="flex-1 bg-orange-600 text-white py-3 rounded-md text-sm font-medium hover:bg-orange-700">
                {connected ? dict.presale?.walletConnected || "Wallet Connected" : dict.presale?.connectWallet || "Connect Wallet"}
              </WalletMultiButton>
              <button
                className="flex-1 bg-orange-600 text-white py-3 rounded-md text-sm font-medium hover:bg-orange-700"
                onClick={handleBuyNow}
                disabled={!connected}
              >
                {dict.presale?.buyNowButton || "Buy Now"}
              </button>
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">
              {dict.presale?.howToBuy || "How to buy?"}{" "}
              <a href="#" className="text-orange-600 underline">
                {dict.presale?.clickHere || "(Click Here)"}
              </a>
            </p>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-8">
            {dict.presale?.footerText || "Your TMT token presale"}
          </p>
        </div>
      </div>

      <Footer dict={dict} />
    </div>
  );
};

export default Presale;
