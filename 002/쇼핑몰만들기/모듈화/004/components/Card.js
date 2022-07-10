export const Card = ({ goods }) => {
    const url = 'http://test.api.weniv.co.kr/' + goods.thumbnailImg
    return (
        <li className="product-item">
            <div className="product-img">
                <img src={url} />
            </div>
            <strong className="product-name sl-ellipsis">{goods.productName}</strong>
            <button className="like-btn"></button>
            <div className="product-price">
                <strong className="price m-price">{goods.price}<span>원</span></strong>
            </div>
        </li>
    )
}