export interface DomainEntry {
  name: string;
  price: number;
  status: "ACTIVE" | "INACTIVE";
}

export const DOMAINS: DomainEntry[] = [
  { name: "mongolia.mx", price: 35.0, status: "INACTIVE" },
  { name: "justfucking.run", price: 29.99, status: "INACTIVE" },
  { name: "hiretimsf.com", price: 12.99, status: "ACTIVE" },
  { name: "lazypanda.la", price: 39.99, status: "INACTIVE" },
  { name: "laazypanda.com", price: 12.99, status: "INACTIVE" },
  { name: "playlist.fan", price: 34.99, status: "INACTIVE" },
  { name: "someone-hire-tim.com", price: 12.99, status: "INACTIVE" },
  { name: "goodfoodsf.com", price: 12.99, status: "INACTIVE" },
  { name: "hire-tim.com", price: 12.99, status: "INACTIVE" },
  { name: "mongol.food", price: 29.99, status: "INACTIVE" },
  { name: "visafree.net", price: 14.99, status: "INACTIVE" },
];

export const TOTAL_WASTED = DOMAINS.reduce((acc, d) => acc + d.price, 0);
export const DOMAIN_COUNT = DOMAINS.length;
