import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center shadow bg-white">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className="font-bold text-xl">Troncos e balanças Borges</span>
      </div>
      {/* <nav>
        <a href="#contato" className="text-sm text-gray-600 hover:text-black transition">Contato</a>
      </nav> */}
    </header>
  )
}
