export interface BettingSite {
  id: string
  name: string
  logo: string
  score: number
  bonus: string
  bonusCode: string
  features: string[]
  paymentMethods: string[]
  link: string
}

export const bettingSites: BettingSite[] = [
  {
    id: "betiton",
    name: "betiton",
    logo: "/betiton.png",
    score: 9.8,
    bonus: "BET €10 GET €50",
    bonusCode: "BONUS50",
    features: ["Live Streaming", "Cash Out Feature", "Mobile App"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.betiton.com/en-ie/sport/",
  },
  {
    id: "quinn",
    name: "quinn",
    logo: "/quinn.png",
    score: 9.6,
    bonus: "BET €10 GET €10",
    bonusCode: "PP10",
    features: ["Fast Payouts", "Live Betting", "Loyalty Program"],
    paymentMethods: ["Visa/Mastercard", "Skrill", "Neteller"],
    link: "https://www.quinnbet.com/ie/sports",
  },
  {
    id: "mrplay",
    name: "mrplay",
    logo: "/Screenshot_1222.png",
    score: 9.3,
    bonus: "BET €5 GET €20",
    bonusCode: "BF20",
    features: ["Betting Exchange", "Best Odds", "Cash Out"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://ie.mrplay.com/sport/",
  }
]
