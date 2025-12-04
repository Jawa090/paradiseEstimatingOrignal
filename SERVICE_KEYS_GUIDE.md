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
   
3. **`industrial-estimating`** - Industrial Estimating Services
   - Basic structure created (placeholder content)
   - Ready to be populated with industrial-specific content

### To Be Added:
Based on the services menu, you can add these keys:

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
/services/construction-estimating-consultant   → Shows construction estimating consultant content
/services/construction-takeoff-services   → Shows construction takeoff services content
/services/quantity-material-takeoff   → Shows quantity material takeoff content
/services/home-addition-estimating   → Shows home addition estimating content
/services/cost-budget-estimating   → Shows cost budget estimating content
/services/xactimate-estimating   → Shows xactimate estimating content
/services/transportation-estimating   → Shows transportation estimating content
/services/swimming-pool-estimating   → Shows swimming pool estimating content
/services/cut-and-fill-estimating   → Shows cut and fill estimating content
/services/civil-estimating-services   → Shows civil estimating services content
/services/construction-lead-generation   → Shows construction lead generation content
/services/construction-estimating-consultant   → Shows construction estimating consultant content
/services/carpentry-estimating-services   → Shows carpentry estimating services content
/services/surface-grading-estimating   → Shows surface grading estimating content
/services/demolition-estimating-services   → Shows demolition estimating services content
/services/exterior-improvements-estimating   → Shows exterior improvements estimating content
/services/consultation-and-bid-submission   → Shows consultation and bid submission content
/services/outsource-freelance-estimating   → Shows outsource freelance estimating content
/services/single-family-residential-estimating   → Shows single family residential estimating content
/services/multi-family-residential-estimating   → Shows multi family residential estimating content
/services/integrated-automation-estimating   → Shows integrated automation estimating content
/services/electronic-safety-and-security-estimating   → Shows electronic safety and security estimating content
/services/pollution-control-equipment-estimating   → Shows pollution control equipment estimating content
```

### 2. Data File Location
`/src/data/serviceTemplateData.ts`

### 3. Adding a New Service

```typescript
export const serviceTemplateData: Record<string, ServiceTemplateContent> = {
    "residential-estimating": { /* ... */ },
    "commercial-estimating": { /* ... */ }, 
    // Add new service here:
    "industrial-estimating": { /* ... */}
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
