import { useCallback, useEffect, useState } from 'react';

const useResponsiveSize = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    // const [rootHeight, setRootHeight] = useState(0);
    // const [rootWidth, setRootWidth] = useState(0);

    const setSizes = useCallback(() => {
        // setWidth(window.innerWidth);
        // setHeight(document.body.scrollHeight); // document.body.scrollHeight
        setHeight(document.getElementById("root")!.scrollHeight);
        setWidth(document.getElementById("root")!.clientWidth);
    }, [setWidth, setHeight]);

    useEffect(() => {
        window.addEventListener('resize', setSizes);
        setSizes();
    }, [setSizes]);

    return { width, height };
};

export default useResponsiveSize;