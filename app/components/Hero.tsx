import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gray-100 py-16 px-4 flex flex-col-reverse md:flex-row items-center gap-8">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">Brete para contenção e pesagem bovina</h1>
        <p className="mb-6 text-lg text-gray-700">
          Facilidade no manejo, compatibilidade com sistema de barras, novo modelo de pescoceira diminuindo as chances do animal escapa da pescoceira,
        </p>
        <a
          href="https://wa.me/559181111342?text=Ola+vim+pelo+site+e+tenho+interesse+no+brete."
          className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition"
        >
          Fale com o vendedor
        </a>
      </div>
      <div className="md:w-1/2">
        <Image
          src="/brete-hero.jpg" // Caminho relativo à pasta /public
          alt="Brete de contenção moderno"
          width={600}
          height={400}
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
    </section>
  )
}
