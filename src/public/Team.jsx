import React from 'react'
import image1 from '../images/Abi.png'
const Team = () => {
    const teams = [
        {
            id: 1,
            name: 'Justine',
            position: 'Manager and Aesthetic Skincare Practitioner',
            image: 'https://www.bonniequines.com/wp-content/uploads/2024/07/Justine.webp'
        },
        {
            id: 2,
            name: 'Justine',
            position: 'Manager and Aesthetic Skincare Practitioner',
            image: 'https://www.bonniequines.com/wp-content/uploads/2024/07/Justine.webp'
        },
        {
            id: 3,
            name: 'Justine',
            position: 'Manager and Aesthetic Skincare Practitioner',
            image: 'https://www.bonniequines.com/wp-content/uploads/2024/07/Justine.webp'
        },
        {
            id: 4,
            name: 'Justine',
            position: 'Manager and Aesthetic Skincare Practitioner',
            image: 'https://www.bonniequines.com/wp-content/uploads/2024/07/Justine.webp'
        },
    ]
    return (
        <div className='tablet:w-[100%] px-2 phone:w-[100%] w-main mx-auto'>
            <h2 className='tablet:text-center px-2 phone:text-center text-[40px] font-semibold'>Meet The Quines</h2>
            <div className='flex gap-4 mb-10 tablet:flex-col phone:flex-col'>
                <img src={image1} alt="main" className='w-[307px] h-[461px] tablet:w-[100%] phone:w-[100%] tablet:h-[400px] phone:h-[400px] px-3' />
                <div className='flex flex-col pl-4 border-l-8 border-main'>
                    <h3 className='font-pinyon text-[46px] text-main'>Andrea</h3>
                    <span className='font-gothic text-xl font-semibold my-3'>Owner, Permanent Make Up Artist and Nail Training Educator</span>
                    <ul className='font-gothic italic flex flex-col gap-4 font-normal'>
                        <li>
                            <p>“I always remember going into a beauty salon when I was younger and feeling intimidated and anxious so initially when I started out, I offered treatments in peoples homes. I have always felt that the beauty industry can be intimidating and I wanted to be able to offer clients treatments where they felt comfortable in their surroundings.</p>
                        </li>
                        <li>
                            <p>As time passed, I grew hungry for bigger dreams and goals and I wanted to offer a safe space for clients to come, which was like a home from home. Its so important that my clients feel comfortable. It was also important to me to help develop the skill set of others and offer employment in the area.</p>
                        </li>
                        <li>
                            <p>Each member of the team has their own niche, and with the industry forever changing its important that staff reach their own goals and potentials in offering the latest treatments and skills to develop expertise in ether the nail or beauty industry.</p>
                        </li>
                        <li>
                            <p>Hollywood nails & Beauty is not only a beauty salon and safe space for clients, but also a training academy where I teach all aspects of nail treatments at weekends too.”</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex my-10 tablet:flex-col phone:flex-col tablet:gap-5 phone:gap-7'>
                {teams.map(team => (
                    <div className='flex flex-col items-center gap-2' key={team.id}>
                        <img src={team.image} alt={team.name} className=' w-[265px] h-[400px]' />
                        <h3 className='text-[28px] font-pinyon text-main font-semibold'>{team.name}</h3>
                        <p className='flex flex-col items-center font-gothic text-center'>
                            {team.position}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team