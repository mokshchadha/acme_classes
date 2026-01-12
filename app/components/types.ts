import { JSX } from 'react'

export interface Testimonial {
  id: number;
  name: string;
  course: string;
  videoId: string;
  thumbnail: string;
}

export interface VisibilityState {
  [key: string]: boolean;
}

export interface AboutItem {
  icon: JSX.Element;
  title: string;
  desc: string;
}

export interface Statistic {
  number: number;
  label: string;
  icon: JSX.Element;
}

export interface TeamMember {
  name: string;
  subject: string;
  experience: string;
  image: string;
}
