# Theatre Arts Students - Casting Portfolio Website

## Class of 2026

A professional casting portfolio website for theatre arts students to showcase their talent and information.

## Features

- ✅ Student Profiles with Photos
- ✅ Age, Height, Hair & Eye Color Information
- ✅ Talents/Skills Display (Acting, Dancing, Singing, Drawing, Writing, Modeling, Makeup)
- ✅ Demo Reel Video Player
- ✅ Contact Information
- ✅ Search by Name
- ✅ Filter by Talent
- ✅ Responsive Design (Mobile-Friendly)
- ✅ Black & Gold Theme

## How to Update Student Data

### Step 1: Add Students to `src/data/students.js`

Edit the file and add student objects to the `studentsData` array:

```javascript
{
  id: 4,
  name: "Student Name",
  age: 18,
  height: "5'8\"",
  hairColor: "Brown",
  eyeColor: "Brown",
  talents: ["acting", "dancing"],
  photo: "URL_TO_PHOTO",
  videoUrl: "YOUTUBE_VIDEO_EMBED_URL",
  contact: "email@example.com"
}
```

### Step 2: Video Upload

1. Upload your demo reel to **YouTube** (can be unlisted)
2. Copy the YouTube video ID (e.g., `dQw4w9WgXcQ` from `https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
3. Use this URL format: `https://www.youtube.com/embed/dQw4w9WgXcQ`

### Step 3: Photo Upload

1. Upload your headshot to an image hosting service (Google Photos, Imgur, etc.)
2. Get the direct image URL
3. Add it to the `photo` field

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Deployment

This site is ready to deploy on:
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**

## Color Scheme

- **Primary Color:** Black (#000, #1a1a1a)
- **Accent Color:** Gold (#d4af37)
- **Background:** Dark gradient

## Contact

For questions or updates, contact the project administrator.
