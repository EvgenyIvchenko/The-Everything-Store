import Container from "../../shared/ui/Container";
import FeatureCard from "../../shared/ui/FeatureCard";
import CartOrange from "../../shared/assets/icons/cart-orange.svg?react";
import GobletOrange from "../../shared/assets/icons/goblet-orange.svg?react";
import LabelOrange from "../../shared/assets/icons/label-orange.svg?react";
import CheckOrange from "../../shared/assets/icons/check-orange.svg?react";

const FeaturesSection = () => {
  const featuresData = [
    {
      icon:
        <CartOrange className="w-8 h-8" />,
      title: 'FREE DELIVERY',
      description: 'Consectetur adipi elit lorem ipsum dolor sit amet.',
    },
    {
      icon:
        <GobletOrange className="w-8 h-8" />,
      title: 'QUALITY GUARANTEE',
      description: 'Dolor sit amet orem ipsu mcons ectetur adipi elit.',
    },
    {
      icon:
        <LabelOrange className="w-8 h-8" />,
      title: 'DAILY OFFERS',
      description: 'Amet consectetur adipi elit lorem ipsum dolor.',
    },
    {
      icon:
        <CheckOrange className="w-8 h-8" />,
      title: '100% SECURE PAYMENT',
      description: 'Rem Lopsum dolor sit amet, consectetur adipi elit.',
    },
  ];

  return (
    <section className="">
      <Container>
        <div className="flex flex-col :flex-row items-center py-14 md:py-35">
          <div className="flex flex-col md:flex-row max-w-92.5 md:max-w-none gap-5">
            {featuresData.map((feature, index) =>
              <FeatureCard key={index} {...feature} />)}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
