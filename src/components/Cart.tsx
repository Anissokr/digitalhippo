'use client'
import { ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import Image from "next/image"

 const itemCount = 7
 const fee = 1.456

const Cart = () => {
  return (
    <Sheet>
        <SheetTrigger className="group -m-2 flex items-center p-2">
            <ShoppingCart aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                0
            </span>
        </SheetTrigger>
        <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
            <SheetHeader className="space-y-2.5 pr-6" >Cart (0)</SheetHeader>

            {itemCount > 0 ? (
                <>
                    <div className="flex w-full flex-col pr-6">
                        {/* TODO : Cart logic */}
                        Cart Items
                    </div>
                    <div className="space-y-4 pr-6">
                        <Separator />

                        <div className="space-y-1.5 text-small">
                            <div className="flex">
                                <span className="flex-1"> Shipping</span>
                                <span>Free</span>

                            </div>
                        </div>

                        <div className="space-y-1.5 text-small">
                            <div className="flex">
                                <span className="flex-1"> Transaction Fee</span>
                                <span>{formatPrice(fee)}</span>

                            </div>
                        </div>

                        <div className="space-y-1.5 text-small">
                            <div className="flex">
                                <span className="flex-1"> Total </span>
                                <span>{formatPrice(fee)}</span>

                            </div>
                        </div>

                        <SheetFooter  >
                            <SheetTrigger>
                                <Link href='/cart' className={buttonVariants({ className: 'w-full'})}>
                                    Continue to checkout
                                </Link>
                            </SheetTrigger>
                        </SheetFooter>


                    </div>
                </>
            ) : (
                <div area-hidden="true" className="flex flex-col h-full items-center justify-center space-y-1">
                    <div className="relative mb-4 h-60 w-60 text-muted-foreground">
                        <Image src="/hippo-empty-cart.png" fill alt="empty chopping cart" />
                    </div>
                    <div className="text-xl font-semibold">Your Cart is Empty</div>
                    <SheetTrigger asChild>
                        <Link 
                            href={"/products"}
                            className={buttonVariants({
                                variant: 'link',
                                size: 'sm',
                                className: 'text-sm text-muted-foreground',
                            })}
                        >
                                Add items to your cart to chekout
                        </Link>
                    </SheetTrigger>

                </div>
                
            ) }
        </SheetContent>
    </Sheet>
  )
}

export default Cart
