import React from 'react'

const Post = () => {
    return (
        <div className='w-330 mx-auto'>
            <div className="flex flex-col mt-20 ">
                <div className="flex w-48 mb-4">
                    <div className="h-2 bg-[#2C49FE] w-4/5"></div>
                    <div className="h-2 bg-[#01C8FF] w-1/5"></div>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                    New Posts
                </h1>
            </div>
            <Addpost />
        </div>
    )
}
export const Addpost = () => {
    return (
        <div>
            <div className='p-9 shadow-2xl rounded-[30px]'>
                <div className='flex flex-row gap-'>
                    <img src="/png/P2section4img.png" alt="" />
                    <h1>Username  <br /><samp>Post event name
                    </samp></h1>
                </div>
            </div>
        </div>
    )
}
export default Post