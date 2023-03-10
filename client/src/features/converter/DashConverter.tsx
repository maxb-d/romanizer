
import Asset from '@/assets/rightConv.jpg'

import ActionButton from '@/components/ActionButton'
import Toast from '@/components/Toast'

import { useState, useEffect } from "react"
import { useForm } from 'react-hook-form'

import API from '@/lib/axiosApi'

type Props = {}

const DashConverter = (props: Props) => {
    const [num, setNum] = useState<number>(0)

    const [sseData, setSseData] = useState<string>("")

    useEffect(() => {
        const sse = new EventSource('http://localhost:3000/conversion/event')

        function handleStream(e: any) {
            console.log(e)
            setSseData(e.data)
        }

        sse.onmessage = e => {handleStream(e)}

        sse.onerror = e => {
            sse.close()
        }

        return () => {
            sse.close()
        }
    }, [])

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm()

    const onSubmit = async (e: any) => {
        e.preventDefault()
        const isValid = await trigger()

        if(!isValid) {
            e.preventDefault()
        } else {
            const res = await fetchConv()
        }

    }

    const fetchConv = async () => {
        const response = await API.post('/conversion', {
            decNumber: num
        }, { withCredentials: true })
    }

  return (
    <div className='h-screen flex justify-between items-center px-8 z-10'>
        <Toast/>
        <div className='basis-1/2 h-full p-12 flex justify-center items-center'>
            {/* FORM */}
            <div className='flex-col justify-center items-center mt-12'>
                <p className='mb-6 mr-48 font-mynerve text-xl'>Type an Integer Below ...</p>
                <div className="drop-shadow-lg gap-1 rounded-lg h-4/6 w-5/6 flex justify-center items-center">    
                

                <form
                    target="_blank"
                    onSubmit={onSubmit}    
                >
                    <div className='flex-col justify-center items-center scale-125'>
                        <input
                            type="number"
                            className='rounded-lg drop-shadow-lg pl-2'
                            value={num}
                            placeholder='Number...'
                            {...register("num", {
                                onChange: (e) => setNum(e.target.value),
                                required: true,
                                min: 0,
                                max: 100,
                            })}
                        />
                        <div className='h-8'>
                            {errors.num && (
                                <p className='text-red-500'>
                                    {errors.num.type === "required" && "This field is required"}
                                    {errors.num.type === "min" && "Range 0 - 100"}
                                    {errors.num.type === "max" && "Range 0 - 100"}
                                </p>
                            )}
                        </div>
                        
                    </div>
                    <div className='flex justify-center items-center mt-2'>
                        <div>
                            <ActionButton>Convert</ActionButton>
                        </div>
                    </div>
                </form>
                
                    
                </div>
            </div>
        </div>
        <div className=' relative h-full basis-1/2 flex justify-center items-center'>
            <img src={Asset} className='relative mt-12 h-4/6 w-4/6'/>
            <div className='absolute mt-10 mr-28 font-mynerve text-[60px] text-red-600 font-bold'>
                <div className='border-t border-2 border-red-600'></div>
                <p>{sseData}</p>
                <div className='border-t border-2 border-red-600'></div>
            </div>
            
        </div>
    </div>
  )
}

export default DashConverter