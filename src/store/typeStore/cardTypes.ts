export enum AddToCardActionsTypes {
    ADD_PRODUCT_TO_CARD = "ADD_PRODUCT_TO_CARD",
    PRODUCT_IN_CARD = "PRODUCT_IN_CARD",
    CHENGE_PRODUCT_QUANTITTY = "CHENGE_PRODUCT_QUANTITTY",
    REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART",
    PRODUCT_TO_CART = "PRODUCT_TO_CART",
    PRODUCT_IN_CART_VARIANT = "PRODUCT_IN_CART_VARIANT",
}


interface ProductInCardVariant {
    type: AddToCardActionsTypes.PRODUCT_IN_CART_VARIANT;
    product: any
    idVariant: any
}


//
interface ProductToCart {
    type: AddToCardActionsTypes.PRODUCT_TO_CART;
    idCard: any
    idVariant: any
    count: any
    product: any
    id:any
}

interface AddToCard {
    type: AddToCardActionsTypes.ADD_PRODUCT_TO_CARD;
    data: any
}

interface ProductInCard {
    type: AddToCardActionsTypes.PRODUCT_IN_CARD;
    product: any
    id: any
}

interface ChangeQuantity {
    type: AddToCardActionsTypes.CHENGE_PRODUCT_QUANTITTY;
}

interface RemoveProduct {
    type: AddToCardActionsTypes.REMOVE_PRODUCT_FROM_CART;
}

export type carActionType = AddToCard | ChangeQuantity | RemoveProduct | ProductInCard | ProductToCart | ProductInCardVariant