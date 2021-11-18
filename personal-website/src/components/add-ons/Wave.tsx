import { useCanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';
import { default as WaveObj } from '../../utils/Wave';

const Wave = () => {
    const { context } = useCanvasContext();
    const { width, height } = useResponsiveSize();
    let frequency = 0.013;
    const waves = {
        backWave: new WaveObj([0.0122, 0.018, 0.005], '#76bbff'), // Lighter
        frontWave: new WaveObj([0.0211, 0.028, 0.015], '#7677ff70'), // Darker
    };

    const render = () => {
        context?.clearRect(0, 0, width, height);
        Object.entries(waves).forEach(([, wave]) => {
            wave.draw(context!, width, height, frequency);
        });
        frequency += 0.0013;
        requestAnimationFrame(render);
    };
    if (context) render();
    return null;
};

export default Wave;