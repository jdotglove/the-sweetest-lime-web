declare namespace SweetestLime {
  namespace Catalog {
    export type Category = {
      id: string;
      name: string;
    }
    export type Item = {
      id: string;
      name: string;
      link: string;
      displayPrice: string;
      description: string;
      categories: Array<any>;
      variations: Array<{
        id: string;
        type: string;
        data: {
          id: string;
          name: string;
          pricingType: string;
          amount: number;
          currency: string;
        }
      }>;
    }
    export type Map = {
      category: Category[];
      item: Item[];
      other: any[];
    }
  }
}