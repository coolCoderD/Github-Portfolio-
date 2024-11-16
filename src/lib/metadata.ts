import { Metadata } from 'next'

// TODO: Update metadata

export function constructMetadata({
  title = 'Diksha Sharma', // TODO: Add a custom title
  description = "I am a software engineer with a passion for building scalable and efficient web applications.", // TODO: Add a custom description
  image = '#', // TODO: Add a custom image
  icons = 'https://res.cloudinary.com/drts3ztiy/image/upload/v1731739247/Open_Peeps_-_Avatar_fbephv.png', // TODO: Add a custom icon
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@chrislonzo'
    },
    icons,
    metadataBase: new URL('https://www.chrislonzo.com'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
