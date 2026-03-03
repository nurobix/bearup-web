/* ============================================
   Bear Up — i18n, animations & interactions
   ============================================ */

const translations = {
  // ── Navigation ──
  "nav.features": { fr: "Fonctionnalités", en: "Features" },
  "nav.personas": { fr: "Personas", en: "Personas" },
  "nav.pricing": { fr: "Tarifs", en: "Pricing" },
  "nav.support": { fr: "Support", en: "Support" },
  "nav.privacy": { fr: "Confidentialité", en: "Privacy" },
  "nav.terms": { fr: "CGU", en: "Terms" },
  "nav.disclaimer": { fr: "Disclaimer", en: "Disclaimer" },

  // ── Hero ──
  "hero.title.1": { fr: "Ton allié contre les", en: "Your ally against" },
  "hero.title.2": { fr: "attaques de panique", en: "panic attacks" },
  "hero.subtitle": {
    fr: "Un compagnon IA disponible 24h/24 qui comprend ce que tu traverses et t'aide à reprendre le contrôle.",
    en: "A 24/7 AI companion that understands what you're going through and helps you regain control."
  },
  "hero.badge.available": { fr: "Disponible 24/7", en: "Available 24/7" },
  "hero.badge.ai": { fr: "IA conversationnelle", en: "Conversational AI" },
  "hero.badge.safe": { fr: "Garde-fous cliniques", en: "Clinical safeguards" },
  "hero.store.subtitle.apple": { fr: "Télécharger sur l'", en: "Download on the" },
  "hero.store.name.apple": { fr: "App Store", en: "App Store" },
  "hero.store.subtitle.google": { fr: "Disponible sur", en: "Get it on" },
  "hero.store.name.google": { fr: "Google Play", en: "Google Play" },

  // ── Chat Demo ──
  "demo.title": { fr: "L'Ami Solidaire", en: "The Supportive Friend" },
  "demo.badge": { fr: "🎁 18/20", en: "🎁 18/20" },
  "demo.user": { fr: "Mon cœur bat super vite, j'ai peur que ce soit grave", en: "My heart is beating really fast, I'm scared it might be serious" },
  "demo.assistant": {
    fr: "Hey, je suis là 💙 Ce que tu ressens, c'est ton corps qui réagit au stress — l'adrénaline fait accélérer le cœur. C'est impressionnant, mais ce n'est pas dangereux. Ça va passer.",
    en: "Hey, I'm here 💙 What you're feeling is your body reacting to stress — adrenaline speeds up the heart. It feels intense, but it's not dangerous. It will pass."
  },
  "demo.btn.1": { fr: "🆘 J'ai besoin d'aide", en: "🆘 I need help now" },
  "demo.btn.2": { fr: "💓 Mon cœur bat vite", en: "💓 My heart is racing" },
  "demo.btn.3": { fr: "🤝 Reste avec moi", en: "🤝 Stay with me" },
  "demo.btn.4": { fr: "😖 Qu'est-ce qui m'arrive ?", en: "😖 What's happening to me?" },

  // ── Features ──
  "features.label": { fr: "Fonctionnalités", en: "Features" },
  "features.title": { fr: "Conçu pour les moments difficiles", en: "Designed for the hardest moments" },
  "features.subtitle": {
    fr: "Chaque détail a été pensé pour être utilisable pendant une attaque de panique.",
    en: "Every detail is designed to be usable during a panic attack."
  },
  "features.1.title": { fr: "Disponible 24/7", en: "Available 24/7" },
  "features.1.desc": {
    fr: "Jour, nuit, week-end — Bear Up est toujours là quand tu en as besoin. Pas de rendez-vous, pas d'attente.",
    en: "Day, night, weekends — Bear Up is always there when you need it. No appointments, no waiting."
  },
  "features.2.title": { fr: "Boutons d'urgence", en: "Quick-action buttons" },
  "features.2.desc": {
    fr: "6 boutons tactiles larges pour s'exprimer sans taper. Parfait quand les mains tremblent.",
    en: "6 large touch buttons to express yourself without typing. Perfect when your hands are shaking."
  },
  "features.3.title": { fr: "Synthèse vocale", en: "Voice synthesis" },
  "features.3.desc": {
    fr: "Chaque message peut être lu à voix haute. Active la lecture automatique pour te laisser guider.",
    en: "Every message can be read aloud. Enable auto-play to let yourself be guided."
  },
  "features.4.title": { fr: "Garde-fous de sécurité", en: "Safety guardrails" },
  "features.4.desc": {
    fr: "Détection automatique des urgences médicales et redirection vers les numéros d'urgence (3114, 15).",
    en: "Automatic detection of medical emergencies and redirection to emergency numbers (3114, 15)."
  },
  "features.5.title": { fr: "2 personas au choix", en: "2 personas to choose" },
  "features.5.desc": {
    fr: "Un ami empathique ou un assistant clinique rationnel — choisis l'approche qui te convient.",
    en: "An empathetic friend or a rational clinical assistant — choose the approach that suits you."
  },
  "features.6.title": { fr: "Accessible en crise", en: "Crisis-accessible" },
  "features.6.desc": {
    fr: "Gros boutons, texte lisible, contraste élevé. Conçu pour une charge cognitive réduite.",
    en: "Large buttons, readable text, high contrast. Designed for reduced cognitive load."
  },

  // ── Personas ──
  "personas.label": { fr: "Personas", en: "Personas" },
  "personas.title": { fr: "Deux approches, un même objectif", en: "Two approaches, one goal" },
  "personas.subtitle": {
    fr: "Choisis le style d'accompagnement qui te rassure le plus.",
    en: "Choose the support style that reassures you most."
  },
  "personas.friend.name": { fr: "L'Ami Solidaire", en: "The Supportive Friend" },
  "personas.friend.badge": { fr: "Gratuit", en: "Free" },
  "personas.friend.desc": {
    fr: "Un ami qui souffre lui aussi d'attaques de panique. Il te tutoie, te rassure avec des mots simples et reste à tes côtés.",
    en: "A friend who also suffers from panic attacks. Casual, reassuring with simple words, and stays by your side."
  },
  "personas.friend.trait.1": { fr: "Ton chaleureux et authentique", en: "Warm and authentic tone" },
  "personas.friend.trait.2": { fr: "Phrases courtes et rassurantes", en: "Short and reassuring sentences" },
  "personas.friend.trait.3": { fr: "Techniques de grounding simples", en: "Simple grounding techniques" },
  "personas.friend.trait.4": { fr: "Accessible à tous", en: "Available to everyone" },
  "personas.clinical.name": { fr: "L'Assistant Clinique", en: "The Clinical Assistant" },
  "personas.clinical.badge": { fr: "Premium ✨", en: "Premium ✨" },
  "personas.clinical.desc": {
    fr: "Un accompagnateur structuré qui rassure par la science. Il explique ce qui se passe dans ton corps avec précision.",
    en: "A structured companion that reassures through science. Explains precisely what's happening in your body."
  },
  "personas.clinical.trait.1": { fr: "Vocabulaire physiologique précis", en: "Precise physiological vocabulary" },
  "personas.clinical.trait.2": { fr: "Approche rationnelle et posée", en: "Rational and calm approach" },
  "personas.clinical.trait.3": { fr: "Basé sur les TCC", en: "CBT-based approach" },
  "personas.clinical.trait.4": { fr: "Exercices directifs", en: "Directive exercises" },

  // ── How it works ──
  "steps.label": { fr: "Comment ça marche", en: "How it works" },
  "steps.title": { fr: "Simple comme 1, 2, 3", en: "As easy as 1, 2, 3" },
  "steps.subtitle": {
    fr: "Installe l'app dans un moment calme, elle sera prête quand tu en auras besoin.",
    en: "Install the app in a calm moment, it will be ready when you need it."
  },
  "steps.1.title": { fr: "Télécharge l'app", en: "Download the app" },
  "steps.1.desc": {
    fr: "Disponible sur iOS et Android. Crée ton compte en un clic avec Apple ou Google.",
    en: "Available on iOS and Android. Create your account in one click with Apple or Google."
  },
  "steps.2.title": { fr: "Choisis ton persona", en: "Choose your persona" },
  "steps.2.desc": {
    fr: "Ami Solidaire ou Assistant Clinique — tu pourras changer à tout moment.",
    en: "Supportive Friend or Clinical Assistant — you can switch at any time."
  },
  "steps.3.title": { fr: "Parle librement", en: "Speak freely" },
  "steps.3.desc": {
    fr: "Écris ce que tu ressens ou utilise les boutons rapides. Bear Up est là pour toi.",
    en: "Write what you feel or use the quick buttons. Bear Up is here for you."
  },

  // ── Safety ──
  "safety.title": { fr: "Ta sécurité avant tout", en: "Your safety comes first" },
  "safety.desc": {
    fr: "Bear Up détecte automatiquement les situations d'urgence et te redirige vers les numéros de secours appropriés. En cas de doute, nous privilégions toujours la sécurité.",
    en: "Bear Up automatically detects emergency situations and redirects you to appropriate emergency numbers. When in doubt, we always prioritize safety."
  },
  "safety.3114": { fr: "3114 — Prévention suicide", en: "3114 — Suicide prevention" },
  "safety.15": { fr: "15 — SAMU", en: "15 — SAMU (Emergency)" },

  // ── Pricing ──
  "pricing.label": { fr: "Tarifs", en: "Pricing" },
  "pricing.title": { fr: "Commence gratuitement", en: "Start for free" },
  "pricing.subtitle": {
    fr: "20 messages gratuits pour découvrir Bear Up. Passe en premium pour un accès illimité.",
    en: "20 free messages to discover Bear Up. Go premium for unlimited access."
  },
  "pricing.free.name": { fr: "Gratuit", en: "Free" },
  "pricing.free.price": { fr: "0€", en: "€0" },
  "pricing.free.period": { fr: "pour toujours", en: "forever" },
  "pricing.free.f1": { fr: "20 messages avec l'IA", en: "20 AI messages" },
  "pricing.free.f2": { fr: "Persona \"L'Ami Solidaire\"", en: "\"Supportive Friend\" persona" },
  "pricing.free.f3": { fr: "Boutons de suggestion", en: "Quick-action buttons" },
  "pricing.free.f4": { fr: "Synthèse vocale", en: "Voice synthesis" },
  "pricing.free.f5": { fr: "Réponses pré-enregistrées après quota", en: "Pre-recorded responses after quota" },
  "pricing.free.f6": { fr: "L'Assistant Clinique", en: "The Clinical Assistant" },
  "pricing.free.cta": { fr: "Commencer gratuitement", en: "Get started free" },
  "pricing.premium.name": { fr: "Premium ✨", en: "Premium ✨" },
  "pricing.premium.period": { fr: "/ mois", en: "/ month" },
  "pricing.premium.f1": { fr: "Messages illimités avec l'IA", en: "Unlimited AI messages" },
  "pricing.premium.f2": { fr: "Persona \"L'Ami Solidaire\"", en: "\"Supportive Friend\" persona" },
  "pricing.premium.f3": { fr: "Persona \"L'Assistant Clinique\" 🧠", en: "\"Clinical Assistant\" persona 🧠" },
  "pricing.premium.f4": { fr: "Boutons de suggestion", en: "Quick-action buttons" },
  "pricing.premium.f5": { fr: "Synthèse vocale", en: "Voice synthesis" },
  "pricing.premium.f6": { fr: "Accès à toutes les fonctionnalités futures", en: "Access to all future features" },
  "pricing.premium.cta": { fr: "Passer Premium", en: "Go Premium" },

  // ── CTA ──
  "cta.title.1": { fr: "Prêt à reprendre le", en: "Ready to take back" },
  "cta.title.2": { fr: "contrôle", en: "control" },
  "cta.subtitle": {
    fr: "Télécharge Bear Up et découvre un compagnon qui comprend les attaques de panique.",
    en: "Download Bear Up and discover a companion that understands panic attacks."
  },

  // ── Footer ──
  "footer.desc": {
    fr: "Un compagnon IA pour les personnes souffrant d'attaques de panique. Disponible 24/7.",
    en: "An AI companion for people suffering from panic attacks. Available 24/7."
  },
  "footer.legal": { fr: "Légal", en: "Legal" },
  "footer.resources": { fr: "Ressources", en: "Resources" },
  "footer.copyright": { fr: "© 2026 Nurobix. Tous droits réservés.", en: "© 2026 Nurobix. All rights reserved." },
  "footer.not-medical": {
    fr: "Bear Up ne remplace pas un professionnel de santé.",
    en: "Bear Up does not replace a healthcare professional."
  },

  // ══════════════════════════════════════
  // ── Privacy Policy ──
  // ══════════════════════════════════════
  "privacy.title": { fr: "Politique de confidentialité", en: "Privacy Policy" },
  "privacy.date": { fr: "Dernière mise à jour : 3 mars 2026", en: "Last updated: March 3, 2026" },
  "privacy.intro": {
    fr: "Nurobix (\"nous\", \"notre\") exploite l'application mobile Bear Up. Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre application.",
    en: "Nurobix (\"we\", \"our\", \"us\") operates the Bear Up mobile application. This privacy policy describes how we collect, use, and protect your personal information when you use our application."
  },
  "privacy.h2.1": { fr: "1. Informations collectées", en: "1. Information We Collect" },
  "privacy.h3.1a": { fr: "1.1 Informations de compte", en: "1.1 Account Information" },
  "privacy.p.1a": {
    fr: "Lorsque vous créez un compte via Apple Sign-In ou Google Sign-In, nous collectons :",
    en: "When you create an account via Apple Sign-In or Google Sign-In, we collect:"
  },
  "privacy.li.1a1": { fr: "Votre adresse e-mail", en: "Your email address" },
  "privacy.li.1a2": { fr: "Votre fournisseur d'authentification (Apple ou Google)", en: "Your authentication provider (Apple or Google)" },
  "privacy.li.1a3": { fr: "Un identifiant unique de compte", en: "A unique account identifier" },
  "privacy.h3.1b": { fr: "1.2 Données de conversation", en: "1.2 Conversation Data" },
  "privacy.p.1b": {
    fr: "Les messages que vous échangez avec l'assistant IA sont traités pour générer des réponses. Les conversations sont stockées localement sur votre appareil et ne sont pas conservées sur nos serveurs au-delà du traitement nécessaire à la génération de la réponse.",
    en: "Messages you exchange with the AI assistant are processed to generate responses. Conversations are stored locally on your device and are not retained on our servers beyond the processing necessary to generate responses."
  },
  "privacy.h3.1c": { fr: "1.3 Données d'utilisation", en: "1.3 Usage Data" },
  "privacy.p.1c": {
    fr: "Nous collectons des données d'utilisation limitées pour assurer le fonctionnement du service :",
    en: "We collect limited usage data to ensure service operation:"
  },
  "privacy.li.1c1": { fr: "Identifiant anonyme de l'appareil (pour le suivi du quota de messages gratuits)", en: "Anonymous device identifier (for free message quota tracking)" },
  "privacy.li.1c2": { fr: "Nombre de messages envoyés (compteur de quota)", en: "Number of messages sent (quota counter)" },
  "privacy.li.1c3": { fr: "Statut d'abonnement premium", en: "Premium subscription status" },
  "privacy.li.1c4": { fr: "Version du disclaimer acceptée", en: "Accepted disclaimer version" },
  "privacy.h2.2": { fr: "2. Utilisation des informations", en: "2. How We Use Your Information" },
  "privacy.p.2": {
    fr: "Nous utilisons vos informations exclusivement pour :",
    en: "We use your information exclusively to:"
  },
  "privacy.li.2a": { fr: "Fournir et maintenir le service de conversation IA", en: "Provide and maintain the AI conversation service" },
  "privacy.li.2b": { fr: "Gérer votre compte et votre authentification", en: "Manage your account and authentication" },
  "privacy.li.2c": { fr: "Suivre votre quota de messages gratuits", en: "Track your free message quota" },
  "privacy.li.2d": { fr: "Gérer votre abonnement premium", en: "Manage your premium subscription" },
  "privacy.li.2e": { fr: "Assurer la sécurité des utilisateurs via les garde-fous cliniques", en: "Ensure user safety through clinical guardrails" },
  "privacy.h2.3": { fr: "3. Services tiers", en: "3. Third-Party Services" },
  "privacy.p.3": {
    fr: "Notre application utilise les services tiers suivants :",
    en: "Our application uses the following third-party services:"
  },
  "privacy.li.3a": {
    fr: "<strong>Supabase</strong> — Hébergement backend, authentification et base de données. <a href=\"https://supabase.com/privacy\" target=\"_blank\" rel=\"noopener\">Politique de confidentialité de Supabase</a>",
    en: "<strong>Supabase</strong> — Backend hosting, authentication, and database. <a href=\"https://supabase.com/privacy\" target=\"_blank\" rel=\"noopener\">Supabase Privacy Policy</a>"
  },
  "privacy.li.3b": {
    fr: "<strong>RevenueCat</strong> — Gestion des abonnements in-app. <a href=\"https://www.revenuecat.com/privacy\" target=\"_blank\" rel=\"noopener\">Politique de confidentialité de RevenueCat</a>",
    en: "<strong>RevenueCat</strong> — In-app subscription management. <a href=\"https://www.revenuecat.com/privacy\" target=\"_blank\" rel=\"noopener\">RevenueCat Privacy Policy</a>"
  },
  "privacy.li.3c": {
    fr: "<strong>Apple / Google</strong> — Services d'authentification (Sign-In with Apple, Google Sign-In)",
    en: "<strong>Apple / Google</strong> — Authentication services (Sign-In with Apple, Google Sign-In)"
  },
  "privacy.li.3d": {
    fr: "<strong>OpenAI</strong> — Traitement des messages par intelligence artificielle. Les messages sont envoyés aux API d'OpenAI pour générer des réponses. <a href=\"https://openai.com/privacy\" target=\"_blank\" rel=\"noopener\">Politique de confidentialité d'OpenAI</a>",
    en: "<strong>OpenAI</strong> — AI message processing. Messages are sent to OpenAI APIs to generate responses. <a href=\"https://openai.com/privacy\" target=\"_blank\" rel=\"noopener\">OpenAI Privacy Policy</a>"
  },
  "privacy.h2.4": { fr: "4. Sécurité des données", en: "4. Data Security" },
  "privacy.p.4": {
    fr: "Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles, notamment le chiffrement des données en transit (HTTPS/TLS) et l'authentification sécurisée via des fournisseurs d'identité reconnus. L'accès à la base de données est protégé par des politiques de sécurité au niveau des lignes (Row Level Security).",
    en: "We implement appropriate security measures to protect your personal information, including encryption of data in transit (HTTPS/TLS) and secure authentication through recognized identity providers. Database access is protected by Row Level Security policies."
  },
  "privacy.h2.5": { fr: "5. Conservation des données", en: "5. Data Retention" },
  "privacy.p.5": {
    fr: "Vos données de compte sont conservées tant que votre compte est actif. Les conversations sont stockées localement sur votre appareil et peuvent être effacées à tout moment en utilisant la fonction de nouvelle conversation. Vous pouvez demander la suppression de votre compte et de toutes les données associées en nous contactant.",
    en: "Your account data is retained as long as your account is active. Conversations are stored locally on your device and can be cleared at any time using the new conversation feature. You can request deletion of your account and all associated data by contacting us."
  },
  "privacy.h2.6": { fr: "6. Droits des utilisateurs", en: "6. User Rights" },
  "privacy.p.6": {
    fr: "Conformément au RGPD et aux réglementations applicables, vous disposez des droits suivants :",
    en: "In accordance with GDPR and applicable regulations, you have the following rights:"
  },
  "privacy.li.6a": { fr: "Droit d'accès à vos données personnelles", en: "Right to access your personal data" },
  "privacy.li.6b": { fr: "Droit de rectification de vos données", en: "Right to rectify your data" },
  "privacy.li.6c": { fr: "Droit à l'effacement (\"droit à l'oubli\")", en: "Right to erasure (\"right to be forgotten\")" },
  "privacy.li.6d": { fr: "Droit à la portabilité de vos données", en: "Right to data portability" },
  "privacy.li.6e": { fr: "Droit d'opposition au traitement", en: "Right to object to processing" },
  "privacy.p.6b": {
    fr: "Pour exercer votre droit à l'effacement et demander la suppression de vos données, vous pouvez remplir notre <a href=\"https://forms.gle/53ep82836j8of8sRA\" target=\"_blank\" rel=\"noopener\">formulaire de demande de suppression</a>.",
    en: "To exercise your right to erasure and request the deletion of your data, you can fill out our <a href=\"https://forms.gle/53ep82836j8of8sRA\" target=\"_blank\" rel=\"noopener\">data deletion request form</a>."
  },
  "privacy.h2.7": { fr: "7. Protection des mineurs", en: "7. Children's Privacy" },
  "privacy.p.7": {
    fr: "Bear Up n'est pas destiné aux enfants de moins de 16 ans. Nous ne collectons pas sciemment d'informations personnelles auprès de mineurs. Si vous êtes parent et pensez que votre enfant nous a fourni des informations personnelles, contactez-nous pour que nous les supprimions.",
    en: "Bear Up is not intended for children under 16 years of age. We do not knowingly collect personal information from minors. If you are a parent and believe your child has provided us with personal information, please contact us so we can delete it."
  },
  "privacy.h2.8": { fr: "8. Modifications de cette politique", en: "8. Changes to This Policy" },
  "privacy.p.8": {
    fr: "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour. Nous vous encourageons à consulter régulièrement cette politique.",
    en: "We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this policy regularly."
  },
  "privacy.h2.9": { fr: "9. Contact", en: "9. Contact" },
  "privacy.p.9": {
    fr: "Pour toute question relative à cette politique de confidentialité ou pour exercer vos droits, contactez-nous à :",
    en: "For any questions regarding this privacy policy or to exercise your rights, contact us at:"
  },

  // ══════════════════════════════════════
  // ── Terms & Conditions ──
  // ══════════════════════════════════════
  "terms.title": { fr: "Conditions Générales d'Utilisation", en: "Terms & Conditions" },
  "terms.date": { fr: "Dernière mise à jour : 3 mars 2026", en: "Last updated: March 3, 2026" },
  "terms.intro": {
    fr: "Veuillez lire attentivement ces conditions générales d'utilisation avant d'utiliser l'application Bear Up exploitée par Nurobix.",
    en: "Please read these terms and conditions carefully before using the Bear Up application operated by Nurobix."
  },
  "terms.h2.1": { fr: "1. Acceptation des conditions", en: "1. Acceptance of Terms" },
  "terms.p.1": {
    fr: "En accédant à l'application Bear Up et en l'utilisant, vous acceptez d'être lié par ces conditions. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application. L'utilisation de l'application est également soumise à l'acceptation d'un disclaimer légal versionné au sein de l'application.",
    en: "By accessing and using the Bear Up application, you agree to be bound by these terms. If you do not agree to these terms, please do not use the application. Use of the application is also subject to acceptance of a versioned legal disclaimer within the application."
  },
  "terms.h2.2": { fr: "2. Description du service", en: "2. Description of Service" },
  "terms.p.2": {
    fr: "Bear Up est une application mobile de support conversationnel destinée aux personnes souffrant d'attaques de panique. L'application propose une conversation avec un assistant IA selon deux modes (personas) : \"L'Ami Solidaire\" (approche amicale) et \"L'Assistant Clinique\" (approche rationnelle, réservé aux abonnés premium).",
    en: "Bear Up is a mobile conversational support application designed for people suffering from panic attacks. The application offers a conversation with an AI assistant in two modes (personas): \"The Supportive Friend\" (friendly approach) and \"The Clinical Assistant\" (rational approach, reserved for premium subscribers)."
  },
  "terms.h2.3": { fr: "3. Avertissement médical important", en: "3. Important Medical Disclaimer" },
  "terms.p.3a": {
    fr: "<strong>Bear Up n'est PAS un dispositif médical, un service de santé, ni un substitut à un professionnel de santé.</strong> L'application ne pose aucun diagnostic, ne prescrit aucun traitement et ne fournit pas de conseils médicaux. Les informations fournies par l'assistant IA sont de nature éducative et de soutien uniquement.",
    en: "<strong>Bear Up is NOT a medical device, a health service, or a substitute for a healthcare professional.</strong> The application does not diagnose, prescribe treatment, or provide medical advice. Information provided by the AI assistant is educational and supportive in nature only."
  },
  "terms.p.3b": {
    fr: "En cas d'urgence médicale, appelez immédiatement les services d'urgence (15 — SAMU, ou 112). En cas de pensées suicidaires, contactez le 3114 (numéro national de prévention du suicide).",
    en: "In case of a medical emergency, immediately call emergency services (15 — SAMU, or 112). In case of suicidal thoughts, contact 3114 (national suicide prevention number)."
  },
  "terms.h2.4": { fr: "4. Comptes utilisateurs", en: "4. User Accounts" },
  "terms.p.4": {
    fr: "La création d'un compte est obligatoire pour utiliser l'application. Vous pouvez vous inscrire via Apple Sign-In ou Google Sign-In. Vous êtes responsable de la sécurité de votre compte et de toute activité qui s'y déroule.",
    en: "Creating an account is required to use the application. You can sign up via Apple Sign-In or Google Sign-In. You are responsible for the security of your account and all activity that occurs under it."
  },
  "terms.h2.5": { fr: "5. Offre gratuite et abonnement premium", en: "5. Free Tier and Premium Subscription" },
  "terms.h3.5a": { fr: "5.1 Offre gratuite", en: "5.1 Free Tier" },
  "terms.p.5a": {
    fr: "Chaque appareil dispose de 20 messages gratuits avec l'assistant IA. Ce quota est lié à l'appareil et ne peut être réinitialisé en créant un nouveau compte. Une fois le quota épuisé, des réponses pré-enregistrées restent disponibles via les boutons de suggestion.",
    en: "Each device has 20 free messages with the AI assistant. This quota is linked to the device and cannot be reset by creating a new account. Once the quota is exhausted, pre-recorded responses remain available via suggestion buttons."
  },
  "terms.h3.5b": { fr: "5.2 Abonnement premium", en: "5.2 Premium Subscription" },
  "terms.p.5b": {
    fr: "L'abonnement premium offre un accès illimité aux messages IA et au persona \"L'Assistant Clinique\". L'abonnement est géré via l'App Store (Apple) ou Google Play et se renouvelle automatiquement. Vous pouvez gérer ou annuler votre abonnement à tout moment depuis les paramètres de votre store.",
    en: "The premium subscription offers unlimited access to AI messages and \"The Clinical Assistant\" persona. The subscription is managed through the App Store (Apple) or Google Play and renews automatically. You can manage or cancel your subscription at any time from your store settings."
  },
  "terms.h2.6": { fr: "6. Garde-fous de sécurité", en: "6. Safety Guardrails" },
  "terms.p.6": {
    fr: "L'application intègre des garde-fous de sécurité non négociables qui détectent les situations d'urgence (idées suicidaires, symptômes cardiaques, symptômes neurologiques) et redirigent vers les numéros d'urgence appropriés. Ces garde-fous ont priorité sur toute réponse IA et ne peuvent pas être désactivés.",
    en: "The application integrates non-negotiable safety guardrails that detect emergency situations (suicidal ideation, cardiac symptoms, neurological symptoms) and redirect to appropriate emergency numbers. These guardrails take priority over any AI response and cannot be disabled."
  },
  "terms.h2.7": { fr: "7. Utilisation acceptable", en: "7. Acceptable Use" },
  "terms.p.7": { fr: "Vous vous engagez à ne pas :", en: "You agree not to:" },
  "terms.li.7a": { fr: "Utiliser l'application à des fins illégales ou non autorisées", en: "Use the application for illegal or unauthorized purposes" },
  "terms.li.7b": { fr: "Tenter de contourner les limitations techniques ou les garde-fous de sécurité", en: "Attempt to circumvent technical limitations or safety guardrails" },
  "terms.li.7c": { fr: "Partager votre compte avec des tiers", en: "Share your account with third parties" },
  "terms.li.7d": { fr: "Utiliser l'application pour générer du contenu nuisible ou inapproprié", en: "Use the application to generate harmful or inappropriate content" },
  "terms.h2.8": { fr: "8. Propriété intellectuelle", en: "8. Intellectual Property" },
  "terms.p.8": {
    fr: "L'application Bear Up, son design, ses contenus et son code source sont la propriété de Nurobix. Tous droits réservés. Vous n'êtes pas autorisé à copier, modifier, distribuer ou créer des œuvres dérivées de l'application.",
    en: "The Bear Up application, its design, content, and source code are the property of Nurobix. All rights reserved. You are not authorized to copy, modify, distribute, or create derivative works from the application."
  },
  "terms.h2.9": { fr: "9. Limitation de responsabilité", en: "9. Limitation of Liability" },
  "terms.p.9": {
    fr: "L'application est fournie \"en l'état\". Nurobix ne garantit pas que le service sera ininterrompu, exempt d'erreurs ou adapté à un usage médical. Dans les limites autorisées par la loi, Nurobix ne sera pas responsable des dommages directs, indirects, accessoires ou consécutifs résultant de l'utilisation de l'application.",
    en: "The application is provided \"as is\". Nurobix does not guarantee that the service will be uninterrupted, error-free, or suitable for medical use. To the extent permitted by law, Nurobix shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of the application."
  },
  "terms.h2.10": { fr: "10. Résiliation", en: "10. Termination" },
  "terms.p.10": {
    fr: "Nous nous réservons le droit de suspendre ou de résilier votre accès à l'application à tout moment, avec ou sans motif. Vous pouvez résilier votre compte en vous déconnectant et en nous contactant pour demander la suppression de vos données.",
    en: "We reserve the right to suspend or terminate your access to the application at any time, with or without cause. You may terminate your account by logging out and contacting us to request deletion of your data."
  },
  "terms.h2.11": { fr: "11. Droit applicable", en: "11. Governing Law" },
  "terms.p.11": {
    fr: "Ces conditions sont régies par le droit français. Tout litige sera soumis à la compétence exclusive des tribunaux français.",
    en: "These terms are governed by French law. Any dispute shall be subject to the exclusive jurisdiction of French courts."
  },
  "terms.h2.12": { fr: "12. Modifications", en: "12. Changes" },
  "terms.p.12": {
    fr: "Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prendront effet dès leur publication. L'utilisation continue de l'application après modification vaut acceptation des nouvelles conditions.",
    en: "We reserve the right to modify these terms at any time. Changes will take effect upon publication. Continued use of the application after modification constitutes acceptance of the new terms."
  },
  "terms.h2.13": { fr: "13. Contact", en: "13. Contact" },
  "terms.p.13": {
    fr: "Pour toute question relative à ces conditions, contactez-nous à :",
    en: "For any questions regarding these terms, contact us at:"
  },

  // ══════════════════════════════════════
  // ── Disclaimer ──
  // ══════════════════════════════════════
  "disclaimer.title": { fr: "Avertissement Légal et Conditions d'Utilisation", en: "Legal Disclaimer and Terms of Use" },
  "disclaimer.date": { fr: "Dernière mise à jour : 3 mars 2026", en: "Last updated: March 3, 2026" },
  "disclaimer.h2.1": { fr: "1. Absence de conseil médical", en: "1. No Medical Advice" },
  "disclaimer.p.1": {
    fr: "Bear Up est un outil de support conversationnel animé par une intelligence artificielle (\"L'Ami Solidaire\") conçu pour accompagner les personnes en crise d'attaque de panique. Cette application ne constitue pas un dispositif médical et ne délivre aucun diagnostic, avis médical ou traitement.",
    en: "Bear Up is a conversational support tool powered by artificial intelligence (\"The Supportive Friend\") designed to assist people experiencing panic attacks. This application is not a medical device and does not provide any diagnosis, medical advice, or treatment."
  },
  "disclaimer.h2.2": { fr: "2. Prérequis à l'utilisation", en: "2. Prerequisites for Use" },
  "disclaimer.p.2": {
    fr: "L'utilisation de cette application est strictement réservée aux personnes ayant préalablement reçu un diagnostic médical formel d'attaques de panique ou de trouble panique par un professionnel de santé qualifié (médecin, psychiatre). Vous ne devez pas utiliser Bear Up pour auto-diagnostiquer des symptômes physiques nouveaux ou inconnus.",
    en: "Use of this application is strictly reserved for individuals who have previously received a formal medical diagnosis of panic attacks or panic disorder from a qualified healthcare professional (doctor, psychiatrist). You must not use Bear Up to self-diagnose new or unknown physical symptoms."
  },
  "disclaimer.h2.3": { fr: "3. Limites de l'IA et Urgences", en: "3. AI Limitations and Emergencies" },
  "disclaimer.p.3a": {
    fr: "Bien que l'application dispose de verrous de sécurité (Safety Guardrails) pour détecter les urgences, vous reconnaissez que :",
    en: "Although the application has Safety Guardrails to detect emergencies, you acknowledge that:"
  },
  "disclaimer.li.3a": {
    fr: "L'IA peut parfois générer des réponses imprécises malgré notre protocole de test.",
    en: "The AI may sometimes generate inaccurate responses despite our testing protocol."
  },
  "disclaimer.li.3b": {
    fr: "En cas de douleurs thoraciques persistantes, de symptômes neurologiques (paralysie, troubles de la parole) ou de pensées suicidaires, vous devez immédiatement contacter les services d'urgence : le <strong>15</strong> (SAMU) ou le <strong>3114</strong> (Prévention Suicide).",
    en: "In case of persistent chest pain, neurological symptoms (paralysis, speech disorders) or suicidal thoughts, you must immediately contact emergency services: <strong>15</strong> (SAMU) or <strong>3114</strong> (Suicide Prevention)."
  },
  "disclaimer.h2.4": { fr: "4. Nature du service", en: "4. Nature of the Service" },
  "disclaimer.p.4": {
    fr: "Bear Up propose un soutien de type \"pair-à-pair\" (ami virtuel). Il ne remplace en aucun cas un suivi psychothérapeutique ou un traitement médicamenteux prescrit par un professionnel.",
    en: "Bear Up offers \"peer-to-peer\" support (virtual friend). It does not in any way replace psychotherapeutic follow-up or medication prescribed by a professional."
  },
  "disclaimer.h2.5": { fr: "5. Responsabilité", en: "5. Liability" },
  "disclaimer.p.5": {
    fr: "L'utilisateur est seul responsable de l'interprétation des conseils de grounding ou de respiration proposés. L'éditeur de Bear Up ne saurait être tenu responsable d'une utilisation de l'application en dehors du cadre du soutien aux attaques de panique diagnostiquées.",
    en: "The user is solely responsible for the interpretation of grounding or breathing advice provided. The publisher of Bear Up cannot be held liable for any use of the application outside the scope of support for diagnosed panic attacks."
  },

  // ══════════════════════════════════════
  // ── Support / FAQ ──
  // ══════════════════════════════════════
  "support.title": { fr: "Centre d'aide", en: "Help Center" },
  "support.subtitle": {
    fr: "Retrouvez les réponses aux questions les plus fréquentes sur Bear Up.",
    en: "Find answers to the most frequently asked questions about Bear Up."
  },
  "support.contact.title": { fr: "Besoin d'aide supplémentaire ?", en: "Need more help?" },
  "support.contact.desc": { fr: "Contactez notre équipe par e-mail :", en: "Contact our team by email:" },

  // Getting started
  "faq.cat.start": { fr: "Premiers pas", en: "Getting Started" },
  "faq.start.q1": { fr: "Qu'est-ce que Bear Up ?", en: "What is Bear Up?" },
  "faq.start.a1": {
    fr: "Bear Up est une application mobile de support conversationnel pour les personnes souffrant d'attaques de panique. Elle propose un assistant IA disponible 24h/24 et 7j/7 qui comprend les attaques de panique et t'aide à reprendre le contrôle grâce à des techniques validées (respiration, grounding, rassurance physiologique).",
    en: "Bear Up is a mobile conversational support application for people suffering from panic attacks. It offers a 24/7 AI assistant that understands panic attacks and helps you regain control through validated techniques (breathing, grounding, physiological reassurance)."
  },
  "faq.start.q2": { fr: "Comment créer mon compte ?", en: "How do I create my account?" },
  "faq.start.a2": {
    fr: "Tu peux créer un compte en un clic avec \"Se connecter avec Apple\" (sur iPhone/iPad) ou \"Continuer avec Google\" (sur tous les appareils). Aucun mot de passe à retenir ! Après connexion, tu acceptes les conditions d'utilisation et tu accèdes directement à la conversation.",
    en: "You can create an account in one click with \"Sign in with Apple\" (on iPhone/iPad) or \"Continue with Google\" (on all devices). No password to remember! After logging in, accept the terms of use and you'll have direct access to the conversation."
  },
  "faq.start.q3": { fr: "Bear Up remplace-t-il un professionnel de santé ?", en: "Does Bear Up replace a healthcare professional?" },
  "faq.start.a3": {
    fr: "<strong>Non, absolument pas.</strong> Bear Up est un outil de soutien complémentaire. Il ne pose aucun diagnostic, ne prescrit aucun traitement et ne fournit pas de conseils médicaux. Si tu souffres d'attaques de panique récurrentes, consulte un professionnel de santé (médecin, psychologue, psychiatre).",
    en: "<strong>No, absolutely not.</strong> Bear Up is a complementary support tool. It does not diagnose, prescribe treatment, or provide medical advice. If you suffer from recurrent panic attacks, consult a healthcare professional (doctor, psychologist, psychiatrist)."
  },

  // Conversation
  "faq.cat.conversation": { fr: "Conversation", en: "Conversation" },
  "faq.conv.q1": { fr: "Comment fonctionne la conversation ?", en: "How does the conversation work?" },
  "faq.conv.a1": {
    fr: "Tu peux soit écrire librement ce que tu ressens dans le champ texte (max 1000 caractères), soit utiliser l'un des 6 boutons de suggestion rapide. L'assistant IA te répondra en quelques secondes avec des techniques de respiration, de grounding, ou de rassurance adaptées à ce que tu décris.",
    en: "You can either freely write what you're feeling in the text field (max 1000 characters) or use one of the 6 quick suggestion buttons. The AI assistant will respond within seconds with breathing techniques, grounding, or reassurance tailored to what you describe."
  },
  "faq.conv.q2": { fr: "À quoi servent les boutons de suggestion ?", en: "What are the suggestion buttons for?" },
  "faq.conv.a2": {
    fr: "Les 6 boutons sont conçus pour les moments où taper du texte est difficile (mains tremblantes, vision trouble). Chaque bouton envoie un message prédéfini à l'assistant, par exemple \"J'ai besoin d'aide, je fais une attaque de panique\" ou \"Mon cœur bat super vite, j'ai peur que ce soit grave\". Il suffit d'un tap.",
    en: "The 6 buttons are designed for moments when typing is difficult (shaking hands, blurred vision). Each button sends a predefined message to the assistant, for example \"I need help, I'm having a panic attack\" or \"My heart is beating really fast, I'm scared it might be serious\". Just one tap."
  },
  "faq.conv.q3": { fr: "Puis-je écouter les messages au lieu de les lire ?", en: "Can I listen to messages instead of reading them?" },
  "faq.conv.a3": {
    fr: "Oui ! Chaque message de l'assistant dispose d'un bouton 🔊 pour la lecture vocale. Tu peux aussi activer la \"Lecture automatique\" dans les paramètres (⚙️ > Préférences) pour que chaque réponse soit lue automatiquement à voix haute.",
    en: "Yes! Every assistant message has a 🔊 button for voice playback. You can also enable \"Auto-play\" in settings (⚙️ > Preferences) so that each response is automatically read aloud."
  },
  "faq.conv.q4": { fr: "Comment démarrer une nouvelle conversation ?", en: "How do I start a new conversation?" },
  "faq.conv.a4": {
    fr: "Appuie sur le bouton 🔄 en haut à droite de l'écran de conversation. Cela effacera tous les messages et réinitialisera la conversation. Tu peux repartir à zéro à tout moment.",
    en: "Tap the 🔄 button in the top right of the conversation screen. This will clear all messages and reset the conversation. You can start fresh at any time."
  },

  // Personas
  "faq.cat.personas": { fr: "Personas", en: "Personas" },
  "faq.persona.q1": { fr: "Quelle est la différence entre les deux personas ?", en: "What's the difference between the two personas?" },
  "faq.persona.a1": {
    fr: "<strong>L'Ami Solidaire</strong> 🤝 est un ami casual qui te tutoie et te rassure avec des mots simples et chaleureux. Il utilise des emojis et un ton empathique.<br><br><strong>L'Assistant Clinique</strong> 🧠 est un accompagnateur structuré qui vous vouvoie et rassure par la science. Il explique les mécanismes physiologiques (adrénaline, système nerveux, cortisol) avec un vocabulaire précis.",
    en: "<strong>The Supportive Friend</strong> 🤝 is a casual friend who reassures you with simple, warm words. Uses emojis and an empathetic tone.<br><br><strong>The Clinical Assistant</strong> 🧠 is a structured companion that reassures through science. Explains physiological mechanisms (adrenaline, nervous system, cortisol) with precise vocabulary."
  },
  "faq.persona.q2": { fr: "Comment changer de persona ?", en: "How do I switch personas?" },
  "faq.persona.a2": {
    fr: "Va dans les paramètres (⚙️) puis dans la section \"Sélection de persona\". Clique sur la carte du persona souhaité. Note que changer de persona réinitialisera ta conversation en cours. L'Assistant Clinique nécessite un abonnement premium.",
    en: "Go to settings (⚙️) then to the \"Persona selection\" section. Tap the desired persona card. Note that switching personas will reset your current conversation. The Clinical Assistant requires a premium subscription."
  },

  // Premium
  "faq.cat.premium": { fr: "Abonnement Premium", en: "Premium Subscription" },
  "faq.premium.q1": { fr: "Combien de messages gratuits ai-je ?", en: "How many free messages do I get?" },
  "faq.premium.a1": {
    fr: "Tu disposes de 20 messages gratuits avec l'assistant IA. Ce quota est lié à ton appareil (pas à ton compte). Après avoir utilisé les 20 messages, tu pourras toujours utiliser les boutons de suggestion pour recevoir des réponses pré-enregistrées (techniques de respiration, grounding, etc.).",
    en: "You get 20 free messages with the AI assistant. This quota is linked to your device (not your account). After using all 20 messages, you can still use the suggestion buttons to receive pre-recorded responses (breathing techniques, grounding, etc.)."
  },
  "faq.premium.q2": { fr: "Que comprend l'abonnement premium ?", en: "What does the premium subscription include?" },
  "faq.premium.a2": {
    fr: "L'abonnement premium te donne un accès illimité aux messages avec l'assistant IA (plus de limite de 20 messages) et débloque le persona \"L'Assistant Clinique\" 🧠. Tu bénéficies également de toutes les futures fonctionnalités en avant-première.",
    en: "The premium subscription gives you unlimited access to AI messages (no more 20-message limit) and unlocks \"The Clinical Assistant\" persona 🧠. You also get early access to all future features."
  },
  "faq.premium.q3": { fr: "Comment restaurer mes achats ?", en: "How do I restore my purchases?" },
  "faq.premium.a3": {
    fr: "Va dans les paramètres (⚙️) puis clique sur \"Restaurer mes achats\". Cela vérifiera automatiquement tes achats précédents via l'App Store ou Google Play et réactivera ton abonnement premium si applicable.",
    en: "Go to settings (⚙️) then tap \"Restore my purchases\". This will automatically verify your previous purchases through the App Store or Google Play and reactivate your premium subscription if applicable."
  },
  "faq.premium.q4": { fr: "Comment annuler mon abonnement ?", en: "How do I cancel my subscription?" },
  "faq.premium.a4": {
    fr: "L'abonnement est géré par l'App Store (Apple) ou Google Play. Pour l'annuler, va dans les paramètres de ton store : sur iOS, Réglages > ton nom > Abonnements ; sur Android, Google Play > Paiements et abonnements. Tu peux aussi accéder à la gestion depuis Bear Up via ⚙️ > \"Gérer mon abonnement\".",
    en: "The subscription is managed by the App Store (Apple) or Google Play. To cancel, go to your store settings: on iOS, Settings > your name > Subscriptions; on Android, Google Play > Payments & subscriptions. You can also access management from Bear Up via ⚙️ > \"Manage my subscription\"."
  },

  // Safety
  "faq.cat.safety": { fr: "Sécurité et confidentialité", en: "Safety & Privacy" },
  "faq.safety.q1": { fr: "Que se passe-t-il si l'app détecte une urgence ?", en: "What happens if the app detects an emergency?" },
  "faq.safety.a1": {
    fr: "Bear Up intègre des garde-fous de sécurité qui détectent automatiquement certaines situations critiques (pensées suicidaires, symptômes cardiaques persistants, symptômes neurologiques). Dans ces cas, l'application affiche un message pré-écrit (jamais généré par l'IA) avec les numéros d'urgence appropriés : le 3114 (prévention du suicide) et le 15 (SAMU). La sécurité prime toujours.",
    en: "Bear Up integrates safety guardrails that automatically detect certain critical situations (suicidal thoughts, persistent cardiac symptoms, neurological symptoms). In these cases, the application displays a pre-written message (never AI-generated) with appropriate emergency numbers: 3114 (suicide prevention) and 15 (SAMU). Safety always comes first."
  },
  "faq.safety.q2": { fr: "Mes conversations sont-elles confidentielles ?", en: "Are my conversations confidential?" },
  "faq.safety.a2": {
    fr: "Oui. Tes conversations sont stockées localement sur ton appareil. Elles sont envoyées de manière sécurisée (HTTPS/TLS) à notre serveur uniquement pour générer la réponse de l'IA, mais ne sont pas conservées sur nos serveurs. Tu peux effacer tes conversations à tout moment en utilisant le bouton 🔄.",
    en: "Yes. Your conversations are stored locally on your device. They are securely sent (HTTPS/TLS) to our server only to generate the AI response, but are not stored on our servers. You can clear your conversations at any time using the 🔄 button."
  },
  "faq.safety.q3": { fr: "Quelles données collectez-vous ?", en: "What data do you collect?" },
  "faq.safety.a3": {
    fr: "Nous collectons uniquement les données nécessaires au fonctionnement : ton adresse e-mail et fournisseur de connexion (Apple/Google), un identifiant anonyme d'appareil pour le quota, et ton statut d'abonnement. Pour plus de détails, consulte notre <a href=\"privacy.html\">Politique de confidentialité</a>.",
    en: "We only collect data necessary for operation: your email address and login provider (Apple/Google), an anonymous device identifier for quota tracking, and your subscription status. For more details, see our <a href=\"privacy.html\">Privacy Policy</a>."
  },

  // Technical
  "faq.cat.technical": { fr: "Questions techniques", en: "Technical Questions" },
  "faq.tech.q1": { fr: "Sur quels appareils fonctionne Bear Up ?", en: "What devices does Bear Up work on?" },
  "faq.tech.a1": {
    fr: "Bear Up est disponible sur iOS (iPhone et iPad) et Android. La connexion Apple est disponible uniquement sur les appareils Apple, tandis que la connexion Google fonctionne sur tous les appareils.",
    en: "Bear Up is available on iOS (iPhone and iPad) and Android. Apple Sign-In is only available on Apple devices, while Google Sign-In works on all devices."
  },
  "faq.tech.q2": { fr: "L'application fonctionne-t-elle hors ligne ?", en: "Does the app work offline?" },
  "faq.tech.a2": {
    fr: "L'assistant IA nécessite une connexion internet pour fonctionner. Cependant, si ton quota est épuisé (mode statique), les réponses pré-enregistrées des boutons de suggestion fonctionnent sans connexion, car elles sont intégrées directement dans l'application.",
    en: "The AI assistant requires an internet connection to work. However, if your quota is exhausted (static mode), the pre-recorded responses from suggestion buttons work without a connection, as they are built directly into the application."
  },
  "faq.tech.q3": { fr: "L'application est-elle accessible ?", en: "Is the application accessible?" },
  "faq.tech.a3": {
    fr: "Oui, Bear Up est conçu pour être utilisable pendant une attaque de panique, ce qui implique une accessibilité renforcée : grandes cibles tactiles (min 48×48px), police minimum 14-16px, contraste élevé (WCAG AA), et accès direct à la conversation sans navigation complexe.",
    en: "Yes, Bear Up is designed to be usable during a panic attack, which implies enhanced accessibility: large touch targets (min 48×48px), minimum 14-16px font, high contrast (WCAG AA), and direct access to conversation without complex navigation."
  },
};

// ── i18n Engine ──
function getLang() {
  const stored = localStorage.getItem("bearup-lang");
  if (stored) return stored;
  return navigator.language.startsWith("fr") ? "fr" : "en";
}

function setLang(lang) {
  localStorage.setItem("bearup-lang", lang);
  applyTranslations(lang);
  updateLangButtons(lang);
  document.documentElement.lang = lang;
}

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const t = translations[key];
    if (!t) return;
    const text = t[lang] || t.en;
    if (el.hasAttribute("data-i18n-html")) {
      el.innerHTML = text;
    } else if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = text;
    } else {
      el.innerHTML = text;
    }
  });
}

function updateLangButtons(lang) {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

// ── Navigation ──
function initNav() {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (!nav) return;

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  });

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      const isOpen = links.classList.contains("open");
      toggle.setAttribute("aria-expanded", isOpen);
    });

    links.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => links.classList.remove("open"));
    });
  }
}

// ── Scroll reveal ──
function initReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// ── FAQ Accordion ──
function initAccordion() {
  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const answer = item.querySelector(".faq-answer");
      const isActive = item.classList.contains("active");

      // close all
      document.querySelectorAll(".faq-item.active").forEach(active => {
        active.classList.remove("active");
        active.querySelector(".faq-answer").style.maxHeight = null;
      });

      // toggle clicked
      if (!isActive) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

// ── Smooth scroll for anchor links ──
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// ── Email anti-bot protection ──
function initEmailProtection() {
  document.querySelectorAll(".email-protected").forEach(el => {
    const u = el.dataset.u;
    const d = el.dataset.d;
    if (u && d) {
      const addr = u + "@" + d;
      el.href = "mai" + "lto:" + addr;
      el.textContent = addr;
    }
  });
}

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  const lang = getLang();
  setLang(lang);
  initNav();
  initReveal();
  initAccordion();
  initSmoothScroll();
  initEmailProtection();

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
});
