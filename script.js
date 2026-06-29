/* Earthleaf Interactive Script */

// 1. Product Data Database
const productsDB = {
    1: {
        id: 1,
        title: "Vasanta Sri Devi Ayurvedic Hair Oil",
        variant: "With Rosemary & Saw Palmetto",
        category: "hair",
        categoryLabel: "Ayurvedic Hair Care",
        desc: "Vasanta Sri Devi Ayurvedic Hair Oil is a nourishing hair treatment crafted from traditional Ayurvedic botanicals that support scalp vitality and natural hair growth. Its herbal infusion helps strengthen roots, reduce hair fall, and maintain healthy scalp moisture. Regular application restores softness, shine, and thickness, while promoting overall hair wellness through gentle, nature-based care.",
        benefits: [
            "Helps reduce the risk of hair thinning and may support prevention of baldness.",
            "Effectively combats dry scalp and dandruff.",
            "Helps reduce hair fall, stimulates the scalp, and promotes improved hair thickness and strength.",
            "Provides a soothing, cooling sensation to the scalp and may help relieve headaches."
        ],
        usage: [
            "Gently massage the oil into the scalp for 3–5 minutes, ensuring even coverage across the entire scalp.",
            "Leave on for a minimum of 3 hours or preferably overnight before washing.",
            "For best results, apply the oil two to three times a week as part of your regular hair care routine."
        ],
        sizes: [
            { vol: "50ML", mrp: "Rs 120" },
            { vol: "100ML", mrp: "Rs 230" },
            { vol: "200ML", mrp: "Rs 430" }
        ],
        colorGrad: "hair-oil-liquid",
        svgId: "prod-1"
    },
    2: {
        id: 2,
        title: "Vasanta Sri Devi Mandara Tailam",
        variant: "With Onion & Blackseed",
        category: "hair",
        categoryLabel: "Ayurvedic Hair Care",
        desc: "A traditional Ayurvedic herbal oil enriched with the restorative properties of Mandara (Hibiscus) to nourish your scalp and revitalize your hair. Known for nourishing the scalp, strengthening hair roots, and promoting healthy hair growth, this oil helps reduce dryness, hair fall, and scalp irritation. Gentle and naturally derived, it supports lustrous, smooth, and resilient hair while preserving scalp balance using age-old Ayurvedic wisdom.",
        benefits: [
            "Nourishes hair roots and strengthens follicles, supporting healthy hair growth.",
            "Helps reduce hair fall and thinning caused by stress, pollution, or dryness.",
            "Adds natural softness and shine, improving overall hair texture.",
            "Supports scalp circulation, promoting healthier, thicker, and more vibrant hair.",
            "Infused with natural ingredients that cool and relax the scalp, contributing to a refreshing and calming effect."
        ],
        usage: [
            "Gently massage the oil into the scalp for 3–5 minutes, ensuring even coverage across the entire scalp.",
            "Leave on for a minimum of 3 hours or preferably overnight before washing.",
            "For best results, apply the oil two to three times a week as part of your regular hair care routine."
        ],
        sizes: [
            { vol: "100ML", mrp: "Rs 150" },
            { vol: "200ML", mrp: "Rs 290" }
        ],
        colorGrad: "mandara-liquid",
        svgId: "prod-2"
    },
    3: {
        id: 3,
        title: "B FIT Muscle Oil",
        variant: "With Eucalyptus & Menthol",
        category: "wellness",
        categoryLabel: "Therapeutic Relief",
        desc: "B FIT Muscle Oil is formulated to support natural muscle recovery, flexibility, and pain relief using traditional Ayurvedic herbal extracts. Designed for both active individuals and those experiencing everyday muscular tension, it helps improve blood circulation, reduce stiffness, and promote relaxation of tired muscles. With its fast-absorbing and non-sticky profile, B FIT Muscle Oil provides a soothing, warming effect that restores comfort and enhances overall body mobility.",
        benefits: [
            "Helps relieve muscle tension and soothe soreness after physical activity or strain.",
            "Supports improved flexibility and mobility by reducing morning joint stiffness.",
            "Promotes relaxation of muscles, aiding in quicker recovery and overall comfort.",
            "Encourages better circulation in the applied areas, which may support natural healing processes.",
            "Highly effective for back, neck, shoulder, and joint pains.",
            "Not only reduces pain and inflammation, but also helps calm muscle cramps quickly and effectively."
        ],
        usage: [
            "Gently massage B FIT Muscle Oil onto the affected muscles or joints using circular motions until fully absorbed.",
            "For best results, allow the oil to remain on the skin overnight, enabling deeper penetration and maximum therapeutic benefit.",
            "Regular use is recommended for optimal comfort and mobility."
        ],
        sizes: [
            { vol: "25ML", mrp: "Rs 85" },
            { vol: "50ML", mrp: "Rs 120" },
            { vol: "100ML", mrp: "Rs 230" }
        ],
        colorGrad: "bfit-liquid",
        svgId: "prod-3"
    },
    4: {
        id: 4,
        title: "River Hills Olive Oil",
        variant: "With Lavender Extract",
        category: "skin",
        categoryLabel: "Cold Pressed Pure",
        desc: "Earthleaf River Hills Olive Oil is a natural, cold-pressed oil rich in antioxidants and healthy fats. It deeply moisturizes the skin, repairs dryness, and promotes a smooth and supple texture. For hair, it nourishes the scalp, reduces frizz, and adds natural shine. Gentle and versatile, olive oil is a trusted choice for beauty care, massage applications, and traditional wellness.",
        benefits: [
            "Deeply moisturizes the skin and supports a youthful appearance.",
            "Helps maintain skin hydration and reduces fine lines and wrinkles.",
            "Contains skin-replenishing properties that combat dryness, flakiness, and rough texture.",
            "Strengthens hair follicles, supports hair growth, and helps reduce hair fall.",
            "Naturally softens the hair and improves shine.",
            "Acts as a natural conditioner and helps prevent split ends by improving hair elasticity."
        ],
        usage: [
            "For Face: Apply a few drops of olive oil to the face and massage gently with your fingertips until absorbed. Leave on for 2–3 hours or overnight. Then rinse with lukewarm water for a refreshed and nourished complexion.",
            "For Hair: Apply an adequate amount of olive oil to your fingertips and gently massage into the scalp. Leave the oil overnight and shampoo the following morning for best results."
        ],
        sizes: [
            { vol: "50ML", mrp: "Rs 90" },
            { vol: "100ML", mrp: "Rs 150" },
            { vol: "200ML", mrp: "Rs 280" }
        ],
        colorGrad: "olive-oil-liquid",
        svgId: "prod-4"
    },
    5: {
        id: 5,
        title: "River Hills Eucalyptus Oil",
        variant: "100% Pure & Natural",
        category: "essential",
        categoryLabel: "Essential Oil",
        desc: "Eucalyptus Oil is a natural essential oil extracted from eucalyptus leaves, known for its refreshing aroma and strong antibacterial and anti-inflammatory properties. It supports respiratory wellness, helps clear nasal congestion, and provides relief during colds and cough. It's also widely used for muscle relaxation, massage, and aromatherapy — promoting easier breathing and a soothing, calming effect.",
        benefits: [
            "Supports relief from respiratory discomfort such as asthma and sinus congestion when used in steam inhalation.",
            "Helps reduce and loosen mucus by interacting with the mucous membranes, making it easier to expel through coughing.",
            "Widely used for reducing stress, easing tension, and providing soothing comfort.",
            "Helps open nasal passages, clear the sinuses, and reduce sinus-related headache pressure."
        ],
        usage: [
            "Steam Inhalation: Add a few drops of eucalyptus oil to a bowl of warm water and gently inhale the steam for a few minutes.",
            "Congestion Relief: Mix a few drops of eucalyptus oil with coconut oil and apply to the nose and chest to help ease congestion.",
            "Aromatherapy: Add 3-5 drops to a diffuser for refreshing air."
        ],
        sizes: [
            { vol: "25ML", mrp: "Rs 80" },
            { vol: "50ML", mrp: "Rs 130" },
            { vol: "100ML", mrp: "Rs 240" }
        ],
        colorGrad: "eucalyptus-liquid",
        svgId: "prod-5"
    },
    6: {
        id: 6,
        title: "River Hills Almond Oil",
        variant: "With Tea Tree Extract",
        category: "skin",
        categoryLabel: "Cold Pressed Pure",
        desc: "A nutrient-rich natural oil known for its exceptional skin and hair nourishing properties. Packed with Vitamin E, fatty acids, and antioxidants. This sweet almond oil works to rehydrate deep skin layers, strengthen hair shafts, and serve as an ideal base for dilution.",
        benefits: [
            "Deeply moisturizes and supports a smooth, supple complexion.",
            "Helps reduce puffiness and the appearance of under-eye dark circles.",
            "When applied to the scalp, may help calm itching, reduce redness, and soothe irritation or dandruff.",
            "Strengthens roots, softens strands, and promotes natural shine.",
            "Suitable for all hair and skin types, enhancing general texture and elasticity."
        ],
        usage: [
            "For Face: Apply a few drops of almond oil to the face and gently massage with your fingertips until fully absorbed. Leave on for 2–3 hours or overnight, then rinse with lukewarm water for best results.",
            "For Hair: Take a sufficient amount of almond oil on your fingertips and massage gently into the scalp. Leave overnight and shampoo the next morning. Can also be added to shampoo."
        ],
        sizes: [
            { vol: "25ML", mrp: "Rs 80" },
            { vol: "50ML", mrp: "Rs 150" },
            { vol: "100ML", mrp: "Rs 270" }
        ],
        colorGrad: "almond-liquid",
        svgId: "prod-6"
    },
    7: {
        id: 7,
        title: "Bhringraj Amla Ayurvedic Hair Oil",
        variant: "With Sage & Bergamot",
        category: "hair",
        categoryLabel: "Ayurvedic Hair Care",
        desc: "Bhringraj Amla Ayurvedic Hair Oil is a traditional herbal formulation crafted to nourish and strengthen hair naturally. Combining the potent benefits of Bhringraj (Eclipta alba) and Amla (Indian Gooseberry) with a blend of time-tested Ayurvedic herbs, this hair oil helps support healthy hair growth, reduce hair fall, and enhance scalp wellness.",
        benefits: [
            "Helps nourish and strengthen hair roots, supporting healthy hair growth.",
            "Bhringraj and Amla help reduce hair fall and promote thicker-looking hair.",
            "Sage supports a balanced scalp environment and helps maintain scalp cleanliness.",
            "Bergamot provides a refreshing and soothing effect while helping to maintain scalp hydration.",
            "Regular use helps improve hair texture, adds natural shine, reduces frizz, and supports stronger, healthier, and more manageable hair."
        ],
        usage: [
            "Gently massage the oil into the scalp for 3–5 minutes, ensuring even coverage across the entire scalp.",
            "Leave on for a minimum of 3 hours or preferably overnight before washing.",
            "For best results, apply the oil two to three times a week as part of your regular hair care routine."
        ],
        sizes: [
            { vol: "50ML", mrp: "Rs 150" },
            { vol: "100ML", mrp: "Rs 280" },
            { vol: "200ML", mrp: "Rs 510" }
        ],
        colorGrad: "bhringraj-liquid",
        svgId: "prod-7"
    }
};

// 2. Sticky Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 3. Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    // Close nav menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });
}

// 4. Catalog Category Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle Active Button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        productCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filterValue === 'all') {
                card.style.display = 'flex';
            } else if (filterValue === 'essential' && category === 'essential') {
                card.style.display = 'flex';
            } else if (filterValue === 'hair' && category === 'hair') {
                card.style.display = 'flex';
            } else if (filterValue === 'wellness' && category === 'wellness') {
                card.style.display = 'flex';
            } else if (filterValue === 'skin' && category === 'skin') {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// 5. Product Details Modal Management
const modal = document.getElementById('details-modal');
const modalClose = document.getElementById('modal-close');
const whatsappBtn = document.getElementById('whatsapp-order-btn');

function openProductModal(productId) {
    const product = productsDB[productId];
    if (!product) return;
    
    // Fill Text Content
    document.getElementById('modal-product-title').innerText = product.title;
    document.getElementById('modal-product-subtitle').innerText = product.variant;
    document.getElementById('modal-badge-cat').innerText = product.categoryLabel;
    document.getElementById('modal-desc').innerText = product.desc;
    
    // Benefits List
    const benefitsList = document.getElementById('modal-benefits-list');
    benefitsList.innerHTML = '';
    product.benefits.forEach(b => {
        const li = document.createElement('li');
        li.innerText = b;
        benefitsList.appendChild(li);
    });
    
    // Usage Steps
    const usageSteps = document.getElementById('modal-usage-steps');
    usageSteps.innerHTML = '';
    product.usage.forEach(s => {
        const li = document.createElement('li');
        li.innerText = s;
        usageSteps.appendChild(li);
    });
    
    // Sizes/MRP Container
    const sizesContainer = document.getElementById('modal-sizes-container');
    sizesContainer.innerHTML = '';
    product.sizes.forEach(sz => {
        const div = document.createElement('div');
        div.className = 'size-pill';
        div.innerHTML = `<span class="vol">${sz.vol}</span><span class="mrp">${sz.mrp}</span>`;
        sizesContainer.appendChild(div);
    });
    
    // Clone and inject the SVG from the source product card
    const sourceCard = document.getElementById(product.svgId);
    const sourceSvg = sourceCard.querySelector('.bottle-svg');
    const visualContainer = document.getElementById('modal-visual-container');
    visualContainer.innerHTML = '';
    
    const clonedSvg = sourceSvg.cloneNode(true);
    clonedSvg.removeAttribute('class'); // remove product card animation hover styles
    visualContainer.appendChild(clonedSvg);
    
    // Configure WhatsApp Pre-filled Link
    const textMsg = `Hello Earthleaf! I would like to order "${product.title} (${product.variant})". Please share availability and payment steps.`;
    const whatsappUrl = `https://wa.me/919293164251?text=${encodeURIComponent(textMsg)}`;
    whatsappBtn.setAttribute('href', whatsappUrl);
    
    // Reset to Description Tab
    switchModalTab('desc');
    
    // Open Dialog Modal
    modal.showModal();
}

modalClose.addEventListener('click', () => {
    modal.close();
});

// Close modal when clicking on backdrop overlay
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.close();
    }
});

// Tab Switcher inside Modal
function switchModalTab(tabId) {
    const tabs = ['desc', 'benefits', 'usage'];
    tabs.forEach(t => {
        document.getElementById(`tab-${t}`).classList.remove('active');
        document.getElementById(`btn-tab-${t}`).classList.remove('active');
    });
    
    document.getElementById(`tab-${tabId}`).classList.add('active');
    document.getElementById(`btn-tab-${tabId}`).classList.add('active');
}

// 6. Interactive Self-Care Quiz Logic
let quizAnswers = {
    focus: '',
    concern: ''
};

let currentRecommendedProductId = null;

function nextQuizStep(choice, currentStep) {
    if (currentStep === 1) {
        quizAnswers.focus = choice;
        
        // Hide Step 1
        document.getElementById('step-1').classList.remove('active');
        
        // Show Step 2 conditional on choice
        const targetStep = `step-2-${choice}`;
        document.getElementById(targetStep).classList.add('active');
        
        // Progress Bar to 60%
        document.getElementById('quiz-progress').style.width = '60%';
    }
}

function finishQuiz(concernChoice) {
    quizAnswers.concern = concernChoice;
    
    // Hide Step 2s
    const steps = ['hair', 'body', 'skin', 'respiratory'];
    steps.forEach(s => {
        const el = document.getElementById(`step-2-${s}`);
        if (el) el.classList.remove('active');
    });
    
    // Determine recommendation
    let recommendedId = 1; // Default to Ayurvedic Hair Oil
    
    if (quizAnswers.focus === 'hair') {
        if (concernChoice === 'hair-growth') recommendedId = 1; // Vasanta Sri Devi Hair Oil
        else if (concernChoice === 'hair-dandruff') recommendedId = 1; // Vasanta Sri Devi Hair Oil (combats dandruff)
        else if (concernChoice === 'hair-damage') recommendedId = 2; // Mandara Tailam (repairs damage)
        else if (concernChoice === 'hair-density') recommendedId = 7; // Bhringraj Amla (thickens & darkens)
    } else if (quizAnswers.focus === 'body') {
        recommendedId = 3; // B FIT Muscle Oil
    } else if (quizAnswers.focus === 'skin') {
        if (concernChoice === 'skin-olive') recommendedId = 4; // Olive Oil
        else if (concernChoice === 'skin-almond') recommendedId = 6; // Almond Oil
    } else if (quizAnswers.focus === 'respiratory') {
        recommendedId = 5; // Eucalyptus Oil
    }
    
    currentRecommendedProductId = recommendedId;
    const product = productsDB[recommendedId];
    
    // Populate Quiz Result
    document.getElementById('recommended-title').innerText = product.title;
    document.getElementById('recommended-desc').innerText = product.desc.substring(0, 180) + '...';
    document.getElementById('recommended-variant').innerText = product.variant;
    
    // Inject Cloned SVG Bottle into Result container
    const sourceCard = document.getElementById(product.svgId);
    const sourceSvg = sourceCard.querySelector('.bottle-svg');
    const resultSvgContainer = document.getElementById('recommended-svg-container');
    resultSvgContainer.innerHTML = '';
    const clonedSvg = sourceSvg.cloneNode(true);
    clonedSvg.style.height = '140px';
    resultSvgContainer.appendChild(clonedSvg);
    
    // Show Result Step
    document.getElementById('quiz-result').classList.add('active');
    
    // Progress Bar to 100%
    document.getElementById('quiz-progress').style.width = '100%';
}

function openRecommendedDetails() {
    if (currentRecommendedProductId) {
        openProductModal(currentRecommendedProductId);
    }
}

function restartQuiz() {
    // Hide result step
    document.getElementById('quiz-result').classList.remove('active');
    
    // Show step 1
    document.getElementById('step-1').classList.add('active');
    
    // Reset Progress Bar
    document.getElementById('quiz-progress').style.width = '25%';
    
    // Clear answers
    quizAnswers = { focus: '', concern: '' };
    currentRecommendedProductId = null;
}

// 7. Partnership Form Inquiry Trigger helper
function setInquiryType(typeVal) {
    const subjectSelect = document.getElementById('form-subject');
    if (subjectSelect) {
        subjectSelect.value = typeVal;
    }
}

// 8. Contact Form Handling
function handleFormSubmit(event) {
    event.preventDefault();
    
    const submitBtn = document.getElementById('submit-btn');
    const statusMsg = document.getElementById('form-status-message');
    const nameVal = document.getElementById('form-name').value;
    
    // Set loading state
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending Message...";
    statusMsg.className = 'form-status';
    statusMsg.innerText = '';
    
    // Mock Async Post request delay
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerText = "Send Message";
        
        statusMsg.className = 'form-status success';
        statusMsg.innerText = `Thank you, ${nameVal}! Your message has been sent successfully. Our team will contact you shortly.`;
        
        // Reset Form
        document.getElementById('inquiry-form').reset();
        
        // Clear message after 5 seconds
        setTimeout(() => {
            statusMsg.style.display = 'none';
        }, 5000);
    }, 1500);
}

// 9. Intersection Observer for Scroll Animations
document.addEventListener("DOMContentLoaded", () => {
    const fadeSections = document.querySelectorAll(".fade-in-section");
    
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, observerOptions);
    
    fadeSections.forEach(section => {
        observer.observe(section);
    });
});

