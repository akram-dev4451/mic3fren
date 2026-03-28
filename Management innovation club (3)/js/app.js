const React = window.React;
const ReactDOM = window.ReactDOM;
const { useState, useEffect, createContext, useContext } = React;

// Import CONFIG from config.js
import { CONFIG, EVENTS } from './config.js';
import { translations } from './translations.js';

// Language Context
const LanguageContext = createContext();

// Firebase Configuration  
const firebaseConfig = {
    apiKey: "AIzaSyCpWrga98HreN4nOqf7UUtONJgzdt_yoAw",
    authDomain: "mic23-ae782.firebaseapp.com",
    projectId: "mic23-ae782",
    storageBucket: "mic23-ae782.firebasestorage.app",
    messagingSenderId: "127313940468",
    appId: "1:127313940468:web:4e1eae5084e9aac34ab3a1",
    measurementId: "G-QPKS7WQC02"
};

let db = null;

// Initialize Firebase after page load
async function initializeFirebase() {
    try {
        const module = await import("https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js");
        const firestoreModule = await import("https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js");
        
        const { initializeApp } = module;
        const { getFirestore } = firestoreModule;
        
        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
    } catch (error) {
        console.error("Firebase initialization error:", error);
    }
}

// Header Component
function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { language, setLanguage } = useContext(LanguageContext);
    const t = translations[language];

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'fr' : 'en');
    };

    return React.createElement(
        "header",
        null,
        React.createElement(
            "nav",
            { className: "container", style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 0" } },
            React.createElement(
                "div",
                { className: "logo" },
                React.createElement("img", { src: "icons/mic.jpg", alt: "MIC Logo" }),
                React.createElement("span", null, "Management Innovation Club")
            ),
            React.createElement(
                "ul",
                { className: `nav-links ${mobileMenuOpen ? "active" : ""}` },
                React.createElement("li", null, React.createElement("a", { href: "#about" }, t.navAbout)),
                React.createElement("li", null, React.createElement("a", { href: "#events" }, t.navEvents)),
                React.createElement("li", null, React.createElement("a", { href: "#join" }, t.navJoin)),
                React.createElement("li", null, React.createElement("a", { href: "#contact" }, t.navContact))
            ),
            React.createElement(
                "div",
                { style: { display: "flex", alignItems: "center", gap: "1rem" } },
                React.createElement(
                    "button",
                    { 
                        className: "btn btn-primary", 
                        onClick: toggleLanguage,
                        style: { padding: "0.5rem 1rem", fontSize: "0.9rem", backgroundColor: "#0a149e", color: "white" }
                    },
                    language === 'en' ? t.switchToFrench : t.switchToEnglish
                ),
                React.createElement(
                    "button",
                    { className: "mobile-menu-toggle", onClick: () => setMobileMenuOpen(!mobileMenuOpen) },
                    "☰"
                )
            )
        )
    );
}

// Hero Section Component
function HeroSection() {
    const { language } = useContext(LanguageContext);
    const t = translations[language];

    return React.createElement(
        "section",
        { className: "section hero" },
        React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "hero-content" },
                React.createElement(
                    "div",
                    { className: "hero-text", style: { flex: 1, minWidth: "300px" } },
                    React.createElement("h1", null, t.heroTitle),
                    React.createElement(
                        "p",
                        null,
                        t.heroDescription
                    ),
                    React.createElement(
                        "a",
                        { href: "#join", className: "btn btn-secondary btn-large" },
                        t.heroButton
                    )
                ),
                React.createElement(
                    "div",
                    { className: "hero-image", style: { flex: 1, minWidth: "300px", textAlign: "center" } },
                    React.createElement("img", { src: "icons/mic.png", alt: "Management Innovation Club" })
                )
            )
        )
    );
}

// About Section Component
function AboutSection() {
    const { language } = useContext(LanguageContext);
    const t = translations[language];

    return React.createElement(
        "section",
        { className: "section", id: "about" },
        React.createElement(
            "div",
            { className: "container" },
            React.createElement("h2", { className: "text-center mb-4" }, t.aboutTitle),
            React.createElement(
                "div",
                { style: { maxWidth: "800px", margin: "0 auto" } },
                React.createElement(
                    "p",
                    null,
                    React.createElement("strong", null, "Management Innovation Club"),
                    " ",
                    t.aboutDescription1
                ),
                React.createElement(
                    "p",
                    null,
                    language === 'en' ? "Based at " : "Basé à ",
                    React.createElement("a", { href: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://essg-annaba.dz/fr/accueil/&ved=2ahUKEwik2vzXjKKTAxWZVqQEHXlrAiEQFnoECBUQAQ&usg=AOvVaw3PcxP9YMHm5bg5Ou4v2Api", target: "_blank", style: { color: "var(--accent-color)" } }, "ESSG Annaba"),
                    language === 'en' ? ", we serve students, the university, and the wider community." : ", nous servons les étudiants, l'université et la communauté plus large."
                )
            )
        )
    );
}

// Events Section Component
function EventsSection() {
    const { language } = useContext(LanguageContext);
    const t = translations[language];

    const events = EVENTS.map(event => ({
        ...event,
        title: event.title[language] || event.title,
        description: event.description[language] || event.description,
        features: event.features.map(f => typeof f === 'string' ? f : f[language] || f)
    }));

    return React.createElement(
        "section",
        { className: "section", id: "events", style: { background: "#f8fafc" } },
        React.createElement(
            "div",
            { className: "container" },
            React.createElement("h1", { className: "text-center mb-4" }, t.eventsTitle),
            React.createElement(
                "div",
                null,
                events.map(event =>
                    React.createElement(
                        "div",
                        { key: event.id, style: { marginBottom: "3rem" } },
                        React.createElement("h3", { style: { color: "var(--primary-color)", marginBottom: "0.5rem", fontSize: "1.5rem" } }, event.title),
                        React.createElement("p", { style: { color: "var(--text-light)", marginBottom: "1rem", fontSize: "1rem" } }, event.description),
                        event.features.length > 0 && React.createElement(
                            "ul",
                            { style: { marginBottom: "1.5rem", marginLeft: "1.5rem" } },
                            event.features.map((feature, idx) =>
                                React.createElement("li", { key: idx, style: { color: "var(--text-light)", marginBottom: "0.5rem" } }, feature)
                            )
                        ),
                        React.createElement("h4", { style: { marginBottom: "1rem", color: "var(--text-dark)" } }, `${t.picturesFrom} ${event.title} ${event.year}`),
                        React.createElement(
                            "div",
                            { className: "event-photos-grid", style: { marginBottom: "2rem" } },
                            event.photos.map((photo, idx) =>
                                React.createElement(
                                    "div",
                                    { key: idx },
                                    React.createElement("img", {
                                        src: photo,
                                        alt: `${event.title} ${idx + 1}`,
                                        onError: (e) => {
                                            e.target.style.display = "none";
                                        }
                                    })
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}

// Social Links Component
function SocialLinks() {
    const socials = [
        { name: "YouTube", url: "https://www.youtube.com/@ManagementInnovationClub", icon: "icons/yt.jpg" },
        { name: "Instagram", url: "https://www.instagram.com/management_innovation_club", icon: "icons/ig.jpg" },
        { name: "TikTok", url: "https://www.tiktok.com/@management_innova", icon: "icons/tt.jpg" }
    ];

    return React.createElement(
        "div",
        { className: "social-links" },
        socials.map(social =>
            React.createElement(
                "a",
                { key: social.name, href: social.url, target: "_blank", rel: "noopener noreferrer", title: social.name },
                React.createElement("img", { src: social.icon, alt: social.name })
            )
        )
    );
}

// Registration Form Component
function RegistrationForm() {
    const { language } = useContext(LanguageContext);
    const t = translations[language];
    const [formData, setFormData] = useState({
        fullName: "",
        familyName: "",
        birthday: "",
        degree: "CP1",
        phone: "",
        email: "",
        institution: "ESSG",
        cell: "External relations",
        skills: []
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        const { value } = e.target;
        setFormData(prev => ({
            ...prev,
            skills: prev.skills.includes(value)
                ? prev.skills.filter(s => s !== value)
                : [...prev.skills, value]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: "", text: "" });

        try {
            if (!db) {
                throw new Error("Database not initialized");
            }

            const { collection, addDoc } = await import("https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js");
            
            await addDoc(collection(db, "registrations"), {
                ...formData,
                timestamp: new Date().toISOString()
            });

            setMessage({ type: "success", text: "Registration successful! 📧check your email for confirmation." });
            setFormData({
                fullName: "",
                familyName: "",
                birthday: "",
                degree: "CP1",
                phone: "",
                email: "",
                institution: "ESSG",
                cell: "External relations",
                skills: []
            });

            setTimeout(() => setMessage({ type: "", text: "" }), 5000);
        } catch (error) {
            console.error("Error:", error);
            setMessage({ 
                type: "error", 
                text: "Error submitting form. Please check the console for details." 
            });
        } finally {
            setLoading(false);
        }
    };

    return React.createElement(
        "section",
        { className: "section", id: "join" },
        React.createElement(
            "div",
            { className: "container" },
            React.createElement("h2", { className: "text-center mb-4" }, t.joinHeading1),
            React.createElement("h1", { className: "text-center", style: { marginBottom: "0.5rem", fontSize: "2.5rem" } }, t.joinHeading2),
            React.createElement("h3", { className: "text-center", style: { marginBottom: "2rem", color: "var(--text-light)" } }, t.joinSubheading),
            React.createElement(
                "div",
                { className: "form-container" },
                React.createElement("h4", { className: "text-center", style: { marginBottom: "2rem", color: "var(--text-dark)" } }, t.formSubtitle),
                message.text && React.createElement(
                    "div",
                    { className: message.type === "success" ? "success-message" : "error-message", style: { marginBottom: "1rem", padding: "1rem", borderRadius: "0.5rem" } },
                    message.text
                ),
                React.createElement(
                    "form",
                    { onSubmit: handleSubmit },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement("label", null, t.fullName),
                        React.createElement("input", {
                            type: "text",
                            name: "fullName",
                            value: formData.fullName,
                            onChange: handleInputChange,
                            placeholder: t.fullNamePlaceholder,
                            minLength: "3",
                            maxLength: "50",
                            required: true
                        })
                    ),
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement("label", null, t.familyName),
                        React.createElement("input", {
                            type: "text",
                            name: "familyName",
                            value: formData.familyName,
                            onChange: handleInputChange,
                            placeholder: t.familyNamePlaceholder,
                            minLength: "3",
                            maxLength: "50",
                            required: true
                        })
                    ),
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement("label", null, t.birthday),
                        React.createElement("input", {
                            type: "date",
                            name: "birthday",
                            value: formData.birthday,
                            onChange: handleInputChange,
                            required: true
                        })
                    ),
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement("label", null, t.degree),
                        React.createElement(
                            "select",
                            { name: "degree", value: formData.degree, onChange: handleInputChange, required: true },
                            CONFIG.DEGREES.map(degree =>
                                React.createElement("option", { key: degree.value, value: degree.value }, degree.label[language])
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement("label", null, t.phone),
                        React.createElement("input", {
                            type: "tel",
                            name: "phone",
                            value: formData.phone,
                            onChange: handleInputChange,
                            placeholder: t.phonePlaceholder,
                            maxLength: "10",
                            required: true
                        })
                    ),
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement("label", null, t.schoolLabel),
                        React.createElement(
                            "select",
                            { name: "institution", value: formData.institution, onChange: handleInputChange, required: true },
                            React.createElement("option", { value: "ESSG" }, "ESSG Annaba"),
                            React.createElement("option", { value: "Other" }, "Other")
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement("label", null, t.email),
                        React.createElement("input", {
                            type: "email",
                            name: "email",
                            value: formData.email,
                            onChange: handleInputChange,
                            placeholder: t.emailPlaceholder,
                            required: true
                        })
                    ),
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement("label", null, t.cell),
                        React.createElement(
                            "select",
                            { name: "cell", value: formData.cell, onChange: handleInputChange, required: true },
                            CONFIG.CELLS.map(cell =>
                                React.createElement("option", { key: cell.value, value: cell.value }, cell.label[language])
                            )
                        )
                    ),
                    React.createElement("h4", null, t.skills),
                    React.createElement(
                        "div",
                        { className: "checkbox-group", style: { marginBottom: "1.5rem" } },
                        CONFIG.SKILLS.map(skill =>
                            React.createElement(
                                "label",
                                { key: skill.value, className: "checkbox-label" },
                                React.createElement("input", {
                                    type: "checkbox",
                                    value: skill.value,
                                    checked: formData.skills.includes(skill.value),
                                    onChange: handleCheckboxChange
                                }),
                                skill.label[language]
                            )
                        )
                    ),
                    React.createElement(
                        "button",
                        { type: "submit", className: "btn btn-primary btn-large form-submit", disabled: loading },
                        loading ? t.submitting : t.submitButton
                    )
                )
            )
        )
    );
}

// Contact Section Component
function ContactSection() {
    const { language } = useContext(LanguageContext);
    const t = translations[language];

    return React.createElement(
        "section",
        { className: "section", id: "contact", style: { background: "linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)", color: "white" } },
        React.createElement(
            "div",
            { className: "container" },
            React.createElement("h2", { className: "text-center mb-4" }, t.contactTitle),
            React.createElement(
                "div",
                { style: { maxWidth: "600px", margin: "0 auto", textAlign: "center" } },
                React.createElement("p", { style: { fontSize: "1.1rem", marginBottom: "2rem" } }, t.contactDescription),
                React.createElement(SocialLinks),
                React.createElement(
                    "div",
                    { style: { marginTop: "2rem" } },
                    React.createElement("p", { style: { marginBottom: "0.5rem" } }, t.contactEmail + ": contact@mic.essg-annaba.dz"),
                    React.createElement("p", { style: { marginBottom: "0.5rem" } }, t.contactPhone + ": +213 XX XX XX XX"),
                    React.createElement("p", null, "🕐 " + t.contactFollowUs)
                )
            )
        )
    );
}

// Footer Component
function Footer() {
    const { language } = useContext(LanguageContext);
    const t = translations[language];

    return React.createElement(
        "footer",
        { id: "contact", style: { background: "var(--primary-color)", color: "white", padding: "3rem 0", marginTop: "4rem", textAlign: "center" } },
        React.createElement(
            "div",
            { className: "container" },
            React.createElement(SocialLinks),
            React.createElement("p", { style: { marginBottom: "1rem", opacity: 0.9 } }, t.contactFollowUs),
            React.createElement("p", { style: { marginTop: "2rem", marginBottom: "0.5rem" } }, t.footerText),
            React.createElement("p", { style: { opacity: 0.8, fontSize: "0.9rem" } }, 
                language === 'en' ? "based in " : "basée à ",
                React.createElement("a", { href: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://essg-annaba.dz/fr/accueil/&ved=2ahUKEwik2vzXjKKTAxWZVqQEHXlrAiEQFnoECBUQAQ&usg=AOvVaw3PcxP9YMHm5bg5Ou4v2Api", target: "_blank", style: { color: "white", textDecoration: "underline" } }, "ESSG Annaba"),
                language === 'en' ? ", Algeria" : ", Algérie"
            )
        )
    );
}

// Main App Component
function App() {
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

    useEffect(() => {
        initializeFirebase();
        localStorage.setItem('language', language);
    }, [language]);

    return React.createElement(
        LanguageContext.Provider,
        { value: { language, setLanguage } },
        React.createElement(Header),
        React.createElement(HeroSection),
        React.createElement(AboutSection),
        React.createElement(EventsSection),
        React.createElement(RegistrationForm),
        React.createElement(Footer)
    );
}

// Render App when DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(React.createElement(App));
    });
} else {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(React.createElement(App));
}
