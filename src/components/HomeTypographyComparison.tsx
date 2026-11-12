"use client";

type HomeTypographyComparisonProps = {
  refined: boolean;
  onChange: (refined: boolean) => void;
};

export default function HomeTypographyComparison({ refined, onChange }: HomeTypographyComparisonProps) {
  return <aside className="typography-comparison" aria-label="Typography review controls">
    <span className="typography-comparison-label">Type comparison</span>
    <div className="typography-comparison-options" role="group" aria-label="Compare homepage typography">
      <button type="button" aria-pressed={refined} onClick={() => onChange(true)}>Refined</button>
      <button type="button" aria-pressed={!refined} onClick={() => onChange(false)}>Original</button>
    </div>
  </aside>;
}
