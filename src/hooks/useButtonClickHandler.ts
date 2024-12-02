import {useAddGoodIntoCart, useDeleteGoodFromCart} from "@/components/ui/GoodCard/api/cartApi";

export const useGoodButtonHandler = () => {
    const [addGoodIntoCart] = useAddGoodIntoCart()
    const [removeGoodFromCart] = useDeleteGoodFromCart()

    const onGoodButtonClickHandler = (isGoodInCartByIds: boolean, id: number, cartIdByGoodId: number) => () => {
        if (!isGoodInCartByIds) {
            addGoodIntoCart({ goodId: id });
        } else if (cartIdByGoodId !== -1) {
            removeGoodFromCart({ids: [cartIdByGoodId]});
        }
    };

    return { onGoodButtonClickHandler }
}