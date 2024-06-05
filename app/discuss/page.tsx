import bgImg from '@/public/home.jpg';
import Hero from '@/components/hero';
import { Button } from '@nextui-org/react';

export default function Forum() {
    return (
        <div className='w-full'>
            <Hero imgData={bgImg} imgAlt="home"></Hero>
            <div className="absolute inset-0 flex justify-center items-center">
                <Button>Pressed Me</Button>
            </div>
        </div>
    )
}