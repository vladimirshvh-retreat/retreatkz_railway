
export interface DetailPageData {
    slug: string;
    title: string;
    description: string; // Short description for cards
    content: string; // Long rich text content
    images: string[]; // Array of image URLs
    video?: string; // Optional video URL
    tag?: string;
    subtitle?: string; // For Vibe/Program (e.g., "Day 1")
}

const PLACEHOLDER_CONTENT = `
    <p>Здесь будет подробное описание. Это место для вашего уникального контента, который раскроет суть этого блока.</p>
    <br/>
    <h3>Что вас ждет:</h3>
    <ul>
        <li>Глубокое погружение в практику</li>
        <li>Индивидуальный подход к каждому участнику</li>
        <li>Незабываемая атмосфера и поддержка</li>
    </ul>
    <br/>
    <p>Мы создали это пространство, чтобы вы могли полностью расслабиться и посвятить время себе. Каждая деталь продумана с любовью и заботой о вашем комфорте.</p>
`;

export const packagesData: DetailPageData[] = [
    {
        slug: "body-mind",
        title: "Практики для тела и ума",
        description: "Ежедневные медитации, дыхательные техники, йога, цигун, саунд-хилинг и телесные практики. Вы расслабляетесь, отпускаете напряжение, восстанавливаете энергию и чувствуете живость тела.",
        content: PLACEHOLDER_CONTENT,
        images: [
            "/images/packages/practices-1.png",
            "/images/packages/practices-2.png",
            "/images/packages/practices-3.png"
        ],

    },
    {
        slug: "silence-detox",
        title: "🌊 Тишина и очищение",
        description: "Режим частичного молчания и детокс от телефона помогают услышать свой внутренний голос без внешней суеты.",
        content: PLACEHOLDER_CONTENT,
        images: [
            "/images/packages/silence-1.jpg",
            "/images/packages/silence-2.jpg",
            "/images/packages/silence-3.png"
        ],
    },
    {
        slug: "nature-space",
        title: "☀️ Природа и пространство",
        description: "Зелёные сады, спокойные маршруты для прогулок, тишина за столом — всё направлено на глубокое присутствие.",
        content: PLACEHOLDER_CONTENT,
        images: [
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1501854140884-074bf6f2a3e?q=80&w=800&auto=format&fit=crop"
        ],
    },
    {
        slug: "integration-rituals",
        title: "💫 Интеграция и ритуалы",
        description: "Каждый день — новое погружение. Финал ретрита — древний балийский ритуал очищения водой, символ нового этапа и внутреннего обновления.",
        content: PLACEHOLDER_CONTENT,
        images: [
            "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop"
        ],
    },
    {
        slug: "bali-journey",
        title: "Путешествие по Бали",
        description: "Красота природы, вулканы, серфинг и многое другое",
        content: PLACEHOLDER_CONTENT,
        images: [
            "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=800&auto=format&fit=crop"
        ],
    },
    {
        slug: "support-love",
        title: "Поддержка и Любовь",
        description: "Приглашаем стать частью большой семьи, которая подарит любовь, понимание и заботу.",
        content: PLACEHOLDER_CONTENT,
        images: [
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop"
        ],
    },
];

export const communityData: DetailPageData[] = [
    {
        slug: "paradise",
        title: "Просто на маленьком кусочке рая",
        description: "В мире, где мы каждый день живём на скорости, становится всё труднее услышать - самое важное — себя.",
        content: PLACEHOLDER_CONTENT,
        images: [
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
        ],
    },
    {
        slug: "breathing-space",
        title: "Тишина, дыхание, движения, пространство",
        description: "всё здесь создано для мягкого перезапуска и возвращения к жизни в присутствии",
        content: PLACEHOLDER_CONTENT,
        images: [
            "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
        ],
    },
    {
        slug: "comfort",
        title: "в комфортных условиях",
        description: "почувствовать себя и насладиться путешествием к себе.",
        content: PLACEHOLDER_CONTENT,
        images: [
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop"
        ],
    },
];

export const programData: DetailPageData[] = [
    {
        slug: "day-1",
        subtitle: "День 1",
        title: "Знакомство с собой",
        description: "Пробуждение твоего тела, адаптация, знакомство, расслабление",
        content: PLACEHOLDER_CONTENT,
        images: ["https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"],
    },
    {
        slug: "day-2",
        subtitle: "День 2",
        title: "Погружение",
        description: "Пойдем с тобой к тебе. Интенсивно, но с заботой, приветствуем ум.",
        content: PLACEHOLDER_CONTENT,
        images: ["https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=800&auto=format&fit=crop"],
    },
    {
        slug: "day-3",
        subtitle: "День 3",
        title: "Настоящий",
        description: "Узнай себя, через страхи, ограничения, установки, тело - расслабься.",
        content: PLACEHOLDER_CONTENT,
        images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"],
    },
    {
        slug: "day-4",
        subtitle: "День 4",
        title: "Добро пожаловать в жизнь",
        description: "Познай себя, когда можно по-другому.",
        content: PLACEHOLDER_CONTENT,
        images: ["https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=800&auto=format&fit=crop"],
    },
    {
        slug: "day-5",
        subtitle: "День 5",
        title: "Любовь",
        description: "Подари любовь себе.",
        content: PLACEHOLDER_CONTENT,
        images: ["https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop"],
    },
    {
        slug: "day-6-7",
        subtitle: "День 6-7",
        title: "Открой для себя остров Бали",
        description: "Путешествия, отдых, природа и открытие острова богов.",
        content: PLACEHOLDER_CONTENT,
        images: ["https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop"],
    },
];

export function getPackageBySlug(slug: string) {
    return packagesData.find((item) => item.slug === slug);
}

export function getCommunityBySlug(slug: string) {
    return communityData.find((item) => item.slug === slug);
}

export function getProgramBySlug(slug: string) {
    return programData.find((item) => item.slug === slug);
}
