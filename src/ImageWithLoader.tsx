import { Fade, Skeleton } from '@mui/material';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
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
        onLoadingComplete={() => {
          console.log('finished');
          setIsLoading(false);
        }}
        {...props}
        style={{ opacity: isLoading ? 0 : 1 }}
      />
    </>
  );
};

export default ImageWithLoader;
