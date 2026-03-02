import type { Schema, Struct } from '@strapi/strapi';

export interface FaqQuestion extends Struct.ComponentSchema {
  collectionName: 'components_faq_questions';
  info: {
    displayName: 'Question';
  };
  attributes: {
    answer: Schema.Attribute.Blocks;
    question: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'faq.question': FaqQuestion;
    }
  }
}
