import React from 'react';
import {
  Box,
  Container,
  Grid,
  GridCol,
  Stack,
  Group,
  Title,
  Text,
  ActionIcon,
  Divider,
  Anchor,
  ThemeIcon,
} from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTwitter,
  IconMusic,
  IconMapPin,
  IconMail,
  IconPhone,
} from '@tabler/icons-react';

const Footer: React.FC = () => {
  return (
    <Box component="footer" p="md" style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #e9ecef' }}>
      <Container size="lg">
        <Grid>
          <GridCol span={{ base: 12, md: 6 }}>
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
          </GridCol>

          <GridCol span={{ base: 12, md: 3 }}>
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
          </GridCol>

          <GridCol span={{ base: 12, md: 3 }}>
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
          </GridCol>
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
  );
};

export default Footer;
