# Managing Outputs

The website uses a data-driven system for managing publications, media appearances, and commentary.

## How to Add New Outputs

All outputs are stored in `data/outputs.json`. To add a new output:

1. Open `data/outputs.json`
2. Add a new entry with the following structure:

```json
{
  "date": "2026",
  "type": "publication",
  "venue": "Journal Name",
  "title": "Article Title",
  "url": "https://...",
  "people": ["Andrew Gawthorpe"],
  "description": "Brief description of the work"
}
```

### Fields

- **date**: Publication date (can be year only like "2026" or full date like "2026-09-04")
- **type**: One of: `publication`, `media`, `commentary`
- **venue** (for publications): Journal name, book title, etc.
- **outlet** (for media/commentary): Media outlet name
- **title**: Full title of the work
- **url**: Link to the work
- **people**: Array of author/contributor names (must match names exactly as they appear on team pages)
  - "Andrew Gawthorpe"
  - "Martijn van Ette"
  - "Catherine Wood"
  - "Kevin Maloney"
- **description**: Brief description of the work

### Output Types

- **publication**: Academic papers, book chapters, journal articles
- **media**: Media interviews, quotes in news articles
- **commentary**: Opinion pieces, blog posts, analysis articles

### Multiple Authors

For co-authored works, include all authors in the people array:

```json
{
  "people": ["Andrew Gawthorpe", "Catherine Wood"],
  ...
}
```

The output will automatically appear on both authors' profile pages.

## Where Outputs Appear

- **Publications page**: All outputs with type "publication"
- **News/Media pages**: All outputs with type "media" or "commentary"
- **Individual profile pages**: All outputs where the person's name appears in the "people" array

## The System

The website uses JavaScript (`js/outputs.js`) to:
- Load outputs from the JSON file
- Filter by person for individual pages
- Filter by type for general pages
- Sort by date (newest first)
- Group by year

No manual HTML editing is needed - just update the JSON file and the website will automatically display the new outputs on all relevant pages.
