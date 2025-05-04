"use client";

import { useState } from "react";
import { Check, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const pricingPlans = [
    {
      name: "Free Plan",
      price: 0,
      extractions: 50,
      features: [
        "Basic email services",
        "Limited storage",
        "Standard support",
        "Essential features included",
      ],
      buttonText: "Start for Free",
      buttonVariant: "primary",
    },
    {
      name: "Basic Plan",
      price: 29,
      extractions: 1000,
      features: [
        "Advanced email features",
        "Increased storage",
        "Priority support",
        "Customization options",
        "Flexible pricing",
      ],
      buttonText: "Get Started",
      buttonVariant: "primary",
    },
    {
      name: "Pro Plan",
      price: 0,
      extractions: 5000,
      features: [
        "Basic email services",
        "Limited storage",
        "Standard support",
        "Essential features included",
      ],
      buttonText: "Get Started",
      buttonVariant: "primary",
    },
  ];

  const faqQuestions = [
    {
      question: "Why is Webflow the best nocode tool?",
      answer:
        "UI anim ad minim veniam quis nostrud exercitation ullamco labore nisi ut aliquip ex ea commodo consequat aute irure dolor.",
    },
    {
      question: "How to launch a Webflow website?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Who founded BRIX Templates?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "When did Webflow was founded?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Who are the Webflow founders?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Is NoCode the future of the web?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="w-full py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Pricing Header */}
        <div className="text-center mb-12">
          <div className="text-sm uppercase tracking-wide mb-2">Pricing</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#7B68EE]">Transparent</span> Pricing Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vision/Language Model (VLM) powered structuring that simplifies your
            data, saves time, and boosts efficiency.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center mt-8 space-x-3">
            <span className={cn("text-sm", !isYearly && "font-medium")}>
              Billed Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#7B68EE]"
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition",
                  isYearly ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
            <span className={cn("text-sm", isYearly && "font-medium")}>
              Billed Yearly (save 15%)
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-8 flex flex-col"
            >
              <h3 className="text-lg font-medium mb-4">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Up to {plan.extractions} page extractions/mo
                <br />
                <span className="text-xs">
                  {index === 0
                    ? "No credit card required"
                    : "Additional pages at $0.xx/extraction"}
                </span>
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-[#7B68EE] mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={cn(
                  "w-full py-2 rounded-md font-medium transition-colors",
                  "bg-[#7B68EE] text-white hover:bg-[#6A5ACD]"
                )}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 text-xs bg-gray-100 rounded-full mb-4">
              FAQ
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#7B68EE]">Transparent</span> Pricing Plan
            </h2>
            <p className="text-gray-600">
              Vision/Language Model (VLM) powered structuring that simplifies
              your data, saves time, and boosts efficiency.
            </p>
          </div>

          <div className="space-y-4">
            {faqQuestions.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="flex justify-between items-center w-full px-6 py-4 text-left"
                >
                  <span className="font-medium">{faq.question}</span>
                  <div
                    className={cn(
                      "flex items-center justify-center w-6 h-6 rounded-md",
                      openQuestion === index ? "bg-[#7B68EE]" : "bg-gray-100"
                    )}
                  >
                    {openQuestion === index ? (
                      <Minus className="h-4 w-4 text-white" />
                    ) : (
                      <Plus className="h-4 w-4 text-gray-600" />
                    )}
                  </div>
                </button>
                {openQuestion === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
