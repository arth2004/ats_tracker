import React from "react";

interface ScoreBadgeProps {
  score: number;
  prompt?: string;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score, prompt }) => {
  let badgeText = "";
  let badgeClass = "";

  if (score > 69) {
    badgeText = "Strong";
    badgeClass = "bg-badge-green text-green-600";
  } else if (score > 49) {
    badgeText = "Good Start";
    badgeClass = "bg-badge-yellow text-yellow-700";
  } else {
    badgeText = "Needs Work";
    badgeClass = "bg-badge-red text-red-600";
  }

  return (
    <div className={`rounded-full px-4 py-1 inline-block ${badgeClass}`}>
      <p className="font-semibold text-sm">
        {prompt ? `${prompt}: ` : ""}
        {badgeText}
      </p>
    </div>
  );
};

export default ScoreBadge;
