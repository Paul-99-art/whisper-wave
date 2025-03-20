"use client";
import React from 'react';
import { useUser } from '@stackframe/stack';
import { Button } from '@/components/ui/button';
import { ExpertsList } from '@/services/options';
import Image from 'next/image'; 
import { BlurFade } from '@/components/magicui/blur-fade';

function FeatureAssistants() {
    const user = useUser();

    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <div className="font-medium text-gray-500">My Workspace</div>
                    <h2 className="text-3xl font-bold">Glad you're here again, {user?.displayName}</h2>
                </div>
                <Button>Profile</Button>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-10 mt-10'>
                {ExpertsList.map((option, index) => (
                  <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                    <div key={index} className='p-3 bg-secondary rounded-3xl flex flex-col justify-center items-center'> 
                        <Image
                            src={option.icon}
                            alt={option.name}
                            width={150}
                            height={150}
                            className="h-[70px] w-[70px] hover:rotate-12 cursor-pointer transition-transform" 
                        />
                        <h2 className='mt-2'>{option.name}</h2>
                    </div>
                    </BlurFade>
                ))}
            </div>
        </div>
    );
}

export default FeatureAssistants;
