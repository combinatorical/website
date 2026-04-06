'use client';
import { useEffect, useState } from 'react';

export default function Age() {
    const birthDate = new Date('2006-09-14');

    const getAge = () => {
        const now = new Date();
        return (
            (now.getTime() - birthDate.getTime()) /
            (1000 * 60 * 60 * 24 * 365.25)
        );
    };
    const [age, setAge] = useState(getAge());

    useEffect(() => {
        let frameId: number;

        const update = () => {
            setAge(getAge());
            frameId = requestAnimationFrame(update);
        };

        frameId = requestAnimationFrame(update);

        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <p className="mb-4 text-sm text-neutral-300">
            I am{' '}
            <span className="font-mono" suppressHydrationWarning>
                {age.toFixed(12)}
            </span>{' '}
            years old
        </p>
    );
}
