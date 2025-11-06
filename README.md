# Better Life CBO Website

A modern, community-focused website for Better Life Community Based Organization (CBO) built with Next.js and Tailwind CSS.

## Features

- **Modern Design**: Clean, inspiring, and community-focused design using the organization's brand colors
- **Responsive**: Fully responsive design that works on all devices
- **Multiple Pages**: Home, About, Programs, Volunteer, and Donate pages
- **Interactive Forms**: Volunteer application and donation forms
- **Brand Colors**: Uses exact colors from the organization logo:
  - Brand Purple: `#320258`
  - Brand Orange: `#fe330a`
  - Brand Green: `#5c9204`

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── programs/          # Programs page
│   ├── volunteer/         # Volunteer page
│   ├── donate/            # Donate page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── MissionVision.tsx  # Mission and vision section
│   ├── Programs.tsx       # Programs section
│   ├── Impact.tsx         # Impact statistics
│   └── CallToAction.tsx   # Call to action section
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Project dependencies
```

## Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library

## Organization Information

- **Name**: Better Life CBO (Community Based Organization)
- **Location**: Kahawa West, Roysambu Subcounty, Nairobi City County, Kenya
- **Email**: cbobetterlife@gmail.com
- **Motto**: Empowering Lives for a Better Tomorrow

## License

This project is created for Better Life CBO.

