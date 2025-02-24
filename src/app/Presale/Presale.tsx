"use client";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Footer from "@/components/Footer";

const Presale = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 14,
    minutes: 48,
    seconds: 28,
  });

  const [selectedCurrency, setSelectedCurrency] = useState("BTC");
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(countdown);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown); // Clean up interval on component unmount
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // MetaMask Wallet Connection
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        setWalletConnected(true);
        alert(`Wallet Connected: ${address}`);
      } catch (error) {
        console.error("Error connecting MetaMask wallet:", error);
        alert("Failed to connect MetaMask wallet. Please try again.");
      }
    } else if (window.sui) {
      try {
        // SUI Wallet Connection (Assuming window.sui is available)
        const provider = new window.sui.SuiProvider(); // Or whatever SUI provider method
        const address = await provider.getAddress();
        setWalletAddress(address);
        setWalletConnected(true);
        alert(`SUI Wallet Connected: ${address}`);
      } catch (error) {
        console.error("Error connecting SUI wallet:", error);
        alert("Failed to connect SUI wallet. Please try again.");
      }
    } else {
      alert("No supported wallet extension found. Please install MetaMask or SUI wallet.");
    }
  };

  const handleBuyNow = async () => {
    if (!walletConnected) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      let transaction;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      if (selectedCurrency === "SUI") {
        // Use SUI wallet for transaction (adjust this as per SUI's API for transaction)
        const suiTransaction = {
          to: "0xYourSuiRecipientAddress", // Update with SUI address
          value: "0.01 SUI", // Adjust the SUI amount
        };
        // Sending transaction for SUI (this method should be updated as per SUI API)
        const txResponse = await window.sui.sendTransaction(suiTransaction); // Example method
        alert(`SUI Transaction sent! TX Hash: ${txResponse.hash}`);
      } else {
        // Use ETH/MetaMask for transaction
        transaction = {
          to: "0xYourContractOrRecipientAddress", // Update with your contract address or recipient
          value: ethers.utils.parseEther("0.01"), // ETH amount (0.01 ETH in this example)
        };
        const txResponse = await signer.sendTransaction(transaction);
        alert(`Transaction sent! TX Hash: ${txResponse.hash}`);
      }
    } catch (error) {
      console.error("Transaction error:", error);
      alert("Transaction failed. Please try again.");
    }
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center  bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
          {/* Title */}
          <h1 className="text-center text-2xl font-bold text-orange-600">
            Buy Before the Price Rises!
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
            UNTIL NEXT PRICE INCREASE
          </p>

          {/* Pricing Section */}
          <div className="mt-6 text-sm text-gray-700">
            <p className="flex justify-between">
              <span>1 $HINU:</span> <span className="font-bold">$0.00012500 USD</span>
            </p>
            <p className="flex justify-between">
              <span>Current Price:</span> <span className="font-bold">$0.00012500 USD</span>
            </p>
            <p className="flex justify-between">
              <span>After Price:</span> <span className="font-bold">$0.00015000 USD</span>
            </p>
            <div className="relative w-full bg-gray-200 rounded-full h-2 mt-3">
              <div
                className="absolute top-0 left-0 h-2 rounded-full bg-orange-600"
                style={{ width: "80%" }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Over $473177/$600000 USD raised!
            </p>
          </div>

          {/* Buy Section */}
          <div className="mt-6">
            <h3 className="text-center font-medium text-gray-800">
              Buy or Stake $HINU Now
            </h3>

            {/* Payment Icons */}
            <div className="flex justify-center gap-24 mt-4">
              <img
                src="/Sui.svg"
                alt="SUI"
                className={`w-8 h-8 cursor-pointer ${
                  selectedCurrency === "SUI" ? "ring-2 ring-orange-600" : ""
                }`}
                onClick={() => setSelectedCurrency("SUI")}
              />
              <img
                src="/USDC.svg"
                alt="USDC"
                className={`w-8 h-8 cursor-pointer ${
                  selectedCurrency === "USDC" ? "ring-2 ring-orange-600" : ""
                }`}
                onClick={() => setSelectedCurrency("USDC")}
              />
              <img
                src="/USDT.svg"
                alt="usdt"
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
                placeholder={`Pay with ${selectedCurrency}`}
                className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
              <input
                type="number"
                placeholder="Receive $HINU"
                className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>

            {/* Connect Wallet Button */}
            {!walletConnected && (
              <button
                className="w-full bg-blue-600 text-white py-3 rounded-md mt-4 text-sm font-medium hover:bg-blue-700"
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            )}

            {/* Buy Button */}
            <button
              className="w-full bg-orange-600 text-white py-3 rounded-md mt-4 text-sm font-medium hover:bg-orange-700"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
            <p className="text-center text-xs text-gray-500 mt-2">
              How to buy? <a href="#" className="text-orange-600 underline">(Click Here)</a>
            </p>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-8">Your TMT token presale</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Presale;
