import React from "react";
import Lottie, { Options } from "react-lottie";

interface AnimationProps {
    animationData: any;
}

const Animation: React.FC<AnimationProps> = ({ animationData }) => {
    const defaultOptions: Options = {
        loop: true,
        autoplay: true,
        animationData,
    };

    return (
        <div onClick={() => null}>
            <Lottie options={defaultOptions} />
        </div>
    );
};

export default Animation;
