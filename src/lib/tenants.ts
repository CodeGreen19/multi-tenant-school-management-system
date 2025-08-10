export function getTenantFromHost(host: string) {
  if (host.includes("localhost") || host.includes("lvh.me")) {
    const sub = host.split(".")[0];
    return sub === "localhost" ? null : sub; // null for main site
  }
  // For production
  const parts = host.split(".");
  if (parts.length >= 3) return parts[0]; // subdomain
  return null; // main domain
}
