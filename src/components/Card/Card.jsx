import React, { useState, useEffect, useMemo } from 'react';
import { Card as ContentCard, Skeleton } from 'antd';

import { ServicePizzas } from '../../services/pizzas';

import './Card.scss';

export function Card({
  ...props
}) {

  const [isLoading, setIsLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const N_DECIMALS = 2;
  const RANDOM_PRICE = useMemo(() => (Math.random() * (45.75 - 21.35) + 21.35).toFixed(N_DECIMALS), []);

  useEffect(() => {
    setIsLoading(true);

    ServicePizzas.getRandomPizza()
      .then((res) => setImageSrc(res.data.image))
      .catch((err) => console.log('error while loading pizza image', err))
      .finally(() => setIsLoading(false));

  }, []);

  function renderCardSkeleton() {
    return (
      <div className="card__skeleton-container">
        <Skeleton.Image />
        <Skeleton
          active
          style={{ width: '100%' }}
          paragraph={{ rows: 1 }}
        />
      </div>
    );
  }

  return (
    <ContentCard
      style={{ width: '300px' }}
      cover={isLoading ? undefined : <img className="card__cover-image" alt="Random Pizza" src={imageSrc} />}
      hoverable
      {...props}
    >
      {isLoading ? renderCardSkeleton() : <ContentCard.Meta title="Very nice pizza 😋" description={`Price: R$${RANDOM_PRICE}`} />}
    </ContentCard>
  );
}
