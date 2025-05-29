// Add HubSpot types
interface HbsptForms {
  create: (options: {
    region: string
    portalId: string
    formId: string
    target: string
  }) => void
}

interface Window {
  hbspt?: {
    forms: HbsptForms
  }
}
