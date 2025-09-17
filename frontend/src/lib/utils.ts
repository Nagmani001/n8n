import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function findAppeopriateName(name: string) {
  switch (name) {
    case "RESEND_API_KEY":
      return "Gmail account"

    case "TELEGRAM_API_KEY":
      return "Telegram account"
  }
}
