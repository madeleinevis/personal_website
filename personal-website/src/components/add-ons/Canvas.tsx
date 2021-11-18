import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { CanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';
import Wave from './Wave';
import MainStyle from "../../styles/MainStyle";

const Canvas = () => {
    const classes = MainStyle();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { width, height } = useResponsiveSize();

    const [context, setContext] =
        useState<CanvasRenderingContext2D | undefined>();

    useEffect(() => {
        const ctx = canvasRef?.current?.getContext('2d');
        if (ctx) setContext(ctx);
    }, []);

    return (
        <div className={classes.canvas}>
            <CanvasContext.Provider value={{ context: context }}>
                <canvas
                    id="canvas"
                    ref={canvasRef}
                    width={width}
                    height={height}
                    style={{width:"100%"}}
                />
                <Wave />
            </CanvasContext.Provider>
        </div>
    );
};

export default Canvas;