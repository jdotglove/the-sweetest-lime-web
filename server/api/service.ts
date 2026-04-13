// server/api/subscribe.ts
import { Client, Environment } from 'square'

export default defineEventHandler(async (event: any) => {
  try {
    const config = useRuntimeConfig(event);

    const client = new Client({
      accessToken: config.squareAccessToken,
      environment: Environment.Production,
    });

    const response = await client.catalogApi.searchCatalogObjects({
      includeRelatedObjects: true,
    });

    let i = 0;
    let catalogObjectMap = {
      category: [] as Array<{ id: string; name: string }>,
      item: [] as Array<{
        id: string;
        name: string;
        link: string;
        description: string;
        displayPrice: string;
        categories: Array<any>;
        variations: Array<any>;
      }>,
      other: [],
    };

    if (response.result.objects) {
      for (const object of response.result.objects) {
        if (object.type === "CATEGORY") {
          catalogObjectMap.category.push({
            id: object.id,
            name: object.categoryData?.name || "Unnamed Category",
          });
        } else if (object.type === "ITEM" && !object.isDeleted && !object.itemData?.isArchived) {
          const priceString = object.itemData?.variations?.reduce((acc, variation) => Number(variation.itemVariationData?.priceMoney?.amount) ? `${acc}$${Number(variation.itemVariationData?.priceMoney?.amount) / 100}/` : "", "");
          catalogObjectMap.item.push({
            id: object.id,
            link: `https://book.squareup.com/appointments/55614969-c9c8-4268-a409-b631cbb6574b/location/9F5K62XVNWWGR/services/${object.id}`,
            name: object.itemData?.name || "Unnamed Item",
            description: object.itemData?.description || "",
            displayPrice: priceString?.slice(0, priceString.length - 1) || "",
            categories: object.itemData?.categories?.map(({ id }) => id) || [],
            variations: object.itemData?.variations?.map(({ itemVariationData, id, type }) => ({
              id,
              type,
              data: {
                id: itemVariationData?.itemId || "",
                name: itemVariationData?.name || "Unnamed Variation",
                pricingType: itemVariationData?.pricingType || "FIXED_PRICING",
                amount: itemVariationData?.priceMoney?.amount ? Number(itemVariationData.priceMoney.amount) : 0,
                currency: itemVariationData?.priceMoney?.currency || "USD",
              },
            })) || [],
          });
        } else if (object.type === "DISCOUNT") {
          // console.log("Skipping Discount");
          // catalogObjectMap.discount.push(object);
        } else if (object.type === "PRICING_RULE") {
          // console.log("Skipping Pricing Rule");
          // catalogObjectMap.pricingRule.push(object);
        } else if (object.type === "CUSTOM_ATTRIBUTE_DEFINITION") {
          // console.log("Skipping Custom Attribute Definition");
          // catalogObjectMap.customAttributeDefinition.push(object);
        } else if (object.type === "MEASUREMENT_UNIT") {
          // console.log("Skipping Measurement Unit");
          // catalogObjectMap.measurementUnit.push(object);
        } else if (object.type === "PRODUCT_SET") {
          // console.log("Skipping Product Set");
          // catalogObjectMap.productSet.push(object);
        } else if (object.type === "ITEM_OPTION") {
          // console.log("Skipping Item Option");
          // catalogObjectMap.itemOption.push(object);
        } else if (object.type === "QUICK_AMOUNTS_SETTINGS") {
          // console.log("Skipping Quick Amounts Settings");
          // catalogObjectMap.quickAmountsSettings.push(object);
        } else if (object.type === "TAX") {
          // console.log("Skipping Tax");
          // catalogObjectMap.tax.push(object);
        } else {
          console.log(`Skipping unhandled object type: ${object.type} ${object.isDeleted} ${object.itemData?.isArchived}`);
          //catalogObjectMap.other.push(object);
        }
        i++;
      }
    }

    catalogObjectMap.item = catalogObjectMap.item.map((item) => {
      return {
        ...item,
        categories: item.categories?.map((categoryId) => ({
          id: categoryId,
          name: catalogObjectMap.category.find(cat => cat.id === categoryId)?.name || "Unknown Category",
        })),
      };
    });

    return JSON.stringify({
      catalogItems: catalogObjectMap,
      success: true,
    });
  } catch (error) {
    console.error('Error fetching square catalog objects:', error);
    throw createError({
      statusCode: 500,
      message: error,
    });
  }
});
