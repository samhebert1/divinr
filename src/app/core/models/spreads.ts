export interface FourCards {
    title: string;
    img: string;
    tarotName: string;
    tarotDesc: string;
    tarotAstroTitle: string;
    tarotAstroSymbol: string;
}

export interface TwelveCards {
    house: string;
    houseRuler: string;
    houseDesc: string;
    img: string;
    tarotName: string;
    tarotDesc: string;
    tarotAstroTitle?: string;
    tarotAstroSymbol?: string;
}


export const fourCards: FourCards[] = [
    { title: 'Fire | Psyche ', img: '', tarotName: '', tarotDesc: '', tarotAstroTitle: '_', tarotAstroSymbol: '_' },
    { title: 'Air | Thoughts ', img: '', tarotName: '', tarotDesc: '', tarotAstroTitle: '_', tarotAstroSymbol: '_' },
    { title: 'Water | Heart ', img: '', tarotName: '', tarotDesc: '', tarotAstroTitle: '_', tarotAstroSymbol: '_' },
    { title: 'Earth | Strength/Presence', img: '', tarotName: '', tarotDesc: '', tarotAstroTitle: '_', tarotAstroSymbol: '_' },
];

export const twelveCards: TwelveCards[] = [
    {
        house: `One`,
        houseRuler: `Aries`,
        houseDesc: `The Self`,
        img: ``,
        tarotName: ``,
        tarotDesc: ``,
        tarotAstroTitle: `_`,
        tarotAstroSymbol: `_`
    },
    {
        house: `Two`,
        houseRuler: `Taurus`,
        houseDesc: `Values and Possessions`,
        img: ``,
        tarotName: ``,
        tarotDesc: ``,
        tarotAstroTitle: `_`,
        tarotAstroSymbol: `_`
    },
    {
        house: `Three`,
        houseRuler: `Gemini`,
        houseDesc: `Communication`,
        img: ``,
        tarotName: ``,
        tarotDesc: ``,
        tarotAstroTitle: `_`,
        tarotAstroSymbol: `_`
    },
    {
        house: `Four`,
        houseRuler: `Cancer`,
        houseDesc: `The Home`,
        img: ``,
        tarotName: ``,
        tarotDesc: ``,
        tarotAstroTitle: `_`,
        tarotAstroSymbol: `_`
    },

    {
        house: `Five`,
        houseRuler: `Leo`,
        houseDesc: `Love & Pleasure`,
        img: ``,
        tarotName: ``,
        tarotDesc: ``,
        tarotAstroTitle: `_`,
        tarotAstroSymbol: `_`
    },
    {
        house: `Six`,
        houseRuler: `Virgo`,
        houseDesc: `Daily Routine & Health,`,
        img: ``,
        tarotName: ``,
        tarotDesc: ``,
        tarotAstroTitle: `_`,
        tarotAstroSymbol: `_`
    },
    {
        house: `Seven`,
        houseRuler: `Libra`,
        houseDesc: `1:1 Relations & Partnerships`,
        img: ``,
        tarotName: ``,
        tarotDesc: ``,
        tarotAstroTitle: `_`,
        tarotAstroSymbol: `_`
    },
    {
        house: `Eight`,
        houseRuler: `Scorpio`,
        houseDesc: `Death/Transformation`,
        img: ``,
        tarotName: ``,
        tarotDesc: ``,
        tarotAstroTitle: `_`,
        tarotAstroSymbol: `_`
    },

    {
        house: `Nine`,
        houseRuler: `Sagittarius`,
        houseDesc: `Future Plans & Outlook`,
        img: ``,
        tarotName: ``,
        tarotDesc: ``,
        tarotAstroTitle: `_`,
        tarotAstroSymbol: `_`
    },
    {
        house: `Ten`,
        houseRuler: `Capricorn`,
        houseDesc: `Career & Calling`,
        img: ``,
        tarotName: ``,
        tarotDesc: ``,
        tarotAstroTitle: `_`,
        tarotAstroSymbol: `_`
    },
    {
        house: `Eleven`,
        houseRuler: `Aquarius`,
        houseDesc: `Friends Social Groups`,
        img: ``,
        tarotName: ``,
        tarotDesc: ``,
        tarotAstroTitle: `_`,
        tarotAstroSymbol: `_`
    },
    {
        house: `Twelve`,
        houseRuler: `Pisces`,
        houseDesc: `The Hidden, Subconscious`,
        img: ``,
        tarotName: ``,
        tarotDesc: ``,
        tarotAstroTitle: `_`,
        tarotAstroSymbol: `_`
    }
];
