import portfolioJson from "../data/portfolio.json";
import type { PortfolioData } from "../types/portfolio";

const portfolioData = portfolioJson as PortfolioData;

/**
 * Single source of truth for all portfolio content.
 * Content lives in src/data/portfolio.json — edit that file to update
 * the site; components should never hardcode profile/experience/
 * project/testimonial copy.
 */
export function usePortfolio(): PortfolioData {
  return portfolioData;
}
