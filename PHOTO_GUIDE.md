# Photo Guide for Better Life CBO Website

This guide explains where to add real-life photos and how to implement them.

## 📸 Recommended Photo Locations

### 1. **Hero Section (Homepage)** - HIGH PRIORITY ⭐⭐⭐
**Location:** `components/Hero.tsx`
**What to add:** 
- Community gathering photo
- People working together
- Happy community members
**Photo path:** `/public/images/hero-community.jpg`
**Size:** 1920x1080px recommended

### 2. **Programs Section (Homepage)** - HIGH PRIORITY ⭐⭐⭐
**Location:** `components/Programs.tsx`
**What to add:** One photo per program:
- Economic Empowerment: People in business training, workshops
- Education & Training: Students learning, mentorship sessions
- Health & Sanitation: Health drives, community health events
- Environmental Conservation: Tree planting, clean-up activities
- Social Cohesion: Youth mentorship, community events
**Photo paths:** 
- `/public/images/programs/economic-empowerment.jpg`
- `/public/images/programs/education-training.jpg`
- `/public/images/programs/health-sanitation.jpg`
- `/public/images/programs/environmental-conservation.jpg`
- `/public/images/programs/social-cohesion.jpg`
**Size:** 800x600px recommended

### 3. **Programs Detail Page** - HIGH PRIORITY ⭐⭐⭐
**Location:** `app/programs/page.tsx`
**What to add:** Larger photos for each program showing activities
**Same photo paths as above**

### 4. **About Page** - MEDIUM PRIORITY ⭐⭐
**Location:** `app/about/page.tsx`
**What to add:**
- Community location photo
- Team/leadership photo
- Community members photo
**Photo paths:**
- `/public/images/about/community-location.jpg`
- `/public/images/about/team.jpg`
- `/public/images/about/members.jpg`

### 5. **Impact Section** - MEDIUM PRIORITY ⭐⭐
**Location:** `components/Impact.tsx`
**What to add:** Photos showing real impact and success stories
**Photo path:** `/public/images/impact/success-stories.jpg`

### 6. **Gallery Page** (Optional) - LOW PRIORITY ⭐
**Location:** Create new `app/gallery/page.tsx`
**What to add:** Multiple photos showcasing all activities

---

## 📁 Folder Structure

Create this folder structure in your project:

```
public/
  images/
    hero-community.jpg
    programs/
      economic-empowerment.jpg
      education-training.jpg
      health-sanitation.jpg
      environmental-conservation.jpg
      social-cohesion.jpg
    about/
      community-location.jpg
      team.jpg
      members.jpg
    impact/
      success-stories.jpg
    gallery/
      photo1.jpg
      photo2.jpg
      photo3.jpg
      ...
```

---

## 🖼️ How to Add Photos

### Step 1: Prepare Your Photos
1. **Resize photos** to recommended sizes (use tools like Canva, Photoshop, or online resizers)
2. **Optimize for web** - compress images to reduce file size (use TinyPNG or similar)
3. **Name files** clearly (e.g., `education-training.jpg`)

### Step 2: Add Photos to Project
1. Create the folder structure above in your `public` folder
2. Copy your photos into the appropriate folders
3. Make sure file names match what's in the code

### Step 3: Uncomment Code
The code is already prepared with comments showing where to add photos. Just:
1. Uncomment the image sections (remove `/*` and `*/`)
2. Make sure your photo paths match

### Step 4: Test
1. Run `npm run dev`
2. Check each page to see photos
3. Adjust sizes if needed

---

## 📝 Photo Requirements

### Technical Requirements:
- **Format:** JPG or PNG
- **Size:** 
  - Hero: 1920x1080px (or similar wide format)
  - Program cards: 800x600px
  - Gallery: 1200x800px
- **File size:** Keep under 500KB per image (optimize!)
- **Aspect ratio:** 16:9 for hero, 4:3 for program photos

### Content Requirements:
- **High quality:** Clear, well-lit photos
- **Relevant:** Show actual CBO activities
- **Diverse:** Include different people, ages, activities
- **Positive:** Show happy, engaged community members
- **Permission:** Make sure you have permission to use photos of people

---

## 🎨 Photo Ideas by Program

### Economic Empowerment
- Business training workshops
- People learning skills
- Small business owners
- Group savings meetings
- Entrepreneurship sessions

### Education & Training
- Students in class
- Mentorship sessions
- Skills training workshops
- Scholarship recipients
- Youth learning

### Health & Sanitation
- Health drive events
- Medical camps
- Hygiene workshops
- Community health awareness
- Sanitation projects

### Environmental Conservation
- Tree planting activities
- Clean-up campaigns
- Waste management projects
- Community gardens
- Environmental education

### Social Cohesion
- Youth mentorship
- Community meetings
- Family events
- Peace-building activities
- Cultural events

---

## ✅ Quick Start Checklist

- [ ] Create `public/images` folder structure
- [ ] Add hero photo (`hero-community.jpg`)
- [ ] Add 5 program photos
- [ ] Uncomment photo code in components
- [ ] Test photos display correctly
- [ ] Optimize image file sizes
- [ ] Check photos on mobile devices

---

## 💡 Tips

1. **Start with hero and programs** - These have the most impact
2. **Use real photos** - Stock photos are okay temporarily, but real photos are better
3. **Update regularly** - Add new photos as you have new activities
4. **Get consent** - Always get permission before using photos of people
5. **Optimize** - Large images slow down your site, always compress!

---

## 🚀 Need Help?

If you need help:
1. Adding photos to specific sections
2. Creating a gallery page
3. Optimizing images
4. Adjusting photo sizes/layouts

Just ask and I can help implement it!



