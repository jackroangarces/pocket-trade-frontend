import Image from 'next/image';

export interface Card {
  id: string;
  name: string;
  image: string;
  expansion: string;
  rarity: number;
  owner: string;
}

export default function CardItem({ card }: { card: Card }) {
  return (
    <div className="border p-4 rounded shadow">
      <Image
        src={card.image}
        alt={card.name}
        width={524} // you can keep this or adjust as needed
        height={731} // same for height
        className="rounded object-cover" // Ensures the image fits and is rounded
      />
      <h2 className="text-lg font-bold">{card.name}</h2>
      <p>Expansion: {card.expansion}</p>
      <p>Rarity: {card.rarity}</p>
      <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
        View Offers
      </button>
    </div>
  );
}