"use client";

import { useState } from "react";

function TransferForm() {
  const [accounts, setAccounts] = useState([
    { name: "สมชาย", balance: 500000 },
    { name: "Laura", balance: 300000 },
  ]);
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const handleTransfer = () => {
    if (!sender || !receiver || !amount) {
      setMessage("❌ กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    if (sender === receiver) {
      setMessage("❌ ไม่สามารถโอนให้ตัวเองได้");
      return;
    }

    const senderAccount = accounts.find((acc) => acc.name === sender);
    const receiverAccount = accounts.find((acc) => acc.name === receiver);

    if (!senderAccount || !receiverAccount) {
      setMessage("❌ ไม่พบชื่อผู้ใช้");
      return;
    }

    if (senderAccount.balance < Number(amount)) {
      setMessage("❌ ยอดเงินไม่พอ");
      return;
    }

    // ทำการโอน
    const updatedAccounts = accounts.map((acc) => {
      if (acc.name === sender) {
        return { ...acc, balance: acc.balance - Number(amount) };
      }
      if (acc.name === receiver) {
        return { ...acc, balance: acc.balance + Number(amount) };
      }
      return acc;
    });

    setAccounts(updatedAccounts);
    setHistory([
      `🔁 โอน ${amount.toLocaleString()} บาท จาก ${sender} ไปยัง ${receiver}`,
      ...history,
    ]);
    setMessage(`✅ โอนสำเร็จ ${amount.toLocaleString()} บาท`);
    setAmount("");
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow mt-10 space-y-4">
      <h2 className="text-2xl font-bold">💸 ระบบโอนเงินจำลอง</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Dropdown ผู้โอน */}
        <select
          className="w-full border p-2 rounded"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
        >
          <option value="">เลือกชื่อผู้โอน</option>
          {accounts.map((acc, i) => (
            <option key={i} value={acc.name}>
              {acc.name}
            </option>
          ))}
        </select>

        {/* Dropdown ผู้รับ */}
        <select
          className="w-full border p-2 rounded"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        >
          <option value="">เลือกชื่อผู้รับ</option>
          {accounts.map((acc, i) => (
            <option key={i} value={acc.name}>
              {acc.name}
            </option>
          ))}
        </select>
      </div>

      <input
        className="w-full border p-2 rounded"
        type="number"
        placeholder="จำนวนเงิน"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <button
        onClick={handleTransfer}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        โอนเงิน
      </button>

      {message && <p className="text-green-600">{message}</p>}

      <div>
        <h3 className="font-semibold">📊 ยอดเงินในบัญชี</h3>
        <ul className="list-disc ml-5">
          {accounts.map((acc, i) => (
            <li key={i}>
              {acc.name}: {acc.balance.toLocaleString()} บาท
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">📝 ประวัติการโอน</h3>
        <ul className="list-disc ml-5">
          {history.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TransferForm;
