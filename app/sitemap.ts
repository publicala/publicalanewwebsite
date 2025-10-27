import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://publica.la"
  const currentDate = new Date().toISOString()
  const locales = ["en", "es", "pt"]

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },

    // Solutions
    ...locales.map((l) => ({
      url: `${baseUrl}/${l}/solutions/publishers`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: {
        languages: Object.fromEntries(locales.map((ll) => [ll, `${baseUrl}/${ll}/solutions/publishers`]))
      }
    })),
    {
      url: `${baseUrl}/solutions/bookshops`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/content-creators`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/libraries`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/magazines-newspapers`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },

    // Features
    ...locales.map((l) => ({
      url: `${baseUrl}/${l}/features`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(locales.map((ll) => [ll, `${baseUrl}/${ll}/features`]))
      }
    })),
    {
      url: `${baseUrl}/features/vito-ai`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features/native-app`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features/integrations`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },

    // Case Studies
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    // Savings Calculator
    {
      url: `${baseUrl}/savings-calculator`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // Guides
    ...locales.map((l) => ({
      url: `${baseUrl}/${l}/guides/how-to-launch-digital-library`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(locales.map((ll) => [ll, `${baseUrl}/${ll}/guides/how-to-launch-digital-library`]))
      }
    })),
    {
      url: `${baseUrl}/case-studies/forbes-colombia`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/hammurabi-publishing`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/bajalibros`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/antartica-libreria`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },

    // Comparison Pages
    ...locales.map((l) => ({
      url: `${baseUrl}/${l}/compare`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(locales.map((ll) => [ll, `${baseUrl}/${ll}/compare`]))
      }
    })),
    {
      url: `${baseUrl}/compare/publica-vs-supadu`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/compare/publica-vs-vitalsource`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },

    // Company Pages
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },

    // Pricing
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },

    // Legal Pages
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ]
}
