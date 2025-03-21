import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { CoachingExpert } from '@/services/options';
import Image from 'next/image';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { LoaderCircle } from 'lucide-react';



function UserInputDialog({ children, coachingoption }) {
    const [selectedExpert, setSelectedExpert] = useState();
    const [topic, setTopic] = useState();
    const createDiscussionRoom = useMutation(api.DiscussionRoom.CreateNewRoom);  
    const [loading, setLoading] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const router = useRouter();   

    const OnClickNext = async() => {
        setLoading(true);
        let result;
        try {
            result = await createDiscussionRoom({
                topic: topic,
                coachingOptions: coachingoption?.name,  
                expertName: selectedExpert
            });
            console.log(result);
        } catch (error) {
            console.error("Error creating discussion room:", error);
            setLoading(false);
            return;
        } finally {
            setLoading(false);
        }
        setOpenDialog(false);
        router.push('/discussion-room/'+ result); 
    };
    
    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{coachingoption.name}</DialogTitle>
                    <DialogDescription asChild>
                        <div className='mt-3'>
                            <h2 className='text-black mt-5'>Enter a topic to master your skills in {coachingoption.name}</h2>
                            <textarea 
                                className='w-full h-15 mt-3 p-3 border border-gray-300 rounded-md' 
                                placeholder='Enter your topic here'  
                                onChange={(e) => setTopic(e.target.value)}
                            ></textarea>
                            <h2 className='text-black mt-5'>Select an expert to assist you in {coachingoption.name}</h2>
                            <div className='grid grid-cols-3 md:grid-cols-5 gap-6 mt-3 '>
                                {CoachingExpert.map((expert, index) => (
                                    <div 
                                        key={index} 
                                        onClick={() => setSelectedExpert(expert.name)}
                                        className={`${selectedExpert == expert.name && 'border-2'} p-1 rounded-2xl`}
                                    >
                                        <Image 
                                            src={expert.icon} 
                                            alt={expert.name}
                                            width={100}
                                            height={100}
                                            className={`rounded-2xl h-[80px] w-[80px] object-cover  hover:scale-105 transition:all cursor-pointer p-3 border-primary 
                                                ${selectedExpert == expert.name && 'border'}`}
                                        /> 
                                        <h2 className='text-center text-black'>{expert.name}</h2>
                                    </div>
                                ))}
                            </div>
                            <div className='flex gap-5 justify-end mt-5'>
                                <DialogClose asChild>
                                    <Button variant={'ghost'}>Close</Button>
                                </DialogClose>
                                <Button 
                                    disabled={!selectedExpert || !topic || loading} 
                                    onClick={OnClickNext}
                                >
                                    {loading && <LoaderCircle className='animate-spin mr-2'/>}
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default UserInputDialog;