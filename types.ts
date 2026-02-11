// Import React to provide access to the React namespace for type definitions
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItemProps {
  label: string;
  href: string;
}