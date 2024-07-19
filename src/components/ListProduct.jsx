import list1 from "../img/list1.png"
import list2 from "../img/list2.png"
import list3 from "../img/list3.png"
import list4 from "../img/list4.png"
import ProductListBadge from "./elements/ProductListBadge"

export default function ListProduct() {
    return (
        <div id="sm-category" className="flex flex-col px-10 gap-5">
            <ProductListBadge>
                <ProductListBadge.category title="Popular : " desc="View all" />
                <div id="content" className="flex items-center gap-3">
                    <div className="flex w-[180px]">
                        <img
                            className="rounded-[2vh]"
                            src={list1}
                            alt=""
                        />
                    </div>
                    <ProductListBadge.emblem title="Indonesian Beans" desc="Coffee Beans" price="$235.00" rating="4.9" />
                </div>
                <div id="content" className="flex items-center gap-3">
                    <div className="flex w-[180px]">
                        <img
                            className="rounded-[2vh]"
                            src={list4}
                            alt=""
                        />
                    </div>
                    <ProductListBadge.emblem title="Indonesian Beans" desc="Coffee Beans" price="$183.00" rating="4.9" />
                </div>
            </ProductListBadge>
            <ProductListBadge>
                <ProductListBadge.category title="Mewest : " desc="View all" />
                <div id="content" className="flex items-center gap-3">
                    <div className="flex w-[180px]">
                        <img
                            className="rounded-[2vh]"
                            src={list2}
                            alt=""
                        />
                    </div>
                    <ProductListBadge.emblem title="Indonesian Beans" desc="Coffee Beans" price="$95.00" rating="4.9" />
                </div>
            </ProductListBadge>
            <ProductListBadge>
                <ProductListBadge.category title="Recommended : " desc="View all" />
                <div id="content" className="flex items-center gap-3">
                    <div className="flex w-[180px]">
                        <img
                            className="rounded-[2vh]"
                            src={list3}
                            alt=""
                        />
                    </div>
                    <ProductListBadge.emblem title="Indonesian Beans" desc="Coffee Beans" price="$109.00" rating="4.9" />
                </div>
                <div id="content" className="flex items-center gap-3">
                    <div className="flex w-[180px]">
                        <img
                            className="rounded-[2vh]"
                            src={list2}
                            alt=""
                        />
                    </div>
                    <ProductListBadge.emblem title="Indonesian Beans" desc="Coffee Beans" price="$95.00" rating="4.9" />
                </div>
            </ProductListBadge>
            <ProductListBadge>
                <ProductListBadge.category title="Most Chosen : " desc="View all" />
                <div id="content" className="flex items-center gap-3">
                    <div className="flex w-[180px]">
                        <img
                            className="rounded-[2vh]"
                            src={list4}
                            alt=""
                        />
                    </div>
                    <ProductListBadge.emblem title="Indonesian Beans" desc="Coffee Beans" price="$183.00" rating="4.9" />
                </div>
            </ProductListBadge>
            <ProductListBadge>
                <ProductListBadge.category title="Best Sellers : " desc="View all" />
                <div id="content" className="flex items-center gap-3">
                    <div className="flex w-[180px]">
                        <img
                            className="rounded-[2vh]"
                            src={list1}
                            alt=""
                        />
                    </div>
                    <ProductListBadge.emblem title="Indonesian Beans" desc="Coffee Beans" price="$235.00" rating="4.9" />
                </div>
                <div id="content" className="flex items-center gap-3">
                    <div className="flex w-[180px]">
                        <img
                            className="rounded-[2vh]"
                            src={list4}
                            alt=""
                        />
                    </div>
                    <ProductListBadge.emblem title="Indonesian Beans" desc="Coffee Beans" price="$183.00" rating="4.9" />
                </div>
            </ProductListBadge>
        </div>
    )
}