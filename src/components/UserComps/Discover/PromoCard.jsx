import { MdAutoAwesome } from "react-icons/md"

const PromoCard = ({ promo, onApply }) => {
    return (
        <div className="bg-primary text-on-primary rounded-2xl p-6 flex flex-col gap-4 mb-6 break-inside-avoid">
            <span className="w-10 h-10 rounded-full bg-white/15 center">
                <MdAutoAwesome size={20} />
            </span>

            <div>
                <h4 className="font-headline-md text-body-lg font-bold text-on-primary">{promo.title}</h4>
                <p className="font-body-sm text-body-sm text-on-primary/70 mt-1">{promo.description}</p>
            </div>

            <button
                onClick={() => onApply?.(promo.id)}
                className="w-fit px-4 py-2 rounded-lg bg-on-primary text-primary font-body-sm text-body-sm font-bold"
            >
                {promo.ctaLabel}
            </button>
        </div>
    )
}

export default PromoCard