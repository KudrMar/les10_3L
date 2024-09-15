export interface IItem {
    listing_id: number;
    url?: string;
    MainImage?: IMainImage;
    title?: string;
    currency_code?: string;
    price?: string;
    quantity?: number;
}

interface IMainImage {
    url_570xN: string;
}

interface IItems {
    items: IItem[];
}

export default function Listing({ items }: IItems) {
    const titleCheck = (title: string | undefined): string | undefined => {
        return title ? title.length > 50 ? title.slice(0, 50) + "..." : title : "..."
    }

    const priceCheck = (price: string | undefined, currency_code: string | undefined): string | undefined => {
        switch (currency_code) {
            case "USD": return `$${price}`;
            case "EUR": return `€${price}`;
            default:
                return `${price} ${currency_code}`;
        }
    }

    const levelCheck = (quantity: number | undefined): string => {
        if (!quantity) { return '' }
        else if (quantity > 20) { return 'level-high' }
        else if (quantity > 10) { return 'level-medium' }
        else return 'level-low'
    }

    return (
        <div className="item-list">
            {items.map((item) => (
                <div className={"item"} key={item.listing_id}>
                    <div className="item-image">
                        <a href={item.url}>
                            <img alt={item.title} src={item.MainImage?.url_570xN} />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{titleCheck(item.title)}</p>
                        <p className="item-price">{priceCheck(item.price, item.currency_code)}</p>
                        <p className={`item-quantity ${levelCheck(item.quantity)}`}>{item.quantity} left</p>
                    </div>
                </div>

            ))}
        </div>
    );
}


Listing.defaultProps = {
    items: [],
};
