import { Fade, Skeleton } from '@mui/material';
import Image, { ImageProps } from 'next/image';
import { useState, ReactEventHandler } from 'react';
import { Box } from '@mui/system';

const ImageWithLoader = (props: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Box display={isLoading ? 'block' : 'none'}>
        <Fade in={isLoading}>
          <Skeleton
            variant="rectangular"
            width={props.width}
            height={props.height}
          />
        </Fade>
      </Box>
      <Image
        loading="eager"
        onLoadingComplete={() => {
          setIsLoading(false);
        }}
        // onLoad={onLoadCallBack}
        {...props}
        style={{
          ...props.style,
          opacity: isLoading ? 0 : 1,
          // transition: 'opacity 0.1s',
        }}
      />
    </>
  );
};

export default ImageWithLoader;
