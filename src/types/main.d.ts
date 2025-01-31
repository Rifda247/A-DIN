declare module "*.css" {
  const content: string;
  export default content;
}

type AccordionItem = {
  title: string;
  content: string;
};

type Slider = {
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (slide: number) => void;
  activateDot: (slide: number) => void;
};
