"use client"

import Image from "next/image"

export function CustomerLogos() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
      <div className="h-16 flex items-center justify-center">
        <Image
          src="/images/logos/planeta.webp"
          alt="Grupo Planeta"
          width={180}
          height={50}
          className="h-auto max-h-12 w-auto object-contain"
        />
      </div>
      <div className="h-16 flex items-center justify-center">
        <Image
          src="/images/logos/alphaeditorial.webp"
          alt="Alphaeditorial"
          width={180}
          height={50}
          className="h-auto max-h-10 w-auto object-contain"
        />
      </div>
      <div className="h-16 flex items-center justify-center">
        <Image
          src="/images/logos/bajalibros.webp"
          alt="BajaLibros.com"
          width={180}
          height={50}
          className="h-auto max-h-12 w-auto object-contain"
        />
      </div>
      <div className="h-16 flex items-center justify-center">
        <Image
          src="/images/logos/latercera.webp"
          alt="La Tercera"
          width={200}
          height={50}
          className="h-auto max-h-10 w-auto object-contain"
        />
      </div>
      <div className="h-16 flex items-center justify-center">
        <Image
          src="/images/logos/marcombo.webp"
          alt="Marcombo"
          width={180}
          height={50}
          className="h-auto max-h-12 w-auto object-contain"
        />
      </div>
      <div className="h-16 flex items-center justify-center">
        <Image
          src="/images/logos/penguin.webp"
          alt="Penguin Random House Grupo Editorial"
          width={220}
          height={50}
          className="h-auto max-h-14 w-auto object-contain"
        />
      </div>
    </div>
  )
}
