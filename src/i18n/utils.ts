import { ui, defaultLang, routes } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const pathName = path.replaceAll("/", "");
    const hasTranslation =
      defaultLang !== l &&
      routes[l as keyof typeof routes] !== undefined &&
      routes[l as keyof typeof routes][
        pathName as keyof (typeof routes)[keyof typeof routes]
      ] !== undefined;

    const translatedPath = hasTranslation
      ? "/" +
        routes[l as keyof typeof routes][
          pathName as keyof (typeof routes)[keyof typeof routes]
        ]
      : path;

    return !l || l === defaultLang ? translatedPath : `/${l}${translatedPath}`;
  };
}

export function getRouteFromUrl(url: URL): string {
  const pathname = new URL(url).pathname;
  const parts = pathname.split("/");
  
  // Remove language prefix if present
  if (parts.length > 1 && (parts[1] === "en" || parts[1] === "es")) {
    parts.splice(1, 1);
  }
  
  const pathWithoutLang = parts.join("/") || "/";
  const pathName = pathWithoutLang.replaceAll("/", "");
  
  if (!pathName) return "/";

  const currentLang = getLangFromUrl(url);
  if (currentLang === defaultLang) {
    return pathWithoutLang;
  }

  // Reverse lookup the original route key from the dictionary
  const langRoutes = routes[currentLang as keyof typeof routes];
  if (langRoutes) {
    const originalKey = Object.entries(langRoutes).find(
      ([_, translated]) => translated === pathName
    )?.[0];
    
    if (originalKey) {
      return `/${originalKey}`;
    }
  }

  return pathWithoutLang;
}
