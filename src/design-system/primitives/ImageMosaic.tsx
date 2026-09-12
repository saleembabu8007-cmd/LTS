import React from 'react';
import { Container } from '../structures/Container';
import { AsymmetricMediaMosaic, AsymmetricMediaMosaicProps } from '../structures/AsymmetricMediaMosaic';
import { SectionHeading } from '../molecules/SectionHeading';

export interface ImageMosaicProps extends AsymmetricMediaMosaicProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

/**
 * ImageMosaic: Structural primitive for photographic storytelling with soft 28–32px rounded corners.
 */
export const ImageMosaic: React.FC<ImageMosaicProps> = ({
  eyebrow,
  title,
  description,
  items,
  className = '',
}) => {
  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <Container className="space-y-10">
        {(eyebrow || title) && (
          <SectionHeading
            eyebrow={eyebrow}
            title={title || 'Photographic Asset Verification'}
            description={description}
          />
        )}

        <AsymmetricMediaMosaic items={items} />
      </Container>
    </section>
  );
};
