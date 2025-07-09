"use client";

import React, { useState } from 'react';
import {
  Container,
  Title,
  Text,
  Button,
  Card,
  Image,
  Grid,
  Group,
  Stack,
  ActionIcon,
  Divider,
  Box,
  Center,
  Badge,
  Paper,
  Anchor,
  Burger,
  Drawer,
  ScrollArea,
  UnstyledButton,
  ThemeIcon,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTwitter,
  IconMusic,
  IconCalendar,
  IconMapPin,
  IconMail,
  IconPhone,
  IconChevronLeft,
  IconChevronRight,
  IconNews,
  IconUsers,
  IconHome,
} from '@tabler/icons-react';

// Sample data for news
const newsData = [
  {
    id: 1,
    title: "Summer Concert Series 2024",
    date: "2024-07-15",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop",
    excerpt: "Join us for our annual summer concert series featuring traditional Greek music and dance performances."
  },
  {
    id: 2,
    title: "New Album Release",
    date: "2024-06-20",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=400&fit=crop",
    excerpt: "We're excited to announce the release of our latest album featuring traditional songs from Macedonia."
  },
  {
    id: 3,
    title: "Cultural Festival Performance",
    date: "2024-05-30",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=400&fit=crop",
    excerpt: "Our group performed at the annual Kastoria Cultural Festival, celebrating our rich musical heritage."
  },
];

// Sample data for about section photos
const aboutPhotos = [
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    alt: "Group performance"
  },
  {
    src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop",
    alt: "Traditional instruments"
  },
  {
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop",
    alt: "Cultural event"
  }
];

const NewsSlideshow: React.FC = () => {
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

const NavigationHeader: React.FC = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const navItems = [
    { label: 'Home', icon: IconHome },
    { label: 'About', icon: IconUsers },
    { label: 'News', icon: IconNews },
    { label: 'Contact', icon: IconMail },
  ];

  return (
    <>
      <Box component="header" h={60} px="md" style={{ borderBottom: '1px solid #e9ecef' }}>
        <Group justify="space-between" h="100%">
          <Group>
            <ThemeIcon size="lg" variant="filled" color="blue">
              <IconMusic size={20} />
            </ThemeIcon>
            <Title order={3} c="blue">
              Mousiki Omada Kastorias
            </Title>
          </Group>

          <Group gap="md" visibleFrom="sm">
            {navItems.map((item) => (
              <Anchor
                key={item.label}
                href={`#${item.label.toLowerCase()}`}
                c="dimmed"
                style={{ textDecoration: 'none' }}
              >
                {item.label}
              </Anchor>
            ))}
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            size="sm"
          />
        </Group>
      </Box>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          {navItems.map((item) => (
            <UnstyledButton
              key={item.label}
              onClick={closeDrawer}
              style={{
                display: 'block',
                width: '100%',
                padding: rem(12),
                borderRadius: rem(8),
              }}
            >
              <Group>
                <item.icon size={20} />
                <span>{item.label}</span>
              </Group>
            </UnstyledButton>
          ))}
        </ScrollArea>
      </Drawer>
    </>
  );
};

const HomePage: React.FC = () => {
  return (
    <Box>
      <NavigationHeader />

      <Container size="lg" py="xl">
        {/* Hero Section */}
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

        {/* News Section */}
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

            <NewsSlideshow />
          </Stack>
        </section>

        <Divider my="xl" />

        {/* About Section */}
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
              <Grid.Col span={{ base: 12, md: 6 }}>
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
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <Grid>
                  {aboutPhotos.map((photo, index) => (
                    <Grid.Col key={index} span={index === 0 ? 12 : 6}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        radius="md"
                        h={index === 0 ? 200 : 150}
                        fit="cover"
                      />
                    </Grid.Col>
                  ))}
                </Grid>
              </Grid.Col>
            </Grid>
          </Stack>
        </section>
      </Container>

      {/* Footer */}
      <Box component="footer" p="md" style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #e9ecef' }}>
        <Container size="lg">
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="sm">
                <Group>
                  <ThemeIcon size="lg" variant="filled" color="blue">
                    <IconMusic size={20} />
                  </ThemeIcon>
                  <Title order={4} c="blue">
                    Mousiki Omada Kastorias
                  </Title>
                </Group>
                <Text c="dimmed">
                  Preserving Greek musical traditions since 2010
                </Text>
                <Group gap="xs">
                  <IconMapPin size={16} />
                  <Text size="sm" c="dimmed">
                    Kastoria, Macedonia, Greece
                  </Text>
                </Group>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 3 }}>
              <Stack gap="sm">
                <Title order={5} c="blue">
                  Contact
                </Title>
                <Group gap="xs">
                  <IconMail size={16} />
                  <Text size="sm" c="dimmed">
                    info@mousikiomada.gr
                  </Text>
                </Group>
                <Group gap="xs">
                  <IconPhone size={16} />
                  <Text size="sm" c="dimmed">
                    +30 24670 12345
                  </Text>
                </Group>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 3 }}>
              <Stack gap="sm">
                <Title order={5} c="blue">
                  Follow Us
                </Title>
                <Group gap="xs">
                  <ActionIcon variant="light" color="blue" size="lg">
                    <IconBrandFacebook size={20} />
                  </ActionIcon>
                  <ActionIcon variant="light" color="pink" size="lg">
                    <IconBrandInstagram size={20} />
                  </ActionIcon>
                  <ActionIcon variant="light" color="red" size="lg">
                    <IconBrandYoutube size={20} />
                  </ActionIcon>
                  <ActionIcon variant="light" color="blue" size="lg">
                    <IconBrandTwitter size={20} />
                  </ActionIcon>
                </Group>
              </Stack>
            </Grid.Col>
          </Grid>

          <Divider my="md" />

          <Group justify="space-between">
            <Text size="sm" c="dimmed">
              © 2024 Mousiki Omada Kastorias. All rights reserved.
            </Text>
            <Group gap="md">
              <Anchor href="#" size="sm" c="dimmed">
                Privacy Policy
              </Anchor>
              <Anchor href="#" size="sm" c="dimmed">
                Terms of Service
              </Anchor>
            </Group>
          </Group>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
