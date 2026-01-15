const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.';

export type BannerData = {
  id: number;
  title: string;
  text: string;
  style: string;
};

export const bannerData: BannerData[] = [
  {
    id: 1,
    title: 'Баннер 1',
    text: text,
    style: 'banner1',
  },
  {
    id: 2,
    title: 'Баннер 2',
    text: text,
    style: 'banner2',
  },
  {
    id: 3,
    title: 'Баннер 3',
    text: text,
    style: 'banner3',
  },
];
