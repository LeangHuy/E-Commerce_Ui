import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { getPhoto } from '@/lib/utils'
import { getUserData } from '@/service/user.service'
import { Pencil } from 'lucide-react'
import { Map } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

async function page() {
    const userData = await getUserData();
    const user = userData?.payload?.user;
    return (
        <div className='p-5 '>
            <div className="container mx-auto rounded-md shadow-md border-1 p-10 px-80">
                <div className="relative flex justify-center items-center">
                    <Image
                        width={1000}
                        height={1000}
                        className='relative w-24 h-24 rounded-full object-cover'
                        src={getPhoto(user?.profile)}
                        alt='profile'
                    />
                    <div className="absolute ml-20 -mb-10 bg-sky-400 rounded-full p-1.5 cursor-pointer">
                        <Pencil stroke='white' />
                    </div>

                </div>

                <div className="flex gap-10 mt-3">
                    <div className='w-full'>
                        <Label className="font-bold">First name</Label>

                        <input
                            type="text"
                            name="firstName"
                            defaultValue={user?.firstName}
                            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                        />
                    </div>
                    <div className='w-full'>
                        <Label className="font-bold">Last name</Label>
                        <input
                            type="text"
                            name="lastName"
                            defaultValue={user?.lastName}
                            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                        />
                    </div>
                </div>
                <div className='w-full mt-3'>
                    <Label className="font-bold">Email</Label>

                    <input
                        type="text"
                        name="email"
                        defaultValue={user?.email}
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                    />
                </div>
                <div className='w-full mt-3'>
                    <Label className="font-bold">Address</Label>

                    <div className="flex relative w-full px-3 py-2 rounded-md border focus-within:border-gray-500 focus-within:border-2 justify-between items-center">
                        <input

                            type="text"
                            name="address"
                            defaultValue={user?.address}
                            className="focus:outline-none border-none w-full bg-transparent"
                        />
                        <Map
                            className="cursor-pointer"
                        />
                    </div>
                </div>
                <div className='w-full mt-3'>
                    <Label className="font-bold">Contact Number</Label>
                    <input
                        type="text"
                        name="phone"
                        defaultValue={user?.phone}
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                    />
                </div>
                <div className="flex justify-end">
                    <Button className="mt-3 ">Save change</Button>
                </div>
            </div>
        </div>
    )
}

export default page
