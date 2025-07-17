import React from 'react';
import {
  Stack,
  Group,
  Title,
  ThemeIcon,
  Grid,
  GridCol,
  Text,
  Image,
} from '@mantine/core';
import { IconUsers, IconMapPin, IconCalendar } from '@tabler/icons-react';
import { aboutPhotos } from '@/data/mockData';

const AboutSection: React.FC = () => {
  return (
    <section id="about">
      <Stack gap="lg" mb="xl">
        <Group>
          <ThemeIcon size="lg" variant="light" color="blue">
            <IconUsers size={20} />
          </ThemeIcon>
          <Title order={2} c="blue">
            About Us
          </Title>
        </Group>

        <Grid>
          <GridCol span={{ base: 12, md: 6 }}>
            <Stack gap="md">
              <Text size="lg" c="dimmed" style={{ lineHeight: 1.6 }}>
                Mousiki Omada Kastorias is a traditional Greek musical ensemble dedicated to preserving and promoting the rich cultural heritage of Kastoria and the broader Macedonian region. Founded with a passion for authentic folk music, our group brings together talented musicians who share a deep appreciation for traditional Greek instruments and melodies.
              </Text>
              <Text size="lg" c="dimmed" style={{ lineHeight: 1.6 }}>
                We perform at cultural festivals, community events, and special celebrations, sharing the timeless beauty of Greek folk music with audiences of all ages. Our repertoire includes traditional dances, ceremonial music, and beloved folk songs that have been passed down through generations.
              </Text>
              <Group gap="md" mt="md">
                <Group gap="xs">
                  <IconMapPin size={16} />
                  <Text size="sm" c="dimmed">Kastoria, Greece</Text>
                </Group>
                <Group gap="xs">
                  <IconCalendar size={16} />
                  <Text size="sm" c="dimmed">Founded 2010</Text>
                </Group>
              </Group>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 6 }}>
            <Grid>
              {aboutPhotos.map((photo, index) => (
                <GridCol key={index} span={index === 0 ? 12 : 6}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    radius="md"
                    h={index === 0 ? 200 : 150}
                    fit="cover"
                  />
                </GridCol>
              ))}
            </Grid>
          </GridCol>
        </Grid>
      </Stack>
    </section>
  );
};

export default AboutSection;
