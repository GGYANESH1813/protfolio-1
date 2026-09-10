"use client";

import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=640&h=640&fit=crop&q=70&auto=format`;
 
const SLIDES = [
  {
    src: UNSPLASH("1518770660439-4636190af475"),
    alt: "Hardware circuit board and AI architecture",
    title: "Neural Engine",
    subtitle: "Hardware & AI",
    meta: [
      { label: "Year", value: "2025" },
      { label: "Category", value: "AI Systems" },
      { label: "Status", value: "Active" },
    ],
  },
  {
    src: UNSPLASH("1526374965328-7f61d4dc18c5"),
    alt: "Matrix cyber data streams",
    title: "Deep Cybernetics",
    subtitle: "Security & Models",
    meta: [
      { label: "Year", value: "2024" },
      { label: "Category", value: "Machine Learning" },
      { label: "Status", value: "Completed" },
    ],
  },
  {
    src: UNSPLASH("1555066931-4365d14bab8c"),
    alt: "Computer programming screen showing React and Python code",
    title: "Algorithmic Core",
    subtitle: "Full Stack & ML",
    meta: [
      { label: "Year", value: "2024" },
      { label: "Category", value: "Software" },
      { label: "Status", value: "Production" },
    ],
  },
  {
    src: UNSPLASH("1470071459604-3b5ec3a7fe05"),
    alt: "Fog rolling through a forested valley at first light",
    title: "Low Country",
    subtitle: "Landscape",
    meta: [
      { label: "Year", value: "2023" },
      { label: "Category", value: "Photography" },
      { label: "Status", value: "Archived" },
    ],
  },
  {
    src: UNSPLASH("1500534314209-a25ddb2bd429"),
    alt: "Sunlit dune ridge under a hard blue sky",
    title: "Dry Season",
    subtitle: "Exploration",
    meta: [
      { label: "Year", value: "2023" },
      { label: "Category", value: "Expedition" },
      { label: "Status", value: "Complete" },
    ],
  },
  {
    src: UNSPLASH("1501785888041-af3ef285b470"),
    alt: "Mountain lake mirroring a ridgeline at dusk",
    title: "Still Water",
    subtitle: "Environment",
    meta: [
      { label: "Year", value: "2022" },
      { label: "Category", value: "Atmosphere" },
      { label: "Status", value: "Verified" },
    ],
  },
  {
    src: UNSPLASH("1519681393784-d120267933ba"),
    alt: "Snow-covered peak lit by a cold morning sun",
    title: "Undertow",
    subtitle: "Alpine Range",
    meta: [
      { label: "Year", value: "2022" },
      { label: "Category", value: "Elevation" },
      { label: "Status", value: "Active" },
    ],
  },
];
 
// ONLY DEFAULT EXPORT WILL BE TREATED AS A DEMO
export default function DemoOne() {
  return (
    <div className="w-full overflow-hidden bg-background py-6">
      <CoverflowCarousel slides={SLIDES} showCaption showNavigation showPagination />
    </div>
  );
}
