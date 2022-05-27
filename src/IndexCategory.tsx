import { Stack, Typography, Box } from '@mui/material';
import CategoryList from './CategoryList';
import GenreBox from './GenreBox';
import { Genre } from '../types/Genre';
import { DjCard, isDj } from './DjCard';

export type IndexCategory = {
  title: string;
  list: Genre[] | DjCard[];
};

export const IndexCategory = (props: IndexCategory) => (
  <Stack overflow="hidden" spacing={3}>
    <Typography variant="h5" fontWeight="bold">
      {props.title}
    </Typography>
    <Box width="100%" display="flex" flexDirection="row">
      <CategoryList>
        {props.list.map((item) => {
          if (isDj(item)) return <DjCard {...item} key={`dj-${item.name}`} />;
          else return <GenreBox key={`cat-${item.name}`} {...item} />;
        })}
      </CategoryList>
    </Box>
  </Stack>
);

export default IndexCategory;
