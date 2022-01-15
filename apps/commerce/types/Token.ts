import { Content, Token, Attribute } from "@prisma/client";

export interface IToken extends Token {
  content: Content & { attributes: Attribute[] };
}

interface Item {}
