import { CSSProperties, memo } from 'react';
import clsx from 'clsx';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = memo(({
    className,
    height,
    width,
    border,
}: SkeletonProps) => {
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            className={clsx(cls.Skeleton, className)}
            style={styles}
        />
    );
});
