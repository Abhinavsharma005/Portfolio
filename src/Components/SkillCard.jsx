import React from "react";

const SkillCard = ({ icon: Icon, title, skills }) => {
  // Default color (from first skill)
  let mainColor = skills[0]?.color || "#3B82F6";

  if (title === "Backend & Database") mainColor = "#ec4899"; // pink
  if (title === "Tools") mainColor = "#A099FF"; // yellow

  return (
    <div
      className="rounded-2xl p-6 w-full sm:w-[320px] shadow-lg transform transition-all duration-300 hover:scale-105 backdrop-blur-md"
      style={{
        backgroundColor: "rgba(15, 19, 33, 0.7)", 
        border: "1px solid #2b3042",
        boxShadow: "0 0 25px rgba(0,0,0,0.3)",
      }}
    >
      {/* Icon Section */}
      <div className="flex justify-center mb-4">
        <div
          className="p-[2px] rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${shadeColor(mainColor, 20)}, ${shadeColor(mainColor, 5)})`,
          }}
        >
          <div
            className="w-14 h-14 flex items-center justify-center rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${shadeColor(mainColor, 10)}, ${shadeColor(mainColor, -10)})`,
              boxShadow: `0 0 20px ${mainColor}60`,
            }}
          >
            <Icon size={28} style={{ color: "white" }} />
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-center mb-4 text-white">
        {title}
      </h2>

      {/* Skill Tags */}
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="px-3 py-1 rounded-full text-sm font-medium text-white"
            style={{
              backgroundColor: `${skill.color}33`, // translucent tag
              border: `1px solid ${skill.color}`,
              color: skill.color === "#FACC15" ? "black" : "white",
            }}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

// Helper: lighten/darken a color
function shadeColor(color, percent) {
  const num = parseInt(color.slice(1), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = ((num >> 8) & 0x00ff) + amt,
    B = (num & 0x0000ff) + amt;
  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
}

export default SkillCard;
