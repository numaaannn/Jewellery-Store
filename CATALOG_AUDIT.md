# Giftora catalogue audit

## Active storefront catalogue

The storefront reads product records from `data/store-products.ts`. The project has no connected product database or admin route; the catalogue is currently maintained as a static TypeScript file.

All 64 original photographs from `Giftora_Individual_Product_Photos` remain under `public/products/`. The 44 products that previously used AI-styled shots are reconnected to those exact archived images; the other 20 photo-only listings continue to use their original photographs.

## Current product counts

| Collection | Jewellery type | Listed | Target | Additional real products needed |
|---|---|---:|---:|---:|
| Gifts for Him | Rings | 19 | 10 | 0 (9 above target) |
| Gifts for Him | Chains | 0 | 10 | 10 |
| Gifts for Him | Bracelets | 0 | 10 | 10 |
| Gifts for Him | Studs | 0 | 10 | 10 |
| Gifts for Her | Rings | 10 | 10 | 0 |
| Gifts for Her | Earrings | 10 | 10 | 0 |
| Gifts for Her | Bracelets | 0 | 10 | 10 |
| Gifts for Her | Anklets | 5 | 10 | 5 |
| Gifts for Her | Pendants | 0 | 10 | 10 |
| Gifts for Her | Sets | 0 | 10 | 10 |

The storefront fills under-target categories with non-purchasable placeholder cards so each category displays 10 cards. These show the Giftora logo, the jewellery type as the title, and “Coming soon”; they are not real inventory and cannot be added to the cart. Men’s Rings has 19 genuine listings, so those are kept; all 10 Women’s Earrings are retained. The storefront shows 109 cards total, including 65 placeholders. The active catalogue has 44 genuine product records with prices.

## Attribute and image handling

Design and stone values are stored as product attributes. Categories are limited to the requested four types for Him and six types for Her. Material and availability filters are omitted until those values exist in the active records. Broken or missing product photos fall back to the matching jewellery icon.

## Disconnected legacy sample data

`data/products.ts`, `lib/products.ts`, and `data/jewelry-data.ts` contain separate example catalogues and are not connected to the storefront. They include zero prices, generic records, missing local image paths, external sample image URLs, or missing collection information. They were left intact and were not merged into the live catalogue to avoid guessing or duplicating products. Review them against the actual inventory before importing.

## Admin and backend

There is no existing admin product-management interface or database schema to migrate. The storefront uses a typed collection/category/attribute structure, but edits to the catalogue currently require changing `data/store-products.ts`.
