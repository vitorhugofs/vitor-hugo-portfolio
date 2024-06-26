import React from "react";

export default function InfoSection ({children}: {children: React.ReactNode}) {
    return (
        <section className="py-20 w-full flex items-center justify-center ">
            <div className="flex flex-col items-center justify-center px-12 w-full md:w-[480px] lg:w-[768px] xl:w-[976px]">
                {children}
            </div>
        </section>
    )
}