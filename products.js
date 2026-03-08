// ═══════════════════════════════════════════════════════════
// HomeGadgetPro — Auto-generated product database
// Generated: 08 March 2026 at 10:02
// Total products: 1
// DO NOT EDIT MANUALLY — re-run hgp_pipeline.py to update
// ═══════════════════════════════════════════════════════════

const ALL_PRODUCTS = {
  "coffee": [
    {
      "id": 101,
      "asin": "B07MXQ73ZW",
      "emoji": "☕",
      "brand": "Sage",
      "name": "Barista Express Impress",
      "price": 699,
      "oldPrice": 749,
      "rating": 4.9,
      "reviews": 1847,
      "badge": "best",
      "sponsored": false,
      "image": "",
      "bestFor": [
        "Best Premium",
        "Best for Coffee Lovers"
      ],
      "pros": [
        "Café-quality espresso",
        "Integrated precision grinder",
        "PID temperature control",
        "Fast 3-second heat-up"
      ],
      "cons": [
        "Steep learning curve",
        "Takes up counter space",
        "Expensive"
      ],
      "verdict": "The Sage Barista Express produces café-quality espresso at home. The integrated grinder and PID control make it the best choice for serious coffee lovers.",
      "verdictTag": "Best for: Coffee enthusiasts who want café quality",
      "retailers": [
        {
          "name": "Amazon",
          "logo": "📦",
          "price": "£699",
          "asin": "B07MXQ73ZW"
        }
      ],
      "videoId": "",
      "priceHistory": [
        749,
        739,
        729,
        719,
        699,
        699,
        729,
        719,
        709,
        699,
        679,
        649
      ],
      "scores": {
        "Performance": 98,
        "Value for Money": 80,
        "Ease of Use": 60,
        "Build Quality": 95,
        "Features": 92
      },
      "specs": {
        "Type": "Espresso+Grinder",
        "Pressure": "9 bar",
        "Capacity": "2L",
        "Score": 96
      },
      "userReviews": [],
      "lastUpdated": "2026-03-08"
    }
  ]
};

// Flatten all products to one lookup map
const PRODUCT_MAP = {};
Object.values(ALL_PRODUCTS).flat().forEach(p => { PRODUCT_MAP[p.id] = p; });

// Get category key for a product id
function getCatForProduct(id) {
  for (const [cat, prods] of Object.entries(ALL_PRODUCTS)) {
    if (prods.find(p => p.id === id)) return cat;
  }
  return null;
}

const BEST_FOR_DATA = {};
Object.entries(ALL_PRODUCTS).forEach(([cat, prods]) => {
  const tags = [...new Set(prods.flatMap(p => p.bestFor || []))];
  BEST_FOR_DATA[cat] = tags;
});

const AFFILIATE_TAG = "Homegadgetpro-21";
function getAffiliateLink(asin) {
  if (!asin) return '#';
  return `https://www.amazon.co.uk/dp/${asin}?tag=${AFFILIATE_TAG}`;
}
