'use client';

import { useState } from 'react';

type ProductGalleryProps = {
  name: string;
  images: string[];
};

export default function ProductGallery({ name, images }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div className="category-gallery">
      <div className="category-shot">
        <img src={current} alt={name} />
      </div>
      {images.length > 1 ? (
        <div className="category-thumbs" role="group" aria-label={`${name} photos`}>
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              className={index === active ? 'category-thumb is-active' : 'category-thumb'}
              aria-label={`Show photo ${index + 1} of ${images.length}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
