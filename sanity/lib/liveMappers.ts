import type {
  HomePageContent,
  ProductContent,
  SiteSettingsContent,
  SimplePageContent,
} from '@/sanity/lib/content'
import {urlForImage} from '@/sanity/lib/image'

const assetUrl = (image: unknown, fallback: string) =>
  urlForImage(image)?.width(1600).fit('max').auto('format').url() || fallback

export function mapLiveSiteSettings(initial: SiteSettingsContent, data: any): SiteSettingsContent {
  if (!data) return initial

  return {
    ...initial,
    siteTitle: data.siteTitle || initial.siteTitle,
    companyName: data.companyName || initial.companyName,
    domain: data.domain || initial.domain,
    logoSrc: assetUrl(data.logo, initial.logoSrc),
    contactLabel: data.contactLabel || initial.contactLabel,
    referencesTag: data.referencesTag || initial.referencesTag,
    references:
      data.references?.map((item: any, index: number) => ({
        _key: item?._key,
        alt: item?.alt || initial.references[index]?.alt || `Referencia ${index + 1}`,
        src: assetUrl(item?.image, initial.references[index]?.src || '/refs/ref4.jpg'),
      })) || initial.references,
    navItems:
      data.navItems?.map((item: any, index: number) => ({
        _key: item?._key,
        href: item?.href || initial.navItems[index]?.href || '/',
        label: item?.label || initial.navItems[index]?.label || '',
      })) || initial.navItems,
    footerLinks:
      data.footerLinks?.map((item: any, index: number) => ({
        _key: item?._key,
        href: item?.href || initial.footerLinks[index]?.href || '/',
        label: item?.label || initial.footerLinks[index]?.label || '',
      })) || initial.footerLinks,
    footerAddress: data.footerAddress || initial.footerAddress,
    footerCredit: data.footerCredit || initial.footerCredit,
  }
}

export function mapLiveHomePage(initial: HomePageContent, data: any): HomePageContent {
  if (!data) return initial

  return {
    ...initial,
    ...data,
    heroBackgroundImageSrc: assetUrl(data.heroBackgroundImage, initial.heroBackgroundImageSrc),
    heroProductImageSrc: assetUrl(data.heroProductImage, initial.heroProductImageSrc),
    aboutImageSrc: assetUrl(data.aboutImage, initial.aboutImageSrc),
    heroStats:
      data.heroStats?.length
        ? data.heroStats.map((item: any, index: number) => ({
            _key: item._key,
            value: item.value || initial.heroStats[index]?.value || '',
            label: item.label || initial.heroStats[index]?.label || '',
          }))
        : initial.heroStats,
    services:
      data.services?.length
        ? data.services.map((service: any, index: number) => ({
            _key: service._key,
            tag: service.tag || initial.services[index]?.tag || '',
            title: service.title || initial.services[index]?.title || '',
            description: service.description || initial.services[index]?.description || '',
            buttonLabel: service.buttonLabel || initial.services[index]?.buttonLabel || '',
            buttonHref: service.buttonHref || initial.services[index]?.buttonHref || '/kontakt',
            imageSrc: assetUrl(service.image, initial.services[index]?.imageSrc || '/images/elektricky-malotraktor.jpg'),
            imageAlt: service.title || initial.services[index]?.imageAlt || 'Obrázok služby',
            imageAlign: service.imageAlign || initial.services[index]?.imageAlign || 'left',
            imageFit: service.imageFit || initial.services[index]?.imageFit || 'contain',
          }))
        : initial.services,
    extras: data.extras?.length ? data.extras : initial.extras,
  }
}

export function mapLiveSimplePage(initial: SimplePageContent, data: any): SimplePageContent {
  if (!data) return initial

  return {
    ...initial,
    ...data,
    sections:
      data.sections?.map((section: any, index: number) => ({
        _key: section._key,
        tag: section.tag || initial.sections[index]?.tag || '',
        title: section.title || initial.sections[index]?.title || '',
        description: section.description || initial.sections[index]?.description || '',
        buttonLabel: section.buttonLabel || initial.sections[index]?.buttonLabel,
        buttonHref: section.buttonHref || initial.sections[index]?.buttonHref,
        imageSrc: assetUrl(section.image, initial.sections[index]?.imageSrc || '/images/elektricky-malotraktor.jpg'),
        imageAlt: section.title || initial.sections[index]?.imageAlt || 'Sekcia',
        imageAlign: section.imageAlign || initial.sections[index]?.imageAlign || 'left',
        imageFit: section.imageFit || initial.sections[index]?.imageFit || 'contain',
        bullets: section.bullets?.length ? section.bullets : initial.sections[index]?.bullets,
      })) || initial.sections,
    galleryCards:
      data.galleryCards?.map((card: any, index: number) => ({
        _key: card._key,
        title: card.title || initial.galleryCards[index]?.title || '',
        description: card.description || initial.galleryCards[index]?.description || '',
        imageSrc: assetUrl(card.image, initial.galleryCards[index]?.imageSrc || '/images/elektricky-malotraktor.jpg'),
        imageAlt: card.alt || initial.galleryCards[index]?.imageAlt || card.title || 'Galéria',
      })) || initial.galleryCards,
    processSteps:
      data.processSteps?.length
        ? data.processSteps.map((step: any, index: number) => ({
            _key: step._key,
            number: step.number || initial.processSteps[index]?.number || `${index + 1}`.padStart(2, '0'),
            title: step.title || initial.processSteps[index]?.title || '',
            description: step.description || initial.processSteps[index]?.description || '',
          }))
        : initial.processSteps,
  }
}

export function mapLiveProductsPage(initial: ProductContent, data: any): ProductContent {
  if (!data) return initial

  return {
    ...initial,
    ...data,
    heroImageSrc: assetUrl(data.heroImage, initial.heroImageSrc),
    introImageSrc: assetUrl(data.introImage, initial.introImageSrc),
    heroStats: data.heroStats?.length ? data.heroStats : initial.heroStats,
    introParagraphs: data.introParagraphs?.length ? data.introParagraphs : initial.introParagraphs,
    productCatalog:
      data.productCatalog?.map((item: any, index: number) => ({
        _key: item._key,
        badge: item.badge || initial.productCatalog[index]?.badge || '',
        title: item.title || initial.productCatalog[index]?.title || '',
        subtitle: item.subtitle || initial.productCatalog[index]?.subtitle || '',
        description: item.description || initial.productCatalog[index]?.description || '',
        imageSrc: assetUrl(item.image, initial.productCatalog[index]?.imageSrc || '/images/elektricky-malotraktor.jpg'),
        imageAlt: item.imageAlt || initial.productCatalog[index]?.imageAlt || item.title || 'Produkt',
        highlights: item.highlights?.length ? item.highlights : initial.productCatalog[index]?.highlights || [],
        documentsTitle: item.documentsTitle || initial.productCatalog[index]?.documentsTitle || 'Dokumenty na stiahnutie',
        documents:
          item.documents?.map((doc: any, docIndex: number) => ({
            _key: doc._key,
            label:
              doc.label ||
              doc.file?.asset?.originalFilename ||
              initial.productCatalog[index]?.documents[docIndex]?.label ||
              `Dokument ${docIndex + 1}`,
            url: doc.file?.asset?.url || initial.productCatalog[index]?.documents[docIndex]?.url || '#',
          })) || initial.productCatalog[index]?.documents || [],
        videosTitle: item.videosTitle || initial.productCatalog[index]?.videosTitle || 'Videá',
        videos:
          item.videos?.length
            ? item.videos.map((video: any) => ({
                _key: video._key,
                youtubeId: video.youtubeId,
                label: video.label,
              }))
            : initial.productCatalog[index]?.videos || [],
        galleryTitle: item.galleryTitle || initial.productCatalog[index]?.galleryTitle || 'Galéria',
        galleryImages:
          item.galleryImages?.map((image: any, imageIndex: number) => ({
            _key: image._key,
            src: assetUrl(image.image ?? image, initial.productCatalog[index]?.galleryImages[imageIndex]?.src || '/images/elektricky-malotraktor.jpg'),
            alt: image.alt || initial.productCatalog[index]?.galleryImages[imageIndex]?.alt || `${item.title || 'Produkt'} ${imageIndex + 1}`,
          })) || initial.productCatalog[index]?.galleryImages || [],
        specsTitle: item.specsTitle || initial.productCatalog[index]?.specsTitle || 'Parametre',
        specs:
          item.specs?.length
            ? item.specs.map((spec: any) => ({
                _key: spec._key,
                parameter: spec.parameter,
                value: spec.value,
              }))
            : initial.productCatalog[index]?.specs || [],
      })) || initial.productCatalog,
    benefits: data.benefits?.length ? data.benefits : initial.benefits,
    useCases: data.useCases?.length ? data.useCases : initial.useCases,
    dimensionImages:
      data.dimensionImages?.map((item: any, index: number) => ({
        src: assetUrl(item.image, initial.dimensionImages[index]?.src || '/images/rozmerythumb1.png'),
        alt: item.alt || initial.dimensionImages[index]?.alt || `Rozmery ${index + 1}`,
      })) || initial.dimensionImages,
    basicSpecs: data.basicSpecs?.length ? data.basicSpecs : initial.basicSpecs,
    batterySpecs: data.batterySpecs?.length ? data.batterySpecs : initial.batterySpecs,
    chargingSpecs: data.chargingSpecs?.length ? data.chargingSpecs : initial.chargingSpecs,
    equipmentGroups: data.equipmentGroups?.length ? data.equipmentGroups : initial.equipmentGroups,
    rangeCards:
      data.rangeCards?.map((card: any, index: number) => ({
        title: card.title || initial.rangeCards[index]?.title || '',
        badge: card.badge || initial.rangeCards[index]?.badge || '',
        badgeClass: card.badgeClass || initial.rangeCards[index]?.badgeClass || 'badge-std',
        info: card.info || initial.rangeCards[index]?.info || '',
        imageSrc: assetUrl(card.image, initial.rangeCards[index]?.imageSrc || '/images/dojazd1.jpg'),
      })) || initial.rangeCards,
    accessories:
      data.accessories?.map((item: any, index: number) => ({
        title: item.title || initial.accessories[index]?.title || '',
        description: item.description || initial.accessories[index]?.description || '',
        imageSrc: assetUrl(item.image, initial.accessories[index]?.imageSrc || '/images/prislusenstvo.jpg'),
        imageAlt: item.alt || initial.accessories[index]?.imageAlt || item.title || 'Príslušenstvo',
      })) || initial.accessories,
    certificates:
      data.certificates?.map((item: any, index: number) => ({
        title: item.title || initial.certificates[index]?.title || `Certifikát ${index + 1}`,
        alt: item.alt || initial.certificates[index]?.alt || `Certifikát ${index + 1}`,
        src: assetUrl(item.image, initial.certificates[index]?.src || '/images/certifikat1.jpg'),
      })) || initial.certificates,
    galleryImages:
      data.galleryImages?.map((item: any, index: number) => ({
        src: assetUrl(item.image ?? item, initial.galleryImages[index]?.src || '/images/elektricky-malotraktor.jpg'),
        alt: item.alt || initial.galleryImages[index]?.alt || `Galéria ${index + 1}`,
      })) || initial.galleryImages,
    videos: data.videos?.length ? data.videos : initial.videos,
  }
}
