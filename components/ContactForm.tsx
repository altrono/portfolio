"use client";


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { FaLocationArrow } from "react-icons/fa";
import MagicDiv from "./MagicDiv";
import CustomForm from "./CustomForm";
  
 


export default function ContactForm() {
  return (
    <Dialog >
        <DialogTrigger>
            <MagicDiv 
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
        </DialogTrigger>
        <DialogContent className="bg-slate-950">
            <DialogHeader>
                <DialogTitle className="text-2xl">
                  Let&apos;s get <span className="text-purple">started!</span>
                </DialogTitle>
                <DialogDescription>
                Contact me and I will get back within 24 hours. I mean it. You saw the testimonials, right?
                </DialogDescription>
            </DialogHeader>
            
            <CustomForm />
            
        </DialogContent>
    </Dialog>

  )
}



