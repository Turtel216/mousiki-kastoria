"use client";

import React from 'react';
import {
  Box,
  Group,
  Title,
  Anchor,
  Burger,
  Drawer,
  ScrollArea,
  UnstyledButton,
  ThemeIcon,
  Divider,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMusic } from '@tabler/icons-react';
import { navItems } from '@/data/mockData';

const NavigationHeader: React.FC = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

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

export default NavigationHeader;
