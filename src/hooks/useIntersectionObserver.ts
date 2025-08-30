import { useEffect, useState } from "react";

interface UseIntersectionObserverProps {
    threshold?: number;
    rootMargin?: string;
}

export function useIntersectionObserver(
    elementRef: React.RefObject<Element>,
    options: UseIntersectionObserverProps = {}
) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Better mobile detection with higher trigger area
        const isMobile = window.innerWidth <= 768;

        const observerOptions = {
            threshold: options.threshold || (isMobile ? 0.05 : 0.1), // Lower threshold for mobile
            rootMargin:
                options.rootMargin ||
                (isMobile ? "0px 0px -20px 0px" : "0px 0px -50px 0px"), // Less margin for mobile
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
            // Optional: Reset visibility when element leaves viewport
            // else {
            //     setIsVisible(false);
            // }
        }, observerOptions);

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [elementRef, options.threshold, options.rootMargin]);

    return isVisible;
}

// Alternative hook for stagger animations
export function useStaggeredIntersectionObserver(
    elementRef: React.RefObject<Element>,
    options: UseIntersectionObserverProps = {}
) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const isMobile = window.innerWidth <= 768;

        const observerOptions = {
            threshold: options.threshold || (isMobile ? 0.02 : 0.05), // Even lower threshold for stagger
            rootMargin:
                options.rootMargin ||
                (isMobile ? "50px 0px 0px 0px" : "100px 0px 0px 0px"), // Trigger earlier
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                // Small delay to ensure smooth stagger effect
                setTimeout(
                    () => {
                        setIsVisible(true);
                    },
                    isMobile ? 50 : 100
                );
            }
        }, observerOptions);

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [elementRef, options.threshold, options.rootMargin]);

    return isVisible;
}
