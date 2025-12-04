import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
  preloadImages?: string[];
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = "/assets/logo.webp",
  structuredData,
  preloadImages = []
}: SEOHeadProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    updateMetaTag("description", description);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("twitter:title", title, true);
    updateMetaTag("twitter:description", description, true);
    updateMetaTag("twitter:image", ogImage, true);

    // Update canonical link
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

      if (!linkElement) {
        linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "canonical");
        document.head.appendChild(linkElement);
      }

      linkElement.href = canonical;
    }

    // Add preload links for critical images
    preloadImages.forEach((imageSrc) => {
      let preloadLink = document.querySelector(`link[rel="preload"][href="${imageSrc}"]`) as HTMLLinkElement;

      if (!preloadLink) {
        preloadLink = document.createElement("link");
        preloadLink.setAttribute("rel", "preload");
        preloadLink.setAttribute("as", "image");
        preloadLink.setAttribute("href", imageSrc);
        document.head.appendChild(preloadLink);
      }
    });

    // Add structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');

      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, canonical, ogImage, structuredData, preloadImages]);

  return null;
};

export default SEOHead;
