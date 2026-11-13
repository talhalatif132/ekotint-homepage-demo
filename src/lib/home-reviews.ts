import type { HomeCustomerReview, HomePaint } from "@/lib/homepage-content";

type ReviewPublication = {
  status: "draft" | "approved";
  permissionToPublish: boolean;
  // Keep the client's source/permission record even when it is not a public URL.
  sourceReference: string;
};

export type HomeCompanyReview = HomeCustomerReview & {
  kind: "company";
  productId?: never;
  publication: ReviewPublication;
};

export type HomeProductReview = HomeCustomerReview & {
  kind: "product";
  productId: HomePaint["id"];
  publication: ReviewPublication;
};

// Genuine review content has not been supplied. The homepage's fictional design
// samples stay in HomeCustomerStories and must never populate either collection.
export const homeCompanyReviews: readonly HomeCompanyReview[] = [];
export const homeProductReviews: readonly HomeProductReview[] = [];

function isPublishable(review: HomeCompanyReview | HomeProductReview) {
  return review.publication.status === "approved"
    && review.publication.permissionToPublish === true
    && review.publication.sourceReference.trim() !== ""
    && review.quote.trim() !== ""
    && review.customerName.trim() !== "";
}

export function getPublishedCompanyReviews(reviews: readonly HomeCompanyReview[] = homeCompanyReviews) {
  return reviews.filter((review) => review.kind === "company" && !review.productId && isPublishable(review));
}

export function getPublishedProductReviews(productId: HomePaint["id"], reviews: readonly HomeProductReview[] = homeProductReviews) {
  return reviews.filter((review) => review.kind === "product" && review.productId === productId && isPublishable(review));
}
