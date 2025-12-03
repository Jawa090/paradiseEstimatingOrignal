# Service Template Data Keys

## Overview
The service template system uses URL-friendly slugs as keys to match the navigation menu structure.

## Key Format
All service keys follow the pattern: `{service-type}-estimating`

## Available Service Keys

### Currently Implemented:
1. **`residential-estimating`** - Residential Estimating Services
   - Full content with all sections populated
   - FAQs, portfolio, trades, renovation details, etc.

2. **`commercial-estimating`** - Commercial Estimating Services
   - Basic structure created (placeholder content)
   - Ready to be populated with commercial-specific content

### To Be Added:
Based on the services menu, you can add these keys:

3. **`industrial-estimating`** - Industrial Estimating Services
4. **`renovation-estimating`** - Renovation Estimating Services
5. **`bridge-estimating`** - Bridge Estimating
6. **`garage-estimating`** - Garage Estimating
7. **`telecom-estimating`** - Telecom Estimating
... and so on

## How It Works

### 1. URL Structure
```
/services/residential-estimating  → Shows residential content
/services/commercial-estimating   → Shows commercial content
/services/industrial-estimating   → Shows industrial content
```

### 2. Data File Location
`/src/data/serviceTemplateData.ts`

### 3. Adding a New Service

```typescript
export const serviceTemplateData: Record<string, ServiceTemplateContent> = {
    "residential-estimating": { /* ... */ },
    "commercial-estimating": { /* ... */ },
    
    // Add new service here:
    "industrial-estimating": {
        title: "Industrial Estimating Services",
        description: "Professional industrial estimating services...",
        content: {
            heroTitle: "Accurate Industrial Estimating Services",
            heroSubtitle: "PARADISE ESTIMATING SERVICE COMPANY",
            mainHeading: "Industrial Estimating Services",
            tagline: "Robust. Reliable. Results-Driven",
            description: "Your description here...",
            items: [ /* service items */ ],
            processSteps: [ /* process steps */ ],
            whyChooseIntro: "Why choose text...",
            whyChoose: [ /* reasons */ ],
            trades: [ /* trade-specific info */ ],
            renovation: { /* renovation details */ },
            portfolio: { /* portfolio items */ },
            nearbyAreas: [ /* list of states */ ],
            faqs: [ /* FAQ items */ ]
        }
    }
};
```

### 4. Menu Integration
The keys match the slugs generated from the services menu:
- "Residential Estimating" → `residential-estimating`
- "Commercial Estimating" → `commercial-estimating`
- "Industrial Estimating" → `industrial-estimating`

## Benefits
✅ **URL-Friendly**: Clean, SEO-friendly URLs
✅ **Consistent**: Matches navigation menu structure
✅ **Scalable**: Easy to add new services
✅ **Type-Safe**: Full TypeScript support
✅ **Maintainable**: All content in one centralized location
