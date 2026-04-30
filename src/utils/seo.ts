type SeoConfig = {
  title: string
  description: string
  canonicalUrl: string
}

const setMetaContent = (selector: string, value: string) => {
  const element = document.querySelector(selector)
  if (element) {
    element.setAttribute('content', value)
  }
}

export const setSeo = ({ title, description, canonicalUrl }: SeoConfig) => {
  document.title = title

  const canonical = document.querySelector('link[rel="canonical"]')
  if (canonical) {
    canonical.setAttribute('href', canonicalUrl)
  }

  setMetaContent('meta[name="description"]', description)
  setMetaContent('meta[property="og:title"]', title)
  setMetaContent('meta[property="og:description"]', description)
  setMetaContent('meta[property="og:url"]', canonicalUrl)
  setMetaContent('meta[name="twitter:title"]', title)
  setMetaContent('meta[name="twitter:description"]', description)
}
