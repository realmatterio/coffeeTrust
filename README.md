# Coffee Bean Trust - Blockchain Supply Chain Traceability

A mobile-optimized web application for tracking coffee beans from farm to cup using blockchain technology, inspired by IBM Food Trust.

![Coffee Bean Trust](https://img.shields.io/badge/Coffee-Bean%20Trust-8B4513?style=for-the-badge&logo=coffee&logoColor=white)
![Mobile First](https://img.shields.io/badge/Mobile-First-32CD32?style=for-the-badge&logo=mobile&logoColor=white)
![Blockchain](https://img.shields.io/badge/Blockchain-Verified-DAA520?style=for-the-badge&logo=ethereum&logoColor=white)

## 🌟 Features

### ☕ Core Functionality
- **Consumer Interface**: Track coffee from farm to cup with detailed supply chain visibility
- **Interactive Timeline**: Visual journey showing each step in the coffee's supply chain
- **Blockchain Verification**: Immutable records ensuring authenticity and transparency
- **Quality Scores**: Coffee quality ratings and certification validation
- **Mobile Optimized**: Designed for in-store scanning and mobile use

### 📱 Application Pages
1. **Home Page**: Search, quick stats, console navigation, and recent blockchain activity
2. **Trace Console**: Detailed batch tracking with interactive supply chain timeline
3. **Analytics Console**: Supply chain metrics and performance insights with charts
4. **Certifications Console**: Certificate verification and facility management

### 🎨 Design Language
- **Color Palette**: Warm earth tones - rich browns, coffee cream, forest greens, gold accents
- **Typography**: Inter font family for modern, readable text
- **Animations**: Smooth transitions and coffee-themed animations
- **Responsive**: Mobile-first design that scales beautifully to desktop

## 🚀 Quick Start

### Option 1: GitHub Pages (Recommended)
1. Fork this repository
2. Go to Settings → Pages
3. Select "Deploy from a branch" 
4. Choose "main" branch and "/ (root)" folder
5. Click Save
6. Your app will be available at `https://yourusername.github.io/coffeeTrust`

### Option 2: Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/coffeeTrust.git
cd coffeeTrust

# Serve locally (Python 3)
python -m http.server 8000

# Or with Node.js
npx serve .

# Or with PHP
php -S localhost:8000
```

Visit `http://localhost:8000` in your browser.

## 📁 Project Structure

```
coffeeTrust/
├── index.html          # Main application HTML
├── css/
│   └── style.css       # Mobile-first responsive styles
├── js/
│   ├── app.js          # Main application logic
│   └── data.js         # Sample data and utilities
├── assets/             # Images and icons (if any)
├── README.md           # This file
└── Software Specification.txt
```

## 🔍 Sample Data

The application includes realistic sample data:

### Coffee Batches
- **Ethiopian Yirgacheffe** (CB2024001234) - Complete supply chain from Yirgacheffe to retail
- **Colombian Supremo** (CB2024005678) - Huila region coffee with fair trade certification

### Certifications
- Organic certifications (ECOCERT, USDA, EU Organic)
- Fair Trade certifications (Fairtrade International, Fair Trade USA)
- Quality certifications (ISO 22000, Rainforest Alliance)

### Supply Chain Participants
- Primary Producers (Coffee Cooperatives)
- Processing Facilities
- Export/Import Agencies
- Roasters and Distributors
- Retail Locations

## 🎯 Usage Guide

### Searching for Batches
1. Enter a batch ID (try: `CB2024001234` or `CB2024005678`)
2. Use the QR scan button (simulated for demo)
3. Search by partial terms like "Ethiopian" or "Colombian"

### Exploring the Supply Chain
1. Navigate to **Trace Console**
2. Search for a batch to see the detailed timeline
3. View participant information, certifications, and quality metrics
4. Each timeline item shows environmental conditions, processing details, and verification data

### Viewing Analytics
1. Go to **Analytics Console** to see:
   - Network participant metrics
   - Trace usage trends over time
   - Daily user activity patterns
   - Blockchain event frequency

### Certificate Verification
1. Visit **Certifications Console**
2. Browse facilities and their certifications
3. Click on any facility to view detailed certificate information
4. Check expiry dates, issuing authorities, and certification scopes

## 🛠️ Technical Details

### Frontend Technologies
- **HTML5**: Semantic structure with accessibility features
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: ES6+ features, modular architecture
- **Chart.js**: Interactive analytics charts
- **Font Awesome**: Consistent iconography

### Key Features
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Progressive Web App**: Service worker ready for offline capabilities
- **Performance Optimized**: Minimal dependencies, efficient loading
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

### Browser Support
- Chrome/Edge: 90+
- Firefox: 88+
- Safari: 14+
- Mobile browsers: iOS Safari 14+, Chrome Mobile 90+

## 🎨 Customization

### Color Themes
The application uses CSS custom properties for easy theming:

```css
:root {
    --coffee-dark: #2C1810;
    --coffee-medium: #4A3326;
    --coffee-brown: #8B4513;
    --coffee-light: #D2B48C;
    --coffee-cream: #F5F5DC;
    --coffee-gold: #DAA520;
    --forest-green: #228B22;
}
```

### Adding New Data
Extend the sample data in `js/data.js`:

```javascript
// Add new batches
sampleData.batches.push({
    id: "CB2024999999",
    name: "Your Coffee Name",
    // ... other properties
});

// Add new certifications
sampleData.certifications.push({
    facilityId: "9999999999",
    // ... other properties
});
```

## 📱 Mobile Features

### Touch Interactions
- Swipe gestures for navigation
- Touch-optimized buttons and form controls
- Haptic feedback simulation

### Mobile-Specific Design
- Large touch targets (44px minimum)
- Optimized typography for small screens
- Efficient data loading and caching
- Offline-ready architecture

## 🔐 Security Considerations

While this is a demo application, production implementations should include:
- API authentication and rate limiting
- Data encryption for sensitive information
- Secure blockchain integration
- Input validation and sanitization
- HTTPS enforcement

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🎯 Future Enhancements

- [ ] QR code scanning integration
- [ ] Real blockchain integration (Ethereum, Hyperledger)
- [ ] Multi-language support
- [ ] Advanced filtering and search
- [ ] Export functionality (PDF reports)
- [ ] Real-time notifications
- [ ] Admin dashboard
- [ ] API integration examples

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Built with ☕ for the coffee supply chain community**