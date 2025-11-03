// This file exports TypeScript types and interfaces used throughout the application for type safety.

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  path: string;
}

export interface User {
  id: string;
  email: string;
  createdAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  plan: string;
  startDate: Date;
  endDate: Date;
}