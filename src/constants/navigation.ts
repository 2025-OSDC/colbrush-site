export interface NavItem {
  path: string;
  label: string;
  name: string;
}

export const navItems: NavItem[] = [
  { path: "/usage", label: "사용법", name: "usage" },
  { path: "/api", label: "API", name: "api" },
];

export const GITHUB_URL = "https://github.com/2025-OSDC/colbrush";
