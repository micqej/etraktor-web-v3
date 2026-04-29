import {
  AboutBlock,
  ContactBlock,
  HeroBlock,
  ProductsBlock,
  SegmentGridBlock,
  UsefulBlock,
} from "@/components/page-blocks";

export default function Home() {
  return (
    <>
      <HeroBlock />
      <SegmentGridBlock />
      <ProductsBlock />
      <UsefulBlock />
      <AboutBlock />
      <ContactBlock />
    </>
  );
}
