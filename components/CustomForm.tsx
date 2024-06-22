'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";

import { PenIcon, PhoneCallIcon, SendIcon, UserCircleIcon, } from "lucide-react";
import { Textarea } from "./ui/textarea";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import {toast } from 'sonner';
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/MovingBorders";



const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(160, {
      message: "Message must not be longer than 30 characters.",
    }),
})

const CustomForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  // define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name:'',
      message: '',
      email: ''
    }
  })

  // define a submit handler
  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);
    
    emailjs
      .send(
        'service_xmd3yhe',
        'template_8svdo3w',
        {
          from_name: data.name,
          to_name: "Heri Al Trono",
          from_email: data.email,
          to_email: "hbotema16@gmail.com",
          message: data.message,
        },
        'OWNw6LArR_eFO73vQ'
      )
      .then(
        () => {
          setIsLoading(false);
          toast.success("Thank you. I will get back to you as soon as possible.");

          form.reset();
        },
        (error) => {
          setIsLoading(false);
          console.error(error);

          toast.error("Ahh, something went wrong. Please try again.");
        }
      );
    
  }
    
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email adddress</FormLabel>
              <FormControl>
                <Input placeholder="e-mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="message.." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isLoading ? <Button type="submit" className="px-5 py-3 gap-2 w-60"><svg aria-hidden="true" role="status" className="inline mr-2 w-4 h-4 text-purle animate-spin dark:text-slate-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#d74d1a"></path>
          </svg> Sending...</Button> : <Button duration={100000000} type="submit" className="px-5 py-3 gap-2 w-60">Send {' '}<SendIcon className="w-3 h-3 text-purple" /></Button>}
        </form>
    </Form>
  )
}

export default CustomForm