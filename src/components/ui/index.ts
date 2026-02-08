/**
 * UI Components Library
 *
 * Reusable components matching the original template style
 *
 * Usage examples:
 *
 * ```tsx
 * import { Button, Badge, SectionHeader } from '@/components/ui';
 *
 * // Button
 * <Button variant="primary" size="md" href="#contact" icon={<i className="bi bi-arrow-right" />}>
 *   Get In Touch
 * </Button>
 *
 * // Badge
 * <Badge variant="dark">Full-Stack Developer</Badge>
 *
 * // Section Header
 * <SectionHeader title="About Me" sectionNumber="01" />
 *
 * // Large Text Overlap
 * <LargeTextOverlap>developer</LargeTextOverlap>
 *
 * // Separator Line
 * <SeparatorLine color="base" thickness="2px" />
 * ```
 */

// Export all UI components for easy importing
export { default as Button } from "./Button";
export { default as Badge } from "./Badge";
export { default as SectionHeader } from "./SectionHeader";
export { default as SeparatorLine } from "./SeparatorLine";
export { default as LargeTextOverlap } from "./LargeTextOverlap";
