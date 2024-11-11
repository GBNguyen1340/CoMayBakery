
import { type SanityDocument } from "next-sanity";
import { client } from '../sanity/client';

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
  `
  return client.fetch(query)
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
  `
  return client.fetch(query, { slug })
}

export async function getRelatedProducts(currentProductId) {
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
  `
  return client.fetch(query, { currentProductId })
}