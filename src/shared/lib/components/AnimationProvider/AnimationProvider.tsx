import React, { createContext, useContext, useEffect, useMemo, useRef } from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

export interface AnimationContextPayload {
    Spring?: SpringType;
    Gesture?: GestureType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({ isLoaded: false });

const getAsyncAnimation = async () => {
    return Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);
};

export const useAnimationModules = () =>
    useContext(AnimationContext) as Required<AnimationContextPayload>;

export const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();

    const [isLoaded, setIsLoaded] = React.useState(false);

    useEffect(() => {
        getAsyncAnimation().then(([spring, gesture]) => {
            SpringRef.current = spring;
            GestureRef.current = gesture;
            setIsLoaded(true);
        });
    }, []);

    const value = useMemo(() => {
        return {
            Spring: SpringRef.current,
            Gesture: GestureRef.current,
            isLoaded
        };
    }, [isLoaded]);

    return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
};
