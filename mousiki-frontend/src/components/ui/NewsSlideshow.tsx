"use client";

import React, { useState } from 'react';
import {
  Box,
  Center,
  Group,
  ActionIcon,
  Badge,
  Title,
  Text,
  Image,
  Paper,
  UnstyledButton,
  rem,
} from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { NewsItem } from '@/types';

interface NewsSlideshowProps {
  newsData: NewsItem[];
}

const NewsSlideshow: React.FC<NewsSlideshowProps> = ({ newsData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsData.length) % newsData.length);
  };

  const currentNews = newsData[currentSlide];

  return (
    <Paper shadow="md" radius="md" style={{ overflow: 'hidden' }}>
      <Box style={{ position: 'relative' }}>
        <Image
          src={currentNews.image}
          alt={currentNews.title}
          height={400}
          fit="cover"
        />
        <Box
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '2rem',
          }}
        >
          <Box style={{ color: 'white' }}>
            <Badge color="blue" variant="filled" mb="sm">
              {new Date(currentNews.date).toLocaleDateString()}
            </Badge>
            <Title order={3} c="white" mb="xs">
              {currentNews.title}
            </Title>
            <Text c="white" opacity={0.9}>
              {currentNews.excerpt}
            </Text>
          </Box>
        </Box>

        <ActionIcon
          variant="filled"
          color="blue"
          size="lg"
          style={{
            position: 'absolute',
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
          onClick={prevSlide}
        >
          <IconChevronLeft size={20} />
        </ActionIcon>

        <ActionIcon
          variant="filled"
          color="blue"
          size="lg"
          style={{
            position: 'absolute',
            right: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
          onClick={nextSlide}
        >
          <IconChevronRight size={20} />
        </ActionIcon>
      </Box>

      <Center mt="md" mb="md">
        <Group gap="xs">
          {newsData.map((_, index) => (
            <UnstyledButton
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: rem(12),
                height: rem(12),
                borderRadius: '50%',
                backgroundColor: index === currentSlide ? '#1976d2' : '#e0e0e0',
                transition: 'background-color 0.3s ease',
              }}
            />
          ))}
        </Group>
      </Center>
    </Paper>
  );
};

export default NewsSlideshow;
