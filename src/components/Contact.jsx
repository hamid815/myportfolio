import React, { useState } from "react";
import "./Contact.css";

const Contact = ({ contactState }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState(""); // ✅ yangi status

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `
📬 Yangi kontakt:
👤 Ism: ${name}
📞 Telefon: ${phone}
📧 Email: ${email}
    `;

    const BOT_TOKEN = "7571951013:AAEarY5fvcEyS_eBBBITnOuz2Yn22tmlf38"; // Bu yerga sizning bot tokeningizni qo'ying
    const CHAT_ID = "5704255218"; // Bu yerga sizning chat ID yoki kanal nomini qo'ying

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      });

      setStatusMessage("✅ Ma'lumotlar yuborildi!");
      setName("");
      setPhone("");
      setEmail("");
    } catch (error) {
      console.error("Telegramga yuborishda xatolik:", error);
      setStatusMessage("❌ Yuborishda xatolik yuz berdi.");
    }
  };

  return (
    <div className="mycon">
      <div className="container">
        <h2 className="contact_me">{contactState[0].title}</h2>
        <form className="add_contact" onSubmit={handleSubmit}>
          <h3>{contactState[0].description}</h3>

          <input
            className="inp"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="inp"
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            className="inp"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* 🟡 Shu yerga xabar chiqariladi */}
          {statusMessage && (
            <p className="status-message">{statusMessage}</p>
          )}

          <button className="add" type="submit">
            Add contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
