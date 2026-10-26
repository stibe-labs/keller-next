import React from 'react';
import { EARLY_BUYERS } from '@/data/kellerData';

export default function ClinicalImpact() {
  const featured = EARLY_BUYERS.slice(0, 2);
  const more = EARLY_BUYERS.slice(2);

  return (
    <section id="impact" className="clinical-section board-section board-rule">
      <div className="keller-container">
        <h2 className="board-title">Real People, Real Impact.</h2>
        <div className="board-stories">
          {featured.map((buyer) => (
            <article key={buyer.name} className="board-story">
              <span className="board-avatar" aria-hidden="true">
                {buyer.name.charAt(0)}
              </span>
              <div>
                <h3>{buyer.name}</h3>
                <p className="board-story-role">{buyer.credentials}</p>
                <p className="board-story-quote">&ldquo;{buyer.quoteSnippet}&rdquo;</p>
                <p>{buyer.bio}</p>
              </div>
            </article>
          ))}
          <a className="board-story-more" href="#reviews">
            Read customer story
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {more.length > 0 && (
          <div className="board-stories board-stories-more">
            {more.map((buyer) => (
              <article key={buyer.name} className="board-story">
                <span className="board-avatar" aria-hidden="true">
                  {buyer.name.charAt(0)}
                </span>
                <div>
                  <h3>{buyer.name}</h3>
                  <p className="board-story-role">{buyer.credentials}</p>
                  <p className="board-story-quote">&ldquo;{buyer.quoteSnippet}&rdquo;</p>
                  <p>{buyer.bio}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
