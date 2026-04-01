interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = (props: FeatureCardProps) => {
  const {
    icon,
    title,
    description
  } = props

  return (
    <div className="flex justify-start md:justify-center items-start md:max-w-92.5 gap-2.5">
      <div className="flex">{icon}</div>
      <div className="grid">
        <h3 className="mb-1 font-extralight text-[1.375rem] tracking-wider leading-tight">{title}</h3>
        <p className="font-extralight text-xl">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
