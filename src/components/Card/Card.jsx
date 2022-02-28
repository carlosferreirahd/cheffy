import React, { useState, useEffect, useMemo } from 'react';
import { Button, Card as ContentCard, Skeleton } from 'antd';
import { CgShoppingCart } from 'react-icons/cg'

import { ServiceFoods } from '../../services/foods';

import './Card.scss';

export function Card({
  foodType = 'pizza',
  ...props
}) {

  const [isLoading, setIsLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const N_DECIMALS = 2;
  const RANDOM_PRICE = useMemo(() => (Math.random() * (45.75 - 21.35) + 21.35).toFixed(N_DECIMALS), []);

  useEffect(() => {
    setIsLoading(true);

    ServiceFoods.getRandomFood(foodType)
      .then((res) => setImageSrc(res.data.image))
      .catch((err) => console.log(`error while loading ${foodType} image`, err))
      .finally(() => setIsLoading(false));
  }, [foodType]);

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

  function renderCardDescription() {
    return (
      <div className="card__description-container">
        <p>Price: R${RANDOM_PRICE}</p>
        <Button
          className="card_description-button"
          type="primary"
          icon={<CgShoppingCart />}
        >
          Adicionar ao carrinho
        </Button>
      </div>
    );
  }

  return (
    <ContentCard
      style={{ width: '300px', transition: '2s' }}
      cover={isLoading ? undefined : <img className="card__cover-image" alt="Random Food" src={imageSrc} />}
      hoverable
      {...props}
    >
      {isLoading ? renderCardSkeleton() : <ContentCard.Meta title={`Very nice ${foodType} 😋`} description={renderCardDescription()} />}
    </ContentCard>
  );
}
