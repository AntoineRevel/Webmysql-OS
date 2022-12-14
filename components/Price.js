
export default function Price({ price }) {
  const {time,ethbtc, ethusd } = price

  return (
    <div
      className="max-w-[250px] rounded overflow-hidden shadow-lg"
      key={product.time}
    >

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{time}</div>
        <p className="text-gray-700 text-base">{ethbtc}</p>
        <p className="text-gray-900 text-xl">${ethusd}</p>
      </div>
    </div>
  )
}
