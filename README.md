# Health Tracker Dashboard

A comprehensive health tracking dashboard built with Next.js 14, featuring real-time monitoring, beautiful charts, and ESP32 device integration.

## 🚀 Features

- **Real-time Health Monitoring**: Track heart rate, sleep, temperature, and activity
- **Beautiful Dashboard**: Modern UI with interactive charts using Recharts
- **ESP32 Integration**: RESTful APIs for device data ingestion
- **Dark/Light Mode**: Seamless theme switching
- **Mobile Responsive**: Works perfectly on all devices
- **Smart Notifications**: Intelligent alerts based on health metrics
- **User Authentication**: Secure login and registration system
- **PostgreSQL Database**: Robust data storage with Prisma ORM

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Charts**: Recharts for beautiful data visualization
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Custom email/password authentication
- **Icons**: Lucide React for consistent iconography
- **Theme**: next-themes for dark/light mode

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn package manager

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone <repository-url>
cd health-tracker-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/health_tracker"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Set up the database

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# (Optional) Open Prisma Studio
npm run db:studio
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
├── app/
│   ├── api/esp32/           # ESP32 data ingestion APIs
│   ├── auth/                # Authentication pages
│   ├── dashboard/           # Dashboard pages
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Landing page
├── components/
│   └── theme-provider.tsx   # Theme provider component
├── prisma/
│   └── schema.prisma        # Database schema
├── public/                  # Static assets
└── package.json
```

## 🔌 ESP32 Integration

The dashboard provides RESTful APIs for ESP32 devices to send health data:

### Heart Rate Data
```bash
POST /api/esp32/heart-rate
{
  "userId": "user_id",
  "bpm": 75,
  "quality": "normal"
}
```

### Temperature Data
```bash
POST /api/esp32/temperature
{
  "userId": "user_id",
  "temperature": 36.8,
  "location": "forehead"
}
```

### Sleep Data
```bash
POST /api/esp32/sleep
{
  "userId": "user_id",
  "duration": 8.5,
  "quality": 8,
  "deepSleep": 2.5,
  "lightSleep": 4.2,
  "remSleep": 1.8,
  "startTime": "2024-01-01T22:00:00Z",
  "endTime": "2024-01-02T06:30:00Z"
}
```

### Activity Data
```bash
POST /api/esp32/activity
{
  "userId": "user_id",
  "steps": 8500,
  "calories": 320,
  "distance": 6.2,
  "duration": 45
}
```

## 📊 Dashboard Features

### Overview Dashboard
- Real-time health metrics cards
- Interactive charts for all health data
- Recent activity feed
- Quick insights and trends

### Detailed Pages
- **Heart Rate**: Live monitoring with historical data
- **Sleep**: Sleep quality analysis and recommendations
- **Temperature**: Body temperature tracking
- **Activity**: Steps, calories, and fitness metrics

### Smart Features
- **Notifications**: Intelligent alerts for abnormal readings
- **Recommendations**: AI-powered health suggestions
- **Settings**: Theme toggle and notification preferences

## 🎨 UI Components

The dashboard uses a modern, clean design with:

- **Cards**: Clean metric displays with icons
- **Charts**: Interactive line, area, and pie charts
- **Tabs**: Organized content navigation
- **Forms**: User-friendly input components
- **Notifications**: Toast-style alerts
- **Responsive Design**: Mobile-first approach

## 🔐 Authentication

The application includes:

- User registration with email/password
- Secure login system
- Password validation
- Session management
- Protected routes

## 🌙 Dark Mode

Full dark mode support with:

- System preference detection
- Manual theme toggle
- Persistent theme selection
- Smooth transitions

## 📱 Mobile Responsive

The dashboard is fully responsive with:

- Mobile-optimized navigation
- Touch-friendly interactions
- Adaptive layouts
- Optimized charts for small screens

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:studio    # Open Prisma Studio
```

### Database Management

```bash
# Reset database
npx prisma db push --force-reset

# View data in Prisma Studio
npm run db:studio

# Generate new migration
npx prisma migrate dev --name migration_name
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Check the documentation
- Review the code examples

## 🔮 Future Enhancements

- [ ] Real-time WebSocket connections
- [ ] Advanced analytics and insights
- [ ] Integration with wearable devices
- [ ] Machine learning recommendations
- [ ] Export data functionality
- [ ] Multi-user support
- [ ] Advanced chart customization
- [ ] Push notifications
- [ ] Health goal tracking
- [ ] Social features and sharing

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS 