import React from 'react';
import {
  Stack,
  Center,
  Title,
  Text,
  Group,
  Button,
} from '@mantine/core';
import { IconCalendar, IconUsers } from '@tabler/icons-react';

const HeroSection: React.FC = () => {
  return (
    <Stack gap="xl" mb="xl">
      <Center>
        <Stack align="center" gap="md">
          <Title
            order={1}
            size="3.5rem"
            fw={900}
            ta="center"
            c="blue"
            style={{
              background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Mousiki Omada Kastorias
          </Title>
          <Text size="xl" c="dimmed" ta="center" maw={600}>
            Preserving and celebrating the rich musical traditions of Kastoria through authentic performances and cultural events.
          </Text>
          <Group gap="md" mt="lg">
            <Button size="lg" leftSection={<IconCalendar size={20} />}>
              Upcoming Events
            </Button>
            <Button variant="outline" size="lg" leftSection={<IconUsers size={20} />}>
              Learn More
            </Button>
          </Group>
        </Stack>
      </Center>
    </Stack>
  );
};

export default HeroSection;
