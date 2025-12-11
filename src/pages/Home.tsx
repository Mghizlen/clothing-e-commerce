
import { Hero } from '../components/home/Hero';
import { CollectionsTiles } from '../components/home/CollectionsTiles';
import { FeaturedRow } from '../components/home/FeaturedRow';
import { BrandStory } from '../components/home/BrandStory';
import { StatsStrip } from '../components/home/StatsStrip';

export default function Home() {
  return (
    <>
      <Hero />
      <CollectionsTiles />
      <FeaturedRow />
      <BrandStory />
      <StatsStrip />
    </>
  );
}
