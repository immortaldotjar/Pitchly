import { motion } from "motion/react";

export default function StartupCard({ image, tags, name, description, avatars, funding }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-surface border border-outline-variant rounded-lg overflow-hidden hover:shadow-editorial transition-shadow duration-300"
    >
      <div className="h-48 relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/90 backdrop-blur rounded font-label-caps text-xs text-on-surface font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-headline-md text-body-lg font-bold mb-2">{name}</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between pt-6 border-t border-outline-variant/30">
          <div className="flex -space-x-2">
            {avatars.map((avatar, i) => (
              <img
                key={i}
                src={avatar}
                alt=""
                className="w-8 h-8 rounded-full border-2 border-surface object-cover"
              />
            ))}
          </div>
          <span className="font-numeric-data text-body-sm text-primary font-bold">{funding}</span>
        </div>
      </div>
    </motion.div>
  );
}