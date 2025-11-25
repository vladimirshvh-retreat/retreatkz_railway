export const siteConfig = {
    contacts: {
        whatsapp: {
            number: "+7 (747) 623-85-68",
            link: "https://wa.me/77476238568",
        },
        telegram: {
            username: "@msobrigadoo",
            link: "https://t.me/msobrigadoo",
        }
    }
};

export function getWhatsAppLink(number: string) {
    // Remove non-numeric characters for the link
    const cleanNumber = number.replace(/\D/g, '');
    return `https://wa.me/${cleanNumber}`;
}

export function getTelegramLink(username: string) {
    // Remove @ if present
    const cleanUsername = username.replace('@', '');
    return `https://t.me/${cleanUsername}`;
}
