import { MetadataData } from "@metaplex/js/lib/programs/metadata";

import { Content, Token as IToken, Attribute } from "@prisma/client";

export interface Token extends IToken {
  content: Content & { attributes: Attribute[] };
}

// export interface UriContent {
//   name: string;
//   symbol: string;
//   description: string;
//   seller_fee_basis_points: number;
//   image: string;
//   animation_url?: string;
//   external_url: string;
//   attributes: Array<{
//     trait_type: string;
//     value: string;
//   }>;
//   collection: {
//     name: string;
//     family: string;
//   };
//   properties: {
//     category: string;
//     creators: Array<{
//       address: string;
//       share: number;
//     }>;
//     files: Array<{
//       uri: string;
//       type: string;
//     }>;
//   };
// }
