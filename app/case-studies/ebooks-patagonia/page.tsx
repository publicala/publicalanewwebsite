import { DetailedCaseStudy } from "@/components/detailed-case-study"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function EbooksPatagoniaCaseStudyPage() {
  const caseStudyData = {
    logoSrc: "/images/logos/ebooks-patagonia-logo.png", // This will now be used
    logoAlt: "Ebooks Patagonia Logo",
    title: "Ebooks Patagonia: Boosting Sales and Customer Relationships with Publica.la",
    subtitle:
      "How a Patagonian digital publisher leveraged Publica.la to expand its market reach, enhance marketing efforts, and achieve a 300% ROI.",
    heroImageAlt: "Ebooks Patagonia platform showcase",
    clientDescription:
      "Ebooks Patagonia, a prominent digital book publisher based in the Patagonian region, achieved remarkable success by partnering with Publica.la to launch its own virtual digital bookstore. This move aimed to tap into the growing digital market and provide their unique content to a wider audience.",
    challengesList: [
      "Expanding business horizons by effectively entering the burgeoning digital market.",
      "Finding a robust and adaptable platform capable of meeting their specific digital content delivery and sales needs.",
      "Developing strategies to effectively reach and sell to institutional clients, such as educational institutions and libraries.",
      "Improving marketing efficiency and building stronger, data-informed relationships with readers.",
    ],
    solutionText:
      "Ebooks Patagonia leveraged Publica.la to launch a branded digital bookstore with flexible institutional sales models. The platform enabled strategic data collection for targeted marketing and provided personalized support, including collaborative development of new features to meet their specific needs. This comprehensive solution empowered them to offer their content digitally with full control over their customer experience and sales strategies.",
    resultsList: [
      {
        highlight: "300% ROI",
        text: "Achieved in 2022, demonstrating significant financial success and platform effectiveness.",
      },
      {
        text: "Significantly improved sales to educational institutions and libraries through flexible and customizable business models like volume licensing and institutional subscriptions.",
      },
      {
        text: "Developed more efficient and targeted marketing campaigns using a strategic customer database built on reader insights from the Publica.la platform.",
      },
      {
        text: "Strengthened customer relationships by offering personalized content, promotions, and a direct sales channel.",
      },
      {
        text: "Benefited from exceptional, personalized support and collaborative development of new platform functionalities tailored to their evolving needs.",
      },
    ],
    testimonialQuote:
      "We are delighted with the results we have obtained by working with Publica.la. The platform has allowed us to expand our sales to institutions and strengthen our relationship with customers. In addition, the Publica.la support team has been exceptional, providing us with personalized support and developing new functions according to our needs. We are eager to continue our successful collaboration.",
    testimonialAuthor: "Javier Sepúlveda Hales",
    testimonialRole: "CEO - Ebooks Patagonia",
    whyChooseUsList: [
      "Exceptional, personalized support team that acted as a valuable ally throughout the implementation and beyond.",
      "Collaborative approach to development, with Publica.la willing to build new, tailored features to meet specific client requirements.",
      "Highly flexible platform enabling adaptation and customization of business models for diverse client needs, especially institutional sales.",
      "Robust data collection and analytics capabilities for strategic marketing, improved customer understanding, and data-driven decisions.",
      "Comprehensive, all-in-one solution for creating a branded digital storefront and managing digital content sales effectively.",
    ],
    additionalImages: [
      {
        src: "/patagonia-ebooks-montage.png",
        alt: "Ebooks Patagonia digital bookstore and content montage",
      },
      {
        src: "/ebooks-patagonia-interface.png",
        alt: "Ebooks Patagonia platform interface example",
      },
    ],
  }

  return (
    <>
      <Navbar />
      <DetailedCaseStudy {...caseStudyData} />
      <Footer />
    </>
  )
}
