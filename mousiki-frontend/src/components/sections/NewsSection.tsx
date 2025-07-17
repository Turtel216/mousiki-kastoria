import React from 'react';
import {
  Stack,
  Group,
  Title,
  ThemeIcon,
} from '@mantine/core';
import { IconNews } from '@tabler/icons-react';
import NewsSlideshow from '@/components/ui/NewsSlideshow';
import { newsData } from '@/data/mockData';

const NewsSection: React.FC = () => {
  return (
    <section id="news">
      <Stack gap="lg" mb="xl">
        <Group>
          <ThemeIcon size="lg" variant="light" color="blue">
            <IconNews size={20} />
          </ThemeIcon>
          <Title order={2} c="blue">
            Latest News
          </Title>
        </Group>

        <NewsSlideshow newsData={newsData} />
      </Stack>
    </section>
  );
};

export default NewsSection;
