import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import style from './RatingCard.module.scss';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { Button } from '@/shared/ui/Button/Button';

export interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = (props: RatingCardProps) => {
    const { className, title, feedbackTitle, hasFeedback, onCancel, onAccept, rate = 0 } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStars: number) => {
            setStarsCount(selectedStars);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStars);
            }
        },
        [hasFeedback, onAccept]
    );

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [starsCount, onCancel]);

    const { t } = useTranslation();

    const modalContent = (
        <VStack gap='30'>
            <h1>{feedbackTitle}</h1>
            <Input
                data-testid='RatingCardInput'
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Ваш отзыв')}
            />
            <HStack max justifyContent='end' gap='10'>
                <Button
                    data-testid='RatingCardCancel'
                    onClick={cancelHandler}
                    label={t('Закрыть')}
                />
                <Button
                    data-testid='RatingCardAccept'
                    onClick={acceptHandler}
                    label={t('Отправить')}
                />
            </HStack>
        </VStack>
    );

    return (
        <Card data-testid='RatingCard' className={classNames(style.ratingCard, [className])}>
            <VStack alignItems='center' gap='10'>
                <h1>{rate ? 'Спасибо за оценку' : title}</h1>
                <StarRating selectedStars={starsCount} onSelect={onSelectStars} />
            </VStack>
            <Modal
                className={style.modal}
                visible={isModalOpen}
                onHide={() => setIsModalOpen(false)}
            >
                {modalContent}
            </Modal>
        </Card>
    );
};
