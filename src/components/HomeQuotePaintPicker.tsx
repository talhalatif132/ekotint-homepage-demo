"use client";

import HomeProductArtwork from "@/components/HomeProductArtwork";
import HomeQuotePicker from "@/components/HomeQuotePicker";
import { homePaintFilters, homePaints } from "@/lib/homepage-content";

const groups = homePaintFilters.filter((category) => category !== "Featured").map((category) => ({
  label: category,
  options: homePaints.filter((paint) => paint.category === category).map((paint) => ({
    value: paint.id,
    label: paint.name,
    detail: paint.series,
    artwork: <HomeProductArtwork product={paint} compact />,
  })),
}));

export default function HomeQuotePaintPicker({ id, value, onChange }: {
  id: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return <HomeQuotePicker id={id} value={value} groups={groups} placeholder="Choose a paint" onChange={onChange} />;
}
