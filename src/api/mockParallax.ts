const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula isi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.';

export type ParallaxData = {
  id: number;
  title: string;
  subtitle: string;
  text: string;
};

export const parallaxData: ParallaxData[] = [
  {
    id: 1,
    title: 'Слайд 1',
    subtitle: 'Описание',
    text: text,
  },
  {
    id: 2,
    title: 'Слайд 2',
    subtitle: 'Описание',
    text: text,
  },
  {
    id: 3,
    title: 'Слайд 3',
    subtitle: 'Описание',
    text: text,
  },
];
