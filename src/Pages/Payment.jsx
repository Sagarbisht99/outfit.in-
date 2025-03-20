import { useState } from "react";
import { useCart } from "../Contexts/CartContext";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Payment() {
  const [paymentType, setPaymentType] = useState("full");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [installmentFrequency, setInstallmentFrequency] = useState("weekly");
  const [termDays, setTermDays] = useState(90);

  const { total } = useCart();

  const invoiceTotal = total;
  const processingFee = 5;
  const gst = 0.5;
  const totalDue = invoiceTotal + processingFee + gst;

  const installmentAmount = invoiceTotal / (termDays / 30);
  const totalPerInstallment = installmentAmount + processingFee + gst;

  return (
    <div>
      <Header />
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-xl font-semibold mb-4">Select a payment option</h2>

        {/* Payment Type Selection */}
        <div className="space-y-4">
          {/* Pay in Full Option */}
          <div className="p-4 border rounded-lg">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="paymentType"
                value="full"
                checked={paymentType === "full"}
                onChange={() => setPaymentType("full")}
                className="mr-2"
              />
              <span className="font-medium">Pay in full now</span>
            </label>

            {paymentType === "full" && (
              <div className="ml-6 mt-2 text-gray-600">
                <p>Invoice total: ${invoiceTotal.toFixed(2)}</p>
                <p>Processing fee: ${processingFee.toFixed(2)}</p>
                <p>GST: ${gst.toFixed(2)}</p>
                <p className="font-semibold">
                  Total due today: ${totalDue.toFixed(2)}
                </p>

                {/* Payment Method */}
                <div className="flex gap-3 mt-3">
                  <button
                    className={`p-3 border rounded-lg ${
                      paymentMethod === "card"
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("card")}
                  >
                    Card (****4242)
                  </button>
                  <button
                    className={`p-3 border rounded-lg ${
                      paymentMethod === "debit"
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("debit")}
                  >
                    Direct Debit
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Pay in Installments Option */}
          <div className="p-4 border rounded-lg">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="paymentType"
                value="installments"
                checked={paymentType === "installments"}
                onChange={() => setPaymentType("installments")}
                className="mr-2"
              />
              <span className="font-medium">Pay by installments</span>
            </label>

            {paymentType === "installments" && (
              <div className="ml-6 mt-2 text-gray-600">
                <p>Split the payment over up to 90 days</p>

                {/* Frequency Selection */}
                <div className="mt-3 flex gap-3">
                  <button
                    className={`px-4 py-2 border rounded-lg ${
                      installmentFrequency === "weekly"
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => setInstallmentFrequency("weekly")}
                  >
                    Weekly
                  </button>
                  <button
                    className={`px-4 py-2 border rounded-lg ${
                      installmentFrequency === "fortnightly"
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => setInstallmentFrequency("fortnightly")}
                  >
                    Fortnightly
                  </button>
                </div>

                {/* Term Selection */}
                <div className="mt-3 flex gap-3">
                  {[30, 60, 90].map((days) => (
                    <button
                      key={days}
                      className={`px-4 py-2 border rounded-lg ${
                        termDays === days
                          ? "border-blue-500"
                          : "border-gray-300"
                      }`}
                      onClick={() => setTermDays(days)}
                    >
                      {days} Days
                    </button>
                  ))}
                </div>

                {/* Installment Summary */}
                <div className="mt-4">
                  <p>
                    Net amount per installment: ${installmentAmount.toFixed(2)}
                  </p>
                  <p>Processing fee: ${processingFee.toFixed(2)}</p>
                  <p>GST: ${gst.toFixed(2)}</p>
                  <p className="font-semibold">
                    Total per installment: ${totalPerInstallment.toFixed(2)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Confirm & Cancel Buttons */}
        <div className="flex justify-between mt-6">
          <button className="px-4 py-2 border rounded-lg bg-gray-200">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Confirm Payment
          </button>
        </div>
      </div>
     
    </div>
  );
}
