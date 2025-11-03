import React from 'react';

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="tool-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="btn">Learn More</a>
    </div>
  );
};

export default ToolCard;