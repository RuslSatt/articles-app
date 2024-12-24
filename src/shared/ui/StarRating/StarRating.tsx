import { memo, useState } from 'react';
import style from './StarRating.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '../Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';

export interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const { className, onSelect, size, selectedStars = 0 } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState<number>(selectedStars);
    const [selected, setSelected] = useState<boolean>(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!selected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!selected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        onSelect?.(starsCount);
        setCurrentStarsCount(starsCount);
        setSelected(true);
    };

    return (
        <div className={classNames(style.starRating, [className])}>
            {stars.map((star) => (
                <Icon
                    className={classNames(style.icon, [], {
                        [style.hovered]: currentStarsCount >= star
                    })}
                    key={star}
                    Svg={StarIcon}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(star)}
                    onClick={onClick(star)}
                    data-testid={`StarRating-${star}`}
                    data-selected={currentStarsCount >= star}
                />
            ))}
        </div>
    );
});
