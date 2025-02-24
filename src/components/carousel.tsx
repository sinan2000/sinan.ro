// CarouselComponent.jsx
import Image from 'next/image';
import { stacks, categories } from '@/app/data';

const categoryMap = categories.reduce((acc, cat) => {
  acc[cat.key] = cat;
  return acc;
}, {} as Record<string, { key: string; name: string; styles: string }>);

const categoryStyles = {
  infrastructure: 'bg-blue-100 text-blue-600',
  web: 'bg-emerald-100 text-emerald-600',
  mobile: 'bg-indigo-100 text-indigo-600',
  design: 'bg-fuchsia-100 text-fuchsia-600',
  database: 'bg-amber-100 text-amber-600',
  automation: 'bg-orange-100 text-orange-600',
  analytics: 'bg-teal-100 text-teal-600',
  desktop: 'bg-gray-100 text-gray-600',
};

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