// Coffee Bean Trust Application
class CoffeeBeanTrust {
    constructor() {
        this.currentPage = 'home';
        this.isMenuOpen = false;
        this.charts = {};
        this.activityInterval = null;
        this.activityIndex = 0;
        this.init();
    }

    // Initialize the application
    init() {
        this.bindEvents();
        this.loadHomePage();
        this.initializeCharts();
    }

    // Bind all event listeners
    bindEvents() {
        // Navigation events
        document.getElementById('logoBtn').addEventListener('click', () => this.navigateToPage('home'));
        document.getElementById('menuBtn').addEventListener('click', () => this.toggleMenu());
        document.getElementById('navClose').addEventListener('click', () => this.closeMenu());
        document.getElementById('navOverlay').addEventListener('click', () => this.closeMenu());

        // Navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.closest('.nav-link').dataset.page;
                this.navigateToPage(page);
            });
        });

        // Console cards navigation
        document.querySelectorAll('.console-card').forEach(card => {
            card.addEventListener('click', () => {
                const page = card.dataset.page;
                this.navigateToPage(page);
            });
        });

        // Search events
        document.getElementById('searchSubmit').addEventListener('click', () => this.performBatchSearch());
        document.getElementById('batchSearchInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.performBatchSearch();
        });

        // QR scan button
        document.getElementById('qrScanBtn').addEventListener('click', () => this.simulateQRScan());

        // Trace page events
        document.getElementById('traceSearchBtn').addEventListener('click', () => this.performTraceSearch());
        document.getElementById('traceBatchInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.performTraceSearch();
        });

        // Certification search
        document.getElementById('certSearchBtn').addEventListener('click', () => this.performCertSearch());
        document.getElementById('certSearchInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.performCertSearch();
        });

        // Carbon credits search (add listeners only if elements exist)
        const carbonSearchSubmit = document.getElementById('carbonSearchSubmit');
        const carbonSearchInput = document.getElementById('carbonSearchInput');
        if (carbonSearchSubmit && carbonSearchInput) {
            carbonSearchSubmit.addEventListener('click', () => this.performCarbonSearch());
            carbonSearchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.performCarbonSearch();
            });
        }

        // Modal events
        document.getElementById('batchModalClose').addEventListener('click', () => this.closeModal('batchModal'));
        document.getElementById('batchModalOverlay').addEventListener('click', () => this.closeModal('batchModal'));
        document.getElementById('certModalClose').addEventListener('click', () => this.closeModal('certModal'));
        document.getElementById('certModalOverlay').addEventListener('click', () => this.closeModal('certModal'));

        // Escape key to close modals and menus
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
                this.closeMenu();
                this.closeAllDropdowns();
            }
        });

        // Initialize dropdown events after DOM is ready
        this.initializeDropdowns();
    }

    // Initialize dropdown functionality
    initializeDropdowns() {
        // Use delegation for all dropdown buttons
        document.addEventListener('click', (e) => {
            // Handle dropdown toggle buttons
            if (e.target.closest('.dropdown-btn')) {
                e.preventDefault();
                e.stopPropagation();
                
                const button = e.target.closest('.dropdown-btn');
                const wrapper = button.closest('.dropdown-wrapper');
                const menu = wrapper.querySelector('.dropdown-menu');
                
                if (menu) {
                    this.toggleDropdown(menu, button);
                }
            }
            
            // Handle dropdown item selection
            if (e.target.classList.contains('dropdown-item')) {
                e.preventDefault();
                e.stopPropagation();
                
                const item = e.target;
                const wrapper = item.closest('.dropdown-wrapper');
                const container = item.closest('.search-container, .trace-search, .cert-search, .search-section');
                const input = container.querySelector('input');
                const menu = wrapper.querySelector('.dropdown-menu');
                
                if (input && menu) {
                    input.value = item.dataset.value;
                    this.closeDropdown(menu);
                    
                    // Auto-trigger search for carbon credits
                    if (input.id === 'carbonSearchInput') {
                        this.calculateCarbonCredits(input.value);
                    }
                }
            }
            
            // Close all dropdowns when clicking outside
            if (!e.target.closest('.dropdown-wrapper')) {
                this.closeAllDropdowns();
            }
        });
        
        console.log('Dropdown functionality initialized with event delegation');
    }

    // Navigation methods
    toggleMenu() {
        const menu = document.getElementById('navMenu');
        this.isMenuOpen = !this.isMenuOpen;
        menu.classList.toggle('active', this.isMenuOpen);
        document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    }

    closeMenu() {
        const menu = document.getElementById('navMenu');
        this.isMenuOpen = false;
        menu.classList.remove('active');
        document.body.style.overflow = '';
    }

    navigateToPage(page) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
        
        // Show target page
        document.getElementById(`${page}Page`).style.display = 'block';
        
        // Update navigation active state
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.dataset.page === page);
        });

        // Update current page
        this.currentPage = page;
        
        // Load page-specific content
        this.loadPageContent(page);
        
        // Close menu
        this.closeMenu();

        // Scroll to top
        window.scrollTo(0, 0);
    }

    loadPageContent(page) {
        switch (page) {
            case 'home':
                this.loadHomePage();
                break;
            case 'trace':
                this.loadTracePage();
                break;
            case 'analytics':
                this.loadAnalyticsPage();
                break;
            case 'certifications':
                this.loadCertificationsPage();
                break;
            case 'carbon':
                this.loadCarbonPage();
                break;
        }
        
        // No need to reinitialize dropdowns as we use event delegation
    }

    // Home page methods
    loadHomePage() {
        this.loadRecentActivities();
        this.startActivityRotation();
    }

    // Close all dropdowns
    closeAllDropdowns() {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('active');
        });
        document.querySelectorAll('.dropdown-btn').forEach(button => {
            button.classList.remove('active');
        });
    }

    toggleDropdown(menu, button) {
        const isActive = menu.classList.contains('active');
        
        // Close all dropdowns first
        this.closeAllDropdowns();
        
        // Open this dropdown if it wasn't active
        if (!isActive) {
            menu.classList.add('active');
            if (button) {
                button.classList.add('active');
            }
            console.log('Dropdown opened');
        }
    }

    closeDropdown(menu) {
        menu.classList.remove('active');
        const wrapper = menu.closest('.dropdown-wrapper');
        if (wrapper) {
            const button = wrapper.querySelector('.dropdown-btn');
            if (button) {
                button.classList.remove('active');
            }
        }
    }

    // Activity rotation
    startActivityRotation() {
        if (this.activityInterval) {
            clearInterval(this.activityInterval);
        }
        
        this.activityInterval = setInterval(() => {
            this.rotateActivities();
        }, 10000); // Rotate every 10 seconds
    }

    rotateActivities() {
        const container = document.getElementById('recentActivity');
        const activities = dataUtils.getRecentActivities();
        
        if (activities.length === 0) return;

        // Increment activity index
        this.activityIndex = (this.activityIndex + 1) % activities.length;
        
        // Add rotation class to trigger animation
        container.classList.add('activity-rotating');
        
        setTimeout(() => {
            // Reload activities starting from new index
            this.loadRecentActivitiesRotated();
            container.classList.remove('activity-rotating');
        }, 500);
    }

    loadRecentActivitiesRotated() {
        const container = document.getElementById('recentActivity');
        const activities = dataUtils.getRecentActivities();
        
        // Rotate activities based on current index
        const rotatedActivities = [
            ...activities.slice(this.activityIndex),
            ...activities.slice(0, this.activityIndex)
        ];
        
        container.innerHTML = rotatedActivities.map(activity => `
            <div class="activity-item">
                <div class="activity-icon">
                    <i class="${activity.icon}"></i>
                </div>
                <div class="activity-content">
                    <h4>${activity.title}</h4>
                    <p>${activity.description}</p>
                </div>
                <div class="activity-time">${activity.time}</div>
            </div>
        `).join('');
    }

    loadRecentActivities() {
        const container = document.getElementById('recentActivity');
        const activities = dataUtils.getRecentActivities();
        
        container.innerHTML = activities.map(activity => `
            <div class="activity-item">
                <div class="activity-icon">
                    <i class="${activity.icon}"></i>
                </div>
                <div class="activity-content">
                    <h4>${activity.title}</h4>
                    <p>${activity.description}</p>
                </div>
                <div class="activity-time">${activity.time}</div>
            </div>
        `).join('');
    }

    // Search methods
    performBatchSearch() {
        const query = document.getElementById('batchSearchInput').value.trim();
        if (!query) {
            this.showAlert('Please enter a batch ID to search', 'warning');
            return;
        }

        this.showLoading();
        
        // Simulate API call delay
        setTimeout(() => {
            const batch = dataUtils.findBatch(query);
            this.hideLoading();
            
            if (batch) {
                this.displayBatchModal(batch);
            } else {
                // Try search by partial match
                const results = dataUtils.searchBatches(query);
                if (results.length > 0) {
                    this.displayBatchModal(results[0]);
                } else {
                    this.showAlert('Batch not found. Try scanning the QR code or check the batch ID.', 'error');
                }
            }
        }, 1500);
    }

    simulateQRScan() {
        this.showAlert('QR Scanner would open here. For demo, using sample batch.', 'info');
        
        // Simulate QR scan result
        setTimeout(() => {
            const sampleBatch = dataUtils.getAllBatches()[0];
            this.displayBatchModal(sampleBatch);
        }, 1000);
    }

    performTraceSearch() {
        const query = document.getElementById('traceBatchInput').value.trim();
        if (!query) {
            this.showAlert('Please enter a batch ID to trace', 'warning');
            return;
        }

        this.showLoading();
        
        setTimeout(() => {
            const batch = dataUtils.findBatch(query) || dataUtils.searchBatches(query)[0];
            this.hideLoading();
            
            if (batch) {
                this.displayBatchDetails(batch);
                this.displayTimeline(batch.supplyChain);
            } else {
                this.showAlert('Batch not found', 'error');
            }
        }, 1000);
    }

    performCertSearch() {
        const query = document.getElementById('certSearchInput').value.trim();
        
        if (query) {
            const results = dataUtils.searchCertifications(query);
            this.displayCertifications(results);
        } else {
            this.loadCertificationsPage();
        }
    }

    performCarbonSearch() {
        const batchId = document.getElementById('carbonSearchInput').value.trim();
        
        if (batchId) {
            this.calculateCarbonCredits(batchId);
        } else {
            // Hide calculator if no input
            const calculator = document.getElementById('carbonCalculator');
            if (calculator) {
                calculator.style.display = 'none';
            }
        }
    }

    // Display methods
    displayBatchModal(batch) {
        const modal = document.getElementById('batchModal');
        const body = document.getElementById('batchModalBody');
        
        body.innerHTML = `
            <div class="batch-details">
                <div class="batch-header">
                    <div class="batch-id">${batch.id}</div>
                    <div class="batch-status ${batch.status}">${batch.status.toUpperCase()}</div>
                </div>
                
                <h3 style="margin: 1rem 0; color: var(--coffee-dark);">${batch.name}</h3>
                
                <div class="batch-info-grid">
                    <div class="batch-info-item">
                        <div class="batch-info-label">Origin</div>
                        <div class="batch-info-value">${batch.origin}</div>
                    </div>
                    <div class="batch-info-item">
                        <div class="batch-info-label">Variety</div>
                        <div class="batch-info-value">${batch.variety}</div>
                    </div>
                    <div class="batch-info-item">
                        <div class="batch-info-label">Processing</div>
                        <div class="batch-info-value">${batch.processingMethod}</div>
                    </div>
                    <div class="batch-info-item">
                        <div class="batch-info-label">Altitude</div>
                        <div class="batch-info-value">${batch.altitude}</div>
                    </div>
                    <div class="batch-info-item">
                        <div class="batch-info-label">Quality Score</div>
                        <div class="batch-info-value">${batch.qualityScore}/100</div>
                    </div>
                    <div class="batch-info-item">
                        <div class="batch-info-label">Quantity</div>
                        <div class="batch-info-value">${batch.quantity}</div>
                    </div>
                </div>
                
                <div style="margin: 1.5rem 0;">
                    <h4 style="margin-bottom: 0.5rem; color: var(--coffee-dark);">Certifications</h4>
                    <div class="cert-badges">
                        ${batch.certifications.map(cert => `
                            <div class="cert-badge ${cert}">${this.formatCertificationName(cert)}</div>
                        `).join('')}
                    </div>
                </div>
                
                <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                    <button onclick="app.navigateToTrace('${batch.id}')" class="console-btn" style="flex: 1;">
                        <i class="fas fa-route"></i> View Full Journey
                    </button>
                </div>
            </div>
        `;
        
        this.openModal('batchModal');
    }

    displayBatchDetails(batch) {
        const container = document.getElementById('batchDetails');
        
        container.innerHTML = `
            <div class="batch-header">
                <div class="batch-id">${batch.id}</div>
                <div class="batch-status ${batch.status}">${batch.status.toUpperCase()}</div>
            </div>
            
            <h3 style="margin: 1rem 0; color: var(--coffee-dark);">${batch.name}</h3>
            
            <div class="batch-info-grid">
                <div class="batch-info-item">
                    <div class="batch-info-label">Origin</div>
                    <div class="batch-info-value">${batch.origin}</div>
                </div>
                <div class="batch-info-item">
                    <div class="batch-info-label">Farmer</div>
                    <div class="batch-info-value">${batch.farmer}</div>
                </div>
                <div class="batch-info-item">
                    <div class="batch-info-label">Processing</div>
                    <div class="batch-info-value">${batch.processingMethod}</div>
                </div>
                <div class="batch-info-item">
                    <div class="batch-info-label">Harvest Date</div>
                    <div class="batch-info-value">${dataUtils.formatDate(batch.harvestDate)}</div>
                </div>
                <div class="batch-info-item">
                    <div class="batch-info-label">Quality Score</div>
                    <div class="batch-info-value">${batch.qualityScore}/100</div>
                </div>
                <div class="batch-info-item">
                    <div class="batch-info-label">Current Location</div>
                    <div class="batch-info-value">${batch.currentLocation}</div>
                </div>
            </div>
            
            <div style="margin: 1.5rem 0;">
                <h4 style="margin-bottom: 0.5rem; color: var(--coffee-dark);">Certifications</h4>
                <div class="cert-badges">
                    ${batch.certifications.map(cert => `
                        <div class="cert-badge ${cert}">${this.formatCertificationName(cert)}</div>
                    `).join('')}
                </div>
            </div>
        `;
        
        container.style.display = 'block';
    }

    displayTimeline(supplyChain) {
        const container = document.getElementById('supplyChainTimeline');
        
        container.innerHTML = supplyChain.map((item, index) => `
            <div class="timeline-item ${item.status}">
                <div class="timeline-content">
                    <div class="timeline-header">
                        <div class="timeline-title">${item.stage}</div>
                        <div class="timeline-date">${dataUtils.formatDate(item.date)}</div>
                    </div>
                    <div class="timeline-location">
                        <i class="fas fa-map-marker-alt"></i> ${item.location}
                    </div>
                    <div class="timeline-location">
                        <i class="fas fa-building"></i> ${item.participant}
                    </div>
                    <div class="timeline-details">
                        ${Object.entries(item.details).map(([key, value]) => `
                            <div class="timeline-detail">
                                <strong>${this.formatKey(key)}:</strong> ${value}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
        
        document.getElementById('timelineContainer').style.display = 'block';
    }

    // Trace page methods
    loadTracePage() {
        document.getElementById('batchDetails').style.display = 'none';
        document.getElementById('timelineContainer').style.display = 'none';
        document.getElementById('traceBatchInput').value = '';
    }

    navigateToTrace(batchId) {
        this.closeAllModals();
        this.navigateToPage('trace');
        
        setTimeout(() => {
            document.getElementById('traceBatchInput').value = batchId;
            this.performTraceSearch();
        }, 300);
    }

    // Analytics page methods
    loadAnalyticsPage() {
        // Initialize charts if not already done
        if (!this.charts.initialized) {
            this.initializeCharts();
        }
    }

    initializeCharts() {
        const analytics = dataUtils.getAnalytics();
        
        // Trace Usage Chart
        const traceUsageCtx = document.getElementById('traceUsageChart');
        if (traceUsageCtx) {
            this.charts.traceUsage = new Chart(traceUsageCtx, {
                type: 'line',
                data: {
                    labels: analytics.traceUsage.labels,
                    datasets: [{
                        label: 'Traces per Month',
                        data: analytics.traceUsage.data,
                        borderColor: '#8B4513',
                        backgroundColor: 'rgba(139, 69, 19, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: this.getChartOptions()
            });
        }

        // User Activity Chart
        const userActivityCtx = document.getElementById('userActivityChart');
        if (userActivityCtx) {
            this.charts.userActivity = new Chart(userActivityCtx, {
                type: 'line',
                data: {
                    labels: analytics.userActivity.labels,
                    datasets: [{
                        label: 'Daily Active Users',
                        data: analytics.userActivity.data,
                        borderColor: '#4A3326',
                        backgroundColor: 'rgba(74, 51, 38, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: this.getChartOptions()
            });
        }

        // Blockchain Events Chart
        const blockchainEventsCtx = document.getElementById('blockchainEventsChart');
        if (blockchainEventsCtx) {
            this.charts.blockchainEvents = new Chart(blockchainEventsCtx, {
                type: 'bar',
                data: {
                    labels: analytics.blockchainEvents.labels,
                    datasets: [{
                        label: 'Blockchain Events',
                        data: analytics.blockchainEvents.data,
                        backgroundColor: '#DAA520',
                        borderColor: '#B8860B',
                        borderWidth: 1
                    }]
                },
                options: this.getChartOptions()
            });
        }

        this.charts.initialized = true;
    }

    getChartOptions() {
        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            }
        };
    }

    // Certifications page methods
    loadCertificationsPage() {
        const certifications = dataUtils.getAllCertifications();
        this.displayCertifications(certifications);
    }

    displayCertifications(certifications) {
        const container = document.getElementById('certificationsGrid');
        
        container.innerHTML = certifications.map(facility => `
            <div class="cert-card" onclick="app.displayCertificateModal('${facility.facilityId}')">
                <div class="cert-header">
                    <div class="cert-facility">${facility.facilityName}</div>
                    <div class="cert-count">${facility.certificates.length}</div>
                </div>
                
                <div class="cert-info">
                    <div class="cert-info-item">
                        <div class="cert-info-label">Location</div>
                        <div class="cert-info-value">${facility.location}</div>
                    </div>
                    <div class="cert-info-item">
                        <div class="cert-info-label">Type</div>
                        <div class="cert-info-value">${facility.type}</div>
                    </div>
                    <div class="cert-info-item">
                        <div class="cert-info-label">Owner</div>
                        <div class="cert-info-value">${facility.owner}</div>
                    </div>
                    <div class="cert-info-item">
                        <div class="cert-info-label">Access</div>
                        <div class="cert-info-value">${facility.accessControl}</div>
                    </div>
                </div>
                
                <div class="cert-badges">
                    ${facility.certificates.map(cert => `
                        <div class="cert-badge ${cert.type}">${cert.name}</div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    displayCertificateModal(facilityId) {
        const facility = dataUtils.findCertificationsByFacility(facilityId);
        const modal = document.getElementById('certModal');
        const body = document.getElementById('certModalBody');
        
        body.innerHTML = `
            <div style="margin-bottom: 1.5rem;">
                <h3 style="color: var(--coffee-dark); margin-bottom: 0.5rem;">${facility.facilityName}</h3>
                <p style="color: var(--gray-medium);">
                    <i class="fas fa-map-marker-alt"></i> ${facility.location}
                </p>
                <p style="color: var(--gray-medium);">
                    <i class="fas fa-building"></i> ${facility.owner}
                </p>
            </div>
            
            <div class="cert-info" style="margin-bottom: 1.5rem;">
                <div class="cert-info-item">
                    <div class="cert-info-label">Facility ID</div>
                    <div class="cert-info-value">${facility.facilityId}</div>
                </div>
                <div class="cert-info-item">
                    <div class="cert-info-label">GLN</div>
                    <div class="cert-info-value">${facility.gln}</div>
                </div>
                <div class="cert-info-item">
                    <div class="cert-info-label">Type</div>
                    <div class="cert-info-value">${facility.type}</div>
                </div>
            </div>
            
            <h4 style="margin-bottom: 1rem; color: var(--coffee-dark);">Certificates</h4>
            
            ${facility.certificates.map(cert => `
                <div style="background: var(--gray-light); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem; border-left: 4px solid var(--coffee-brown);">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                        <h5 style="color: var(--coffee-dark); margin: 0;">${cert.name}</h5>
                        <span class="cert-badge ${cert.type}">${cert.status}</span>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin-bottom: 0.5rem;">
                        <div>
                            <small style="color: var(--gray-medium);">Issuer:</small>
                            <div style="font-weight: 600;">${cert.issuer}</div>
                        </div>
                        <div>
                            <small style="color: var(--gray-medium);">Grade:</small>
                            <div style="font-weight: 600;">${cert.grade}</div>
                        </div>
                        <div>
                            <small style="color: var(--gray-medium);">Issue Date:</small>
                            <div style="font-weight: 600;">${dataUtils.formatDate(cert.issueDate)}</div>
                        </div>
                        <div>
                            <small style="color: var(--gray-medium);">Expiry Date:</small>
                            <div style="font-weight: 600;">${dataUtils.formatDate(cert.expiryDate)}</div>
                        </div>
                    </div>
                    
                    <div>
                        <small style="color: var(--gray-medium);">Scope:</small>
                        <div style="font-weight: 600;">${cert.scope}</div>
                    </div>
                </div>
            `).join('')}
        `;
        
        this.openModal('certModal');
    }

    // Carbon Credits page methods
    loadCarbonPage() {
        // Ensure event listeners are set up for carbon page
        this.setupCarbonEventListeners();
    }

    setupCarbonEventListeners() {
        // Set up carbon search functionality
        const searchInput = document.getElementById('carbonSearchInput');
        const searchSubmit = document.getElementById('carbonSearchSubmit');
        
        if (searchInput && searchSubmit) {
            // Add event listeners directly
            const handleCarbonSearch = () => {
                this.performCarbonSearch();
            };
            
            searchSubmit.onclick = handleCarbonSearch;
            searchInput.onkeypress = (e) => {
                if (e.key === 'Enter') {
                    handleCarbonSearch();
                }
            };
        }
    }

    setupCarbonSearch() {
        // This method is no longer needed as we use event delegation
        // Search functionality is handled by the main event delegation system
    }

    calculateCarbonCredits(batchId) {
        const batch = dataUtils.findBatch(batchId);
        
        if (!batch) {
            alert('Batch not found. Try CB2024001234 or CB2024005678');
            return;
        }

        if (!batch.carbonCredits) {
            alert('Carbon credits data not available for this batch');
            return;
        }

        // Show the calculator section
        const calculator = document.getElementById('carbonCalculator');
        if (calculator) {
            calculator.style.display = 'block';
        }

        // Update batch info
        const batchIdElement = document.getElementById('carbonBatchId');
        const batchNameElement = document.getElementById('carbonBatchName');
        
        if (batchIdElement) batchIdElement.textContent = batch.id;
        if (batchNameElement) batchNameElement.textContent = batch.name;

        // Animate the metrics
        this.animateCarbonMetrics(batch.carbonCredits);

        // Display farming practices
        this.displayFarmingPractices(batch.carbonCredits.farmingPractices);

        // Display calculation details
        this.displayCalculationDetails(batch.carbonCredits.calculationDetails);

        // Display carbon timeline
        this.displayCarbonTimeline(batch.carbonCredits.timeline);
    }

    animateCarbonMetrics(carbonData) {
        // Animate CO2 sequestered
        this.animateValue('co2Sequestered', 0, carbonData.co2Sequestered, 2000, 1);
        
        // Animate carbon credits
        this.animateValue('carbonCredits', 0, carbonData.creditsGenerated, 2200, 1);
        
        // Animate estimated value
        this.animateValue('creditValue', 0, carbonData.estimatedValue, 2400, 0, '$');
    }

    animateValue(elementId, start, end, duration, decimals = 0, prefix = '') {
        const element = document.getElementById(elementId);
        const startTime = performance.now();
        
        const updateValue = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = start + (end - start) * easeOut;
            
            element.textContent = prefix + currentValue.toFixed(decimals);
            
            if (progress < 1) {
                requestAnimationFrame(updateValue);
            }
        };
        
        requestAnimationFrame(updateValue);
    }

    displayFarmingPractices(practices) {
        const container = document.getElementById('practicesGrid');
        
        container.innerHTML = practices.map(practice => `
            <div class="practice-card">
                <div class="practice-icon">
                    <i class="fas ${this.getPracticeIcon(practice.practice)}"></i>
                </div>
                <div class="practice-content">
                    <h4>${practice.practice}</h4>
                    <div class="practice-impact">${practice.impact}</div>
                    <p>${practice.description}</p>
                </div>
            </div>
        `).join('');
    }

    displayCalculationDetails(calculations) {
        const container = document.getElementById('calculationGrid');
        
        container.innerHTML = calculations.map(calc => `
            <div class="calculation-card">
                <div class="calc-header">
                    <h4>${calc.element}</h4>
                    <div class="calc-contribution">${calc.contribution}</div>
                </div>
                
                <div class="calc-details">
                    <div class="calc-row">
                        <span class="calc-label">Area Coverage:</span>
                        <span class="calc-value">${calc.area}</span>
                    </div>
                    <div class="calc-row">
                        <span class="calc-label">Sequestration Rate:</span>
                        <span class="calc-value">${calc.sequestrationRate}</span>
                    </div>
                    <div class="calc-row">
                        <span class="calc-label">Time Implemented:</span>
                        <span class="calc-value">${calc.timeImplemented}</span>
                    </div>
                    <div class="calc-row">
                        <span class="calc-label">Verification:</span>
                        <span class="calc-value verification-${calc.verificationStatus.toLowerCase().replace(/[^a-z]/g, '')}">${calc.verificationStatus}</span>
                    </div>
                </div>
                
                <div class="calc-formula">
                    <span class="calc-label">Calculation:</span>
                    <code class="calc-code">${calc.calculation}</code>
                </div>
            </div>
        `).join('');
    }

    getPracticeIcon(practice) {
        const icons = {
            'Shade-grown Coffee': 'fa-tree',
            'Organic Farming': 'fa-leaf',
            'Agroforestry Systems': 'fa-seedling',
            'Soil Conservation': 'fa-mountain',
            'Natural Processing': 'fa-sun',
            'Water Conservation': 'fa-tint',
            'Biodiversity Protection': 'fa-dove',
            'Organic Composting': 'fa-recycle'
        };
        return icons[practice] || 'fa-leaf';
    }

    displayCarbonTimeline(timeline) {
        const container = document.getElementById('carbonTimeline');
        
        container.innerHTML = timeline.map((item, index) => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h4>${item.stage}</h4>
                    <div class="timeline-period">${item.period}</div>
                    <div class="timeline-impact">${item.co2Impact}</div>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');
    }

    // Modal methods
    openModal(modalId) {
        document.getElementById(modalId).classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal(modalId) {
        document.getElementById(modalId).classList.remove('active');
        document.body.style.overflow = '';
    }

    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    }

    // Utility methods
    showLoading() {
        document.getElementById('loadingOverlay').classList.add('active');
    }

    hideLoading() {
        document.getElementById('loadingOverlay').classList.remove('active');
    }

    showAlert(message, type = 'info') {
        // Create alert element
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.style.cssText = `
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'error' ? '#DC3545' : type === 'warning' ? '#FFC107' : type === 'success' ? '#28A745' : '#17A2B8'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            z-index: 5000;
            max-width: 90%;
            text-align: center;
            font-weight: 600;
            animation: slideDown 0.3s ease;
        `;
        alert.textContent = message;
        
        document.body.appendChild(alert);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            alert.style.animation = 'slideUp 0.3s ease forwards';
            setTimeout(() => {
                if (alert.parentNode) {
                    alert.parentNode.removeChild(alert);
                }
            }, 300);
        }, 3000);
    }

    formatCertificationName(cert) {
        const certNames = {
            'organic': 'Organic',
            'fair-trade': 'Fair Trade',
            'rainforest-alliance': 'Rainforest Alliance',
            'quality': 'Quality Certified'
        };
        return certNames[cert] || cert;
    }

    formatKey(key) {
        return key.replace(/([A-Z])/g, ' $1')
                 .replace(/^./, str => str.toUpperCase())
                 .replace(/([a-z])([A-Z])/g, '$1 $2');
    }
}

// Add CSS animations for alerts
const alertStyles = document.createElement('style');
alertStyles.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(alertStyles);

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new CoffeeBeanTrust();
});

// Handle service worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(registrationError => console.log('SW registration failed'));
    });
}