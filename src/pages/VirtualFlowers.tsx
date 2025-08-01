import React from "react";
import "./Memories.css";

const flowers = [
  { name: "Rose", color: "#e63946", emoji: "🌹", meaning: "Love" },
  { name: "Tulip", color: "#f77f00", emoji: "🌷", meaning: "Perfect Love" },
  { name: "Sunflower", color: "#ffd60a", emoji: "🌻", meaning: "Adoration" },
  { name: "Cherry Blossom", color: "#ffb7c5", emoji: "🌸", meaning: "Beauty" },
  { name: "Hibiscus", color: "#ff6f61", emoji: "🌺", meaning: "Delicate Beauty" },
  { name: "Blossom", color: "#b983ff", emoji: "💐", meaning: "Gratitude" }
];

const VirtualFlowers: React.FC = () => {
  return (
    <div className="memories-container" style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ color: "#e63946", marginBottom: 0 }}>A Bouquet of Virtual Flowers for You 💐</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#555" }}>
        Since I can't give you real flowers right now, I made you this virtual bouquet. Each flower means something special, just like you do to me.
      </p>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "2rem" }}>
        {flowers.map((flower, idx) => (
          <div key={idx} style={{ background: flower.color + "22", borderRadius: 16, padding: 24, minWidth: 120, textAlign: "center", boxShadow: "0 2px 8px #0001" }}>
            <span style={{ fontSize: 48 }}>{flower.emoji}</span>
            <h2 style={{ margin: "0.5rem 0 0.2rem 0", color: flower.color }}>{flower.name}</h2>
            <div style={{ fontSize: 14, color: "#888" }}>{flower.meaning}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: "1.1rem", color: "#444", maxWidth: 500, textAlign: "center" }}>
        I hope these flowers brighten your day and remind you how much you mean to me. <br />
        Whenever you miss me, come back here for a fresh bouquet. <br />
        <span style={{ color: "#e63946", fontWeight: 600 }}>I love you! 💖</span>
      </div>
    </div>
  );
};

export default VirtualFlowers;