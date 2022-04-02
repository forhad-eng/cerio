import React from 'react'

const OurServices = () => {
    return (
        <div className="grid md:grid-cols-4 gap-5 p-4 mb-6">
            <Service name="Free Shipping" text="Capped at $39 per order" img="./images/free-delivery.png" />
            <Service name="Secure Payments" text="Up to 12 months installments" img="./images/secure-payment.png" />
            <Service name="14-Day Returns" text="Shop with confidence" img="./images/return-product.png" />
            <Service name="24/7 Support" text="Delivered to your door" img="./images/customer-support.png" />
        </div>
    )
}

const Service = ({ name, text, img }) => {
    return (
        <div className="border rounded-lg p-10">
            <img src={img} className="mx-auto mt-2 mb-2 h-16 w-16" alt="" />
            <p className="text-xl font-semibold">{name}</p>
            <p className="text-[#828282]">{text}</p>
        </div>
    )
}

export default OurServices
