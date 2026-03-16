import { useState, useEffect } from 'react';

interface ScaleOptions {
  baseWidth?: number;
  baseHeight?: number;
  maintainAspectRatio?: boolean;
}

export function useResponsiveScale({
  baseWidth = 1920,
  baseHeight = 1080,
  maintainAspectRatio = true,
}: ScaleOptions = {}) {
  const [scale, setScale] = useState(1);
  const [dimensions, setDimensions] = useState({ width: baseWidth, height: baseHeight });

  useEffect(() => {
    const calculateScale = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      if (maintainAspectRatio) {
        // 비율을 유지하면서 가장 작은 스케일 사용 (화면에 전체가 들어가도록)
        const scaleX = windowWidth / baseWidth;
        const scaleY = windowHeight / baseHeight;
        const newScale = Math.min(scaleX, scaleY);
        setScale(newScale);
      } else {
        // 화면에 꽉 차도록 스케일링
        const scaleX = windowWidth / baseWidth;
        const scaleY = windowHeight / baseHeight;
        setScale(Math.min(scaleX, scaleY));
      }

      setDimensions({ width: windowWidth, height: windowHeight });
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);

    return () => window.removeEventListener('resize', calculateScale);
  }, [baseWidth, baseHeight, maintainAspectRatio]);

  return { scale, dimensions };
}
