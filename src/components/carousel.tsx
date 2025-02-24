// CarouselComponent.jsx
import Image from 'next/image';
import { stacks, categories } from '@/app/data';

const categoryMap = categories.reduce((acc, cat) => {
  acc[cat.key] = cat;
  return acc;
}, {} as Record<string, { key: string; name: string; styles: string }>);

export default function CarouselComponent() {
  return (
    <div className="overflow-hidden group">
      <div className="flex w-max animate-scroll">
        {stacks.concat(stacks).map((stack, index) => {
          const cat = categoryMap[stack.category];
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-1/4 px-6"
            >
              <Image
                src={stack.icon}
                alt={stack.title}
                width={50}
                height={50}
                className="mb-2"
                aria-label={stack.title}
              />
              <span className="text-sm font-medium whitespace-nowrap">{stack.title}</span>
              <span className={`text-[11px] font-medium mt-1 px-2 py-0.5 rounded whitespace-nowrap ${cat.styles}`}>
                {cat.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};