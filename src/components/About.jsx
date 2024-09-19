import about from '../images/about.png'

const About = () => {
    return (
        <div className='flex w-main gap-20 mt-20 items-center mx-auto'>
            <div className='w-[50%]'>
                <img src={about} alt='about' className='max-w-full' />
            </div>
            <div className='w-[50%]'>
                <h2 className='font-banner text-main font-semibold text-[46px]'>About us</h2>
                <p className='text-[15px] justify-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
            </div>
        </div>
    )
}

export default About