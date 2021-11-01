import React, { useLayoutEffect, useRef } from "react";
import "./fade.css";

interface FadeInSectionProps {
    children: React.ReactNode[] | React.ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => setVisible(entry.isIntersecting));
        });
        const current = domRef.current;
        if (current) {
            observer.observe(current);
            return () => observer.unobserve(current);
        }
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
