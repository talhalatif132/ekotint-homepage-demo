// Preview photos are decorative placeholders, never portraits of the named customers.
export default function HomeReviewAvatar({ src }: { src?: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt="" width={56} height={56} loading="lazy" />;
  }
  return (
    <svg viewBox="0 0 56 56" width={56} height={56} aria-hidden="true" focusable="false" fill="currentColor">
      <circle cx="28" cy="21" r="9" />
      <path d="M10 56V47c0-9 8-14 18-14s18 5 18 14v9Z" />
    </svg>
  );
}
