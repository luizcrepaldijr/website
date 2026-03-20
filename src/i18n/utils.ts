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
    const pathName = path.replace(/^\/|\/$/g, "");
    const langRoutes = routes[l as keyof typeof routes];

    // Check for exact match first
    if (
      l !== defaultLang &&
      langRoutes &&
      langRoutes[pathName as keyof typeof langRoutes] !== undefined
    ) {
      const translatedPath = langRoutes[pathName as keyof typeof langRoutes];
      return `/${l}/${translatedPath}`;
    }

    // Check for partial match (like cases/slug)
    if (l !== defaultLang && langRoutes) {
      for (const [key, value] of Object.entries(langRoutes)) {
        if (pathName.startsWith(key + "/")) {
          const rest = pathName.slice(key.length);
          return `/${l}/${value}${rest}`;
        }
      }
    }

    return !l || l === defaultLang ? `/${pathName}` : `/${l}/${pathName}`;
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
  const pathName = pathWithoutLang.replace(/^\/|\/$/g, "");

  if (!pathName) return "/";

  const currentLang = getLangFromUrl(url);
  if (currentLang === defaultLang) {
    return pathWithoutLang;
  }

  // Reverse lookup the original route key from the dictionary
  const langRoutes = routes[currentLang as keyof typeof routes];
  if (langRoutes) {
    // Exact match
    const originalKey = Object.entries(langRoutes).find(
      ([_, translated]) => translated === pathName
    )?.[0];

    if (originalKey) {
      return `/${originalKey}`;
    }

    // Partial match (like casos/slug -> cases/slug)
    for (const [key, translated] of Object.entries(langRoutes)) {
      if (pathName.startsWith(translated + "/")) {
        const rest = pathName.slice(translated.length);
        return `/${key}${rest}`;
      }
    }
  }

  return pathWithoutLang;
}
