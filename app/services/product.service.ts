import { type SanityDocument } from "next-sanity";
import { client } from "../sanity/client";

export async function getProducts(): Promise<SanityDocument[]> {
  const query = `
    *[_type == "product"] {
      _id,
      name,
      price,
      "slug": slug.current,
      "mainImage": {
        "url": mainImage.asset->url,
        "alt": mainImage.alt
      }
    }
  `;
  return client.fetch(query);
}

export async function getProduct(slug: string): Promise<SanityDocument | null> {
  const query = `
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      sizeOptions,
      description,
      noted,
      "mainImage": {
        "url": mainImage.asset->url,
        "alt": mainImage.alt
      },
      "images": images[]{
        "url": asset->url,
        "alt": asset->alt
      }
    }
  `;
  return client.fetch(query, { slug });
}

export async function getRelatedProducts(currentProductId: string): Promise<SanityDocument | null> {
  const query = `
    *[_type == "product" && _id != $currentProductId][0...4] {
      _id,
      name,
      price,
      "slug": slug.current,
      "mainImage": {
        "url": mainImage.asset->url,
        "alt": mainImage.alt
      }
    }
  `;
  return client.fetch(query, { currentProductId });
}

export async function getContactInfo(): Promise<SanityDocument | null> {
  try {
    const query = `*[_type == "contactInfo"][0]`;
    const contactInfo = await client.fetch(query);
    return contactInfo;
  } catch (error) {
    console.error("Failed to fetch contact info:", error);
    throw error;
  }
}
