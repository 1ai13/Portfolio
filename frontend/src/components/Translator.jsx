import locales from "../locales/locales.json";
import { useLanguage } from "./LanguageManager";

export default function translations() {
  const { lang } = useLanguage();
  return locales[lang];
}
