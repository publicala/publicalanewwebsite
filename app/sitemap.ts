import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://publica.la"
  const currentDate = new Date().toISOString()
  const locales = ["en", "es", "pt"]
  
  // Define all routes without locale prefix
  const routes = [
    // Homepage
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    
    // Solutions
    { path: "/solutions/publishers", priority: 0.9, changeFrequency: "monthly" },
    { path: "/solutions/bookshops", priority: 0.9, changeFrequency: "monthly" },
    { path: "/solutions/content-creators", priority: 0.9, changeFrequency: "monthly" },
    { path: "/solutions/libraries", priority: 0.9, changeFrequency: "monthly" },
    { path: "/solutions/magazines-newspapers", priority: 0.9, changeFrequency: "monthly" },
    
    // Features
    { path: "/features", priority: 0.8, changeFrequency: "monthly" },
    { path: "/features/vito-ai", priority: 0.8, changeFrequency: "monthly" },
    { path: "/features/native-app", priority: 0.8, changeFrequency: "monthly" },
    { path: "/features/integrations", priority: 0.8, changeFrequency: "monthly" },
    
    // Case Studies
    { path: "/case-studies", priority: 0.8, changeFrequency: "weekly" },
    { path: "/case-studies/forbes-colombia", priority: 0.7, changeFrequency: "monthly" },
    { path: "/case-studies/hammurabi-publishing", priority: 0.7, changeFrequency: "monthly" },
    { path: "/case-studies/bajalibros", priority: 0.7, changeFrequency: "monthly" },
    { path: "/case-studies/ebooks-patagonia", priority: 0.7, changeFrequency: "monthly" },
    { path: "/case-studies/antartica-libreria", priority: 0.7, changeFrequency: "monthly" },
    
    // Savings Calculator
    { path: "/savings-calculator", priority: 0.9, changeFrequency: "monthly" },
    
    // Guides
    { path: "/guides/how-to-launch-digital-library", priority: 0.6, changeFrequency: "monthly" },
    
    // Comparison Pages
    { path: "/compare", priority: 0.7, changeFrequency: "monthly" },
    { path: "/compare/publica-vs-supadu", priority: 0.6, changeFrequency: "monthly" },
    { path: "/compare/publica-vs-vitalsource", priority: 0.6, changeFrequency: "monthly" },
    { path: "/compare/alternatives", priority: 0.6, changeFrequency: "monthly" },
    
    // Company Pages
    { path: "/about-us", priority: 0.7, changeFrequency: "monthly" },
    { path: "/careers", priority: 0.6, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    
    // Pricing
    { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
    
    // Legal Pages
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  ]
  
  // Generate sitemap entries for each locale
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  for (const route of routes) {
    // Add root URL without locale (defaults to English)
    if (route.path === "") {
      sitemapEntries.push({
        url: baseUrl,
        lastModified: currentDate,
        changeFrequency: route.changeFrequency as any,
        priority: route.priority,
        alternates: {
          languages: {
            en: `${baseUrl}/en`,
            es: `${baseUrl}/es`,
            pt: `${baseUrl}/pt`,
          }
        }
      })
    }
    
    // Add locale-specific URLs
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: currentDate,
        changeFrequency: route.changeFrequency as any,
        priority: route.priority,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route.path}`,
            es: `${baseUrl}/es${route.path}`,
            pt: `${baseUrl}/pt${route.path}`,
          }
        }
      })
    }
  }
  
  return sitemapEntries
}
