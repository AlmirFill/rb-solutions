'use client'

import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useEffect } from 'react'

export default function Carousel() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 24 },
      },
    },
    renderMode: 'performance',
  })

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 4000)
    return () => clearInterval(interval)
  }, [instanceRef])

  const imagePaths = Array.from({ length: 12 }, (_, i) => `/img${i + 1}.jpeg`)

  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">Galeria do Brete</h2>
      <div ref={sliderRef} className="keen-slider max-w-7xl mx-auto">
        {imagePaths.map((src, index) => (
          <div
            key={index}
            className="keen-slider__slide flex justify-center items-center"
          >
            <div className="relative w-full max-w-md h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-lg shadow-black/10 transition-transform duration-700 ease-in-out">
              <Image
                src={src}
                alt={`Imagem ${index + 1}`}
                fill
                quality={80}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
