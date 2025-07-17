import { Box, Container, Divider } from '@mantine/core';
import NavigationHeader from '@/components/layout/NavigationHeader';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import NewsSection from '@/components/sections/NewsSection';
import AboutSection from '@/components/sections/AboutSection';

export default function HomePage() {
  return (
    <Box>
      <NavigationHeader />

      <Container size="lg" py="xl">
        <HeroSection />

        <NewsSection />

        <Divider my="xl" />

        <AboutSection />
      </Container>

      <Footer />
    </Box>
  );
}
