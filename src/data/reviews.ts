export type Review = {
  id: string;
  name: string;
  location: string;
  service: string;
  text: string;
};

/**
 * PLACEHOLDER reviews for Phase 1 layout only.
 * No real customer feedback is represented here.
 */
export const reviews: Review[] = [
  { id: "r1", name: "[CUSTOMER NAME]", location: "[LOCALITY]", service: "Saree Care", text: "[PLACEHOLDER REVIEW — real customer feedback will be added here.]" },
  { id: "r2", name: "[CUSTOMER NAME]", location: "[LOCALITY]", service: "Blanket Cleaning", text: "[PLACEHOLDER REVIEW — real customer feedback will be added here.]" },
  { id: "r3", name: "[CUSTOMER NAME]", location: "[LOCALITY]", service: "Dry Cleaning", text: "[PLACEHOLDER REVIEW — real customer feedback will be added here.]" },
  { id: "r4", name: "[CUSTOMER NAME]", location: "[LOCALITY]", service: "Curtain Cleaning", text: "[PLACEHOLDER REVIEW — real customer feedback will be added here.]" },
  { id: "r5", name: "[CUSTOMER NAME]", location: "[LOCALITY]", service: "Wash & Iron", text: "[PLACEHOLDER REVIEW — real customer feedback will be added here.]" },
  { id: "r6", name: "[CUSTOMER NAME]", location: "[LOCALITY]", service: "Carpet Cleaning", text: "[PLACEHOLDER REVIEW — real customer feedback will be added here.]" },
];
