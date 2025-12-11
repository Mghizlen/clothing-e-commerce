import React from 'react';
import { Container } from '../layout/Container';

export function BrandStory() {
  return (
    <section className="py-20 bg-bg">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <h2 className="font-heading text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Champagne Noir was founded on the belief that luxury should be understated and accessible.
              We believe in timeless design, exceptional craftsmanship, and the power of simplicity.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Each piece in our collection is carefully curated and crafted using the finest materials
              from around the world. We work directly with artisans and manufacturers who share our
              commitment to quality and sustainability.
            </p>
          </div>

          {/* Right - Image */}
          <div className="aspect-square rounded-lg overflow-hidden h-96">
            <img
              src="/images/collections/silk-essentials.jpg"
              alt="Champagne Noir Studio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
