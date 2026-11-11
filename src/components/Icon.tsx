export type IconName = "arrow" | "search" | "heart" | "menu" | "close" | "check" | "plus" | "minus" | "sun" | "home" | "layers" | "spark" | "download" | "pause" | "play" | "chevron" | "filter" | "zoom" | "grid" | "back";
export default function Icon({ name, size = 22, ...props }: { name: IconName; size?: number } & React.SVGProps<SVGSVGElement>) {
  const paths: Record<IconName, React.ReactNode> = {
    filter: <><path d="M4 7h16M4 17h16" /><circle cx="8" cy="7" r="2" fill="white" /><circle cx="16" cy="17" r="2" fill="white" /></>,
    zoom: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5M7.5 10.5h6M10.5 7.5v6" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></>,
    back: <path d="M20 12H4m7-7-7 7 7 7" />,
    arrow: <><path d="M4 12h15M13 5l7 7-7 7" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
    heart: <path d="M20.7 4.7a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.1-1.1a5.4 5.4 0 0 0-7.6 7.6L12 21l8.7-8.7a5.4 5.4 0 0 0 0-7.6Z" />,
    menu: <><path d="M3 7h18M3 12h18M3 17h18" /></>,
    close: <path d="m5 5 14 14M19 5 5 19" />,
    check: <path d="m5 12 4 4L20 5" />,
    plus: <path d="M12 4v16M4 12h16" />,
    minus: <path d="M4 12h16" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 1v2M12 21v2M1 12h2M21 12h2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M19.8 4.2l-1.4 1.4M5.6 18.4l-1.4 1.4" /></>,
    home: <><path d="m3 10 9-7 9 7v11H3Z" /><path d="M9 21v-8h6v8" /></>,
    layers: <><path d="m12 3 10 6-10 6L2 9Z" /><path d="m2 14 10 6 10-6M2 18l10 6 10-6" /></>,
    spark: <><path d="m12 2 2.7 7.3L22 12l-7.3 2.7L12 22l-2.7-7.3L2 12l7.3-2.7Z" /></>,
    pause: <><path d="M9 5v14M15 5v14" /></>,
    play: <path d="m8 4 12 8-12 8Z" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    download: <><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}

