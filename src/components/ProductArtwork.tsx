"use client";
import { useId } from "react";

const packSilhouettes: Record<string, string> = {
  "water-matt": "M254 272Q453 265 649 271L665 272 675 286 680 297H690Q700 298 700 308L699 332Q699 337 692 338L691 356Q691 365 680 366L678 370 646 810Q644 818 638 822C610 832 559 838 500 839C425 840 350 834 300 826Q280 822 277 812L244 368H229Q218 367 218 357L219 338Q216 333 220 326L223 301Q223 292 237 292L246 279Q248 272 254 272Z",
  "clima-shield": "M252 270Q458 264 652 268L666 270 676 285 681 294H690Q701 294 701 304L700 330Q700 337 694 338L694 355Q693 363 681 364L679 368 647 810Q645 820 638 824C611 834 560 839 500 840C425 841 350 834 300 828Q279 824 276 814L242 365H229Q219 364 220 354L220 335Q216 330 220 322L223 299Q224 291 237 291L246 276Q248 270 252 270Z",
  "hydra-matt": "M253 264Q457 258 652 263L667 265 676 280 681 288H691Q702 289 702 299L701 323Q701 330 694 331L694 348Q694 356 681 358L647 809Q644 817 636 820C611 831 559 834 500 835C424 836 350 830 300 822Q280 819 277 810L242 359H230Q219 358 220 347L220 328Q216 323 220 316L224 293Q224 285 237 285L247 270Q249 264 253 264Z",
};
export default function ProductArtwork({ product }: { product: { id: string; name: string; image: string } }) {
  const id = useId().replace(/:/g, "");
  const bounds: Record<string, [number, number, number, number]> = {
    "weather-paint": [210, 254, 500, 592], "wall-putty-2": [210, 255, 500, 592],
    "primer-emulsion": [214, 259, 493, 588], "semi-plastic-emulsion-2": [221, 260, 493, 587],
    "gloss-enamel": [228, 268, 474, 562], "semi-plastic-emulsion": [217, 267, 489, 578],
    "wall-putty": [228, 264, 474, 565],
  };
  const box = bounds[product.id];
  const transform = box ? `translate(${box[0]} ${box[1]}) scale(${box[2] / 482} ${box[3] / 576}) translate(-218 -265)` : undefined;
  const clipId = `pack-outline-${id}`;
  const sharpId = `pack-clarity-${id}`;
  return <svg className="product-art" viewBox="150 195 620 760" role="img" aria-label={`${product.name} Ekotint paint container`}>
    <defs>
      <clipPath id={clipId} clipPathUnits="userSpaceOnUse"><path d={packSilhouettes[product.id] || packSilhouettes["water-matt"]} transform={transform} /></clipPath>
      <filter id={sharpId} x="180" y="220" width="560" height="660" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feConvolveMatrix order="3" kernelMatrix="0 -0.18 0 -0.18 1.72 -0.18 0 -0.18 0" divisor="1" edgeMode="duplicate" preserveAlpha="true" />
      </filter>
    </defs>
    <g clipPath={`url(#${clipId})`}><image href={product.image} width="920" height="1100" filter={`url(#${sharpId})`} /></g>
  </svg>;
}
