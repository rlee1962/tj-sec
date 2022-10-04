import { MenuSection } from './sections/MenuSection';
import { HomeSection } from './sections/HomeSection';
import { AboutSection } from './sections/AboutSection';
import { TalentGridSection } from './sections/TalentGridSection';
import { ServiceGridSection } from './sections/ServiceGridSection';
import { FeaturedGridSection } from './sections/FeaturedGridSection';
import { AchievementGridSection } from './sections/AchievementGridSection';
import { ContactSection } from './sections/ContactSection';
// import { ImageCarousel } from './featured/ImageCarousel';
// import { HeroSection } from './HeroSection';
// import { CardGridSection } from './CardGridSection';

const componentsMap = {
  MenuSection: MenuSection,
  HomeSection: HomeSection,
  AboutSection: AboutSection,
  TalentGridSection: TalentGridSection,
  ServiceGridSection: ServiceGridSection,
  FeaturedGridSection: FeaturedGridSection,
  AchievementGridSection: AchievementGridSection,
  ContactSection: ContactSection,
  // ImageCarousel: ImageCarousel,
  // HeroSection: HeroSection,
  // CardGridSection: CardGridSection,
};

export const DynamicComponent = (props) => {
  if (!props.type) {
    const propsOutput = JSON.stringify(props, null, 2);
    throw new Error(`Object does not have a 'type' property: ${propsOutput}`);
  }

  const Component = componentsMap[props.type];
  if (!Component) {
    throw new Error(`No component is registered for type:'${props.type}`);
  }
  return <Component {...props} />;
};
