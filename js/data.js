// Sample data for Coffee Bean Trust application
const sampleData = {
    // Coffee batches with detailed information
    batches: [
        {
            id: "CB2024001234",
            name: "Ethiopian Yirgacheffe",
            status: "verified",
            origin: "Yirgacheffe, Ethiopia",
            variety: "Heirloom",
            processingMethod: "Washed",
            altitude: "2000m",
            farmer: "Kaldi Coffee Cooperative",
            harvestDate: "2024-03-15",
            quantity: "500kg",
            qualityScore: 88.5,
            certifications: ["organic", "fair-trade", "rainforest-alliance"],
            currentLocation: "Super Store Inc.",
            carbonCredits: {
                co2Sequestered: 2.8, // tonnes CO₂
                creditsGenerated: 2.8,
                estimatedValue: 168, // USD at $60/credit
                farmingPractices: [
                    {
                        practice: "Shade-grown Coffee",
                        impact: "1.2 tonnes CO₂",
                        description: "Traditional shade cultivation preserves forest canopy"
                    },
                    {
                        practice: "Organic Farming",
                        impact: "0.8 tonnes CO₂",
                        description: "No synthetic fertilizers or pesticides"
                    },
                    {
                        practice: "Agroforestry Systems",
                        impact: "0.6 tonnes CO₂",
                        description: "Mixed tree species provide carbon sequestration"
                    },
                    {
                        practice: "Soil Conservation",
                        impact: "0.2 tonnes CO₂",
                        description: "Terracing and composting improve soil carbon"
                    }
                ],
                timeline: [
                    {
                        stage: "Planting & Growth",
                        period: "Years 1-3",
                        co2Impact: "0.5 tonnes/year",
                        description: "Young coffee plants and shade trees establish"
                    },
                    {
                        stage: "Mature Production",
                        period: "Years 4-15",
                        co2Impact: "1.2 tonnes/year",
                        description: "Full canopy development maximizes carbon storage"
                    },
                    {
                        stage: "Processing",
                        period: "Harvest season",
                        co2Impact: "0.1 tonnes saved",
                        description: "Water recycling and composting waste"
                    }
                ],
                calculationDetails: [
                    {
                        element: "Shade Trees",
                        area: "80% of farm area (400 ha)",
                        sequestrationRate: "3.5 tonnes CO₂/ha/year",
                        timeImplemented: "10 years",
                        verificationStatus: "Third-party verified",
                        calculation: "400 × 0.8 × 3.5 × 0.1 = 1.12 tonnes CO₂",
                        contribution: "40%"
                    },
                    {
                        element: "Soil Carbon Storage",
                        area: "100% of farm area (400 ha)",
                        sequestrationRate: "1.8 tonnes CO₂/ha/year",
                        timeImplemented: "8 years",
                        verificationStatus: "Self-reported",
                        calculation: "400 × 1.0 × 1.8 × 0.08 = 0.58 tonnes CO₂",
                        contribution: "21%"
                    },
                    {
                        element: "Composting System",
                        area: "Processing facility",
                        sequestrationRate: "0.5 tonnes CO₂/year",
                        timeImplemented: "5 years",
                        verificationStatus: "Third-party verified",
                        calculation: "0.5 × 1.0 × 5 × 0.2 = 0.5 tonnes CO₂",
                        contribution: "18%"
                    },
                    {
                        element: "Reduced Machinery Use",
                        area: "Farm operations",
                        sequestrationRate: "0.6 tonnes CO₂ saved/year",
                        timeImplemented: "6 years",
                        verificationStatus: "Documented",
                        calculation: "0.6 × 1.0 × 6 × 0.17 = 0.6 tonnes CO₂",
                        contribution: "21%"
                    }
                ]
            },
            supplyChain: [
                {
                    id: 1,
                    stage: "Farm",
                    location: "Yirgacheffe, Ethiopia",
                    participant: "Kaldi Coffee Cooperative",
                    date: "2024-03-15",
                    details: {
                        altitude: "2000m",
                        temperature: "22°C",
                        humidity: "65%",
                        soil: "Volcanic"
                    },
                    status: "completed"
                },
                {
                    id: 2,
                    stage: "Processing",
                    location: "Addis Ababa, Ethiopia",
                    participant: "Ethiopian Coffee Processing",
                    date: "2024-03-18",
                    details: {
                        method: "Washed",
                        fermentation: "24 hours",
                        drying: "Sun dried",
                        moisture: "11%"
                    },
                    status: "completed"
                },
                {
                    id: 3,
                    stage: "Export",
                    location: "Djibouti Port",
                    participant: "Ethiopian Export Agency",
                    date: "2024-04-02",
                    details: {
                        container: "MSCU1234567",
                        weight: "500kg",
                        temperature: "18°C",
                        destination: "Hamburg"
                    },
                    status: "completed"
                },
                {
                    id: 4,
                    stage: "Import",
                    location: "Hamburg, Germany",
                    participant: "European Coffee Imports",
                    date: "2024-04-20",
                    details: {
                        customs: "Cleared",
                        quality: "Grade A",
                        storage: "Climate controlled",
                        certification: "EU Organic"
                    },
                    status: "completed"
                },
                {
                    id: 5,
                    stage: "Roasting",
                    location: "Berlin, Germany",
                    participant: "Artisan Roasters GmbH",
                    date: "2024-05-05",
                    details: {
                        roastLevel: "Medium",
                        temperature: "210°C",
                        time: "12 minutes",
                        cupping: "88.5 points"
                    },
                    status: "completed"
                },
                {
                    id: 6,
                    stage: "Distribution",
                    location: "Regional Warehouse",
                    participant: "Premium Coffee Distributors",
                    date: "2024-05-10",
                    details: {
                        packaging: "250g bags",
                        quantity: "2000 units",
                        storage: "Cool, dry",
                        expiry: "2025-05-10"
                    },
                    status: "completed"
                },
                {
                    id: 7,
                    stage: "Retail",
                    location: "Downtown Coffee Shop",
                    participant: "Super Store Inc.",
                    date: "2024-05-15",
                    details: {
                        display: "Premium shelf",
                        price: "€15.99",
                        inventory: "150 bags",
                        sales: "Active"
                    },
                    status: "active"
                }
            ]
        },
        {
            id: "CB2024005678",
            name: "Colombian Supremo",
            status: "verified",
            origin: "Huila, Colombia",
            variety: "Caturra",
            processingMethod: "Natural",
            altitude: "1800m",
            farmer: "Los Naranjos Farm",
            harvestDate: "2024-02-20",
            quantity: "750kg",
            qualityScore: 86.2,
            certifications: ["organic", "fair-trade"],
            currentLocation: "Neighborhood Market",
            carbonCredits: {
                co2Sequestered: 3.2, // tonnes CO₂
                creditsGenerated: 3.2,
                estimatedValue: 192, // USD at $60/credit
                farmingPractices: [
                    {
                        practice: "Natural Processing",
                        impact: "1.0 tonnes CO₂",
                        description: "Sun-drying reduces energy consumption"
                    },
                    {
                        practice: "Water Conservation",
                        impact: "0.6 tonnes CO₂",
                        description: "Minimal water use in natural processing"
                    },
                    {
                        practice: "Biodiversity Protection",
                        impact: "1.2 tonnes CO₂",
                        description: "Native forest preservation around farm"
                    },
                    {
                        practice: "Organic Composting",
                        impact: "0.4 tonnes CO₂",
                        description: "Coffee pulp recycled as organic fertilizer"
                    }
                ],
                timeline: [
                    {
                        stage: "Land Preparation",
                        period: "Pre-planting",
                        co2Impact: "0.3 tonnes saved",
                        description: "No-till farming prevents soil carbon loss"
                    },
                    {
                        stage: "Growing Season",
                        period: "Annual cycle",
                        co2Impact: "1.4 tonnes/year",
                        description: "Native shade trees and coffee plants"
                    },
                    {
                        stage: "Natural Processing",
                        period: "Post-harvest",
                        co2Impact: "0.5 tonnes saved",
                        description: "Solar drying eliminates fossil fuel use"
                    }
                ],
                calculationDetails: [
                    {
                        element: "Native Forest Preservation",
                        area: "60% of farm area (300 ha)",
                        sequestrationRate: "4.2 tonnes CO₂/ha/year",
                        timeImplemented: "12 years",
                        verificationStatus: "Government certified",
                        calculation: "300 × 0.6 × 4.2 × 0.1 = 1.26 tonnes CO₂",
                        contribution: "39%"
                    },
                    {
                        element: "Natural Processing",
                        area: "Processing facility",
                        sequestrationRate: "0.8 tonnes CO₂ saved/year",
                        timeImplemented: "8 years",
                        verificationStatus: "Third-party verified",
                        calculation: "0.8 × 1.0 × 8 × 0.15 = 0.96 tonnes CO₂",
                        contribution: "30%"
                    },
                    {
                        element: "Water Conservation",
                        area: "Entire farm operations",
                        sequestrationRate: "0.4 tonnes CO₂ saved/year",
                        timeImplemented: "10 years",
                        verificationStatus: "Self-monitored",
                        calculation: "0.4 × 1.0 × 10 × 0.15 = 0.6 tonnes CO₂",
                        contribution: "19%"
                    },
                    {
                        element: "Organic Composting",
                        area: "Farm waste management",
                        sequestrationRate: "0.3 tonnes CO₂/year",
                        timeImplemented: "7 years",
                        verificationStatus: "Documented",
                        calculation: "0.3 × 1.0 × 7 × 0.16 = 0.38 tonnes CO₂",
                        contribution: "12%"
                    }
                ]
            },
            supplyChain: [
                {
                    id: 1,
                    stage: "Farm",
                    location: "Huila, Colombia",
                    participant: "Los Naranjos Farm",
                    date: "2024-02-20",
                    details: {
                        altitude: "1800m",
                        temperature: "20°C",
                        humidity: "70%",
                        soil: "Clay loam"
                    },
                    status: "completed"
                },
                {
                    id: 2,
                    stage: "Processing",
                    location: "Pitalito, Colombia",
                    participant: "Huila Coffee Processors",
                    date: "2024-02-25",
                    details: {
                        method: "Natural",
                        fermentation: "48 hours",
                        drying: "Patio dried",
                        moisture: "10.5%"
                    },
                    status: "completed"
                },
                {
                    id: 3,
                    stage: "Export",
                    location: "Buenaventura Port",
                    participant: "Colombian Coffee Exporters",
                    date: "2024-03-10",
                    details: {
                        container: "CMAU9876543",
                        weight: "750kg",
                        temperature: "16°C",
                        destination: "Long Beach"
                    },
                    status: "completed"
                },
                {
                    id: 4,
                    stage: "Import",
                    location: "Long Beach, USA",
                    participant: "Specialty Coffee Imports",
                    date: "2024-03-25",
                    details: {
                        customs: "Cleared",
                        quality: "SHG",
                        storage: "Warehouse A",
                        certification: "USDA Organic"
                    },
                    status: "completed"
                },
                {
                    id: 5,
                    stage: "Roasting",
                    location: "Los Angeles, USA",
                    participant: "West Coast Roasters",
                    date: "2024-04-08",
                    details: {
                        roastLevel: "Medium-Dark",
                        temperature: "220°C",
                        time: "14 minutes",
                        cupping: "86.2 points"
                    },
                    status: "completed"
                },
                {
                    id: 6,
                    stage: "Distribution",
                    location: "California Hub",
                    participant: "Golden State Distribution",
                    date: "2024-04-15",
                    details: {
                        packaging: "340g bags",
                        quantity: "1500 units",
                        storage: "Climate controlled",
                        expiry: "2025-04-15"
                    },
                    status: "completed"
                },
                {
                    id: 7,
                    stage: "Retail",
                    location: "Local Market",
                    participant: "Neighborhood Market",
                    date: "2024-04-22",
                    details: {
                        display: "Organic section",
                        price: "$18.99",
                        inventory: "80 bags",
                        sales: "Active"
                    },
                    status: "active"
                }
            ]
        }
    ],

    // Certification data
    certifications: [
        {
            facilityId: "1234567890",
            facilityName: "Kaldi Coffee Cooperative",
            location: "Yirgacheffe, Ethiopia",
            owner: "Ethiopian Coffee Union",
            gln: "0021838406",
            type: "Grower",
            accessControl: "Public",
            certificates: [
                {
                    id: "ORG-2024-001",
                    name: "Organic Certification",
                    type: "organic",
                    issuer: "ECOCERT",
                    issueDate: "2024-01-15",
                    expiryDate: "2025-01-15",
                    scope: "Coffee Production",
                    grade: "A",
                    status: "Active"
                },
                {
                    id: "FT-2024-002",
                    name: "Fair Trade Certification",
                    type: "fair-trade",
                    issuer: "Fairtrade International",
                    issueDate: "2024-02-01",
                    expiryDate: "2025-02-01",
                    scope: "Coffee Trading",
                    grade: "Premium",
                    status: "Active"
                },
                {
                    id: "RA-2024-003",
                    name: "Rainforest Alliance",
                    type: "rainforest",
                    issuer: "Rainforest Alliance",
                    issueDate: "2024-01-10",
                    expiryDate: "2025-01-10",
                    scope: "Sustainable Agriculture",
                    grade: "Certified",
                    status: "Active"
                }
            ]
        },
        {
            facilityId: "9876543210",
            facilityName: "Los Naranjos Farm",
            location: "Huila, Colombia",
            owner: "Colombian Coffee Federation",
            gln: "0021838407",
            type: "Producer",
            accessControl: "Public",
            certificates: [
                {
                    id: "ORG-2024-004",
                    name: "USDA Organic",
                    type: "organic",
                    issuer: "USDA",
                    issueDate: "2024-01-20",
                    expiryDate: "2025-01-20",
                    scope: "Organic Coffee Production",
                    grade: "Grade A",
                    status: "Active"
                },
                {
                    id: "FT-2024-005",
                    name: "Fair Trade USA",
                    type: "fair-trade",
                    issuer: "Fair Trade USA",
                    issueDate: "2024-02-15",
                    expiryDate: "2025-02-15",
                    scope: "Fair Labor Practices",
                    grade: "Certified",
                    status: "Active"
                }
            ]
        },
        {
            facilityId: "5555666777",
            facilityName: "Artisan Roasters GmbH",
            location: "Berlin, Germany",
            owner: "European Coffee Co.",
            gln: "0021838408",
            type: "Processor",
            accessControl: "Linked",
            certificates: [
                {
                    id: "ISO-2024-001",
                    name: "ISO 22000 Food Safety",
                    type: "quality",
                    issuer: "TÜV SÜD",
                    issueDate: "2024-03-01",
                    expiryDate: "2027-03-01",
                    scope: "Food Safety Management",
                    grade: "Certified",
                    status: "Active"
                },
                {
                    id: "EU-ORG-2024",
                    name: "EU Organic Certification",
                    type: "organic",
                    issuer: "EU Organic Authority",
                    issueDate: "2024-01-05",
                    expiryDate: "2025-01-05",
                    scope: "Organic Processing",
                    grade: "Grade A",
                    status: "Active"
                }
            ]
        }
    ],

    // Analytics data
    analytics: {
        traceUsage: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            data: [5, 8, 12, 15, 20, 22]
        },
        userActivity: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            data: [8, 12, 10, 16, 18, 20]
        },
        blockchainEvents: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
            data: [45, 52, 38, 65, 72, 58, 80, 75]
        }
    },

    // Recent activities
    recentActivities: [
        {
            id: 1,
            type: "trace",
            title: "New batch traced",
            description: "Ethiopian Yirgacheffe batch CB2024001234 completed processing",
            time: "2 hours ago",
            icon: "fas fa-route"
        },
        {
            id: 2,
            type: "certification",
            title: "Certificate verified",
            description: "Organic certification validated for Los Naranjos Farm",
            time: "4 hours ago",
            icon: "fas fa-certificate"
        },
        {
            id: 3,
            type: "blockchain",
            title: "Blockchain event",
            description: "Supply chain data recorded on blockchain",
            time: "6 hours ago",
            icon: "fas fa-cube"
        },
        {
            id: 4,
            type: "quality",
            title: "Quality assessment",
            description: "Colombian Supremo received quality score of 86.2",
            time: "8 hours ago",
            icon: "fas fa-star"
        },
        {
            id: 5,
            type: "shipment",
            title: "Shipment update",
            description: "Container MSCU1234567 arrived at Hamburg port",
            time: "12 hours ago",
            icon: "fas fa-shipping-fast"
        }
    ],

    // Supply chain participants
    participants: [
        {
            id: "P001",
            name: "Kaldi Coffee Cooperative",
            type: "Primary Producer",
            location: "Yirgacheffe, Ethiopia",
            role: "Farmer",
            certifications: ["Organic", "Fair Trade", "Rainforest Alliance"],
            established: "2010",
            members: 150
        },
        {
            id: "P002",
            name: "Ethiopian Coffee Processing",
            type: "Warehouse",
            location: "Addis Ababa, Ethiopia",
            role: "Processor",
            certifications: ["Quality Assured"],
            capacity: "1000 tons/month"
        },
        {
            id: "P003",
            name: "Ethiopian Export Agency",
            type: "Warehouse",
            location: "Djibouti Port",
            role: "Exporter",
            certifications: ["Export License"],
            volume: "50000 tons/year"
        },
        {
            id: "P004",
            name: "European Coffee Imports",
            type: "Distributor",
            location: "Hamburg, Germany",
            role: "Importer",
            certifications: ["EU Approved"],
            storage: "Climate controlled"
        },
        {
            id: "P005",
            name: "Artisan Roasters GmbH",
            type: "Manufacturer",
            location: "Berlin, Germany",
            role: "Roaster",
            certifications: ["ISO 22000"],
            capacity: "500kg/day"
        },
        {
            id: "P006",
            name: "Premium Coffee Distributors",
            type: "Distributor",
            location: "Regional Warehouse",
            role: "Distributor",
            certifications: ["Food Safety"],
            network: "50 stores"
        },
        {
            id: "P007",
            name: "Super Store Inc.",
            type: "Store",
            location: "Downtown Coffee Shop",
            role: "Retailer",
            certifications: ["Retail License"],
            outlets: 245
        }
    ]
};

// Utility functions for data management
const dataUtils = {
    // Find batch by ID
    findBatch: function(batchId) {
        return sampleData.batches.find(batch => batch.id === batchId);
    },

    // Get all batches
    getAllBatches: function() {
        return sampleData.batches;
    },

    // Find certification by facility ID
    findCertificationsByFacility: function(facilityId) {
        return sampleData.certifications.find(cert => cert.facilityId === facilityId);
    },

    // Get all certifications
    getAllCertifications: function() {
        return sampleData.certifications;
    },

    // Search batches
    searchBatches: function(query) {
        const searchTerm = query.toLowerCase();
        return sampleData.batches.filter(batch => 
            batch.id.toLowerCase().includes(searchTerm) ||
            batch.name.toLowerCase().includes(searchTerm) ||
            batch.origin.toLowerCase().includes(searchTerm) ||
            batch.farmer.toLowerCase().includes(searchTerm)
        );
    },

    // Search certifications
    searchCertifications: function(query) {
        const searchTerm = query.toLowerCase();
        return sampleData.certifications.filter(cert => 
            cert.facilityId.includes(searchTerm) ||
            cert.facilityName.toLowerCase().includes(searchTerm) ||
            cert.location.toLowerCase().includes(searchTerm) ||
            cert.certificates.some(c => c.name.toLowerCase().includes(searchTerm))
        );
    },

    // Get recent activities
    getRecentActivities: function() {
        return [...sampleData.recentActivities]; // Return a copy to avoid mutation
    },

    // Get analytics data
    getAnalytics: function() {
        return sampleData.analytics;
    },

    // Generate mock blockchain transaction ID
    generateTransactionId: function() {
        return 'TX' + Date.now().toString(36) + Math.random().toString(36).substr(2);
    },

    // Format date for display
    formatDate: function(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    // Format time ago
    formatTimeAgo: function(dateString) {
        const now = new Date();
        const date = new Date(dateString);
        const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
        
        if (diffInHours < 1) return 'Less than an hour ago';
        if (diffInHours < 24) return `${diffInHours} hours ago`;
        
        const diffInDays = Math.floor(diffInHours / 24);
        if (diffInDays < 7) return `${diffInDays} days ago`;
        
        const diffInWeeks = Math.floor(diffInDays / 7);
        return `${diffInWeeks} weeks ago`;
    }
};