export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <h2 className="text-2xl font-bold text-center mb-10">O que estão dizendo</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-gray-800">
        <blockquote className="p-4 bg-white rounded shadow">
          “Gostei desse equipamento aí pela altura, não tem aquele degrau que não serve pra nada!!!”
        </blockquote>
        <blockquote className="p-4 bg-white rounded shadow">
          “Rapa o cara veio Aki no Maranhão fazer o meu equipamento”
        </blockquote>
        <blockquote className="p-4 bg-white rounded shadow">
          “Eu gostei foi do pistão, ele dá pressão sem precisar de puxar muito”
        </blockquote>
        <blockquote className="p-4 bg-white rounded shadow">
          “Gostei foi da pescosseira que ela segura bem o animal”
        </blockquote>
      </div>
    </section>
  )
}
